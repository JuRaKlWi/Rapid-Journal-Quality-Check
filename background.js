/*chrome.runtime.onInstalled.addListener(({ }) => {
    chrome.storage.local.set({
    ext_on: true,
    SJR: true,
    VHB: false,
    FNEGE: false,
    CoNRS: false,
    HCERE: false,
    CORE: true,
    CCF: false,
    DAEN: false,
    AJG: false,
    ABDC: true,
    FT50: true,
    turbo: true
  });
});    */

chrome.runtime.onInstalled.addListener(function(details){
    
    chrome.storage.local.set({
        ext_on: true,
        SJR: true,
        VHB: false,
        FNEGE: false,
        CoNRS: false,
        HCERE: false,
        CORE: true,
        CCF: false,
        DAEN: false,
        AJG: false,
        ABDC: true,
        FT50: true,
        turbo: true
    });
     
    chrome.runtime.openOptionsPage();
   
});    

/* 
const installListener = (details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    //runSettingApp();
    alert("install");
  }

  if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
    //runSettingApp();
    alert("update");
  }
};
chrome.runtime.onInstalled.addListener(installListener);
*/