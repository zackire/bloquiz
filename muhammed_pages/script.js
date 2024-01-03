document.getElementById('submit-btn').addEventListener('click', function() {
    var scores = {
        'Skyrim': 0,
        'RedDead': 0,
        'Cyberpunk': 0,
        'Stanley': 0
    };

    for (var i = 1; i <= 10; i++) {
        var radios = document.getElementsByName('q' + i);
        for (var radio of radios) {
            if (radio.checked) {
                scores[radio.value]++;
                break;
            }
        }
    }

    var recommendedGame = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    var gameNames = {
        'Skyrim': 'The Elder Scrolls V: Skyrim',
        'RedDead': 'Red Dead Redemption 2',
        'Cyberpunk': 'Cyberpunk 2077',
        'Stanley': 'The Stanley Parable'
    };

    var gameImages = {
        'Skyrim': 'https://steamcdn-a.akamaihd.net/steam/apps/489830/header.jpg',
        'RedDead': 'https://steamcdn-a.akamaihd.net/steam/apps/1174180/header.jpg',
        'Cyberpunk': 'https://steamcdn-a.akamaihd.net/steam/apps/1091500/header.jpg',
        'Stanley': 'https://steamcdn-a.akamaihd.net/steam/apps/221910/header.jpg'
    };

    var gameLinks = {
        'Skyrim': 'https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/',
        'RedDead': 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/',
        'Cyberpunk': 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
        'Stanley': 'https://store.steampowered.com/app/221910/The_Stanley_Parable/'
    };

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Based on your choices, we recommend: ${gameNames[recommendedGame]}</p>
        <a href="${gameLinks[recommendedGame]}" target="_blank">
            <img src="${gameImages[recommendedGame]}" alt="${gameNames[recommendedGame]}" style="width:100%; max-width:600px;">
        </a>
        <p><a href="${gameLinks[recommendedGame]}" target="_blank">You can visit the game from here</a></p>
    `;
});

