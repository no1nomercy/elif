const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const music = document.getElementById('bgMusic');
const heart = document.querySelector('.heart-bg');

// Discord Webhook Linkini Buraya Yapıştır!
const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1454890954770088020/sb3j4S_ZnF5siXaTIJ0PDTdoTPIoWuXfi8IzfZicXqE1LVqyXrld4ggr2brhFz1kdvbj";

function sendToDiscord(mesaj) {
    if(DISCORD_WEBHOOK.includes("https://discord.com/api/webhooks/1454890954770088020/sb3j4S_ZnF5siXaTIJ0PDTdoTPIoWuXfi8IzfZicXqE1LVqyXrld4ggr2brhFz1kdvbj")) return;
    
    fetch(DISCORD_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: mesaj })
    }).catch(err => console.log("Webhook hatası:", err));
}

// EVET BUTONUNA BASILDIĞINDA
yesBtn.addEventListener('click', () => {
    // 1. Ekranı Mutlulukla Doldur
    document.getElementById('title').innerText = "Harika Bir Karar! ❤️";
    document.getElementById('text').innerHTML = "Bilişimci bir kalbi kazandım! <br> Bu anı asla unutmayacağım Elifim.";
    
    // 2. Animasyonları Başlat
    heart.style.color = "#ff2e2e";
    heart.style.opacity = "1";
    heart.style.animation = "pulse 0.4s infinite";
    
    // 3. Müzik ve Konfeti
    music.play();
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    // 4. Discord'a Müjdeyi Gönder
    sendToDiscord("🚀 MÜJDE: Elifim EVET dedi! 🎉❤️");
    
    // Butonları gizle ki işlem tamamlanmış olsun
    document.querySelector('.buttons').style.display = 'none';
});

// HAYIR BUTONUNA BASILDIĞINDA
noBtn.addEventListener('click', () => {
    // 1. Üzgün Modu Aç
    document.getElementById('title').innerText = "Canın Sağolsun...";
    document.getElementById('text').innerHTML = "Kararına saygı duyuyorum Elifim... <br> Ama sistemim her zaman sana açık kalacak.";
    
    // 2. Animasyonları ve Müziği Kapat/Durdur (Veya sessizce kal)
    heart.style.opacity = "0.2";
    heart.style.animation = "none";
    music.pause(); // Eğer çalıyorsa durdur
    
    // 3. Discord'a Üzücü Haberi Gönder
    sendToDiscord("❌ Üzücü Haber: Elifim hayır dedi... 💔");

    // Butonları gizle
    document.querySelector('.buttons').style.display = 'none';
});
