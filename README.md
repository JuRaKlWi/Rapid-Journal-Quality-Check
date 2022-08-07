<h1 align="center"><img src="./icon/32x32.png" height="21px" alt=""> RapidJournalQualCheck </h1> 
<h3 align="center"> Rapid Quality Check for Academic Journals in Google Scholar Search Results based on SJR, VHB, and CCF </h3>
</br>
<p align="center">
    <a href="https://github.com/JuRaKlWi/RapidJournalQualCheck">
        <img alt="GitHub manifest version" src="https://img.shields.io/github/manifest-json/v/JuRaKlWi/RapidJournalQualCheck?color=%23EA4AAA&label=Github&logo=github&logoColor=%23EA4AAA">
    </a>
</p>

<b> This is a Chrome extension to display SJR along with the H-Index and CCF score next to Google Scholar search results. </b>

</p> Based on and adapted from CCFrank by WenyanLiu: https://github.com/WenyanLiu/CCFrank4dblp
</br> Using the public Crossref API: https://api.crossref.org/swagger-ui/index.html
</br> Using SCImago Journal & Country Rank (retrieved July 20th, 2022): http://www.scimagojr.com
</br> Using VHB-JOURQUAL ranking: https://vhbonline.org/en/vhb4you/vhb-jourqual/vhb-jourqual-3
</br> Using China Computer Federation (CCF) ranking: https://www.ccf.org.cn/en/Bulletin/2019-05-13/663884.shtml
</br> Icons from Flaticon.com: https://www.flaticon.com/free-icons/research

## Preview
<div style="margin: 5px; border: 1px solid #ccc; float: left; width: 	20%;">
  <a target="_blank" href="./img/SJR_VHB.png">
    <img src="./img/SJR_VHB.png" alt="SJR_VHB" height="auto" width="100%" 
    onmouseover= "this.style.width='200%';this.style.height='auto';this.style.zIndex='10';this.style.position='relative';" 
    onmouseout="this.style.width='100%';this.style.height='auto';this.style.zIndex='1';this.style.position='relative';">
  </a>
  <div class="desc" padding="15px">Journal rankings are directly added to Google Search results</div>
</div>

<div style="margin: 5px; border: 1px solid #ccc; float: left; width: 20%;">
  <a target="_blank" href="./img/SJR_and_CCF.png">
    <img src="./img/SJR_and_CCF.png" alt="SJR_and_CCF" width="100%" height="auto"
    onmouseover= "this.style.width='200%';this.style.height='auto';this.style.zIndex='10';this.style.position='relative';" 
    onmouseout="this.style.width='100%';this.style.height='auto';this.style.zIndex='1';this.style.position='relative';">
  </a>
  <div class="desc" padding="15px">Rankings currently include SJR, VHB, and CCF. Please check the links above for more information on each ranking. The colors also indicate quality from green (higher quality) to red (lower quality).</div>
</div>

<div style="margin: 5px; border: 1px solid #ccc; float: left; width: 20%;">
  <a target="_blank" href="./img/SJR_VHB_with mouseover.png">
    <img src="./img/SJR_VHB_with mouseover.png" alt="SJR_VHB_with mouseover" width="100%" height="auto"
    onmouseover= "this.style.width='200%';this.style.height='auto';this.style.zIndex='10';this.style.position='relative';" 
    onmouseout="this.style.width='100%';this.style.height='auto';this.style.zIndex='1';this.style.position='relative';">
  </a>
  <div class="desc" padding="15px">Hovering with your cursor over the ranking scores gives you additional information such as the journals h-index and the name of the journal that was identified based on the input from Google Scholar.</div>
</div>

<div style="margin: 5px; border: 1px solid #ccc; float: left; width: 20%;">
  <a target="_blank" href="./img/doi_link.png">
    <img src="./img/doi_link.png" alt="doi_link" width="100%" height="auto"
    onmouseover= "this.style.width='200%';this.style.height='auto';this.style.zIndex='10';this.style.position='relative';" 
    onmouseout="this.style.width='100%';this.style.height='auto';this.style.zIndex='1';this.style.position='relative';">
  </a>
  <div class="desc" padding="15px">Clicking on the ranking scores takes you to the identified work via its DOI. This along with the identified journal name helps you to check, whether indeed the correct journal was identified based on the Google Scholar input.</div>
</div>

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
