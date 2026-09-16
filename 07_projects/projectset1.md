# Projects related to DOM


## Project Link
[Click Here](https://stackblitz.com/edit/stackblitz-starters-2txfle4u?file=index.html)


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


```


## project 2

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || isNaN(height) || height <= 0) {
    results.innerHTML = `Pleas enter a valid height ${height}`;
    return;
  }

  if (weight === '' || isNaN(weight) || weight <= 0) {
    results.innerHTML = `Pleas enter a valid weight ${weight}`;
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  let category = '';

  if (bmi < 18.6) {
    category = 'Under Weight';
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    category = 'Normal Range';
  } else if (bmi > 24.9) {
    category = 'OverWeight';
  }

  results.innerHTML = `
                  <p>Your BMI is : <span>${bmi}</span></p>
                  <p>Category : <strong>${category}</strong></p>  
                `;
});


```



## project 3

```javascript



```