const backButton = document.querySelector("#back");
const switchMode = document.querySelector(`#dark`);
const theme = document.body;

backButton.addEventListener(`click`, function (event) {
    event.preventDefault();
    location.href = `/index.html`;
});

function getStory(){
    const getInfo = JSON.parse(localStorage.getItem(`user`));

    if (getInfo !== null){
        document.querySelector('#handel').setAttribute('data-title', getInfo.h4nD31);
        document.querySelector(`#title`).innerHTML = ('->' + getInfo.t1t13 + '<-');
        document.querySelector(`#story`).innerHTML = getInfo.S7orY;
    }
}

document.addEventListener('mousemove', getStory);
document.addEventListener('DOMContentLoaded', function(){
    const getTheme = localStorage.getItem('mode');

    if (getTheme === 'dark'){
        theme.setAttribute('class', 'dark-color');
    }
    else {
        theme.setAttribute('class', ``);
}
});


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
