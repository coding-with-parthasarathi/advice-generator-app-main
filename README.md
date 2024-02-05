# Advice generator app

This is a solution to the [Advice Generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on the device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot
#### Desktop view
![Desktop GIF](Desktop_GIF.gif)
#### Mobile view
<img src="Mobile_GIF.gif" alt="Mobile GIF" width="375px" height="626px">

### Links

- Solution URL: [My Solution](https://www.frontendmentor.io/solutions/advice-generator-app-using-javascript-and-advice-slip-json-api-EfL3dkjsfv)
- Live Site URL: [Advice Generator App](https://coding-with-parthasarathi.github.io/advice-generator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flex
- Mobile-first workflow
- Google Fonts
- Responsive web design
- JavaScript interactivity
- JavaScript selectors
- Event Handling
- Fetch API
- [Advice Slip JSON API](https://api.adviceslip.com/#messages)
- setTimeout() function

### What I learned
Besides implementing HTML and CSS in web development, JavaScript greatly enhances this process in terms of <i>interactivity</i> and <i>responsive web design</i> which in turn makes it more user-friendly.

Some of the cool stuff I learned in JavaScript are <i>Event Handling, fetching API URLs</i> and <i>typing animation using setTimeout() function.</i>
```html
 <button id="btn" onclick="console.clear()"><img id="dice" src=images\icon-dice.svg></button>
```
```js
document.getElementById("btn").addEventListener("click",advice);
//Event Handling using JavaScript
function advice()
{ 
    document.getElementById('advice').innerHTML="";//selector
    fetch('https://api.adviceslip.com/advice')//Fetch API
    .then(response=>response.json())
    .then(data=>{
    console.log(data);
    var i = 0;
    var txt = JSON.stringify(data.slip.advice);//JSON object to string conversion
    var speed = 50;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById('advice').innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);//typing animation
        }
    }
    typeWriter();
    document.getElementById('n').innerHTML="#"+data.slip.id;})
}
```
### Continued development

The problem with this app is that it often generates the same advice on clicking the dice button multiple times. It may seem that the app is not functioning properly but it is just a bug. It can be resolved by doing more research on this issue. I would prefer to move on to some other projects rather than fixing this issue in the meantime.

**You are free to open a new issue and make a pull request suggesting the necessary changes.**

### Useful resources

- [w3schools](https://www.w3schools.com/) - This helped me understand various properties and features of HTML, CSS and JavaScript that are used in this project.
- [StackOverflow](https://stackoverflow.com/) - Another awesome website to fix issues related to web development minutely.
- [Advice Slip JSON API](https://api.adviceslip.com/#messages) - An API that generates some random advice.
- [Kapwing](https://www.kapwing.com/tools/record/screen-to-gif) - A nice website to screen record a GIF directly from your web browser.

## Author

- Github - [Parthasarathi Roy](https://github.com/coding-with-parthasarathi)
- Frontend Mentor - [@coding-with-parthasarathi](https://www.frontendmentor.io/profile/coding-with-parthasarathi)
- LinkedIn - [Parthasarathi Roy](https://www.linkedin.com/in/parthasarathi-roy-6bb87b20a/)