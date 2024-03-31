const backButton = document.querySelector("#back");

backButton.addEventListener(`click`, function (event) {
    event.preventDefault();
    location.href = `/index.html`;
});

function getStory(){
    const getInfo = JSON.parse(localStorage.getItem(`user`));

    if (getInfo !== null){
        document.querySelector(`#handel`).innerHTML = getInfo.t1t13;
        document.querySelector('#title').setAttribute('data-title', getInfo.h4nD31);
        document.querySelector(`#story`).innerHTML = getInfo.S7orY;
    }
}

document.addEventListener('DOMContentLoaded', getStory);
