function updateUrls() {
    if (document.location.pathname === '/playlist') {
        console.log('%c youtube-playlist: start updating', 'color: green;');

        const listName = new URLSearchParams(document.location.search).get('list');

        [...document.querySelectorAll('ytd-playlist-video-list-renderer a#thumbnail')].map((item) => {
            item.href = item.href.split(`list=${listName}`)[0];
        });

        console.log('%c youtube-playlist: finish updating', 'color: green;');
    }
}

window.onload = () => {
    updateUrls();

    const intervalID = setInterval(() => updateUrls(), 10000);

    console.log(`%c youtube-playlist: intervalID = ${intervalID}`, 'color: green;');
};
