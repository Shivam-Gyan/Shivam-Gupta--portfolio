// Shorthand info about devloper
let main_container=document.querySelector("#main-container");
let content=document.querySelector(".section");
let devpic=document.querySelector(".devpic")
main_container.style.display="none"
let check=0;
devpic.addEventListener("click", () => {
    if (check!=1) {
    main_container.style.display="inline-flex"
    content.style.display="none"
    check=1;
}
else {
    main_container.style.display="none"
    content.style.display="inline-flex"
    check=0;
    }
})

//   Navbar checkbox check/uncheck code

let body = document.querySelector(".body")
let check_box = document.querySelector("#click")
body.addEventListener("click", function () {
    check_box.checked = false;
})


// typing effect of home page section
const typed = new Typed('.typing-effect', {
    strings: ['#Shivam-Gupta', '#Web-developer', '#Coder', '#Student'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});


// // vanilla tilt js
VanillaTilt.init(document.querySelectorAll(".content"), {
    max: 25,
    speed: 400,
    glare:true,
    "max-glare":0.5,  
});



// email work
function emailsend() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    Email.send({
        SecureToken: "cbe48e4b-02a5-4b8c-a0c3-a7b56d5d4f63",
        To: 'shivamgupta191092005@gmail.com',
        From: "shivamgupta12a@gmail.com",
        Subject: "conatct message",
        Body: "Name :" + name + "<br/>Email: " + email + "<br/>Message :" + message

    }).then(
        message => alert(message)
    );
}




