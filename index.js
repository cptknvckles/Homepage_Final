
var clockEl = document.getElementById('clock-container')
var dateEl = document.getElementById('date')
const linkContainer = document.getElementById("linkContainer");
const addButton = document.getElementById("addLink");
const linkForm = document.getElementById("linkForm");
const urlInput = document.getElementById("urlInput");
const textInput = document.getElementById("textInput");
const saveButton = document.getElementById("saveLink");

// Load saved links from localStorage
const savedLinks = JSON.parse(localStorage.getItem("customLinks")) || [];

// Function to render saved links
function renderSavedLinks() {
    savedLinks.forEach(linkData => {
        const newLink = document.createElement("a");
        newLink.href = linkData.url;
        newLink.textContent = linkData.text;
        linkContainer.insertBefore(newLink, addButton);
    });
}

// Function to toggle the link form's visibility
function toggleLinkForm() {
    if (linkForm.style.display === "none") {
        linkForm.style.display = "block";
    } else {
        linkForm.style.display = "none";
    }
}

// Function to add a new custom link
function addCustomLink() {
    const linkURL = urlInput.value.trim();
    const linkText = textInput.value.trim();

    if (linkURL === "" || linkText === "") {
        alert("Both URL and Text fields must be filled.");
        return;
    }

    // Save the link data to localStorage
    const linkData = { url: linkURL, text: linkText };
    savedLinks.push(linkData);
    localStorage.setItem("customLinks", JSON.stringify(savedLinks));

    // Render the new link
    const newLink = document.createElement("a");
    newLink.href = linkURL;
    newLink.textContent = linkText;
    linkContainer.insertBefore(newLink, addButton);
    
    // Clear the form and hide it
    urlInput.value = "";
    textInput.value = "";
    toggleLinkForm();
}

// Add event listeners
addButton.addEventListener("click", toggleLinkForm);
saveButton.addEventListener("click", addCustomLink);

// Render saved links when the page loads
renderSavedLinks();


// Add event listeners
addButton.addEventListener("click", toggleLinkForm);
saveButton.addEventListener("click", addCustomLink);
//API key 24ea0be0a2ff4f5e899230624222606

let day;
    switch(new Date().getDay()){
        case 0:
            day = "Sunday";
            dateEl.style.color = '#fcc2ff'
            break;
        case 1:
            day = "Monday";
            dateEl.style.color = '#feffa3'
            break;
        case 2:
            day = "Tuesday";
            dateEl.style.color = '#dbdcff'
            break;
        case 3:
            day = "Wednesday";
            dateEl.style.color = '#d4ffea'
            break;
        case 4:
            day = "Thursday";
            dateEl.style.color = '#ffd4e5'
            break;
        case 5:
            day = "Friday";
            dateEl.style.color = '#eecbff'
            break;
        case  6:
            day = "Saturday";
            dateEl.style.color = '#ff69b4'
    }


dateEl.innerHTML = day
dateEl.style.fontFamily = 'Days'
dateEl.style.fontSize = '60px'

clockEl.innerHTML = showTime()

setInterval(showTime, 1000);

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let am_pm = "AM"; // Set it to "AM" initially
  
    if (hour >= 12) {
      am_pm = "PM"; // Change to "PM" for hours greater than or equal to 12
    }
  
    if (hour > 12) {
      hour -= 12;
    } else if (hour === 0) {
      hour = 12;
    }
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
  
    let currentTime = hour + ":" + min + " " + am_pm;
  
    clockEl.innerHTML = currentTime;
  }
  
  showTime();

  // Function to toggle the link form's visibility
