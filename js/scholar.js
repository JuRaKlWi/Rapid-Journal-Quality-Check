/**
 * MIT License
 *
 * Copyright (c) 2022 Julian R.K. Wichmann building upon 
 *                                            WenyanLiu (https://github.com/WenyanLiu/CCFrank4dblp), Kai Chen (https://github.com/FunClip)
 */

const scholar = {};

scholar.rankSpanList = [];

scholar.run = function () {
    let url = window.location.pathname;
    if (url == "/scholar") {
        scholar.appendRank();
    } else if (url == "/citations") {
        setInterval(function () {
            $(window).bind("popstate", function () {
                scholar.appendRanks();
            });
            scholar.appendRanks();
        }, 2000);
    }
};

scholar.appendRank = function () {
    let elements = $("#gs_res_ccl_mid > div > div.gs_ri");
    elements.each(function () {
        let node = $(this).find("h3 > a");
        let title = node.text();
        let data = $(this)
            .find("div.gs_a")
            .text()
            .replace(/[\,\-\…]/g, "")
            .split(" ");
        let author = data[1];
        let year = data.slice(-3)[0];
        fetchRank(node, title, author, year, scholar);
    });
};

scholar.appendRanks = function () {
    let elements = $("tr.gsc_a_tr");
    elements.each(function () {
        let node = $(this).find("td.gsc_a_t > a").first();
        if (!node.next().hasClass("ccf-rank")) {
            let title = node.text();
            let author = $(this)
                .find("div.gs_gray")
                .text()
                .replace(/[\,\…]/g, "")
                .split(" ")[1];
            let year = $(this).find("td.gsc_a_y").text();
            fetchRank(node, title, author, year, scholar);
        }
    });
};