// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// menu icon to have toggle effect and be able to open and close the menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// on scroll animation like for contents including image
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar upon clicking the link/menu (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


//scroll reveal
ScrollReveal({
    // comment out or don't include reset: true so animation upon scrolling back up doesn't automate or work

    // reset: true,
    distance: '5px',
    duration: 2000,
    delay: 200
});

// contents animation like direction upon onload or scroll content revealation

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .project-box, .contact form, .exercises-box',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.about-img', { origin: 'right' });



// typed js

// Changing of words effects
const typed = new Typed('.multiple-text', {
    strings: ['Kevin Membreve',' a student of KODEGO', 'an aspiring JavaScript Developer', 'an aspiring Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
})






//trigger event when clicked
 document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // generate the email parameters
    const serviceID = 'service_xmm7jcn'; 
    const templateID = 'template_xqrwb6d'; 
    const templateParams = {
       name: document.getElementById('name').value,
       email: document.getElementById('email').value,
       mobile: document.getElementById('mobile').value,
       subject: document.getElementById('subject').value,
       message: document.getElementById('message').value
    };
    // send the email
    emailjs.send(serviceID, templateID, templateParams)
       .then(function(response) {
          alert('Your message has been sent!');
       }, function(error) {
          alert('Error: ' + error.status + ' ' + error.text);
       });
 });





