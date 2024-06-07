document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;

    if (fullName && email && password && gender) {

        var userInfo = {
            fullName: fullName,
            email: email,
            password: password,
            gender: gender
        };


        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        console.log("Họ và tên: " + fullName + ", Email: " + email + ", Mật khẩu: " + password + ", Giới tính: " + gender);
        document.getElementById("message").textContent = "Đăng ký thành công 😋🤑🤯😱"; alert ("Register Success 🤗😎🤯🤑")
        window.location.href = "login.html";
    } else {
        document.getElementById("message").textContent = "Vui lòng điền đầy đủ thông tin 🤔🤨🥱"; alert ("Y do gi day ?😡🤡🤭🤔🤨")
    }
});