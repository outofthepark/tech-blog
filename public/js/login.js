function showLoginForm(){
  document.querySelector('.login-form').hidden = false;
  document.querySelector('.signup-form').hidden = true;
}

function showSignUpForm() {
  document.querySelector('.login-form').hidden = true;
  document.querySelector('.signup-form').hidden = false;
}

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    // check the response status
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}


document.querySelector('.show-login-button').addEventListener('click', showLoginForm);
document.querySelector('.show-signup-button').addEventListener('click', showSignUpForm);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);