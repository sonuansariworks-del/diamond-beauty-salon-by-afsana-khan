// =========================================================
//                     LOADER
// =========================================================
window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

// =========================================================
//                     MOBILE MENU
// =========================================================
const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        menuToggle.innerHTML = navbar.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

}

// =========================================================
//                 CLOSE MENU ON CLICK
// =========================================================
document.querySelectorAll(".navbar a").forEach((link) => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

// =========================================================
//                   STICKY HEADER
// =========================================================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.padding = "0px 0";
        header.style.background = "#ffffff";

    } else {

        header.style.background = "#ffffffee";

    }

});

// =========================================================
//                   SCROLL TOP BUTTON
// =========================================================
const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.style.display = "flex";

    } else {

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// =========================================================
//                   SMOOTH SCROLL
// =========================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// =========================================================
//                   REVEAL ANIMATION
// =========================================================
const revealElements = document.querySelectorAll(
    ".feature-box, .service-card, .gallery-container img, .testimonial-card, .about-image, .about-content, .instagram-container img"
);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active-reveal");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================================================
//               INITIAL REVEAL STYLE
// =========================================================
revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = "all 0.8s ease";

});

document.addEventListener("scroll", () => {

    document.querySelectorAll(".active-reveal")
        .forEach((element) => {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        });

});

// =========================================================
//                 HERO IMAGE PARALLAX
// =========================================================
const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth - e.pageX * 2) / 90;

    const y = (window.innerHeight - e.pageY * 2) / 90;

    heroImage.style.transform =
        `translateX(${x}px) translateY(${y}px)`;

});

// =========================================================
//               ACTIVE NAV LINK ON SCROLL
// =========================================================
const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {

            current = section.getAttribute("class");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.href.includes(current)) {

            link.classList.add("active");

        }

    });

});

// =========================================================
//                  GALLERY IMAGE POPUP
// =========================================================
const galleryImages = document.querySelectorAll(
    ".gallery-container img, .instagram-container img"
);

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.classList.add("image-popup");

        popup.innerHTML = `

            <span class="close-popup">
                <i class="fa-solid fa-xmark"></i>
            </span>

            <img src="${image.src}" alt="Gallery Image">

        `;

        document.body.appendChild(popup);

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100vh";
        popup.style.background = "rgba(0,0,0,0.92)";
        popup.style.display = "flex";
        popup.style.alignItems = "center";
        popup.style.justifyContent = "center";
        popup.style.zIndex = "99999";
        popup.style.padding = "20px";

        const popupImage = popup.querySelector("img");

        popupImage.style.maxWidth = "900px";
        popupImage.style.width = "100%";
        popupImage.style.borderRadius = "20px";
        popupImage.style.objectFit = "cover";

        const closeBtn = popup.querySelector(".close-popup");

        closeBtn.style.position = "absolute";
        closeBtn.style.top = "30px";
        closeBtn.style.right = "30px";
        closeBtn.style.color = "#fff";
        closeBtn.style.fontSize = "35px";
        closeBtn.style.cursor = "pointer";

        closeBtn.addEventListener("click", () => {

            popup.remove();

        });

        popup.addEventListener("click", (e) => {

            if (e.target === popup) {

                popup.remove();

            }

        });

    });

});

// =========================================================
//                   BOOKING FORM
// =========================================================
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const service =
            document.getElementById("service").value;

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        // ============================================
        // VALIDATION
        // ============================================
        if (
            name === "" ||
            phone === "" ||
            service === "" ||
            date === "" ||
            time === ""
        ) {

            showNotification(
                "Please fill all fields.",
                "#ff1744"
            );

            return;

        }

        if (phone.length !== 10 || isNaN(phone)) {

            showNotification(
                "Enter valid 10 digit phone number.",
                "#ff1744"
            );

            return;

        }

        // ============================================
        // SUCCESS MESSAGE
        // ============================================
        showNotification(
            "Appointment Booked Successfully!",
            "#00c853"
        );

        // ============================================
        // WHATSAPP BOOKING
        // ============================================
        const whatsappMessage =
            `Hello Diamond Beauty Salon,%0A%0A` +
            `I want to book an appointment.%0A%0A` +
            `Name: ${name}%0A` +
            `Phone: ${phone}%0A` +
            `Service: ${service}%0A` +
            `Date: ${date}%0A` +
            `Time: ${time}`;

        window.open(
            `https://wa.me/918053555265?text=${whatsappMessage}`,
            "_blank"
        );

        bookingForm.reset();

    });

}

// =========================================================
//                 NOTIFICATION FUNCTION
// =========================================================
function showNotification(message, color) {

    const notification = document.createElement("div");

    notification.innerText = message;

    document.body.appendChild(notification);

    notification.style.position = "fixed";
    notification.style.top = "30px";
    notification.style.right = "30px";
    notification.style.background = color;
    notification.style.color = "#fff";
    notification.style.padding = "16px 28px";
    notification.style.borderRadius = "12px";
    notification.style.fontWeight = "600";
    notification.style.zIndex = "999999";
    notification.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.15)";

    notification.style.animation =
        "slideNotification 0.5s ease";

    setTimeout(() => {

        notification.remove();

    }, 3000);

}

// =========================================================
//                 NOTIFICATION ANIMATION
// =========================================================
const notificationStyle = document.createElement("style");

notificationStyle.innerHTML = `

@keyframes slideNotification{

    from{
        transform:translateX(100%);
        opacity:0;
    }

    to{
        transform:translateX(0);
        opacity:1;
    }

}

`;

document.head.appendChild(notificationStyle);

// =========================================================
//                 AUTO DATE RESTRICTION
// =========================================================
const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date().toISOString().split("T")[0];

    dateInput.setAttribute("min", today);

}

// =========================================================
//                 BUTTON RIPPLE EFFECT
// =========================================================
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        const x = e.clientX - e.target.offsetLeft;

        const y = e.clientY - e.target.offsetTop;

        ripple.style.left = `${x}px`;

        ripple.style.top = `${y}px`;

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

// =========================================================
//                 RIPPLE STYLE
// =========================================================
const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

.btn{
    position:relative;
    overflow:hidden;
}

.ripple{
    position:absolute;
    width:20px;
    height:20px;
    background:rgba(255,255,255,0.6);
    border-radius:50%;
    transform:scale(0);
    animation:rippleEffect 0.6s linear;
}

@keyframes rippleEffect{

    to{
        transform:scale(15);
        opacity:0;
    }

}

`;

document.head.appendChild(rippleStyle);

// =========================================================
//                 CURSOR GLOW EFFECT
// =========================================================
const cursorGlow = document.createElement("div");

cursorGlow.classList.add("cursor-glow");

document.body.appendChild(cursorGlow);

cursorGlow.style.position = "fixed";
cursorGlow.style.width = "25px";
cursorGlow.style.height = "25px";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.background = "rgba(233,30,99,0.35)";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.transform = "translate(-50%,-50%)";
cursorGlow.style.zIndex = "999999";
cursorGlow.style.backdropFilter = "blur(2px)";
cursorGlow.style.transition = "transform 0.05s linear";

window.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";

});

// =========================================================
//                 TYPING EFFECT
// =========================================================
const typingText = document.querySelector(".hero-subtitle");

if (typingText) {

    const text = typingText.innerText;

    typingText.innerText = "";

    let index = 0;

    function typeEffect() {

        if (index < text.length) {

            typingText.innerText += text.charAt(index);

            index++;

            setTimeout(typeEffect, 80);

        }

    }

    typeEffect();

}
