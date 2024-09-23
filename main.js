var typed= new Typed (".text", {
    strings: ["Owner" , "Founder" , "CEO"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_u8z1q8j","template_nzm2o1y",parms).then(alert("Email Sent!"))
};