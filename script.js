function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}
emailjs.init("qug2o9aUAhMk5tXcy");

const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

sendBtn.addEventListener('click', sendEmail);

function sendEmail() {
    // Get the form data
    const to = document.getElementById("to").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Send the email using EmailJS
    emailjs.send("service_jgktcw3", "template_y8xr82k", {
        to_email: to,
        subject: subject,
        message: message
    })
        .then(function () {
            result.innerHTML = "Email sent successfully!";
            result.style.opacity = 1;
        }, function (error) {
            result.innerHTML = "Email sending failed!";
            result.style.opacity = 1;
        });
}
