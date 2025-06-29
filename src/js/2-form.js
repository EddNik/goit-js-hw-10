import '../css/2-form.css';

const loginForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const textarea = loginForm.elements.message;
const input = loginForm.elements.email;

const inputEmail = input.name;
const textareaMessage = textarea.name;

let formData = {
  [inputEmail]: '',
  [textareaMessage]: '',
};

loginForm.addEventListener('input', event => {
  event.preventDefault();
  formData[inputEmail] = input.value;
  formData[textareaMessage] = textarea.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

const savedFormData = JSON.parse(localStorage.getItem(localStorageKey));

if (savedFormData) {
  formData = { ...savedFormData };
  input.value = formData[inputEmail];
  textarea.value = formData[textareaMessage];
}

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  if (formData[inputEmail] === '' || formData[textareaMessage] === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.clear();
    Object.keys(formData).forEach(key => (formData[key] = ''));
    loginForm.reset();
  }
});
