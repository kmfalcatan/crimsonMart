document.addEventListener("DOMContentLoaded", function () {
    const goBackButton = document.querySelector(".backBtn");

    goBackButton.addEventListener("click", function () {
        // Use JavaScript to navigate back in history without relying on the browser's default behavior
        history.go(-1);
    });
});