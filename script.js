window.addEventListener("scroll", function() {
    let gununganLeft = document.getElementById("gununganLeft");
    let gununganRight = document.getElementById("gununganRight");
    if (window.scrollY > 50) {
        gununganLeft.style.transform = "translateX(-340%) rotate(30deg)";
        gununganRight.style.transform = "translateX(340%) rotate(-30deg)";
    } else {
        gununganLeft.style.transform = "translateX(-30%) rotate(-30deg)";
        gununganRight.style.transform = "translateX(30%) rotate(30deg)";
    }
});

let buttonListAlat = ["Balungan", "Gong - Kempul", "Kenong", "Bonang Barung", "Bonang Panerus", "Gambang", "Kendang"];
let buttonsContainerAlat = document.getElementById("buttonsMacamAlat");

buttonListAlat.forEach(name => {
    let button = document.createElement("a");
    button.textContent = name;
    button.className = "button";
    button.href = `/LetYouKnowKarawitan/Screens/${name.toLowerCase().replace(/ /g, "-")}.html`;
    buttonsContainerAlat.appendChild(button);
});

let buttonListNotasi = ["Gugur Gunung", "Kebo Giro", "Serayu", "Bubaran Udan Mas", "Ldr. Ayun-Ayun"];
let buttonsContainerNotasi = document.getElementById("buttonsNotasi");

buttonListNotasi.forEach(name => {
    let button = document.createElement("a");
    button.textContent = name;
    button.className = "button";
    button.href = `/LetYouKnowKarawitan/Screens/${name.toLowerCase().replace(/ /g, "-")}.html`;
    buttonsContainerNotasi.appendChild(button);
});





