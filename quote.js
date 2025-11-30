// 🌤️ DAY + DATE
const footer = document.getElementById("footerText");

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();

const dayName = days[d.getDay()];
const date = d.toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "short",
  year: "numeric"
});

footer.innerText = `Daily Quote • ${dayName}, ${date}`;


// ⏰ LIVE TIME CLOCK
function updateTime() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let ampm = h >= 12 ? "PM" : "AM";

  h = h % 12 || 12;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.getElementById("liveTime").innerText = `${h}:${m}:${s} ${ampm}`;
}

setInterval(updateTime, 1000);
updateTime();


// 📝 FETCH QUOTE FROM GOOGLE APPS SCRIPT
const API_URL = "https://script.google.com/macros/s/AKfycbxRCDYS1oQgZFXYl-7BK4SYfIlIEaROarRn4ja2rBz_gIs2lzWHDDC_qxQYKEhyTWNG2Q/exec";  // REPLACE WITH YOUR URL

fetch(API_URL)
  .then(r => r.json())
  .then(data => {
    document.getElementById("quoteHeading").innerText = data.quote;
    document.getElementById("quoteDescription").innerText = data.description;
    document.getElementById("quoteAuthor").innerText = data.author;
  })
  .catch(() => {
    document.getElementById("quoteHeading").innerText = "Error loading quote!";
  });
