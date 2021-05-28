function updateUrls () {
    [...document.querySelectorAll('a#thumbnail')].map(item => {
        item.href = item.href.split('list=WL')[0]
    })
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: updateUrls
    })
})
