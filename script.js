// Select the buttons
const aboutMeBtn = document.getElementById('aboutMeBtn');
const servicesBtn = document.getElementById('servicesBtn');
const contactBtn = document.getElementById('contactBtn');
const message = document.getElementById('message');

// Add click event listeners
aboutMeBtn.addEventListener('click', function() {
    window.location.href = "about me.html";
});

servicesBtn.addEventListener('click', function() {
    window.location.href = "service.html";
});

contactBtn.addEventListener('click', function() {
    window.location.href = "contacts.html";
});
