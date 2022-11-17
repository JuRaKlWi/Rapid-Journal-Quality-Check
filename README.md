<h1 align="center"><img src="./icon/32x32.png" height="21px" alt=""> RapidJournalQualCheck </h1> 
<h3 align="center"> Rapid Quality Check for Academic Journals in Google Scholar Search Results </h3>
</br>
<p align="center">
    <a href="https://github.com/JuRaKlWi/RapidJournalQualCheck">
        <img alt="GitHub manifest version" src="https://img.shields.io/github/manifest-json/v/JuRaKlWi/RapidJournalQualCheck?color=%23EA4AAA&label=Github&logo=github&logoColor=%23EA4AAA">
    </a>
</p>

<b> This is a Chrome extension to display SJR along with the H-Index and CCF score next to Google Scholar search results. </b>

</p> Based on and adapted from CCFrank by WenyanLiu: https://github.com/WenyanLiu/CCFrank4dblp
</br> Using the public Crossref API: https://api.crossref.org/swagger-ui/index.html
</br> Using the public dblp API: https://dblp.org/
</br> Using Australian Business Deans Council (ABDC) list: https://abdc.edu.au/research/abdc-journal-quality-list/
</br> Using Academic Journal Guide (AJG) by the Chartered Association of Business Schools (C_ABS): https://charteredabs.org/academic-journal-guide-2021/
</br> Using Bibliometriske Forskningsindikator (BFI) of the Danish Ministry of Higher Education and Science ranking: ufm.dk
</br> Using Ranking of the Chinese Computer Foundation (CCF): https://www.ccf.org.cn/en/Bulletin/2019-05-13/663884.shtml
</br> Using CNRS ranking: https://www.gate.cnrs.fr/spip.php?rubrique31&lang=en
</br> Using Foundation National pour l’Enseignement de la Gestion des Enterprises (FNEGE) ranking: https://www.fnege.org/classement-des-revues-scientifiques-en-sciences-de-gestion/
</br> Using Financial Times (FT) research rank:
</br> Using High Council for Evaluation of Research & Higher Education (HCERES) ranking: https://www.hceres.fr/sites/default/files/media/downloads/2020-liste-hceres-domaine-shs1-economie-et-gestion_0.pdf
</br> Using SCImago Journal & Country Rank (retrieved July 20th, 2022): http://www.scimagojr.com
</br> Using CORE journal and conference ranking: http://portal.core.edu.au/jnl-ranks/
</br> Using Financial Time's FT50 ranking: https://www.ft.com/content/3405a512-5cbb-11e1-8f1f-00144feabdc0
</br> Icons from Flaticon.com: https://www.flaticon.com/free-icons/research

## Preview

Journal rankings are directly added to Google Search results.
<br />![SJR and VHB Scores](./img/SJR_VHB.PNG)

<br /><br />Currently includes a broad range of rankings. Please check the links above for more information on each ranking. The colors also indicate quality from green (higher quality) to red (lower quality).
![SJR and CCF Scores](./img/SJR_and_CCF.PNG)

<br /><br />Hovering with your cursor over the ranking scores gives you additional information such as the journals h-index and the name of the journal that was identified based on the input from Google Scholar.
![SJR and VHB Scores with mouseover info](./img/SJR_VHB_with%20mouseover.PNG)

<br /><br />Clicking on the ranking scores takes you to the identified work via its DOI. This along with the identified journal name helps you to check, whether indeed the correct journal was identified based on the Google Scholar input.
![Link to DOI](./img/doi_link.PNG)


## Install

<b>I. Directly install from the Chrome Store --> coming soon </b>

	1. Find the RapidJournalQualCheck extension in [Chrome Web Store](https://chrome.google.com/webstore/)

	2. Click the `Add to Browser` button.

	3. RapidJournalQualCheck needs to read and change dblp, Google Scholar. To approve, click `Add extension`.

OR

<b>II. Load Unpacked</b>

	1. Clone RapidJournalQualCheck to a directory.

	2. Open the Extension Management page by navigating to `chrome://extensions`.
 	   - The Extension Management page can also be opened by clicking on the Chrome menu, hovering over **More Tools** then
  	    selecting **Extensions**.

	3. Enable Developer Mode by clicking the toggle switch next to **Developer mode**.

	4. Click the **LOAD UNPACKED** button in the top left corner and select the directory holding RapidJournalQualCheck.

## What's New

**Version 2.0.1**

> Significantly improved layout and performance. Results are displayed more rapidly and concisely now. 
> VHB ranking was added for a more fine-grained evaluation of sources. 
> Clicking on an individual ranking score now takes you to the work via doi.org that crossref identified based on the input from Google Scholar. Along with the reported journal in the mouseover infobox, this allows you to check, whether crossref identified the correct journal/work. In addition, it may help you find a similar work by the same author(s) published in a "more proper" outlet. 


## Contributors ✨

This package is based on CCFrank by WenyanLiu: https://github.com/WenyanLiu/CCFrank4dblp
Thanks goes to her and her contributors: https://github.com/WenyanLiu/CCFrank4dblp#contributors-

</p> Using the public Crossref API: https://api.crossref.org/swagger-ui/index.html
</p> Using SCImago Journal & Country Rank (retrieved July 20th, 2022): http://www.scimagojr.com
</br> Using VHB-JOURQUAL3 ranking: https://vhbonline.org/en/vhb4you/vhb-jourqual/vhb-jourqual-3
</p> Using China Computer Federation (CCF) ranking: https://www.ccf.org.cn/en/Bulletin/2019-05-13/663884.shtml
</p> Icons from Flaticon.com: https://www.flaticon.com/free-icons/research

Contributions of any kind welcome!

## Reports
