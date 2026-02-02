const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("msg");
const details = document.getElementById("details");

const noPhrases = [
  "buddy… be serious 😭",
  "ok but you’re literally the sweetest 🥺",
  "remember the UCLA dining hall swipe?? iconic. 💳✨",
  "you’re too smart for this decision to be wrong 😌",
  "I did NOT want to admit you’re funny… but you are 😭",
  "last chance… I’m begging respectfully 💘"
];

let noCount = 0;

function popConfetti() {
  const emojis = ["💖","💘","💝","💕","🍓","✨","🌸"];
  for (let i = 0; i < 70; i++) {
    const s = document.createElement("span");
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.position = "fixed";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = "-10px";
    s.style.fontSize = (14 + Math.random() * 20) + "px";
    s.style.transform = `translateY(0) rotate(${Math.random()*360}deg)`;
    s.style.transition = "transform 1.4s ease, opacity 1.4s ease";
    s.style.zIndex = 9999;
    document.body.appendChild(s);

    requestAnimationFrame(() => {
      s.style.transform = `translateY(${110 + Math.random() * 60}vh) rotate(${Math.random()*720}deg)`;
      s.style.opacity = "0";
    });

    setTimeout(() => s.remove(), 1500);
  }
}

yesBtn.addEventListener("click", () => {
  msg.textContent = "YAYYYY 😭💖 okay my buddy… you’re my Valentine now.";
  popConfetti();
  details.hidden = false;

  noBtn.disabled = true;
  noBtn.style.transform = "none";
  yesBtn.textContent = "YES (locked in) 💍";
});

noBtn.addEventListener("mouseenter", () => {
  if (noBtn.disabled) return;
  const maxX = 240, maxY = 140;
  const x = (Math.random() * 2 - 1) * maxX;
  const y = (Math.random() * 2 - 1) * maxY;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  noCount++;
  msg.textContent = noPhrases[Math.min(noCount - 1, noPhrases.length - 1)];

  // make YES button grow slightly each "no"
  const scale = 1 + Math.min(noCount * 0.08, 0.65);
  yesBtn.style.transform = `scale(${scale})`;
});
