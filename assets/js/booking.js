/* =========================================================
                    BOOKING FORM
========================================================= */

const bookingForm =
    document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    /* =====================================================
                        INPUT VALUES
    ===================================================== */

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const email =
        document.getElementById("email").value;

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const message =
        document.getElementById("message").value;

    /* =====================================================
                        WHATSAPP MESSAGE
    ===================================================== */

    const whatsappMessage =

        ` Hello Diamond Beauty Salon 

New Appointment Booking

Full Name : ${name}

 Phone Number : ${phone}

Email Address : ${email}

 Service : ${service}

 Appointment Date : ${date}

 Appointment Time : ${time}

 Message : ${message}`;

    /* =====================================================
                        WHATSAPP NUMBER
    ===================================================== */

    const whatsappNumber = "918053555265";

    /* =====================================================
                        OPEN WHATSAPP
    ===================================================== */

    const whatsappURL =

        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(
        whatsappURL,
        "_blank"
    );

    /* =====================================================
                        SUCCESS MESSAGE
    ===================================================== */

    alert(
        "Your appointment booking has been sent successfully on WhatsApp."
    );

    /* =====================================================
                        RESET FORM
    ===================================================== */

    bookingForm.reset();

});


/* =========================================================
                    DATE LIMIT
========================================================= */

const dateInput =
    document.getElementById("date");

const today =
    new Date().toISOString().split("T")[0];

dateInput.setAttribute("min", today);
