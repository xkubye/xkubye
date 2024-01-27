function openLogin() {
  document.getElementById('loginContainer').style.display = 'flex';
}

function validateLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const notification = document.getElementById('notification');

  // Ganti dengan username dan password yang diinginkan
  const correctUsername = 'simmo';
  const correctPassword = 'simmo123';

  if (username === correctUsername && password === correctPassword) {
    showNotification('Login Successful');
    setTimeout(function () {
      window.location.href = 'index2.html'; // Ganti dengan URL halaman lain
    }, 2000);
  } else {
    showNotification('Your username or password is incorrect', true);
  }
}

function showNotification(message, isError = false) {
  const notification = document.getElementById('notification');
  notification.innerHTML = message;

  if (isError) {
    notification.style.backgroundColor = '#e74c3c'; // Warna untuk pemberitahuan error
  } else {
    notification.style.backgroundColor = '#3498db'; // Warna untuk pemberitahuan berhasil
  }

  notification.style.display = 'block';
  setTimeout(function () {
    notification.style.display = 'none';
  }, 2000);
}

function closeLogin() {
  document.getElementById('loginContainer').style.display = 'none';
}