// =========================================
// LOADER
// =========================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {
        loader.classList.add("hidden");
    }

});

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

        if (menuToggle) {
            menuToggle.classList.remove("active");
        }

    });

});

// =========================================
// STICKY HEADER
// =========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// =========================================
// BACK TO TOP
// =========================================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (!backTop) return;

    if (window.scrollY > 400) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

if (backTop) {

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// =========================================
// SCROLL ANIMATION
// =========================================

const fadeItems = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

fadeItems.forEach(item => {

    observer.observe(item);

});

// =========================================
// ACTIVE MENU
// =========================================

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    const scrollY = window.pageYOffset;

    sections.forEach(section => {

        const sectionHeight = section.offsetHeight;

        const sectionTop = section.offsetTop - 120;

        const sectionId = section.getAttribute("id");

        const navLink = document.querySelector('.navbar a[href*="' + sectionId + '"]');

        if (

            scrollY > sectionTop &&

            scrollY <= sectionTop + sectionHeight

        ) {

            navLink?.classList.add("active");

        } else {

            navLink?.classList.remove("active");

        }

    });

});

// =========================================
// COUNTER
// =========================================

const counters = document.querySelectorAll(".counter-item h2");

const runCounter = (counter) => {

    const target = parseInt(counter.innerText.replace(/\D/g, ""));

    const suffix = counter.innerText.replace(/[0-9]/g, "");

    let current = 0;

    const increment = Math.ceil(target / 80);

    const update = () => {

        current += increment;

        if (current >= target) {

            counter.innerText = target + suffix;

        } else {

            counter.innerText = current + suffix;

            requestAnimationFrame(update);

        }

    };

    update();

};

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.querySelectorAll("h2").forEach(runCounter);

            counterObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.5

});

document.querySelectorAll(".hero-counter, .counter").forEach(section => {

    counterObserver.observe(section);

});

// =========================================
// FOOTER YEAR
// =========================================

const year = document.querySelector(".year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// =========================================
// IMAGE HOVER EFFECT
// =========================================

document.querySelectorAll(".car-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

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
