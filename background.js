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