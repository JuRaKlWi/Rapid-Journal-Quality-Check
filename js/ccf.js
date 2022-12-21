
/**
 * 03112022
 * MIT License
 *
 * Copyright (c) 2022 Julian R.K. Wichmann building upon 
 *                                            WenyanLiu (https://github.com/WenyanLiu/CCFrank4dblp), Kai Chen (https://github.com/FunClip)
 */

const ccf = {};

ccf.getRankInfo = function (refine, type, ISSN1, ISSN2, dblp_venue) {
    let rankInfo = {};
    rankInfo.ranks = [];
    rankInfo.AllRanks = {};
    rankInfo.rank_CORE = "";
    rankInfo.refine_CORE = "";
    rankInfo.only_CORE = 0;
    rankInfo.info = "";
    rankInfo.info2 = "";
    rankInfo.txt = "";
    let rank;
    let hindex;
    let rank_txt;

    refine = refine.replace(/&amp;/g, "&");

    url = refine;
    url = url.toUpperCase();
    url = url.replace(/&AMP;/g, "&");
    url = url.replace(/ AND /g, "");
    url = url.replace(/^THE /g, "");
    url = url.replace(/, THE$/g, "");
    url = url.normalize('NFD');
    url = url.replace(/[^A-Z0-9]/ig, "");
    
    
    if (dblp_venue != undefined && dblp_venue != "") {
        
        dblp_venue = dblp_venue.toUpperCase(); 
        dblp_venue = dblp_venue.replace(/[^A-Z0-9]/ig, "");
    
        let position_start_CORE = ccf.FullRank_Acro.indexOf("X_X" + dblp_venue + "\1/");
       
        if (position_start_CORE == -1) {
            dblp_venue = dblp_venue.replace(/^IEEE/g, ""); 
            position_start_CORE = ccf.FullRank_Acro.indexOf("X_X" + dblp_venue + "\1/");
        }
        
        if (position_start_CORE == -1) {
            dblp_venue = dblp_venue.replace(/^ACM/g, ""); 
            position_start_CORE = ccf.FullRank_Acro.indexOf("X_X" + dblp_venue + "\1/");
        }

        if (position_start_CORE != -1) {
            let sjrq2_pos_s_CORE = ccf.FullRank_Acro.indexOf("\1/", position_start_CORE);
            let sjrq2_pos_e_CORE = ccf.FullRank_Acro.indexOf("\2/", position_start_CORE);
            let sjrq2_CORE = ccf.FullRank_Acro.substring( (sjrq2_pos_s_CORE + 2), sjrq2_pos_e_CORE);
            rankInfo.rank_CORE = sjrq2_CORE;  
            
            sjrq2_pos_s_CORE = ccf.FullRank_Acro.indexOf("\2/", position_start_CORE);
            sjrq2_pos_e_CORE = ccf.FullRank_Acro.indexOf("\3/", position_start_CORE);
            sjrq2_CORE = ccf.FullRank_Acro.substring( (sjrq2_pos_s_CORE + 2), sjrq2_pos_e_CORE);
            rankInfo.refine_CORE = sjrq2_CORE;  

        } else {
            rankInfo.rank_CORE = "NA";
        }
    } else {
            rankInfo.rank_CORE = "NA";
    }

    if (ISSN1 != undefined && ISSN1 != "") {     
        ISSN1 = ISSN1.toUpperCase();             
        ISSN1 = ISSN1.replace(/[^A-Z0-9]/ig, "");
        issn = ISSN1;    

        let position_start = ccf.FullRank_ISSNs.indexOf("X_X" + issn + "\1/");

        if (ISSN2 != "" && ISSN2 != undefined && position_start == -1) {
                
            ISSN2 = ISSN2.toUpperCase(); 
            ISSN2 = ISSN2.replace(/[^A-Z0-9]/ig, "");
            issn = ISSN2; 
                
            position_start = ccf.FullRank_ISSNs.indexOf("X_X" + issn + "\1/");
        }

        if (position_start == -1 && url != "" && url != undefined) {
            position_start = ccf.FullRank_Names.indexOf("X_X" + url + "\1/");
        
            if (position_start != -1) {
        
                let sjrq2_pos_s = ccf.FullRank_Names.indexOf("\1/", position_start);
                let sjrq2_pos_e = ccf.FullRank_Names.indexOf("\2/", position_start);
                let sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SJR_Q2 = rank;
                rankInfo.ranks.push(rank);
        
                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\2/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\3/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SJR_H = rank;
                rankInfo.ranks.push(rank);
        
                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\3/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\4/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.VHB = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\4/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\5/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.FNEGE = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\5/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\6/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CoNRS = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\6/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\7/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.HCERE = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\7/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\8/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CORE = rank;
                rankInfo.ranks.push(rank);
              
                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\8/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\9/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CORE_source = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\9/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\10/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CORE_Conf = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\10/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\11/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CCF = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\11/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\12/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.DAEN = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\12/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\13/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.AJG = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\13/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\14/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.JCR = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\14/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\15/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SNIP = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\15/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\16/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SJR = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\16/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\17/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CiteScore = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\17/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\18/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.ABDC = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\18/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\19/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 3), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.FT50 = rank;
                rankInfo.ranks.push(rank);
    
            } else {

                rank_txt = "NA";
                rankInfo.info = "No ranking found for '" + refine + "'";
                rankInfo.info2 = "";
            }     
        
        } else {
 
            if (position_start != -1) {                
        
                let sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\1/", position_start);
                let sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\2/", position_start);
                let sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SJR_Q2 = rank;
                rankInfo.ranks.push(rank);
        
                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\2/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\3/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SJR_H = rank;
                rankInfo.ranks.push(rank);
        
                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\3/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\4/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.VHB = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\4/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\5/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.FNEGE = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\5/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\6/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CoNRS = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\6/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\7/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.HCERE = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\7/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\8/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CORE = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\8/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\9/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CORE_source = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\9/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\10/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.DAEN = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\10/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\11/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.AJG = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\11/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\12/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.JCR = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\12/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\13/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SNIP = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\13/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\14/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SJR = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\14/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\15/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CiteScore = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_ISSNs.indexOf("\15/", position_start);
                sjrq2_pos_e = ccf.FullRank_ISSNs.indexOf("\16/", position_start);
                sjrq2 = ccf.FullRank_ISSNs.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.ABDC = rank;
                rankInfo.ranks.push(rank);
        
                position_start = ccf.FullRank_Names.indexOf("X_X" + url + "\1/");
    
                if (position_start != -1) {                

                    sjrq2_pos_s = ccf.FullRank_Names.indexOf("\18/", position_start);
                    sjrq2_pos_e = ccf.FullRank_Names.indexOf("\19/", position_start);
                    sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 3), sjrq2_pos_e);
                    rank = sjrq2;  
                    rankInfo.AllRanks.FT50 = rank;
                    rankInfo.ranks.push(rank);

                    sjrq2_pos_s = ccf.FullRank_Names.indexOf("\9/", position_start);
                    sjrq2_pos_e = ccf.FullRank_Names.indexOf("\10/", position_start);
                    sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                    rank = sjrq2;  
                    rankInfo.AllRanks.CORE_Conf = rank;
                    rankInfo.ranks.push(rank);

                    sjrq2_pos_s = ccf.FullRank_Names.indexOf("\10/", position_start);
                    sjrq2_pos_e = ccf.FullRank_Names.indexOf("\11/", position_start);
                    sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                    rank = sjrq2;  
                    rankInfo.AllRanks.CCF = rank;
                    rankInfo.ranks.push(rank);
                    
                } else {
                    rank = "NA";
                    
                    rankInfo.AllRanks.FT50 = rank;
                    rankInfo.ranks.push(rank);

                    rankInfo.AllRanks.CORE_Conf = rank;
                    rankInfo.ranks.push(rank);

                    rankInfo.AllRanks.CCF = rank;
                    rankInfo.ranks.push(rank);
                }
            
            }  else {
                rank_txt = "NA";
                rankInfo.info = "No ranking found for '" + refine + "'";
                rankInfo.info2 = "";
            }      
       
        }  
    
    } else if ( (ISSN1 == undefined || ISSN1 == "") && url != "" && url != undefined) {    
     
        let position_start = ccf.FullRank_Names.indexOf("X_X" + url + "\1/");
    
            if (position_start != -1) {

                let sjrq2_pos_s = ccf.FullRank_Names.indexOf("\1/", position_start);
                let sjrq2_pos_e = ccf.FullRank_Names.indexOf("\2/", position_start);
                let sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SJR_Q2 = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\2/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\3/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SJR_H = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\3/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\4/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.VHB = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\4/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\5/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.FNEGE = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\5/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\6/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CoNRS = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\6/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\7/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.HCERE = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\7/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\8/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CORE = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\8/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\9/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CORE_source = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\9/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\10/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CORE_Conf = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\10/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\11/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CCF = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\11/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\12/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.DAEN = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\12/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\13/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.AJG = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\13/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\14/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.JCR = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\14/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\15/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SNIP = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\15/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\16/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.SJR = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\16/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\17/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.CiteScore = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\17/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\18/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 2), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.ABDC = rank;
                rankInfo.ranks.push(rank);

                sjrq2_pos_s = ccf.FullRank_Names.indexOf("\18/", position_start);
                sjrq2_pos_e = ccf.FullRank_Names.indexOf("\19/", position_start);
                sjrq2 = ccf.FullRank_Names.substring( (sjrq2_pos_s + 3), sjrq2_pos_e);
                rank = sjrq2;  
                rankInfo.AllRanks.FT50 = rank;
                rankInfo.ranks.push(rank);
    
            } else {
                rank_txt = "NA";
                rankInfo.info = "No ranking found for '" + refine + "'";
                rankInfo.info2 = "";
            }       

    }  
    
    if (rankInfo.rank_CORE != "NA" && rankInfo.rank_CORE != undefined) {
        if ( (refine == "" && ISSN1 == "") || (Object.keys(rankInfo.AllRanks).length === 0  && rankInfo.AllRanks.constructor === Object) ) {
            rankInfo.only_CORE = 1; 
        }
// JW 28112022 //        
        if ( rankInfo.AllRanks.CORE_Conf == "NA" || rankInfo.AllRanks.CORE_Conf == undefined) { 
        
        rank = rankInfo.rank_CORE;
        rankInfo.AllRanks.CORE_Conf = rank;
        rankInfo.ranks.push(rank);
        
        }

    }
    
    if (refine == "" && ISSN1 == "" && (rankInfo.rank_CORE == "NA"  || rankInfo.rank_CORE == undefined) ) {
        rank_txt = "NA";
        rankInfo.info = "No journal identifiable";
        rankInfo.info2 = "";
    }
    
    if (refine == "" && ISSN1 == "" && rankInfo.rank_CORE != "NA"  && rankInfo.rank_CORE != undefined) {
        rank_txt = rankInfo.rank_CORE;
        rankInfo.info = refine;
        rankInfo.info += "; H-Index: NA";
        rankInfo.info2 = "";
    }
            
    if ( Object.keys(rankInfo.AllRanks).length !== 0 && rankInfo.AllRanks.constructor === Object ) { 
      if(rankInfo.AllRanks.SJR_H !== undefined) {
        hindex = rankInfo.AllRanks.SJR_H;
        rankInfo.info = refine;
        rankInfo.info += "; H-Index: " + hindex;
      } else {
        rankInfo.info = refine;
        rankInfo.info += "; H-Index: NA";
      }    
    }
    
    return rankInfo;
};


ccf.getRankClass = function (ranks) {
    quarts = ["Q1", "Q2", "Q3", "Q4", "A", "B", "C", "D", "I", "II", "III"]
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



function loadSettings() {
    return new Promise(function(resolve, reject) {
        chrome.storage.sync.get(function(items) {
            resolve(items);
         })
    });
};

ccf.getRankSpan = function (refine, type, doi, elid, ISSN1, ISSN2, dblp_venue, dblp_doi, settings) {
   
   
    let allNA = 1;
 
    let rankInfo = ccf.getRankInfo(refine, type, ISSN1, ISSN2, dblp_venue);
 
    let span1 = $("<span>");
    let rank = rankInfo.AllRanks.SJR_Q2;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span1
            .addClass("ccf-rank")
            .addClass("SJR_Q2_" + rank.replace(/[+*]/g, "plus").toLowerCase() )
            .text(rank); 
    }      
    
    let span2 = $("<span>");
    rank = rankInfo.AllRanks.VHB;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span2
            .addClass("ccf-rank")
            .addClass("VHB_" + rank.replace(/[+*/]/g, "plus").toLowerCase() )
            .text(rank); 
    }
    
    let span3 = $("<span>");
    rank = rankInfo.AllRanks.FNEGE;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span3
            .addClass("ccf-rank")
            .addClass("FNEGE_" + rank.replace(/[+*]/g, "plus").toLowerCase() )
            .text(rank); 
    } 
        
    let span4 = $("<span>");
    rank = rankInfo.AllRanks.CoNRS;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span4
            .addClass("ccf-rank")
            .addClass("CoNRS_" + rank.replace(/[+*]/g, "plus").toLowerCase() )
            .text(rank); 
    } 
    
    let span5 = $("<span>");
    rank = rankInfo.AllRanks.HCERE;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span5
            .addClass("ccf-rank")
            .addClass("HCERE_" + rank.replace(/[+*]/g, "plus").toLowerCase() )
            .text(rank); 
    } 
    
    let span6 = $("<span>");
    rank = rankInfo.AllRanks.CORE;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span6
            .addClass("ccf-rank")
            .addClass("CORE_" + rank.replace(/[+*]/g, "plus").toLowerCase() )
            .text(rank); 
    } 
    
    let span7 = $("<span>");
    rank = rankInfo.AllRanks.CORE_Conf;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span7
            .addClass("ccf-rank")
            .addClass("CORE_" + rank.replace(/[+*]/g, "plus").toLowerCase() )
            .text(rank); 
    } 
    
    let span8 = $("<span>");
    rank = rankInfo.AllRanks.CCF;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span8
            .addClass("ccf-rank")
            .addClass("CCF_" + rank.replace(/[+*]/g, "plus").toLowerCase() )
            .text(rank); 
    } 
    
    let span9 = $("<span>");
    rank = rankInfo.AllRanks.DAEN;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span9
            .addClass("ccf-rank")
            .addClass("DAEN_" + rank.replace(/[+*]/g, "plus").toLowerCase() )
            .text(rank); 
    } 
    
    let span10 = $("<span>");
    rank = rankInfo.AllRanks.AJG;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span10
            .addClass("ccf-rank")
            .addClass("AJG_" + rank.replace(/[+*]/g, "plus").toLowerCase() )
            .text(rank); 
    } 
        
    let span11 = $("<span>");
    rank = rankInfo.AllRanks.ABDC;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span11
            .addClass("ccf-rank")
            .addClass("ABDC_" + rank.replace(/[+*]/g, "plus").toLowerCase() )
            .text(rank); 
    } 
    
    let span12 = $("<span>");
    rank = rankInfo.AllRanks.FT50;
    if (rank != "NA" && rank != undefined) {
        allNA = allNA + 1;
        span12
            .addClass("ccf-rank")
            .addClass("FT50_" + rank.replace(/[+*]/g, "plus").toLowerCase() )
            .text(rank); 
    } 
        
   
    let elid_er = elid + "_expandrank";
    let elid_ar = elid + "_addrank";
            
    let span123 = $("<span>")
        .addClass("ccf-rank");
    
    let span456 = $("<span style='display:none'>")
        .attr("id", elid_ar)
        .addClass("ccf-rank");
        
    let popup_text = "" + rankInfo.info + "\n";

    let popup_text_add = "" + rankInfo.info + "\n";
    

    let Ranks_chosen = [];
    let Ranks_additional = [];
    
      if(settings.SJR === true) { 
          span123.append(span1); 
          popup_text += "SJR: " + rankInfo.AllRanks.SJR_Q2 + "   ";
          Ranks_chosen.push(rankInfo.AllRanks.SJR_Q2); 
        } else { 
          span456.append(span1); 
          popup_text_add += "SJR: " + rankInfo.AllRanks.SJR_Q2 + "   ";
          Ranks_additional.push(rankInfo.AllRanks.SJR_Q2); 
        }

      if(settings.VHB === true) { 
          span123.append(span2); 
          popup_text += "VHB: " + rankInfo.AllRanks.VHB + "   ";
          Ranks_chosen.push(rankInfo.AllRanks.VHB); 
        } else { 
          span456.append(span2); 
          popup_text_add += "VHB: " + rankInfo.AllRanks.VHB + "   ";
          Ranks_additional.push(rankInfo.AllRanks.VHB); 
        }
    
      if(settings.FNEGE === true) { 
          span123.append(span3); 
          popup_text += "FNEGE: " + rankInfo.AllRanks.FNEGE + "   ";
          Ranks_chosen.push(rankInfo.AllRanks.FNEGE); 
      } else { 
          span456.append(span3); 
          popup_text_add += "FNEGE: " + rankInfo.AllRanks.FNEGE + "   ";
          Ranks_additional.push(rankInfo.AllRanks.FNEGE); 
        }

      if(settings.CoNRS === true) { 
          span123.append(span4);
          popup_text += "CoNRS: " + rankInfo.AllRanks.CoNRS + "   ";
          Ranks_chosen.push(rankInfo.AllRanks.CoNRS); 
      } else { 
          span456.append(span4); 
          popup_text_add += "CoNRS: " + rankInfo.AllRanks.CoNRS + "   ";
          Ranks_additional.push(rankInfo.AllRanks.CoNRS); 
        }

      if(settings.HCERE === true) {  
          span123.append(span5);
          popup_text += "HCERE: " + rankInfo.AllRanks.HCERE + "   ";
          Ranks_chosen.push(rankInfo.AllRanks.HCERE); 
      } else { 
          span456.append(span5); 
          popup_text_add += "HCERE: " + rankInfo.AllRanks.HCERE + "   ";
          Ranks_additional.push(rankInfo.AllRanks.HCERE); 
        }
    
    
    let show_only_CORE = 0;
    let show_only_CORE_add = 0;
      if(settings.CORE === true) { 
          span123.append(span6);
          span123.append(span7);
          if(rankInfo.AllRanks.CORE != "NA") { popup_text += "CORE (Jour.): " + rankInfo.AllRanks.CORE + "   "; }
          if(rankInfo.AllRanks.CORE_Conf != "NA") { popup_text += "CORE (Conf.): " + rankInfo.AllRanks.CORE_Conf + " "; }
          if(rankInfo.AllRanks.CORE_Conf == "NA" && rankInfo.AllRanks.CORE == "NA") { popup_text += "CORE: " + rankInfo.AllRanks.CORE_Conf + "   "; }
          if(rankInfo.only_CORE == 1) { 
              popup_text_CORE = rankInfo.refine_CORE + "; H-Index: NA " + "\n" + "CORE (Conf.): " + rankInfo.rank_CORE;
              show_only_CORE = 1; 
          } 
          Ranks_chosen.push(rankInfo.AllRanks.CORE);
          Ranks_chosen.push(rankInfo.AllRanks.CORE_Conf);    
       } else { 
          span456.append(span6);
          span456.append(span7);
          if(rankInfo.AllRanks.CORE != "NA") { popup_text_add += "CORE (Jour.): " + rankInfo.AllRanks.CORE + "   "; }
          if(rankInfo.AllRanks.CORE_Conf != "NA") { popup_text_add += "CORE (Conf.): " + rankInfo.AllRanks.CORE_Conf + " "; }
          if(rankInfo.AllRanks.CORE_Conf == "NA" && rankInfo.AllRanks.CORE == "NA") { popup_text_add += "CORE: " + rankInfo.AllRanks.CORE_Conf + "   "; }
          if(rankInfo.only_CORE == 1) { 
              popup_text_CORE_add = rankInfo.refine_CORE + "; H-Index: NA " + "\n" + "CORE (Conf.): " + rankInfo.rank_CORE;
              show_only_CORE_add = 1; 
          }
          Ranks_additional.push(rankInfo.AllRanks.CORE);
          Ranks_additional.push(rankInfo.AllRanks.CORE_Conf);   
       }
    
      if(settings.CCF === true) { 
          span123.append(span8);
          popup_text += "CCF: " + rankInfo.AllRanks.CCF + "   ";
          Ranks_chosen.push(rankInfo.AllRanks.CCF); 
       } else { 
          span456.append(span8); 
          popup_text_add += "CCF: " + rankInfo.AllRanks.CCF + "   ";
          Ranks_additional.push(rankInfo.AllRanks.CCF); 
        }

      if(settings.DAEN === true) { 
          span123.append(span9); 
          popup_text += "BFI: " + rankInfo.AllRanks.DAEN + "   ";
          Ranks_chosen.push(rankInfo.AllRanks.DAEN); 
      } else { 
          span456.append(span9); 
          popup_text_add += "BFI: " + rankInfo.AllRanks.DAEN + "   ";
          Ranks_additional.push(rankInfo.AllRanks.DAEN); 
        }

      if(settings.AJG === true) { 
          span123.append(span10);
          popup_text += "AJG: " + rankInfo.AllRanks.AJG + "   ";
          Ranks_chosen.push(rankInfo.AllRanks.AJG); 
       } else { 
          span456.append(span10); 
          popup_text_add += "AJG: " + rankInfo.AllRanks.AJG + "   ";
          Ranks_additional.push(rankInfo.AllRanks.AJG); 
        }

      if(settings.ABDC === true) { 
          span123.append(span11);
          popup_text += "ABDC: " + rankInfo.AllRanks.ABDC + "   ";
          Ranks_chosen.push(rankInfo.AllRanks.ABDC); 
       } else { 
          span456.append(span11); 
          popup_text_add += "ABDC: " + rankInfo.AllRanks.ABDC + "   ";
          Ranks_additional.push(rankInfo.AllRanks.ABDC); 
        }
    
      if(settings.FT50 === true) { 
          span123.append(span12);
          popup_text += "FT50: " + rankInfo.AllRanks.FT50 + "   ";
          Ranks_chosen.push(rankInfo.AllRanks.FT50); 
       } else { 
          span456.append(span12); 
          popup_text_add += "FT50: " + rankInfo.AllRanks.FT50 + "   ";
          Ranks_additional.push(rankInfo.AllRanks.FT50); 
        }  
    
let chosen = 0;
let additional = 0;


    const isundef = (currentValue) => (currentValue === undefined || currentValue === "" || currentValue === "NA");
   
    if ( (!Ranks_chosen.every(isundef)) ) {   
        
        chosen = 1;

        if(show_only_CORE == 0) {
            span123
                .addClass("ccf-tooltip")
                .append($("<pre>").addClass("ccf-tooltiptext").text(popup_text));        
        } else {
            span123
                .addClass("ccf-tooltip")
                .append($("<pre>").addClass("ccf-tooltiptext").text(popup_text_CORE));   
        }
    } else if ( (refine == "" && ISSN1 == "") || (Ranks_chosen.every(isundef)) ) {
        
        chosen = 0;

        span123 = $("<span>")
            .addClass("ccf-rank")
            .text("NA")
            .addClass("ccf-none")
            .addClass("ccf-tooltip")
            .append($("<pre>").addClass("ccf-tooltiptext").text(rankInfo.info));       
    } 

    if  ( (!Ranks_additional.every(isundef)) ) {   
        
        additional = 1;
 
        if(show_only_CORE_add == 0) {
           span456  
                .addClass("ccf-tooltip")
                .append($("<pre>").addClass("ccf-tooltiptext").text(popup_text_add));
         } else {
           span456  
                .addClass("ccf-tooltip")
                .append($("<pre>").addClass("ccf-tooltiptext").text(popup_text_CORE_add));    
        }
    } else if ( (Ranks_additional.every(isundef)) ) {   
        
        additional = 0;

        span456 = $("<span id='add_rank'>")
            .addClass("ccf-rank")
            .addClass("ccf-none") 
            .text("NA")
            .addClass("ccf-tooltip")
            .append($("<pre>").addClass("ccf-tooltiptext").text(rankInfo.info)); 
    }   
    
    link_text = "https://doi.org/" + doi; 
    
    expand_rank = $("<span title='Click to see additional rankings' style='margin:0 auto'>")
        .attr("id", elid_er)
        .addClass("ccf-rank closed")
        .text("+")
        .on("click", function(){ $(document.getElementById(elid_ar)).toggle({direction: "right"},3000); $(document.getElementById(elid_er)).toggleClass( "open closed" ); });   
    
    if(doi != "") { 
        span_link = $('<a href="" target="_blank">')
            .attr("href", link_text)
            .append(span123);
            
        if(additional === 1) {
            span_link
                .append(span456);
        }
        
        span_span_link = $('<span>')
            .append(span_link);
   
    } else if (rankInfo.rank_CORE != "NA" && rankInfo.rank_CORE != undefined && show_only_CORE == 1) {
        span_link = $('<a href="" target="_blank">')
            .attr("href", "https://doi.org/" + dblp_doi)
            .append(span123);
            
        if(additional === 1) {
            span_link
                .append(span456);
        }   

        span_span_link = $('<span>')
            .append(span_link);
 
    }

    if(doi != "") { 
        span = span_span_link;
        if(additional === 1) {
            span
                .append(expand_rank);
        }
    } else if(doi === "" || doi === undefined) { 
        span = $('<span>')
            .append(span123)
        if(additional === 1) {
        span
            .append(span456)
            .append(expand_rank);
        }
    } else if (rankInfo.rank_CORE != "NA" && rankInfo.rank_CORE != undefined && show_only_CORE == 1) {
        span = span_span_link;
        if(additional === 1) {
            span
                .append(span456)
                .append(expand_rank);
        }    
    } else {
        span = $('<span>')
            .append(span123);
        
        if(additional === 1) {
            span
                .append(span456)
                .append(expand_rank);
        }     
    } 
        
    document.getElementById(elid).remove();
    return span; 
    
};
