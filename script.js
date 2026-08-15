/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

  const navLinks =
    document.getElementById("navLinks");

  if (navLinks) {
    navLinks.classList.toggle("show");
  }

}


/* =========================
   CONTACT FORM
========================= */

function submitContactForm(event) {

  event.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const email =
    document.getElementById("email").value.trim();

  const message =
    document.getElementById("message").value.trim();


  if (!name || !phone || !message) {

    alert("Please fill in all required fields.");

    return;
  }


  /*
    This opens the visitor's email application.

    Replace the email address below with
    your actual hotel/business email.
  */

  const businessEmail = "your-email@example.com";

  const subject =
    "New Food Care Hotel Enquiry";

  const body =
    "Name: " + name +
    "\nPhone: " + phone +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message;


  const mailto =
    "mailto:" + businessEmail +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);


  window.location.href = mailto;

}


/* =========================
   CLOSE MOBILE MENU
========================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const links =
      document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

      link.addEventListener(
        "click",
        function () {

          const nav =
            document.getElementById("navLinks");

          if (nav) {
            nav.classList.remove("show");
          }

        }
      );

    });

  }
);
