/**
 * MIT License
 *
 * Copyright (c) 2022 Julian R.K. Wichmann building upon 
 *                                            WenyanLiu (https://github.com/WenyanLiu/CCFrank4dblp), Kai Chen (https://github.com/FunClip)
 */

const ccf = {};

ccf.getRankInfo = function (refine, type) {
    let rankInfo = {};
    rankInfo.ranks = [];
    rankInfo.info = "";
    rankInfo.info2 = "";
    rankInfo.txt = "";
    let rank;
    let url;
    let hindex;
    let rank_txt;
    
    if (type == 'full_cap') {
        url = refine;
        
        url = url.toUpperCase();
        url = url.replace(/&AMP;/g, "&");
        url = url.replace(/ AND /g, "");
        url = url.replace(/[^A-Z0-9]/ig, "");
        
        let position = ccf.FullRank.indexOf(" " + url + " ");

        let rankstr = ccf.FullRank.substring(position-5, position-3);
        rank = rankstr;  
        
        let hindexrange = ccf.FullRank.substring(position-12, position-8);
        let hindexstr = hindexrange.match(/\d+/g);
        hindex = hindexstr;
        
    } 
    
    if (rank == "") {
        rank_txt = "NA";
        rankInfo.info = refine + "; no H-Index found";
        rankInfo.info2 = "SJR: " + rank_txt;
    } 

    if (refine == "") {
        rank_txt = "NA";
        rankInfo.info = "No Journal identified";
        rankInfo.info2 = "";
    }
        
    if (rank != "") {
        rank_txt = rank;
        rankInfo.info += refine;
        rankInfo.info += "; H-Index: " + hindex;
        rankInfo.info2 = "SJR: " + rank_txt;
    }
    
    rankInfo.txt = rank_txt;
    rankInfo.ranks.push(rank);
    return rankInfo;
};

ccf.getRankInfo_VHB = function (refine, type) {
    let rankInfo_VHB = {};
    rankInfo_VHB.ranks = [];
    rankInfo_VHB.info = "";
    rankInfo_VHB.txt = "";
    let rank;
    let url;
    let rank_txt;
    
    if (type == 'full_cap') {
        url = refine;

        url = url.toUpperCase();
        url = url.replace(/&AMP;/g, "&");
        url = url.replace(/ AND /g, "");
        url = url.replace(/[^A-Z0-9]/ig, "");

        rank = ccf.FullRank_VHB[url];
    } 
    
    if (rank == undefined) {
        rank_txt = "NA";
        rankInfo_VHB.info = refine + " not found\n";
        rankInfo_VHB.info2 = "; VHB: " + rank_txt;
    } 

    if (refine == "") {
        rank_txt = "NA";
        rankInfo_VHB.info = "No Journal identified";
        rankInfo_VHB.info2 = "";
    }
        
    if (rank != undefined) {
        rank_txt = rank;
        rankInfo_VHB.info = refine;
        rankInfo_VHB.info2 = "; VHB: " + rank_txt;
    }
    
    rankInfo_VHB.txt = rank_txt;
    rankInfo_VHB.ranks.push(rank);
    return rankInfo_VHB;
};

ccf.getRankInfo_CCF = function (refine, type) {
    let rankInfo_CCF = {};
    rankInfo_CCF.ranks = [];
    rankInfo_CCF.info = "";
    rankInfo_CCF.txt = "";
    let rank;
    let url;
    let rank_txt;
    
   
    if (type == 'full_cap') {
        url = refine;

        url = url.toUpperCase();
        url = url.replace(/&AMP;/g, "&");
        url = url.replace(/ AND /g, "");
        url = url.replace(/[^A-Z0-9]/ig, "");

        rank = ccf.FullRank_CCF[url];
    } 
 
     
    if (rank == undefined) {
        rank_txt = "NA";
        rankInfo_CCF.info = refine + " not found\n";
        rankInfo_CCF.info2 = "; CCF: " + rank_txt;
    } 
    
    if (refine == "") {
        rank_txt = "NA";
        rankInfo_CCF.info = "No Journal identified";
        rankInfo_CCF.info2 = "";
    }
    
    if (rank != undefined) {
        rank_txt = rank;
        rankInfo_CCF.info = refine;
        rankInfo_CCF.info2 = "; CCF: " + rank_txt;
    }
    
    rankInfo_CCF.txt = rank_txt;
    rankInfo_CCF.ranks.push(rank);
    return rankInfo_CCF;
};


ccf.getRankClass = function (ranks) {
    quarts = ["Q1", "Q2", "Q3", "Q4"]
         for (let rank of quarts) {
            for (let r of ranks) {
                if (r == rank) {
                    return "ccf-" + rank.toLowerCase();
                }
            }
        }    
    return "ccf-none"; 
};

ccf.getRankClass_VHB = function (ranks) {
    quarts = ["A", "B", "C", "D"]
    if(ranks == "A+") {
        return "ccf-Aplus";
    } else if (ranks == "A/B") {
        return "ccf-b";
    } else if (ranks == "B/C") {
        return "ccf-c";
    } else if (ranks == "C/D") {
        return "ccf-d";    
    } else {
         for (let rank of quarts) {
            for (let r of ranks) {
                if (r == rank) {
                    return "ccf-" + rank.toLowerCase();
                }
            }
        }    
    }
    return "ccf-none"; 
};

ccf.getRankClass_CCF = function (ranks) {
    quarts = ["I", "II", "III"]
         for (let rank of quarts) {
            for (let r of ranks) {
                if (r == rank) {
                    return "ccf-" + rank.toLowerCase();
                }
            }
        }    
    return "ccf-none"; 
};

ccf.getRankSpan = function (refine, type, doi, elid) {
   
 
    let rankInfo = ccf.getRankInfo(refine, type);
    let span1 = $("<span>")
    if (rankInfo.txt != "NA") {
        span1
            .addClass("ccf-rank")
            .addClass(ccf.getRankClass(rankInfo.ranks))
            .text(rankInfo.txt); 
    }
    
    
    let rankInfo_VHB = ccf.getRankInfo_VHB(refine, type);
    let span2 = $("<span>");
    if (rankInfo_VHB.txt != "NA") {
        span2
            .addClass("ccf-rank")
            .addClass(ccf.getRankClass_VHB(rankInfo_VHB.ranks))
            .text(rankInfo_VHB.txt);
    }

    
    let rankInfo_CCF = ccf.getRankInfo_CCF(refine, type);
    let span3 = $("<span>");
    if (rankInfo_CCF.txt != "NA") {
        span3
            .addClass("ccf-rank")
            .addClass(ccf.getRankClass_CCF(rankInfo_CCF.ranks))
            .text(rankInfo_CCF.txt);
    } 
       
       
    if (rankInfo.txt == "NA" && rankInfo_VHB.txt == "NA" && rankInfo_CCF.txt == "NA") {   
          span1
            .addClass("ccf-rank")
            .addClass(ccf.getRankClass(rankInfo.ranks))
            .text(rankInfo.txt); 
    }
    
     
    let span123 = $("<span>")
        .addClass("ccf-rank")
        .append(span1)   
        .append(span2)
        .append(span3);  
           
    
    if (rankInfo.info.length != 0) {
        span123
            .addClass("ccf-tooltip")
            .append($("<pre>").addClass("ccf-tooltiptext").text(rankInfo.info + "\n" + rankInfo.info2 + rankInfo_VHB.info2  + rankInfo_CCF.info2  ));
    } 

    if (refine == "") {   
          span123
            .addClass("ccf-tooltip")
            .append($("<pre>").addClass("ccf-tooltiptext").text(rankInfo.info));
    }
    
    link_text = "https://doi.org/" + doi; 
            
    if(doi != "") { 
        span = $('<a href="" target="_blank">')
            .attr("href", link_text)
            .append(span123); 
    } else {
        span = $('<span>')
            .append(span123);     
    } 

    document.getElementById(elid).remove();
    return span; 
};

