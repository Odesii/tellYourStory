const backButton = document.querySelector("#back");
let type = document.querySelector(`p`);
let storedInfo = null; // Used to store getInfo for access by textType


//sends user back to the form page
backButton.addEventListener(`click`, function (event) {
    location.href = `index.html`;
});

//gets the user input from local storage and displays it on the page
function getStory(){
    const getInfo = JSON.parse(localStorage.getItem(`user`));
//  if the user input is not null, it will display the user input on the page
// by changing the innerHTML of the elements and the data-title of an element
    if (getInfo !== null){
        document.querySelector('#handel').setAttribute('data-title', getInfo.h4nD31);
        document.querySelector(`#title`).innerHTML = ('->' + getInfo.t1t13 + '<-');
        // document.querySelector(`#story`).innerHTML = getInfo.S7orY;
        storedInfo = getInfo;
    }
}
//calls the function to get the user input and adds that to page when page loads 
document.addEventListener('DOMContentLoaded', function(){
    getStory();

// reads local storage and sets the theme to dark if it is dark
    const getTheme = localStorage.getItem('mode');
    theme.setAttribute('class', getTheme === `dark` ? `dark-color` : ``);

    if (storedInfo && storedInfo.S7orY){
        type = document.querySelector(`p`);
        textType(type, storedInfo.S7orY);
    }
});




// Simulates typing effect with a Blinking underscore 
// i = the current position in the text string that the function is typing out starting at 0
function textType(element, text, i = 0) {
    // Checks if the current position is less than the total length of the text
    // If so, there are still more characters to type out
    if (i < text.length) {
        // If this isn't the first character being typed (i > 0),
        // remove the last character from the element's text content.
        // This is because the last character is an '_' we added in .
        if (i > 0) {
            element.textContent = element.textContent.slice(0, -1);
        }
        // Adds the current character from the text string to the element's content
        // followed by an underscore
        element.textContent += text[i] + '_';
        // Uses setTimeout to wait before typing the next character
        // This makes the typing effect looks like real time typing
        setTimeout(() => textType(element, text, i + 1), 55);
    } else if (i === text.length) { 
        // Once all characters are typed out
        //  create a blinking cursor effect at the end of the text
        
        // for the toggle of the '_
        let showCursor = true;
        // Sets an interval to repeatedly run every 500 milliseconds.
        setInterval(() => {
            // If showCursor is true, add an underscore at the end of the text. If not, show the text without it.
            element.textContent = text + (showCursor ? '_' : '');
            // Toggle the showCursor  to the opposite 
            // if it was true, it becomes false, and vice versa
            showCursor = !showCursor;
        }, 500); // determines how fast the cursor blinks.
    }
}




