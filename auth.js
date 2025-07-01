// Sign Up Logic
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
      username,
      email,
      password,
    };

    localStorage.setItem(email, JSON.stringify(user));
    alert("Account created! Please login.");
    window.location.href = 'login.html';
  });
}

// Login Logic
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      alert("Login successful!");
      window.location.href = 'index.html';
    } else {
      alert("Invalid email or password.");
    }
  });
}
