const button = document.getElementById('button');

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

button.addEventListener('click', verifyData);
