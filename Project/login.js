document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (userInfo && email === userInfo.email && password === userInfo.password) {
        document.getElementById("message").textContent = "Đăng nhập thành công 🤑🤯🤗";
        window.location.href = "manga.html";
    } else {
        document.getElementById("message").textContent = "Email hoặc mật khẩu không đúng 😒🤨🤔😨";
    }
});