const button = document.getElementById('button');
const buttonSubmit = document.getElementById('submit-btn');
const checkboxAgreement = document.getElementById('agreement');
const counter = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const counterReturn = Number(counter.innerText);

function verifyData(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailUser = 'tryber@teste.com';
  const passwordUser = '123456';

  if (email === emailUser && password === passwordUser) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function verifyCheckbox() {
  if (checkboxAgreement.checked) {
    buttonSubmit.removeAttribute('disabled');
  } else {
    buttonSubmit.setAttribute('disabled', 'disabled');
  }
}

function handleTextarea() {
  const valueTextArea = Number(textArea.value.length);
  const returnCounter = counterReturn - valueTextArea;
  counter.innerText = returnCounter;
}

textArea.addEventListener('keyup', handleTextarea);
button.addEventListener('click', verifyData);
checkboxAgreement.addEventListener('change', verifyCheckbox);
