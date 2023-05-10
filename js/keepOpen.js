var popupWindow = window.open(
    chrome.runtime.getURL("normal_popup.html"),
    "popup",
    "width=100,height=100"
);
window.close(); // close the Chrome extension pop-up