# Projects related to DOM


## Project Link
[Click Here](https://stackblitz.com/edit/stackblitz-starters-brb2uxof?description=HTML/CSS/JS%20Starter&file=01-colorChanger%2Fstyle.css,01-colorChanger%2Findex.html,01-colorChanger%2Fcolor-changer.js&terminalHeight=10&title=Static%20Starter)


# Solution Code

## project 1

```javascript
consol.log("test")

const buttons = document.querySelectorAll('.color-btn');
const body = document.querySelector('body');
const colorText = document.getElementById('color-name');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    //alert(e.currentTarget.getAttribute('data-color'));
    const color = e.currentTarget.getAttribute('data-color');
    body.style.backgroundColor = color;

    colorText.textContent = `Current color: ${e.currentTarget.textContent}`;
  });
});
