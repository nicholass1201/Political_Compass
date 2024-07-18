document.addEventListener("DOMContentLoaded", () => {
    const compass = document.getElementById("compass");
    const images = [
        'austin.png',
        'nick.png',
        'ethan.png',
        'caleb.png',
        'javon.png',
        'shreyash.jpg',
        'james.png',
    ];
    const players = ['Austin', 'Nick', 'Ethan', 'Caleb', 'Javon', 'Shreyash', 'James'];
    let imageIndex = 0;
    let playerIndex = 0;

    const currentPlayerElement = document.getElementById("current-player");
    currentPlayerElement.textContent = players[playerIndex];

    compass.addEventListener("click", (event) => {
        const rect = compass.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const marker = document.createElement("img");
        marker.src = images[imageIndex];
        marker.className = 'marker';
        marker.style.left = `${x}px`;
        marker.style.top = `${y}px`;

        compass.appendChild(marker);

        imageIndex = (imageIndex + 1) % images.length;
        playerIndex = (playerIndex + 1) % players.length;
        currentPlayerElement.textContent = players[playerIndex];
    });
});
