chrome.runtime.onInstalled.addListener(({ }) => {
    chrome.storage.local.set({
    ext_on: true,
    SJR: true,
    VHB: false,
    FNEGE: false,
    CoNRS: false,
    HCERE: false,
    CORE: true,
    CCF: false,
    DAEN: true,
    AJG: true,
    ABDC: false,
    FT50: true,
    turbo: true
  });
});    