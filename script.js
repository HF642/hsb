
let isClicked = false;

const buttonElement = document.getElementById('click-me');

function buttonClicked() { 
    if (isClicked === true) {
        buttonElement.classList.remove('btn-clicked');
        isClicked = false;
    } 
    else {
        buttonElement.classList.add('btn-clicked');
        isClicked = true;
    }
}

buttonElement.addEventListener('click', buttonClicked);