# Projects related to Dom

1 ) Project related to color changer

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
