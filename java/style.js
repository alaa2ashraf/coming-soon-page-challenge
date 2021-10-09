var msg = document.getElementById("msg");
var mail = document.querySelector(".mail input");
var btn = document.getElementById("btn-1");
var icon = document.querySelector("form .icon-error")

btn.addEventListener('click', function validEmail() {
    if (mail.value.indexOf("@") < 2 || (mail.value.indexOf(".")) - (mail.value.indexOf("@")) < 2 || (mail.value.length) - (mail.value.indexOf(".")) < 3) {
        msg.textContent = "Please provide us your valid email";
        msg.style.color = "#F96263";
        icon.style.display = "block";
    } else {
        msg.textContent = "Thank you for subscribing to our newsletter.";
        msg.style.color = "#44d838";
        icon.style.display = "none";
    }
})