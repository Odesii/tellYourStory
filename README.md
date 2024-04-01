# tellYourStory

## Description

    Need a place to post a story?
    Built a quick blog that will prompt you for a good story. 
    this blog will log your input and automatically post it on the main blog page. 
    The theme is based off of windows 95 and inspired by the movie HACKERS .


## Link
**Live Pages**

https://odesii.github.io/tellYourStory/

## Technologies 
### HTML
### CSS
### JS
**Code Snippet**

    Simulates typing effect with a Blinking underscore 
```
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


```

## Screen Shots 

**Input Page**

![Form Page](https://i.imgur.com/Ri65jWj.gif)

**Stories**

![Stories Page](https://i.imgur.com/NJ3Xn1E.gif)


## Contact 

**Git** 

https://github.com/Odesii

