/* =========================================
   BRAND SALE POPUP
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  const popup = document.getElementById("salePopup");
  const closeBtn = document.getElementById("saleClose");

  /* Safety check */

  if (!popup) {
    console.warn("Sale popup #salePopup not found.");
    return;
  }


  /* =========================================
     OPEN POPUP
  ========================================= */

  function openPopup() {

    popup.classList.add("show");

    document.body.classList.add("popup-open");

  }


  /* =========================================
     CLOSE POPUP
  ========================================= */

  function closePopup() {

    popup.classList.remove("show");

    document.body.classList.remove("popup-open");

  }


  /* =========================================
     AUTO OPEN
  ========================================= */

  setTimeout(function () {

    openPopup();

  }, 500);


  /* =========================================
     CLOSE BUTTON
  ========================================= */

  if (closeBtn) {

    closeBtn.addEventListener("click", function (event) {

      event.preventDefault();

      closePopup();

    });

  }


  /* =========================================
     CLICK OUTSIDE
  ========================================= */

  popup.addEventListener("click", function (event) {

    if (event.target === popup) {

      closePopup();

    }

  });


  /* =========================================
     ESC KEY
  ========================================= */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      closePopup();

    }

  });

});
