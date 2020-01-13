const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    burger.addEventListener("click", function() {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach(link, index);
            if (linkstyleanimation) {
                linkstyleanimation = '';
            } else {
                linkstyleanimation = 'navLinkFade 0.5s ease forwards ${index / 7}s';
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');

    };




navSlide();