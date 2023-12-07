//chrome.tabs.executeScript(tabId, { file: "./script/injectable.js" });

var s = document.createElement("script");
s.src = chrome.runtime.getURL("/scripts/Injectable.js");
// see also "Dynamic values in the injected code" section in this answer
(document.head || document.documentElement).appendChild(s);
