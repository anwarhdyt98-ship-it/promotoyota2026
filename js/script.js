// =========================================
// MOBILE MENU
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });

}

// =========================================
// CLOSE MENU AFTER CLICK
// =========================================

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});

// =========================================
// HEADER SCROLL
// =========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.padding = "0";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

    }

});

// =========================================
// SMOOTH SCROLL
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =========================================
// SCROLL ANIMATION
// =========================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(

".feature-card,.car-card,.promo-card,.testimonial-card,.counter-card,.about-image,.about-content"

).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// =========================================
// HERO IMAGE PARALLAX
// =========================================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

    if (heroImage) {

        let value = window.scrollY * 0.15;

        heroImage.style.transform = `translateY(${value}px)`;

    }

});

// =========================================
// FLOATING WHATSAPP
// =========================================

const floating = document.querySelector(".floating-wa");

window.addEventListener("scroll", () => {

    if (!floating) return;

    if (window.scrollY > 500) {

        floating.style.opacity = "1";

        floating.style.visibility = "visible";

    } else {

        floating.style.opacity = "0";

        floating.style.visibility = "hidden";

    }

});

// =========================================
// COUNTER
// =========================================

const counters = document.querySelectorAll(".counter-card h2");

const speed = 80;

counters.forEach(counter => {

    const update = () => {

        const target = parseInt(counter.innerText);

        if (isNaN(target)) return;

        const count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / speed);

        if (count < target) {

            counter.setAttribute("data-count", count + increment);

            counter.innerText = count + increment;

            setTimeout(update, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});

// =========================================
// ACTIVE MENU
// =========================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================================
// LOADING
// =========================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// =========================================
// END
// =========================================
