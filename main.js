document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const alertContainer = document.getElementById('alertContainer');

  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      // 1. Mencegah form melakukan submit / reload halaman
      e.preventDefault();

      // Ambil nilai dari input
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Pattern RegEx untuk memeriksa keabsahan format email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Bersihkan alert terdahulu
      alertContainer.innerHTML = '';

      // 2. Validasi: Email/Password tidak boleh kosong
      if (email === '' || password === '') {
        showAlert('Email/Username dan Password tidak boleh kosong!', 'danger');
        return;
      }

      // 3. Validasi: Format email harus sesuai
      if (!emailPattern.test(email)) {
        showAlert('Format email tidak valid! (Contoh: nama@domain.com)', 'danger');
        return;
      }

      // 4. Validasi: Password minimal 6 karakter
      if (password.length < 6) {
        showAlert('Password harus memiliki panjang minimal 6 karakter!', 'danger');
        return;
      }

      // 5. Jika semua validasi lolos / sukses
      showAlert('Login Berhasil! Mengalihkan Anda ke Halaman Beranda...', 'success');

      // Simulasi berpindah ke Beranda setelah 1.5 detik
      setTimeout(function () {
        window.location.href = 'index.html';
      }, 1500);
    });
  }

  // Fungsi penolong untuk membuat komponen Alert Bootstrap
  function showAlert(message, type) {
    const alertHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
    alertContainer.innerHTML = alertHTML;
  }
});