# Projects related to DOM


## Project Link
[Click Here](https://stackblitz.com/edit/stackblitz-starters-2txfle4u?file=index.html)


# Solution Code

## project 1 Solution

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


## project 2 Solution

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


## project 3 Solution

```javascript

const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');
const dateElement = document.querySelector('#date');

function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;

  dateElement.textContent = now.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

updateClock();
setInterval(updateClock, 1000);


//------ Method 2 -----

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```


## project 4 Solution

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);
//console.log(randomNumber);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessNumbers = document.querySelector('.guesses');
const remainingAttempt = document.querySelector('.lastResult');
const messageDiv = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const userGuess = parseInt(userInput.value);
    //console.log(userGuess);
    validateGuess(userGuess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`Please enter a number more than 1`);
  } else if (guess > 100) {
    alert(`Please enter a less more than 100`);
  } else {
    prevGuess.push(guess);
    displayGuess(guess);

    if (numGuess > 10) {
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessNumbers.innerHTML += `${guess}, `;
  numGuess++;
  remainingAttempt.innerHTML = remainingAttempt.textContent - 1;
}

function displayMessage(message) {
  messageDiv.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h3 id="new-game">Start New Game</h3>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const btn = document.querySelector('#new-game');
  btn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessNumbers.innerHTML = '';
    remainingAttempt.innerHTML = 10;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    messageDiv.innerHTML = '';

    playGame = true;
  });
}


```