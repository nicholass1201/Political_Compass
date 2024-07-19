document.addEventListener("DOMContentLoaded", () => {
    const compass = document.getElementById("compass");
    const goBackButton = document.getElementById("go-back");
    const images = {
        'Austin': 'austin.png',
        'Nick': 'nick.png',
        'Ethan': 'ethan.png',
        'Caleb': 'caleb.png',
        'Javon': 'javon.png',
        'Shreyash': 'shreyash.jpg',
        'James': 'james.png'
    };
    const players = ['Austin', 'Nick', 'Ethan', 'Caleb', 'Javon', 'Shreyash', 'James'];
    let playerIndex = 0;
    const markers = [];

    const currentPlayerElement = document.getElementById("current-player");
    currentPlayerElement.textContent = players[playerIndex];
    goBackButton.disabled = playerIndex === 0;

    compass.addEventListener("click", (event) => {
        // Check if the click was on a label
        if (event.target.classList.contains('label')) return;

        if (playerIndex >= players.length) return;

        const rect = compass.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const marker = document.createElement("img");
        marker.src = images[players[playerIndex]];
        marker.className = 'marker';
        marker.style.left = `${x}px`;
        marker.style.top = `${y}px`;

        compass.appendChild(marker);
        markers.push(marker);

        playerIndex++;
        currentPlayerElement.textContent = players[playerIndex] || "Completely Unbiased And Based";
        goBackButton.disabled = playerIndex === 0 || playerIndex > players.length;
    });

    goBackButton.addEventListener("click", () => {
        if (markers.length === 0 || playerIndex === 0) return;

        const lastMarker = markers.pop();
        lastMarker.remove();

        playerIndex--;
        currentPlayerElement.textContent = players[playerIndex];
        goBackButton.disabled = playerIndex === 0;
    });

    const labels = document.querySelectorAll('.label');
    labels.forEach(label => {
        label.addEventListener('click', (event) => {
            event.stopPropagation();
            const newText = prompt('Enter new text:', label.textContent);
            if (newText !== null) {
                label.textContent = newText;
            }
        });
    });
});
