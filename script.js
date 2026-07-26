/* ==========================================
   JeeKeey Portfolio JavaScript
   ========================================== */


// TYPING ANIMATION

const typingText = [
    "BCA Graduate",
    "Aspiring Full Stack Developer",
    "Web Development Enthusiast",
    "Technology Learner"
];

let textIndex = 0, charIndex = 0;
const typingElement = document.getElementById("typing");


function typeEffect(){

    if(charIndex < typingText[textIndex].length){

        typingElement.innerHTML += typingText[textIndex][charIndex++];
        setTimeout(typeEffect,100);

    } else {

        setTimeout(eraseEffect,1500);

    }
}


function eraseEffect(){

    if(charIndex){

        typingElement.innerHTML =
        typingText[textIndex].substring(0,--charIndex);

        setTimeout(eraseEffect,50);

    } else {

        textIndex = (textIndex + 1) % typingText.length;
        setTimeout(typeEffect,500);

    }
}

typeEffect();




// SCROLL ANIMATION

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting)
            entry.target.classList.add("show");

    });

},{threshold:0.2});


document.querySelectorAll("section")
.forEach(section => observer.observe(section));




// BACK TO TOP

const scrollButton = document.getElementById("scroll-top");

if(scrollButton){

    window.addEventListener("scroll",()=>{

        scrollButton.style.display =
        window.scrollY > 300 ? "block" : "none";

    });


    scrollButton.onclick = () => 
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}




// SMOOTH NAVIGATION

document.querySelectorAll("nav a").forEach(link=>{

    link.onclick = e => {

        e.preventDefault();

        document.querySelector(
            link.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    };

});




// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.onclick = () =>
    navLinks.classList.toggle("active");

}


document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.onclick = () =>
    navLinks.classList.remove("active");

});