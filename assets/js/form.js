const handel = document.querySelector(`#handel`)
const title =  document.querySelector(`#title`)
const  blog = document.querySelector(`#blog`)
const submitBttn = document.querySelector(`#submit`)

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

