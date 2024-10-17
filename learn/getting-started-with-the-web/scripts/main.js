let myImage = document.querySelector('img');
let images = [
    'images/peach-01.png',
    'images/peach-02.png',
    'images/peach-03.png',
    'images/peach-04.png',
    'images/peach-05.png',
    'images/peach-06.png',
]

myImage.onclick = function () {
    let currentSrc = myImage.getAttribute('src');
    let newSrc;
    do {
        newSrc = images[Math.floor((Math.random() * images.length))];
    } while (currentSrc === newSrc);
    myImage.setAttribute('src', newSrc);
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Hello, ${myName}!`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName + '!';
}

myButton.onclick = function () {
    console.log('Click button');
    setUserName();
}