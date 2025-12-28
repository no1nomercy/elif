const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const music = document.getElementById('bgMusic');
const heart = document.querySelector('.heart-bg');

// Discord Webhook Linkini Buraya Yapıştır!
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1454890954770088020/sb3j4S_ZnF5siXaTIJ0PDTdoTPIoWuXfi8IzfZicXqE1LVqyXrld4ggr2brhFz1kdvbj";

function sendToDiscord(mesaj) {
    if(DISCORD_WEBHOOK === "https://discord.com/api/webhooks/1454890954770088020/sb3j4S_ZnF5siXaTIJ0PDTdoTPIoWuXfi8IzfZicXqE1LVqyXrld4ggr2brhFz1kdvbj") return;
    fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: mesaj })
    });
}

// Evet'e basınca olacaklar
yesBtn.addEventListener('click', () => {
    // 1. Yazıları değiştir
    document.getElementById('title').innerText = "Oleyy! ❤️";
    document.getElementById('text').innerHTML = "Bilişimci bir kalbi kazandım! <br> Harika bir gün olacak Elifim.";
    
    // 2. Animasyonu coştur
    heart.style.color = "red";
    heart.style.opacity = "1";
    heart.style.animation = "pulse 0.5s infinite";
    
    // 3. Müzik ve Konfeti
    music.play();
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });

    // 4. Discord'a haber ver
    sendToDiscord("🚀 MÜJDE: Elifim EVET dedi! 🎉❤️");
    
    noBtn.style.display = 'none';
});

// Hayır'a bir şekilde basarsa (Mobilde mesela)
noBtn.addEventListener('click', () => {
    sendToDiscord("❌ Üzücü Haber: Elifim hayıra bastı... 💔");
});
