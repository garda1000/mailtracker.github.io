function showLoader(event, url) {
    if (event) event.preventDefault();
    document.getElementById('spinner').style.display = 'block';

    setTimeout(() => {
        window.location.href = url;
    }, 2000);
}

function showPasswordModal() {
    document.getElementById('passwordModal').style.display = 'flex';
    document.getElementById('errorMsg').textContent = ""; // Reset pesan error
}

function closePasswordModal() {
    document.getElementById('passwordModal').style.display = 'none';
}

function validatePassword() {
    const password = document.getElementById('passwordInput').value;
    const correctPassword = "disperindag123";

    if (password === correctPassword) {
        closePasswordModal();
        showLoader(null, "CRUD-Data.html");
    } else {
        document.getElementById('errorMsg').textContent = "❌ Password salah. Coba lagi!";
    }
}