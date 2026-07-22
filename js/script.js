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
        if (navbar) navbar.classList.remove("active");
        if (menuToggle) menuToggle.classList.remove("active");
    });
});

// =========================================
// STICKY HEADER
// =========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

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

    if (window.scrollY > 300) {
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
// LOADER
// =========================================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

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
// COUNTER
// =========================================

const counters = document.querySelectorAll(".counter-item h2");

function runCounter() {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText.replace(/\D/g, ""));

        if (!target) return;

        let current = 0;

        const increment = Math.ceil(target / 80);

        const update = () => {

            current += increment;

            if (current >= target) {

                counter.innerText = target + "+";

            } else {

                counter.innerText = current + "+";

                requestAnimationFrame(update);

            }

        };

        update();

    });

}

const counterSection = document.querySelector(".counter");

if (counterSection) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                runCounter();

                observer.disconnect();

            }

        });

    });

    observer.observe(counterSection);

}

// =========================================
// FAQ AUTO CLOSE
// =========================================

const details = document.querySelectorAll(".faq details");

details.forEach(detail => {

    detail.addEventListener("toggle", () => {

        if (detail.open) {

            details.forEach(other => {

                if (other !== detail) {

                    other.removeAttribute("open");

                }

            });

        }

    });

});

// =========================================
// SCROLL ANIMATION
// =========================================

const reveals = document.querySelectorAll(

".car-card,.bonus-card,.testimonial-card,.contact-card,.about-grid,.vision-card,.calculator,.price-table,.faq details"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {

    threshold: 0.15

});

reveals.forEach(item => {

    revealObserver.observe(item);

});

// =========================================
// FILTER MOBIL
// =========================================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        // siap jika nanti ditambah filter kategori

    });

});

// =========================================
// SIMULASI
// =========================================

const car = document.getElementById("car");

const price = document.getElementById("price");

function rupiah(number) {

    return "Rp " + Number(number).toLocaleString("id-ID");

}

if (car && price) {

    function updatePrice() {

        price.value = rupiah(car.value);

    }

    updatePrice();

    car.addEventListener("change", updatePrice);

}

function hitungSimulasi() {

    if (!car) return;

    const harga = Number(car.value);

    const dp = Number(document.getElementById("dp").value);

    const tenor = Number(document.getElementById("tenor").value);

    if (dp <= 0) {

        alert("Masukkan DP terlebih dahulu.");

        return;

    }

    const pinjaman = harga - dp;

    const cicilan = Math.round(pinjaman / tenor);

    const hasil = document.getElementById("hasilAngsuran");

    if (hasil) {

        hasil.innerHTML =
            "<strong>" + rupiah(cicilan) + "</strong> / bulan (estimasi)";

    }

    const wa = document.getElementById("waSimulasi");

    if (wa) {

        const pesan =
            "Halo Pak Anwar.%0A%0ASaya ingin simulasi kredit Toyota.%0A" +
            "Mobil : " + car.options[car.selectedIndex].text +
            "%0AHarga : " + rupiah(harga) +
            "%0ADP : " + rupiah(dp) +
            "%0ATenor : " + tenor + " bulan" +
            "%0AEstimasi Cicilan : " + rupiah(cicilan) + "/bulan";

        wa.href =
            "https://wa.me/6281314161356?text=" + pesan;

    }

}

// =========================================
// COPYRIGHT YEAR
// =========================================

document.querySelectorAll(".year").forEach(item => {

    item.textContent = new Date().getFullYear();

});

console.log("Toyota Premium Website V4 Loaded Successfully 🚗");
