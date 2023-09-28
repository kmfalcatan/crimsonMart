const inputElement = document.querySelectorAll('.inputUser');

function addclass(event) {
    const clickedInput = event.target;
    const paragraph = clickedInput.previousElementSibling;
    paragraph.classList.add('highlight');
}

inputElement.forEach(function(input){
    input.addEventListener('click', addclass);
});