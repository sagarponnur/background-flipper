// Get DOM elements
const clickmeBtn = document.getElementById('clickme');
const h2Ele = document.getElementById('bgh2');

// Define an array of colors
const colors = ['green', 'yellow', 'pink', 'orange', 'blue', 'grey'];

// Function to generate a random color
function getRandomColor() {
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

// Function to set the background color and display a message
function setBackgroundColor() {
    const color = getRandomColor();

    //Capitalized first character of the color
    const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1);    
    const message = `Background Color: ${capitalizedColor}`;

    h2Ele.style.display = 'block';
    h2Ele.textContent = message;
    document.body.style.backgroundColor = color; 
}

// Add a click event listener
clickmeBtn.addEventListener('click', setBackgroundColor);