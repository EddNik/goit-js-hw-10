import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const labels = document.querySelectorAll('label');
const formInputs = document.querySelectorAll('input');
const button = document.querySelector('button');

let delay = 0;

document.addEventListener('DOMContentLoaded', function () {
  labels.forEach(label => {
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    label.style.justifyContent = 'flex-start';
    label.style.gap = '8px';
  });

  labels[0].style.flexDirection = 'column';
  labels[0].style.marginBottom = '16px';
  labels[0].style.alignItems = 'flex-start';

  formInputs.forEach(formInput => {
    formInput.style.width = '100%';
    formInput.style.margin = '0';
  });

  button.style.backgroundColor = '#4e75ff';
  button.style.fontWeight = '500';
  button.style.fontSize = '16px';
  button.style.letterSpacing = '0.04em';
  button.style.color = '#fff';
  button.style.marginTop = '24px';
  button.style.width = '100%';
});

button.addEventListener('mouseenter', function () {
  this.style.backgroundColor = '#6c8cff';
});

button.addEventListener('mouseleave', function () {
  this.style.backgroundColor = '#4e75ff';
});

formInputs[0].addEventListener('mouseenter', function () {
  formInputs[0].classList.add();
});

formInputs[0].addEventListener('input', event => {
  const inputContent = event.target.value.trim();
  delay = +inputContent;
});

const makePromise = delay => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const selectedRadio = document.querySelector('input[name="state"]:checked');
      if (selectedRadio.value === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
};

console.log(delay);
button.addEventListener('click', event => {
  event.preventDefault();
  makePromise(delay)
    .then(fulfilledMessage =>
      iziToast.show({
        timeout: 3000,
        messageColor: 'white',
        message: fulfilledMessage,
        backgroundColor: '#59a10d',
        position: 'topRight',
        close: false,
        closeOnClick: true,
      })
    )
    .catch(rejectedMessage =>
      iziToast.show({
        timeout: 3000,
        messageColor: 'white',
        message: rejectedMessage,
        backgroundColor: '#F17676',
        position: 'topRight',
        close: false,
        closeOnClick: true,
      })
    );
});
