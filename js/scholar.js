/**
 * MIT License
 *
 * Copyright (c) 2022 Julian R.K. Wichmann building upon 
 *                                            WenyanLiu (https://github.com/WenyanLiu/CCFrank4dblp), Kai Chen (https://github.com/FunClip)
 */


const scholar = {};

CircumventCrossRef = function (journal3, node, title, compl, scholar, elid) {
    let rank_SJR;
    let rank_VHB;
    let rank_CCF;
    let url;
    
    url = journal3;
        
    url = url.toUpperCase();
    url = url.replace(/&AMP;/g, "&");
    url = url.replace(/ AND /g, "");
    url = url.replace(/[^A-Z0-9]/ig, "");
        
    let position = ccf.FullRank.indexOf(" " + url + " ");

    let rankstr = ccf.FullRank.substring(position-5, position-3);

    rank_SJR = rankstr;  
    rank_VHB = ccf.FullRank_VHB[url]; 
    rank_CCF = ccf.FullRank_CCF[url];
    
    if (rank_SJR != "" || rank_VHB != undefined || rank_CCF != undefined ) {
        for (let getRankSpan of scholar.rankSpanList) {
                let doi = "";
                $(node).after(getRankSpan(journal3, "full_cap", doi, elid)); } 
    } else { 
        fetchRank(node, title, compl, scholar, elid);
        }
};


scholar.rankSpanList = [];

scholar.run = function () {
    let url = window.location.pathname;
    if (url == "/scholar") {
        scholar.appendRank();
    } else if (url == "/citations") {
        scholar.appendRanks();
        
        $("#gsc_bpf_more").click( function() {
            setTimeout( function() {
                 scholar.appendRanks()
            }, 1000);
        });

    }
};

scholar.appendRank = function () {
    let elements = $("#gs_res_ccl_mid > div > div.gs_ri");
    elements.each( async function () {
        let node = $(this).find("h3 > a");
        let title = node.text();
        let compl = $(this)
            .find("div.gs_a")
            .text()
            .replace(/(<([^>]+)>)/gi, "")
            .replace("&nbsp;", "");
        
        
        let elid = $(node).attr("id");
        elid += "_wait_surr";
        let span_wait = $('<span title="Fetching results from CrossRef API..." id="waiting" class="ccf-waiting">');
        let span_wait_surr = $('<span id="id" class="ccf-waiting_surr ccf-rank">')
            .append(span_wait)
            .attr("id",elid);
        node
            .append(span_wait_surr);
            
                    
        let journal = $(this)
            .find("div.gs_a")
            .text();

        let r1 = journal.indexOf(String.fromCharCode(160) + "- ");
        let journal2 = journal.substring(r1+3);
        let r2 = journal2.indexOf(" - ");

        journal3 = journal.substring(r1+3, r1+3+r2); 
        journal3 = journal3.replace(/, \d\d\d\d/, "");
        
        let r3 = journal3.indexOf("…");
                
        if(r3 == -1) {
            CircumventCrossRef(journal3, node, title, compl, scholar, elid); 
        } else {
            fetchRank(node, title, compl, scholar, elid); 
        }
        
    });
};

scholar.appendRanks = function () {
    let elements = $("tr.gsc_a_tr");
    let i = 1;
    elements.each(function () {
        let node = $(this).find("td.gsc_a_t > a").first();
      /* if (!node.next().hasClass("ccf-rank")) { */
        if (!node.hasClass("done")) {
            node
                .addClass("done");
            let title = node.text();
            let author = $(this)
                .find("div.gs_gray")
                .text()
                .replace(/[\,\…]/g, "")
                .split(" ")[1];
            let year = $(this).find("td.gsc_a_y").text();
            let compl = $(this)
                .find("div.gs_gray")
                .text()
                .replace(/(<([^>]+)>)/gi, "")
                .replace("&nbsp;", "");
                
            let elid = i;
            elid += "_wait_surr";
            let span_wait = $('<span title="Fetching results from CrossRef API..." id="waiting" class="ccf-waiting">');
            let span_wait_surr = $('<span id="id" class="ccf-waiting_surr ccf-rank">')
                .append(span_wait)
                .attr("id",elid);
            node
                .append(span_wait_surr);
            
                              
        let journal = $(this)
            .find("div.gs_gray").last()
            .text();

        let journal3 = journal.replace(/[^A-Z ]/ig, "");
        journal3 = journal3.replace(/^\s+|\s+$|\s+(?=\s)/g, "");

        let r3 = journal3.indexOf("…");
                
        if(r3 == -1) {
            CircumventCrossRef(journal3, node, title, compl, scholar, elid); 
        } else {
            fetchRank(node, title, compl, scholar, elid); 
        } 
        
        /*fetchRank(node, title, compl, scholar, elid);   */
      }
      i = i+1;
    });
};