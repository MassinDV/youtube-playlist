function updateUrls () {
    console.log('start updating');

    const listName = new URLSearchParams(window.location.search).get('list');

    [...document.querySelectorAll('a#thumbnail')].map(item => {
        item.href = item.href.split(`list=${listName}`)[0]
    })

    console.log('finish updating');
}

window.onload = function () {
    setInterval(() => updateUrls(), 10000)
}
