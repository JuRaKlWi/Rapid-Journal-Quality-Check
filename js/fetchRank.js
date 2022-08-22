/**
 * MIT License
 *
 * Copyright (c) 2022 Julian R.K. Wichmann building upon 
 *                                            WenyanLiu (https://github.com/WenyanLiu/CCFrank4dblp), Kai Chen (https://github.com/FunClip)
 */


function fetchRank(node, title, compl, site, elid) {
        
    var xhr = new XMLHttpRequest();
    /* Public API 
      api_format = "https://api.crossref.org/works?query.bibliographic=" + encodeURIComponent(title + " " + compl) + "&rows=2&select=DOI,container-title";  */
    /* Polite API */
      api_format = "https://api.crossref.org/works?query.bibliographic=" + encodeURIComponent(title + " " + compl) + "&rows=2&select=DOI,container-title&mailto=jrk.devgit@gmail.com";  
        xhr.open("GET", api_format, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var dblp_url = "";
            var doi = "";
            var resp = JSON.parse(xhr.responseText).message;
            if (resp["total-results"] == 0) {
                url == "";
                dblp_url == "";
                doi == "";
            } else if (resp["total-results"] == 1 & resp.items[0].hasOwnProperty("container-title")) {
                url = resp.items[0]["container-title"][0];
                dblp_url = url;
                doi = resp.items[0]["DOI"]; 
           /* } else if (resp["total-results"] > 1 & resp.items[0].hasOwnProperty("container-title") ) {
                url = resp.items[0]["container-title"][0];
                dblp_url = url;
                doi = resp.items[0]["DOI"]; */
            }  else if (resp["total-results"] > 1 & resp.items[0].hasOwnProperty("container-title")  & resp.items[1].hasOwnProperty("container-title")) {
                if( resp.items[0]["container-title"][0] == "SSRN Electronic Journal" ) {
                    url = resp.items[1]["container-title"][0];
                    dblp_url = url;
                    doi = resp.items[1]["DOI"];
                } else {
                    url = resp.items[0]["container-title"][0];
                    dblp_url = url;
                    doi = resp.items[0]["DOI"];
                }
            } else if (resp["total-results"] > 1 & resp.items[0].hasOwnProperty("container-title") & !resp.items[1].hasOwnProperty("container-title")) {
                url = resp.items[0]["container-title"][0];
                dblp_url = url;
                doi = resp.items[0]["DOI"]; 
            }
            
            
            doi = doi.replaceAll('\\','');
            
            for (let getRankSpan of site.rankSpanList) {
                $(node).after(getRankSpan(dblp_url, "full_cap", doi, elid));
            }
        }
    };
    xhr.send();
};