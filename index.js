var clockEl = document.getElementById('clock-container');
var dateEl = document.getElementById('date');

const linkContainer = document.getElementById("linkContainer");
const addButton = document.getElementById("addLink");

// Modal elements
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const urlInput = document.getElementById("urlInput");
const textInput = document.getElementById("textInput");
const saveButton = document.getElementById("saveLink");
const closeModalButton = document.getElementById("closeModal");

// Load saved links
const savedLinks = JSON.parse(localStorage.getItem("customLinks")) || [];

// Render all saved links when page loads
function renderSavedLinks() {
    savedLinks.forEach(linkData => {
        createLinkElement(linkData.url, linkData.text);
    });
}

function createLinkElement(url, text) {
    const link = document.createElement("a");
    link.href = url;
    link.textContent = text;
    linkContainer.appendChild(link);
}

// Show modal
function openModal() {
    modal.style.display = "flex";
    urlInput.focus();
}

// Hide modal
function closeModal() {
    modal.style.display = "none";
    urlInput.value = "";
    textInput.value = "";
}

// Save new link
function addCustomLink() {
    const url = urlInput.value.trim();
    const text = textInput.value.trim();

    if (!url || !text) {
        alert("Both fields must be filled.");
        return;
    }

    const linkData = { url, text };
    savedLinks.push(linkData);
    localStorage.setItem("customLinks", JSON.stringify(savedLinks));

    createLinkElement(url, text);
    closeModal();
}

// Event listeners
addButton.addEventListener("click", openModal);
saveButton.addEventListener("click", addCustomLink);
closeModalButton.addEventListener("click", closeModal);

// Close modal when clicking outside content
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

// ESC key closes modal
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// Render saved links
renderSavedLinks();


// =====================
// CLOCK + DATE (unchanged)
// =====================

let day;
switch (new Date().getDay()) {
    case 0: day = "Sunday"; dateEl.style.color = '#fcc2ff'; break;
    case 1: day = "Monday"; dateEl.style.color = '#feffa3'; break;
    case 2: day = "Tuesday"; dateEl.style.color = '#dbdcff'; break;
    case 3: day = "Wednesday"; dateEl.style.color = '#d4ffea'; break;
    case 4: day = "Thursday"; dateEl.style.color = '#ffd4e5'; break;
    case 5: day = "Friday"; dateEl.style.color = '#eecbff'; break;
    case 6: day = "Saturday"; dateEl.style.color = '#ff69b4'; break;
}

dateEl.innerHTML = day;
dateEl.style.fontFamily = 'Days';
dateEl.style.fontSize = '60px';

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let am_pm = (hour >= 12) ? "PM" : "AM";

    if (hour > 12) hour -= 12;
    if (hour === 0) hour = 12;

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    clockEl.innerHTML = hour + ":" + min + " " + am_pm;
}

setInterval(showTime, 1000);
showTime();

