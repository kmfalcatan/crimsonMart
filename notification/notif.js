const popup = document.querySelector('.setMeetUpContainer1');
const toggleElements = document.querySelectorAll('.setTimeLocationBtn');
const close = document.querySelector('.backBtn');

function show(event) {
    event.preventDefault();
    popup.style.display = 'block';
}

function closePage() {
    popup.style.display = 'none';
}

toggleElements.forEach(function (toggleElement) {
    toggleElement.addEventListener('click', show);
});

close.addEventListener('click', closePage);

document.addEventListener("DOMContentLoaded", function () {
    const goBackButton = document.querySelector(".backBtn");

    goBackButton.addEventListener("click", function () {
        // Use JavaScript to navigate back in history without relying on the browser's default behavior
        history.go(-1);
    });
});
