/**
 * MIT License
 *
 * Copyright (c) 2024 Custom Journal Rankings Extension
 */

const customRankings = {};

// Initialize custom rankings storage
customRankings.data = {};

// Load custom rankings from Chrome storage
customRankings.load = function() {
    return new Promise(function(resolve, reject) {
        chrome.storage.sync.get(['customRankings'], function(result) {
            if (result.customRankings) {
                customRankings.data = result.customRankings;
            }
            resolve(customRankings.data);
        });
    });
};

// Save custom rankings to Chrome storage
customRankings.save = function(data) {
    return new Promise(function(resolve, reject) {
        customRankings.data = data;
        chrome.storage.sync.set({customRankings: data}, function() {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve();
            }
        });
    });
};

// Get ranking for a journal by ISSN or name
customRankings.getRanking = function(issn, journalName) {
    if (!customRankings.data || Object.keys(customRankings.data).length === 0) {
        return null;
    }
    
    // First try ISSN lookup
    if (issn) {
        const cleanIssn = issn.replace(/[^0-9X]/g, '');
        if (customRankings.data[cleanIssn]) {
            return customRankings.data[cleanIssn];
        }
    }
    
    // Then try journal name lookup (case-insensitive)
    if (journalName) {
        const normalizedName = journalName.toUpperCase().trim();
        for (let key in customRankings.data) {
            const entry = customRankings.data[key];
            if (entry.name && entry.name.toUpperCase().trim() === normalizedName) {
                return entry;
            }
        }
    }
    
    return null;
};

// Parse CSV data into custom rankings format
customRankings.parseCSV = function(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const data = {};
    
    // Expected headers: issn, name, rank, description (optional)
    const issnIndex = headers.findIndex(h => h.includes('issn'));
    const nameIndex = headers.findIndex(h => h.includes('name') || h.includes('journal'));
    const rankIndex = headers.findIndex(h => h.includes('rank') || h.includes('rating'));
    const descIndex = headers.findIndex(h => h.includes('desc') || h.includes('comment'));
    
    if (issnIndex === -1 && nameIndex === -1) {
        throw new Error('CSV must contain either ISSN or journal name column');
    }
    if (rankIndex === -1) {
        throw new Error('CSV must contain a rank/rating column');
    }
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
        
        if (values.length < headers.length) continue; // Skip incomplete rows
        
        const issn = issnIndex !== -1 ? values[issnIndex].replace(/[^0-9X]/g, '') : '';
        const name = nameIndex !== -1 ? values[nameIndex] : '';
        const rank = rankIndex !== -1 ? values[rankIndex] : '';
        const description = descIndex !== -1 ? values[descIndex] : '';
        
        if (!issn && !name) continue; // Skip rows without identifier
        if (!rank) continue; // Skip rows without rank
        
        const key = issn || name.toUpperCase().replace(/[^A-Z0-9]/g, '');
        data[key] = {
            issn: issn,
            name: name,
            rank: rank,
            description: description,
            source: 'custom'
        };
    }
    
    return data;
};

// Parse JSON data into custom rankings format
customRankings.parseJSON = function(jsonText) {
    const jsonData = JSON.parse(jsonText);
    const data = {};
    
    if (Array.isArray(jsonData)) {
        // Array format
        jsonData.forEach(entry => {
            if (!entry.issn && !entry.name) return;
            if (!entry.rank) return;
            
            const key = entry.issn ? entry.issn.replace(/[^0-9X]/g, '') : 
                        entry.name.toUpperCase().replace(/[^A-Z0-9]/g, '');
            data[key] = {
                issn: entry.issn || '',
                name: entry.name || '',
                rank: entry.rank,
                description: entry.description || '',
                source: 'custom'
            };
        });
    } else {
        // Object format - keys are ISSNs or names
        for (let key in jsonData) {
            const entry = jsonData[key];
            if (typeof entry === 'string') {
                // Simple format: {"1234-5678": "A*"}
                data[key] = {
                    issn: key.match(/^\d{4}-?\d{3}[\dX]$/i) ? key : '',
                    name: key.match(/^\d{4}-?\d{3}[\dX]$/i) ? '' : key,
                    rank: entry,
                    description: '',
                    source: 'custom'
                };
            } else {
                // Complex format: {"1234-5678": {"rank": "A*", "name": "Journal"}}
                data[key] = {
                    issn: entry.issn || (key.match(/^\d{4}-?\d{3}[\dX]$/i) ? key : ''),
                    name: entry.name || (!key.match(/^\d{4}-?\d{3}[\dX]$/i) ? key : ''),
                    rank: entry.rank,
                    description: entry.description || '',
                    source: 'custom'
                };
            }
        }
    }
    
    return data;
};

// Get rank class for styling (similar to ccf.getRankClass)
customRankings.getRankClass = function(rank) {
    if (!rank) return 'ccf-none';
    
    const r = rank.toString().toUpperCase();
    
    // Standard ranking classes
    const standardRanks = {
        'A*': 'ccf-astar',
        'A+': 'ccf-aplus', 
        'A': 'ccf-a',
        'B': 'ccf-b',
        'C': 'ccf-c',
        'D': 'ccf-d',
        'Q1': 'ccf-q1',
        'Q2': 'ccf-q2', 
        'Q3': 'ccf-q3',
        'Q4': 'ccf-q4'
    };
    
    if (standardRanks[r]) {
        return standardRanks[r];
    }
    
    // Try to infer class from rank value
    if (r.includes('1') || r.includes('TOP') || r.includes('BEST')) {
        return 'ccf-a';
    } else if (r.includes('2') || r.includes('GOOD')) {
        return 'ccf-b';
    } else if (r.includes('3') || r.includes('AVERAGE')) {
        return 'ccf-c';
    } else if (r.includes('4') || r.includes('LOW')) {
        return 'ccf-d';
    }
    
    return 'ccf-custom';
};