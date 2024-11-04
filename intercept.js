alert("intercept.js")
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if(details.method == "POST")
            console.log(JSON.stringify(details));
    },
    {urls: ["<all_urls>"]},
    ["requestBody"]
);