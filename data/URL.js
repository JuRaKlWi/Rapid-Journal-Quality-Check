var title = "brands of"
var authorA = "Wichmann"

    var xhr = new XMLHttpRequest();

    api_format = "https://api.crossref.org/works?query.bibliographic=" + encodeURIComponent(title + " " + authorA) + "&rows=5";
    xhr.open("GET", api_format, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var dblp_url = "";
            var resp = JSON.parse(xhr.responseText).message;
            if (resp["total-results"] == 0) {
                dblp_url == "";
            } else if (resp["total-results"] == 1) {
                url = resp.items["container-title"][0];
                dblp_url = url;
            } else {
/*                for (var h = 0; h < resp["total-results"]; h++) { */
                for (var h = 0; h < 3; h++) {
                    info = resp.items[h];
                    if (Array.isArray(info.author)) {
                        author_1st = info.author[0].family;
                    } else {
                        author_1st = info.author;
                        console.log(author_1st);
                    }
                    year_fuzzy = info["created"]["date-parts"][0][0];
                    year_last_check = 0;
                    if (Math.abs(Number(year) - year_fuzzy) <= 1
                        // && author_1st.toLowerCase().split(" ").indexOf(authorA.toLowerCase()) != -1
                        && author_1st.toLowerCase().split(" ")
                        && year_fuzzy != year_last_check) {
                        year_last_check = year_fuzzy;
                        url = resp.items[h]["container-title"][0];
                        dblp_url = url;
                        if (year_fuzzy == year + 1) {
                            dblp_url = dblp_url_last_check;
                        } else if (year_fuzzy == year) {
                            dblp_url = dblp_url_last_check;
                            break;
                        } else {
                            if (dblp_url == "") {
                                dblp_url = dblp_url_last_check;
                            }
                            ;
                        }
                    }
                }
            }
            dblp_url = dblp_url.toUpperCase();
            /* dblp_url = ccf.FullRank[dblp_url]; */
            for (let getRankSpan of site.rankSpanList) {
                $(node).after(getRankSpan(dblp_url, "full_cap"));
            }
        }
    };
    xhr.send();

