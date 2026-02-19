function lastOpened() {
    const lastVisited = document.querySelector('#lastVisited');
    const lastDate = localStorage.getItem('lastVisit');
    const today = Date.now();

    let message = "";

    if (!lastDate) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const difference = today - parseInt(lastDate, 10);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        if (difference < 1000 * 60 * 60 * 24) {
            message = "Back so soon! Awesome!";
        } else if (days === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${days} days ago.`;
        }
    }

    lastVisited.textContent = message;
    localStorage.setItem("lastVisit", today);
}

document.addEventListener("DOMContentLoaded", lastOpened());