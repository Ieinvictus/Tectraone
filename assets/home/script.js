/* =========================================================
   TECTRA ONE
   INTERACTION ENGINE
========================================================= */


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
  document.getElementById("menuToggle");

const mobileMenu =
  document.getElementById("mobileMenu");


menuToggle.addEventListener("click", () => {

  mobileMenu.classList.toggle("open");

});


/* Close mobile menu after clicking */

document
  .querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");

    });

  });


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================================
   CURSOR GALAXY GLOW
========================================================= */

const cursorGlow =
  document.querySelector(".cursor-glow");


let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let glowX = mouseX;
let glowY = mouseY;


window.addEventListener("mousemove", event => {

  mouseX = event.clientX;
  mouseY = event.clientY;

});


function animateGlow() {

  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;

  cursorGlow.style.left = glowX + "px";
  cursorGlow.style.top = glowY + "px";

  requestAnimationFrame(animateGlow);

}

animateGlow();


/* =========================================================
   ACTIVE NAV LINK
========================================================= */

const sections =
  document.querySelectorAll("section[id]");

const navLinks =
  document.querySelectorAll(".nav-link");


const sectionObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const id =
            entry.target.getAttribute("id");

          navLinks.forEach(link => {

            link.classList.remove("active");

            if (
              link.getAttribute("href") === "#" + id
            ) {

              link.classList.add("active");

            }

          });

        }

      });

    },
    {
      threshold: 0.3
    }
  );


sections.forEach(section => {

  sectionObserver.observe(section);

});


/* =========================================================
   CARD MOUSE TILT
========================================================= */

const tiltCards =
  document.querySelectorAll(
    ".feature-card, .application-card"
  );


tiltCards.forEach(card => {

  card.addEventListener("mousemove", event => {

    if (window.innerWidth < 900) return;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateX =
      ((y - centerY) / centerY) * -1.5;

    const rotateY =
      ((x - centerX) / centerX) * 1.5;

    card.style.transform =
      `perspective(900px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-4px)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform = "";

  });

});


/* =========================================================
   LOAN FORM
========================================================= */

const loanForm =
  document.getElementById("loanForm");

const formSuccess =
  document.getElementById("formSuccess");

const successBack =
  document.getElementById("successBack");


loanForm.addEventListener("submit", event => {

  event.preventDefault();


  const name =
    document.getElementById("name").value.trim();

  const mobile =
    document.getElementById("mobile").value.trim();

  const amount =
    document.getElementById("amount").value;


  /* Basic front-end validation */

  if (name.length < 2) {

    alert("Please enter your full name.");

    return;

  }


  if (!/^[0-9]{10}$/.test(mobile)) {

    alert("Please enter a valid 10 digit mobile number.");

    return;

  }


  if (!amount) {

    alert("Please select a loan amount.");

    return;

  }


  /*
    Production version:

    This is where your backend API should receive
    the application.

    Example:

    POST /api/applications

    {
      name,
      mobile,
      amount
    }

    The backend should then:

    1. Generate Application ID
    2. Store application
    3. Trigger OTP
    4. Verify mobile
    5. Run permitted verification checks
    6. Continue eligibility workflow
  */


  loanForm.style.display = "none";

  formSuccess.classList.add("show");


});


/* =========================================================
   START AGAIN
========================================================= */

successBack.addEventListener("click", () => {

  formSuccess.classList.remove("show");

  loanForm.style.display = "";

  loanForm.reset();

});


/* =========================================================
   SMOOTH ANCHOR SCROLL
========================================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(anchor => {

    anchor.addEventListener("click", function(event) {

      const target =
        document.querySelector(
          this.getAttribute("href")
        );

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });


/* =========================================================
   MAGNETIC BUTTON
========================================================= */

const magneticButtons =
  document.querySelectorAll(
    ".primary-btn, .nav-apply"
  );


magneticButtons.forEach(button => {

  button.addEventListener("mousemove", event => {

    if (window.innerWidth < 800) return;

    const rect =
      button.getBoundingClientRect();

    const x =
      event.clientX - rect.left - rect.width / 2;

    const y =
      event.clientY - rect.top - rect.height / 2;

    button.style.transform =
      `translate(${x * 0.12}px, ${y * 0.12}px)`;

  });


  button.addEventListener("mouseleave", () => {

    button.style.transform = "";

  });

});


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener("load", () => {

  document
    .querySelectorAll(".hero .reveal")
    .forEach((element, index) => {

      setTimeout(() => {

        element.classList.add("visible");

      }, 250 + index * 180);

    });

});
