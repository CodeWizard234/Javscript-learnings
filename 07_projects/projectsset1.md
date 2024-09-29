# Projects realated to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ucjwn1?file=index.html)


# Solution link


## project 1 

```javascript 
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    // Target the id of the clicked button
    const buttonId = e.target.id;

    switch (buttonId) {
      case 'grey':
        console.log('Button 1 clicked');
        body.style.backgroundColor = 'grey';
        break;
      case 'white':
        console.log('Button 2 clicked');
        body.style.backgroundColor = 'white';
        break;
      case 'blue':
        console.log('Button 3 clicked');
        body.style.backgroundColor = 'blue';
        break;
      case 'yellow':
        console.log('Button 3 clicked');
        body.style.backgroundColor = 'yellow';
        break;

      default:
        console.log('Another button clicked');
        body.style.backgroundColor = 'red';
    }
  });
});


```


## project solution 2 


```javascript 
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight == ' ' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    // show the result

    results.innerHTML = `<span>${bmi}</span>`;
    // Determine BMI category
    let category = '';

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }

    // Show the result with category
    results.innerHTML = `<span>Your BMI is ${bmi}, which is considered <strong>${category}</strong>.</span>`;
  }
});
```

## project solution 3 

```javascript 
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();

  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
