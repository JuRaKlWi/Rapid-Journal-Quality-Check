/**
 * MIT License
 *
 * Copyright (c) 2022 Julian R.K. Wichmann building upon 
 *                                            WenyanLiu (https://github.com/WenyanLiu/CCFrank4dblp), Kai Chen (https://github.com/FunClip)
 */


const scholar_turbo = {};

CircumventCrossRef = function (journal3, node, title, compl, scholar, elid, author, settings) {
    let url;
    
    url = journal3;
        
    url = url.toUpperCase();
    url = url.replace(/&AMP;/g, "&");
    url = url.replace(/ AND /g, "");
    url = url.replace(/^THE /g, "");
    url = url.replace(/, THE$/g, "");
    url = url.normalize('NFD');
    url = url.replace(/[^A-Z0-9]/ig, "");
        
    let position_start = ccf.FullRank_Names.indexOf("X_X" + url + "\1/");
           
    if (position_start != -1) {
        for (let getRankSpan of scholar.rankSpanList) {
                let doi = "";
                $(node).after(getRankSpan(journal3, "full_cap", doi, elid, "", "", "", "", settings)); } 
    } else { 
        fetchRank(node, title, compl, scholar, elid, author, settings);
        }
};


scholar.rankSpanList = [];

scholar_turbo.run = function (settings) {
    let url = window.location.pathname;
    let full_url = window.location.href;
    if (url == "/scholar") {
        scholar_turbo.appendRank(full_url, settings);
    } else if (url == "/citations") {
        scholar_turbo.appendRanks(settings);
        $("#gsc_bpf_more").click( function() {
            setTimeout( function() {
                 scholar_turbo.appendRanks(settings)
            }, 1000);
        });
    }
};


/*function ajax(cite_link) {
 return new Promise(function(resolve, reject) {       
    $.get(cite_link, function(data, status){
        resolve(data);
        reject("");
    }, "text");
});
};*/


scholar_turbo.appendRank = function (full_url, settings) {
    let elements = $("#gs_res_ccl_mid > div > div.gs_ri");
    let n_crawls = 0; 
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function crawl() {
        if (n_crawls >= 2) {
            await sleep(1 * 1000);
            n_crawls = 0;
        }
            
        let pos_start = result.indexOf("<i>",1);
        let pos_end = result.indexOf("</i>",1);
        let scholar_journal = result.substring( (pos_start + 3), pos_end);
        //alert(scholar_journal); 
        let journal4 = scholar_journal;               
                
        n_crawls = n_crawls + 1;
                
        if(journal4 != "" && journal4 != undefined && journal4 != "<d") {
            CircumventCrossRef(journal4, node, title, compl, scholar, elid, author, settings); 
        } else {
            fetchRank(node, title, compl, scholar, elid, author, settings);
        }
                    
    };

/*    async function demo() {
        for (let i = 0; i < 5; i++) {
            console.log(`Waiting ${i} seconds...`);
            await sleep(i * 1000);
        }
        console.log('Done');
    }

demo(); */

    elements.each(async function () {
        
        let node = $(this).find("h3 > a");
        let title = node.text();
        let compl = $(this)
            .find("div.gs_a")
            .text()
            .replace(/(<([^>]+)>)/gi, "")
            .replace("&nbsp;", "");
        
        let data = $(this)
            .find("div.gs_a")
            .text()
            .replace(/[\,\-\…]/g, "")
            .split(" ");
        let author = data[1];
        
        let elid = $(node).attr("id");
        let elid_id = elid;
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
                
        // full_url = "https://scholar.google.com/scholar";
        full_url = window.location.hostname;
        full_url += "/scholar";
        let cite_link = full_url + "?q=info:" + elid_id + ":scholar.google.com/&output=cite&scirp=8&hl=de";
  
        let r3 = journal3.indexOf("…");
           
        if(r3 == -1) {
            CircumventCrossRef(journal3, node, title, compl, scholar, elid, author, settings); 

        } else if (r3 != -1) {    
            ajax(cite_link).then(function(result) {

                async function crawl() {
                if (n_crawls >= 2) {
                    await sleep(1 * 1000);
                    n_crawls = 0;
                }
            
                let pos_start = result.indexOf("<i>",1);
                let pos_end = result.indexOf("</i>",1);
                let scholar_journal = result.substring( (pos_start + 3), pos_end);
                //alert(scholar_journal); 
                let journal4 = scholar_journal;               
                
                n_crawls = n_crawls + 1;
                
                if(journal4 != "" && journal4 != undefined && journal4 != "<d") {
                    CircumventCrossRef(journal4, node, title, compl, scholar, elid, author, settings); 
                } else {
                    fetchRank(node, title, compl, scholar, elid, author, settings);
                }        
                };
                crawl();            
            });     
        } else {
                    fetchRank(node, title, compl, scholar, elid, author, settings);
                }  

    });
};

scholar_turbo.appendRanks = function (settings) {
    let elements = $("tr.gsc_a_tr");
    let i = 1;
    elements.each(async function () {
        let node = $(this).find("td.gsc_a_t > a").first();
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
            CircumventCrossRef(journal3, node, title, compl, scholar, elid, author, settings); 
        } else {
            fetchRank(node, title, compl, scholar, elid, author, settings); 
        } 
        
      }
      i = i+1;
    });
};