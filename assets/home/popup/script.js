/* =========================================
   BRAND SALE POPUP
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("salePopup");
  const closeBtn = document.getElementById("saleClose");


  /* OPEN POPUP WHEN WEBSITE LOADS */

  setTimeout(() => {

    popup.classList.add("show");

    document.body.classList.add("popup-open");

  }, 500);


  /* CLOSE BUTTON */

  closeBtn.addEventListener("click", () => {

    popup.classList.remove("show");

    document.body.classList.remove("popup-open");

  });


  /* CLOSE WHEN CLICKING OUTSIDE */

  popup.addEventListener("click", (event) => {

    if (event.target === popup) {

      popup.classList.remove("show");

      document.body.classList.remove("popup-open");

    }

  });


  /* ESC KEY */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      popup.classList.remove("show");

      document.body.classList.remove("popup-open");

    }

  });

});
