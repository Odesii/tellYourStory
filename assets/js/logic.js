const switchMode = document.querySelector(`#dark`);
const theme = document.body;


let mode = `light`;
// looks for button click and changes the theme to dark or light
switchMode.addEventListener(`click`, function(event){ 
    event.preventDefault();

// if light mode is on, it will change to dark mode
// and set class to dark-color in 'body' element\
// and set local storage to dark
    if (mode === 'light') {
        mode = 'dark';
        theme.setAttribute('class', 'dark-color');
        localStorage.setItem('mode', 'dark');
    }
    
    else {
        mode = 'light';
        theme.setAttribute('class', ``);
        localStorage.setItem('mode', 'light');
    }

});
// reads local storage and sets the theme to dark if it is dark
// keeps theme consistent when user navigates to different pages
document.addEventListener('DOMContentLoaded', function(){
    const getTheme = localStorage.getItem('mode');

    if (getTheme === 'dark'){
        theme.setAttribute('class', 'dark-color');
    }
    else {
        theme.setAttribute('class', ``);
}
});