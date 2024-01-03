<!-- Buttons -->
<button id="skyrimButton">Play Skyrim</button>
<button id="rdr2Button">Play Red Dead Redemption 2</button>
<button id="cyberpunkButton">Play Cyberpunk 2077</button>
<button id="stanleyButton">Play The Stanley Parable</button>

<!-- JavaScript -->
<script>
    // Redirect to game pages
    document.getElementById('skyrimButton').onclick = function() {
        window.location.href = 'https://store.steampowered.com/app/72850/The_Elder_Scrolls_V_Skyrim/';
    };
    document.getElementById('rdr2Button').onclick = function() {
        window.location.href = 'https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/';
    };
    document.getElementById('cyberpunkButton').onclick = function() {
        window.location.href = 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/';
    };
    document.getElementById('stanleyButton').onclick = function() {
        window.location.href = 'https://store.steampowered.com/app/221910/The_Stanley_Parable/';
    };
</script>
