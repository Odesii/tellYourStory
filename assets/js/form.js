const handel = document.querySelector(`#handel`)
const title =  document.querySelector(`#title`)
const blog = document.querySelector(`#blog`)
const submitBttn = document.querySelector(`#submit`)

const switchMode = document.querySelector(`#dark`);
const theme = document.body;

submitBttn.addEventListener('click', function(event) {
    event.preventDefault();

    const updatePage = {
        h4nD31: handel.value,
        t1t13: title.value,
        S7orY: blog.value,
    };
    if(!updatePage.h4nD31 || !updatePage.t1t13 || !updatePage.S7orY) {
        alert('can you even triforce?');
        return;
    }
    localStorage.setItem(`user`, JSON.stringify(updatePage));
    location.href = `./stories.html`;
});

let mode = `light`;

switchMode.addEventListener(`click`, function(event){ 
    event.preventDefault();


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


document.addEventListener('DOMContentLoaded', function(){
    const getTheme = localStorage.getItem('mode');

    if (getTheme === 'dark'){
        theme.setAttribute('class', 'dark-color');
    }
    else {
        theme.setAttribute('class', ``);
}
});

