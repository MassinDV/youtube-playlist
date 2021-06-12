function updateUrls (listName) {
    console.log('start updating');

    [...document.querySelectorAll('a#thumbnail')].map(item => {
        item.href = item.href.split(`list=${listName}`)[0]
    })

    console.log('finish updating');
}

window.onload = function () {
    const listName = new URLSearchParams(window.location.search).get('list');

    setInterval(() => updateUrls(listName), 10000)
}
