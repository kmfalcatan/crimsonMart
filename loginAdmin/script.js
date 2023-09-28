const inputElements = document.querySelectorAll('.inputElement');

function addClassToParagraph(event) {
    const clickedInput = event.target;
    const paragraph = clickedInput.previousElementSibling;
    paragraph.classList.add('highlight');
}

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


