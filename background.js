chrome.runtime.onInstalled.addListener(function(details){
    
  if( (details.reason == "install") || (details.reason === 'update' && details.previousVersion < '4.0.0') ) {
         
    chrome.storage.sync.set({
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
   
  }
   
});