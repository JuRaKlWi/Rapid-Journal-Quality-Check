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
    rankInfo.txt = "";
    let rank;
    let rank_CCF;
    let rank_VHB;
    let url;
    let hindex;
    let rank_txt;
    if (type == 'full_cap') {
        rank = ccf.FullRank[refine];
        rank_CCF = ccf.FullRank_CCF[refine];
        rank_VHB = ccf.FullRank_VHB[refine];
        url = refine;
        hindex = ccf.FullHindex[refine];
    } 
    if (rank == undefined && rank_CCF == undefined) {
        rank_txt = "SJR / CCF none ";
        rankInfo.info += refine + " not found\n";
    } 
    if (rank != undefined) {
        rank_txt = "SJR " + rank;
        rankInfo.info += refine;
        let abbrname = ccf.FullRank[url];
        if (abbrname != "") {
            rankInfo.info += " (" + abbrname + ")";
        }
        rankInfo.info += "; H-Index: " + hindex + "\n";
    }
    if (rank != undefined && rank_VHB != undefined) {
        rank_txt += "; ";
    }
    if (rank_VHB != undefined) {
        rank_txt += "VHB " + rank_VHB;
        rankInfo.info += refine;
        let abbrname = ccf.FullRank_VHB[url];
        if (abbrname != "") {
            rankInfo.info += " (" + abbrname + ")";
        }
    }
    if (rank != undefined && rank_CCF != undefined) {
        rank_txt += "; ";
    }
    if (rank_CCF != undefined) {
        rank_txt += "CCF " + rank_CCF;
        rankInfo.info += refine;
        let abbrname = ccf.FullRank_CCF[url];
        if (abbrname != "") {
            rankInfo.info += " (" + abbrname + ")";
        }
    }
    rankInfo.txt = rank_txt;
    rankInfo.ranks.push(rank);
    return rankInfo;
};

ccf.getRankClass = function (ranks) {
    quarts = ["Q1", "Q2", "Q3", "Q4", "A", "B", "C"]
    for (let rank of quarts) {
        for (let r of ranks) {
            if (r == rank) {
                return "ccf-" + rank.toLowerCase();
            }
        }
    }
    return "ccf-none";
};

ccf.getRankSpan = function (refine, type) {
    let rankInfo = ccf.getRankInfo(refine, type);
    let span = $("<span>")
        .addClass("ccf-rank")
        .addClass(ccf.getRankClass(rankInfo.ranks))
        .text(rankInfo.txt);
    /* if(rankInfo.ranks == "A" || rankInfo.ranks == "B" || rankInfo.ranks == "C") {
        span
            .text("CCF " + rankInfo.ranks.join("/") + rankInfo.txt ); 
        } else if (rankInfo.ranks == "Q1" || rankInfo.ranks == "Q2" || rankInfo.ranks == "Q3" || rankInfo.ranks == "Q4") { 
        span
            .text("SJR " + rankInfo.ranks.join("/") + rankInfo.txt ); 
        } else {
        span
            .text("SJR / CCF none" + rankInfo.txt );
        } */
    if (rankInfo.info.length != 0) {
        span
            .addClass("ccf-tooltip")
            .append($("<pre>").addClass("ccf-tooltiptext").text(rankInfo.info));
    }
    return span;
};
