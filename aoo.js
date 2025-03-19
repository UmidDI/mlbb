// Modal elementlarini olish
const modal = document.getElementById("game-modal");
const gameTitle = document.getElementById("game-title");
const gameInfo = document.getElementById("game-info");
const playGame = document.getElementById("play-game");
const closeModal = document.querySelector(".close");

// O'yinlar haqida malumotlar
const games = {
    "mobile-legends": {
        title: "Mobile Legends",
        info: "1. 5v5 real vaqtli janglar<br>2. Turli qahramonlar va skillar<br>3. Esports musobaqalari<br>4. Global reyting tizimi<br>5. To'liq MOBA tajribasi<br>6. Mobil platformaga moslangan<br>7. Oson boshqaruv tizimi<br>8. Do‘stlar bilan o‘ynash mumkin<br>9. Battle Pass tizimi<br>10. Skin va kosmetikalar<br>11. Klan va jamoa tizimi<br>12. Har oy yangi qahramonlar<br>13. Xaritani yodlash strategiyasi<br>14. O'yinchilar o'rtasida musobaqalar<br>15. AI botlarga qarshi mashg'ulot<br>16. Tezkor jang rejimi<br>17. G'alaba uchun puxta strategiya<br>18. Rolga asoslangan o'yin uslubi<br>19. Jonli eshittirish imkoniyati<br>20. Dunyo bo'ylab o'yinchilar bilan o'ynash",
        link: "https://m.mobilelegends.com"
    },
    "pubg": {
        title: "PUBG",
        info: "1. 100 kishi bilan Battle Royale<br>2. Haqiqiy qurollar va transport<br>3. Erkin xarita va joylashuvlar<br>4. Jonli ovozli chat tizimi<br>5. Survival va taktik harakatlar...",
        link: "https://pubg.com"
    },
    "free-fire": {
        title: "Free Fire",
        info: "1. 50 kishilik tezkor janglar<br>2. Unikal personaj tizimi<br>3. Har bir match 10 daqiqa davom etadi...",
        link: "https://ff.garena.com"
    }
};

// Tugmalar bosilganda modal ochish
document.querySelectorAll(".read-more").forEach(button => {
    button.addEventListener("click", () => {
        let game = button.getAttribute("data-game");
        gameTitle.innerHTML = games[game].title;
        gameInfo.innerHTML = games[game].info;
        playGame.href = games[game].link;
        modal.style.display = "flex";
    });
});

// Modalni yopish
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Modalni tashqaridan bosganda yopish
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
<li><a href="#payments">To‘lovlar</a></li>
