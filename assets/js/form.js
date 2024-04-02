const handel = document.querySelector(`#handel`)
const title =  document.querySelector(`#title`)
const blog = document.querySelector(`#blog`)
const submitBttn = document.querySelector(`#submit`)

// const switchMode = document.querySelector(`#dark`);
// const theme = document.body;

//  on clicking submit button, the user input is stored in local storage and take you to the  page
submitBttn.addEventListener('click', function(event) {
    event.preventDefault();
//  this is the object that will be stored in local storage
    const updatePage = {
        h4nD31: handel.value,
        t1t13: title.value,
        S7orY: blog.value,
    };
//  if the user does not input anything, an alert will pop up
    if(!updatePage.h4nD31 || !updatePage.t1t13 || !updatePage.S7orY) {
        alert('can you even triforce?');
        return;
    }
//  this is the key that will be used to store the object in local storage
    localStorage.setItem(`user`, JSON.stringify(updatePage));
    location.href = `./stories.html`;
});
// START OF DARK MODE


