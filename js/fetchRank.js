/**
 * MIT License
 *
 * Copyright (c) 2022 Julian R.K. Wichmann building upon 
 *                                            WenyanLiu (https://github.com/WenyanLiu/CCFrank4dblp), Kai Chen (https://github.com/FunClip)
 */


function fetchRank(node, title, compl, site, elid, author, settings) {
    
 chrome.storage.sync.get(['CORE'], function(result) {
/* if(result.CORE === true) { */

if(1 === 1) {
        
    var xhr = new XMLHttpRequest();
    /* Public API */  
      api_format = "https://api.crossref.org/works?query.bibliographic=" + encodeURIComponent(title + " " + compl) + "&rows=2&select=DOI,container-title,ISSN"; 

    /* Polite API 
      api_format = "https://api.crossref.org/works?query.bibliographic=" + encodeURIComponent(title + " " + compl) + "&rows=2&select=DOI,container-title,ISSN&mailto=jrk.devgit@gmail.com"; */  
      
    xhr.open("GET", api_format, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var dblp_url = "";
            var doi = "";
            var ISSN1 = "";
            var ISSN2 = "";
            var resp = JSON.parse(xhr.responseText).message;
            if (resp["total-results"] == 0) {
                url == "";
                dblp_url == "";
                doi == "";
                ISSN1 == "";
                ISSN2 == "";
            } else if (resp["total-results"] == 1 & resp.items[0].hasOwnProperty("container-title")) {
                url = resp.items[0]["container-title"][0];
                dblp_url = url;
                doi = resp.items[0]["DOI"];
                if( Array.isArray(resp.items[0]["ISSN"]) ) { 
                    ISSN1 = resp.items[0]["ISSN"][0]; 
                    ISSN2 = resp.items[0]["ISSN"][1];
                } else { 
                ISSN1 = resp.items[0]["ISSN"]; 
                }
            }  else if (resp["total-results"] > 1 & resp.items[0].hasOwnProperty("container-title")  & resp.items[1].hasOwnProperty("container-title")) {
                if( resp.items[0]["container-title"][0] == "SSRN Electronic Journal" ) {
                    url = resp.items[1]["container-title"][0];
                    dblp_url = url;
                    doi = resp.items[1]["DOI"];
                    if( Array.isArray(resp.items[1]["ISSN"]) ) { 
                        ISSN1 = resp.items[1]["ISSN"][0]; 
                        ISSN2 = resp.items[1]["ISSN"][1];
                    } else { 
                    ISSN1 = resp.items[1]["ISSN"]; 
                    }
                } else {
                    url = resp.items[0]["container-title"][0];
                    dblp_url = url;
                    doi = resp.items[0]["DOI"];
                    if( Array.isArray(resp.items[0]["ISSN"]) ) { 
                        ISSN1 = resp.items[0]["ISSN"][0]; 
                        ISSN2 = resp.items[0]["ISSN"][1];
                    } else { 
                    ISSN1 = resp.items[0]["ISSN"]; 
                    } 
                }
            } else if (resp["total-results"] > 1 & resp.items[0].hasOwnProperty("container-title") & !resp.items[1].hasOwnProperty("container-title")) {
                url = resp.items[0]["container-title"][0];
                dblp_url = url;
                doi = resp.items[0]["DOI"]; 
                if( Array.isArray(resp.items[0]["ISSN"]) ) { 
                    ISSN1 = resp.items[0]["ISSN"][0]; 
                    ISSN2 = resp.items[0]["ISSN"][1];
                } else { 
                ISSN1 = resp.items[0]["ISSN"]; 
                }
            } else {
                url == "";
                dblp_url == "";
                doi == "";
                ISSN1 == "";
                ISSN2 == "";
            }

            doi = doi.replaceAll('\\','');
            
            
            var dblp_venue = "";
            var dblp_doi = "";
            var xhrCORE = new XMLHttpRequest();
            api_format2 = "https://dblp.org/search/publ/api?q=" + encodeURIComponent(title + " " + author) + "&format=json&h=1";  
            xhrCORE.open("GET", api_format2, true);
            xhrCORE.onreadystatechange = function () {
               if (xhrCORE.readyState == 4) { 
                    var resp = JSON.parse(xhrCORE.responseText).result.hits;
                          if (resp["@total"] == 0) {
                            dblp_venue == "";
                            dblp_doi == "";
                          } else if (resp["@total"] >= 1) {
                              dblp_venue = resp.hit[0].info.venue;
                              dblp_doi = resp.hit[0].info.doi;
                          }

                    for (let getRankSpan of site.rankSpanList) {
                        $(node).after(getRankSpan(dblp_url, "full_cap", doi, elid, ISSN1, ISSN2, dblp_venue, dblp_doi, settings)); 
                    }
                }
            };
            xhrCORE.send(); 
        }
    };
  xhr.send();
 
 } else {

    var xhr = new XMLHttpRequest();
    /* Public API */  
      api_format = "https://api.crossref.org/works?query.bibliographic=" + encodeURIComponent(title + " " + compl) + "&rows=2&select=DOI,container-title,ISSN"; 

    /* Polite API 
      api_format = "https://api.crossref.org/works?query.bibliographic=" + encodeURIComponent(title + " " + compl) + "&rows=2&select=DOI,container-title,ISSN&mailto=jrk.devgit@gmail.com"; */  
      
    xhr.open("GET", api_format, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var dblp_url = "";
            var doi = "";
            var ISSN1 = "";
            var ISSN2 = "";
            var resp = JSON.parse(xhr.responseText).message;
            if (resp["total-results"] == 0) {
                url == "";
                dblp_url == "";
                doi == "";
                ISSN1 == "";
                ISSN2 == "";
            } else if (resp["total-results"] == 1 & resp.items[0].hasOwnProperty("container-title")) {
                url = resp.items[0]["container-title"][0];
                dblp_url = url;
                doi = resp.items[0]["DOI"];
                if( Array.isArray(resp.items[0]["ISSN"]) ) { 
                    ISSN1 = resp.items[0]["ISSN"][0]; 
                    ISSN2 = resp.items[0]["ISSN"][1];
                } else { 
                ISSN1 = resp.items[0]["ISSN"]; 
                }
            }  else if (resp["total-results"] > 1 & resp.items[0].hasOwnProperty("container-title")  & resp.items[1].hasOwnProperty("container-title")) {
                if( resp.items[0]["container-title"][0] == "SSRN Electronic Journal" ) {
                    url = resp.items[1]["container-title"][0];
                    dblp_url = url;
                    doi = resp.items[1]["DOI"];
                    if( Array.isArray(resp.items[1]["ISSN"]) ) { 
                        ISSN1 = resp.items[1]["ISSN"][0]; 
                        ISSN2 = resp.items[1]["ISSN"][1];
                    } else { 
                    ISSN1 = resp.items[1]["ISSN"]; 
                    }
                } else {
                    url = resp.items[0]["container-title"][0];
                    dblp_url = url;
                    doi = resp.items[0]["DOI"];
                    if( Array.isArray(resp.items[0]["ISSN"]) ) { 
                        ISSN1 = resp.items[0]["ISSN"][0]; 
                        ISSN2 = resp.items[0]["ISSN"][1];
                    } else { 
                    ISSN1 = resp.items[0]["ISSN"]; 
                    } 
                }
            } else if (resp["total-results"] > 1 & resp.items[0].hasOwnProperty("container-title") & !resp.items[1].hasOwnProperty("container-title")) {
                url = resp.items[0]["container-title"][0];
                dblp_url = url;
                doi = resp.items[0]["DOI"]; 
                if( Array.isArray(resp.items[0]["ISSN"]) ) { 
                    ISSN1 = resp.items[0]["ISSN"][0]; 
                    ISSN2 = resp.items[0]["ISSN"][1];
                } else { 
                ISSN1 = resp.items[0]["ISSN"]; 
                }
            } else {
                url == "";
                dblp_url == "";
                doi == "";
                ISSN1 == "";
                ISSN2 == "";
            }

            doi = doi.replaceAll('\\','');
            
            var dblp_venue = "";
            var dblp_doi = "";
            
            for (let getRankSpan of site.rankSpanList) {
                        $(node).after(getRankSpan(dblp_url, "full_cap", doi, elid, ISSN1, ISSN2, dblp_venue, dblp_doi, settings)); 
            }
        }
    };
 xhr.send();
 }
});       
};