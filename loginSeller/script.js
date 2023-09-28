const inputElements = document.querySelectorAll('.inputElement');

// Function to add a class to a paragraph when an input is clicked
function addClassToParagraph(event) {
    const clickedInput = event.target; // The input element that was clicked
    const paragraph = clickedInput.previousElementSibling;
    paragraph.classList.add('highlight');
}

// Add a click event listener to each input element
inputElements.forEach(function(input) {
    input.addEventListener('click', addClassToParagraph);
});

document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.querySelector('.identifyPass');
    const submitButton = document.querySelector(".btnLogIn");

    function handleLogin() {
        const password = passwordInput.value;
        const username = document.querySelector('.identifyUser').value;

        if (password === 'kmfalcatan' && username === 'km') {
            window.location.href = '/HomePage/index.html';
        } else {
            alert('Wrong username or password');
            document.querySelector('.identifyUser').value = '';
            document.querySelector('.identifyPass').value = '';
        }
    }

    passwordInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            event.preventDefault(); 
            handleLogin(); 
        }
    });

    submitButton.addEventListener("click", function () {
        event.preventDefault();
        handleLogin(); 
    });
});
