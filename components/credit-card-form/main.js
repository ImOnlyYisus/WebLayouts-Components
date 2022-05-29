const cardNumInput = document.querySelector('.card-number-input');
const cardNumBox = document.querySelector('.card-number-box');
const cardHolderInput = document.querySelector('.card-holder-input');
const cardHolderBox = document.querySelector('.card-holder-name')
const monthInput = document.querySelector('.month-input');
const expMonth = document.querySelector('.exp-month');
const yearInput = document.querySelector('.year-input');
const expYear = document.querySelector('.exp-year');
const cvvInput = document.querySelector('.cvv-input');

cardNumInput.oninput = () => {

    if (cardNumInput.value.length <= 4) {
        cardNumBox.innerText = cardNumInput.value;
    } else if (cardNumInput.value.length > 4 && cardNumInput.value.length <= 8) {
        cardNumBox.innerText = cardNumInput.value.substring(0, 4) + " " + cardNumInput.value.substring(4, 8);
    } else if (cardNumInput.value.length > 8 && cardNumInput.value.length <= 12) {
        cardNumBox.innerText = cardNumInput.value.substring(0, 4) + " " + cardNumInput.value.substring(4, 8) + " " + cardNumInput.value.substring(8, 12);
    } else {
        cardNumBox.innerText = cardNumInput.value.substring(0, 4) + " " + cardNumInput.value.substring(4, 8) + " " + cardNumInput.value.substring(8, 12) + " " + cardNumInput.value.substring(12, 16);
    }

}

cardHolderInput.oninput = () => {
    cardHolderBox.innerText = cardHolderInput.value;
}

monthInput.oninput = () => {
    expMonth.innerText = monthInput.value;
}

yearInput.oninput = () => {
    expYear.innerText = yearInput.value;
}

cvvInput.onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

cvvInput.onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

cvvInput.oninput = () => {
    document.querySelector('.cvv-box').innerText = cvvInput.value;
}