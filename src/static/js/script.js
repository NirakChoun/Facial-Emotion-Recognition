function updateEmotionAndName() {
    fetch('/get_emotion')
    .then(response => response.json())
    .then(data => {
        document.getElementById('emotion-text').innerText = data.emotion;
        document.getElementById('person-text').innerText = data.name || "Unknown";
    })
    .catch(error => console.error('Error fetching emotion and name:', error));
}

// Update emotion and name every second
setInterval(updateEmotionAndName, 1000);


