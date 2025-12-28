const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const music = document.getElementById('bgMusic');

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1454890954770088020/sb3j4S_ZnF5siXaTIJ0PDTdoTPIoWuXfi8IzfZicXqE1LVqyXrld4ggr2brhFz1kdvbj"; // Burayı doldurmayı unutma!

function sendToDiscord(mesaj) {
    // Webhook linkini kontrol et
    if(!DISCORD_WEBHOOK.startsWith("https")) {
        console.log("Webhook linki geçersiz!");
        return;
    }

    fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: mesaj,
            username: "Aşk Botu"
        })
    })
    .then(() => console.log("Discord'a gitti!"))
    .catch(err => console.error("Gönderilemedi:", err));
}

yesBtn.addEventListener('click', () => {
    document.getElementById('title').innerText = "Harika Bir Karar! ❤️";
    document.getElementById('text').innerHTML = "Bilişimci bir kalbi kazandım! Elifim.";
    
    // Müzik çalmayı dene
    music.play().catch(e => console.log("Müzik hatası:", e));
    
    confetti({ particleCount: 200, spread: 100 });
    sendToDiscord("🚀 ELİFİM EVET DEDİ! 🎉❤️");
});

noBtn.addEventListener('click', () => {
    document.getElementById('title').innerText = "Canın Sağolsun...";
    sendToDiscord("❌ Elifim hayır dedi... 💔");
});
