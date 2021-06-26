function updateUrls() {
    if (document.location.pathname === '/playlist') {
        console.log('start updating');

        const listName = new URLSearchParams(document.location.search).get('list');

        [...document.querySelectorAll('ytd-playlist-video-list-renderer a#thumbnail')].map((item) => {
            item.href = item.href.split(`list=${listName}`)[0];
        });

        console.log('finish updating');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => updateUrls(), 10000);
});
