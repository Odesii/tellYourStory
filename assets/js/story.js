const backButton = document.querySelector("#back");
const switchMode = document.querySelector(`#dark`);
const theme = document.body;
//sends user back to the form page
backButton.addEventListener(`click`, function (event) {
    location.href = `/index.html`;
});
//gets the user input from local storage and displays it on the page
function getStory(){
    const getInfo = JSON.parse(localStorage.getItem(`user`));
//  if the user input is not null, it will display the user input on the page
// by changing the innerHTML of the elements and the data-title of an element
    if (getInfo !== null){
        document.querySelector('#handel').setAttribute('data-title', getInfo.h4nD31);
        document.querySelector(`#title`).innerHTML = ('->' + getInfo.t1t13 + '<-');
        document.querySelector(`#story`).innerHTML = getInfo.S7orY;
    }
}
//calls the function to get the user input and adds that to page when page loads 
document.addEventListener('DOMContentLoaded', getStory);
// reads local storage and sets the theme to dark if it is dark
document.addEventListener('DOMContentLoaded', function(){
    const getTheme = localStorage.getItem('mode');

    if (getTheme === 'dark'){
        theme.setAttribute('class', 'dark-color');
    }
    else {
        theme.setAttribute('class', ``);
}
});

// START OF DARK MODE
let mode = `light`;

switchMode.addEventListener(`click`, function(event){ 
    event.preventDefault();


    if (mode === 'light') {
        mode = 'dark';
        theme.setAttribute('class', 'dark-color');
    }
    
    else {
        mode = 'light';
        theme.setAttribute('class', ``);
    }

});
