const API =
  "https://tectraone-otp.rahulbpadaliya.workers.dev";

const params = new URLSearchParams(location.search);

const applicationId =
  params.get("applicationId") ||
  sessionStorage.getItem("tectraone_application_id");

const inputs =
  [...document.querySelectorAll(".otp-input")];

const mobile =
  document.getElementById("mobileNumber");

const appId =
  document.getElementById("applicationId");

const timer =
  document.getElementById("timer");

const timerText =
  document.getElementById("timerText");

const verifyBtn =
  document.getElementById("verifyBtn");

const verifyText =
  document.getElementById("verifyText");

const resendBtn =
  document.getElementById("resendBtn");

const status =
  document.getElementById("statusMessage");

const pageStatus =
  document.getElementById("pageStatus");

const changeBtn =
  document.getElementById("changeNumberBtn");

let time = 0;
let interval;


/* =========================
   CHECK APPLICATION
========================= */

if (!applicationId) {

  showStatus(
    "Application ID missing.",
    "error"
  );

  if (pageStatus)
    pageStatus.textContent =
      "Application unavailable";

  if (verifyBtn)
    verifyBtn.disabled = true;

  if (resendBtn)
    resendBtn.disabled = true;

} else {

  if (appId)
    appId.textContent =
      applicationId;

  sessionStorage.setItem(
    "tectraone_application_id",
    applicationId
  );

  sessionStorage.setItem(
    "tectraone_application_step",
    "OTP"
  );

  sendOTP();
}


/* =========================
   SEND OTP
========================= */

async function sendOTP() {

  if (resendBtn)
    resendBtn.disabled = true;

  showStatus(
    "Sending OTP...",
    "success"
  );

  try {

    const res = await fetch(
      `${API}/api/otp/send`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          applicationId
        })
      }
    );

    const data =
      await res.json();

    if (!res.ok || !data.success)
      throw new Error(
        data.error ||
        "OTP could not be sent."
      );


    /* Mobile */

    if (mobile)
      mobile.textContent =
        data.maskedMobile ||
        "******";


    /* Demo */

    if (data.demo) {

      showStatus(
        "Demo OTP: 123456",
        "success"
      );

    } else {

      showStatus(
        "OTP sent to your mobile number.",
        "success"
      );

    }


    startTimer(
      data.expiresIn || 120
    );

    inputs[0]?.focus();

  } catch (error) {

    showStatus(
      error.message,
      "error"
    );

    if (resendBtn)
      resendBtn.disabled = false;

  }
}


/* =========================
   OTP INPUT
========================= */

inputs.forEach(
  (input, index) => {

    input.addEventListener(
      "input",
      () => {

        input.value =
          input.value
            .replace(/\D/g, "")
            .slice(0, 1);

        if (
          input.value &&
          inputs[index + 1]
        ) {
          inputs[index + 1].focus();
        }

      }
    );


    input.addEventListener(
      "keydown",
      e => {

        if (
          e.key === "Backspace" &&
          !input.value &&
          inputs[index - 1]
        ) {
          inputs[index - 1].focus();
        }

        if (
          e.key === "ArrowLeft" &&
          inputs[index - 1]
        ) {
          inputs[index - 1].focus();
        }

        if (
          e.key === "ArrowRight" &&
          inputs[index + 1]
        ) {
          inputs[index + 1].focus();
        }

      }
    );


    input.addEventListener(
      "paste",
      e => {

        e.preventDefault();

        const value =
          e.clipboardData
            .getData("text")
            .replace(/\D/g, "")
            .slice(0, 6);

        value
          .split("")
          .forEach(
            (digit, i) => {
              if (inputs[i])
                inputs[i].value =
                  digit;
            }
          );

        inputs[
          Math.min(value.length, 5)
        ]?.focus();

      }
    );

  }
);


/* =========================
   VERIFY
========================= */

verifyBtn?.addEventListener(
  "click",
  verifyOTP
);


async function verifyOTP() {

  const otp =
    inputs
      .map(i => i.value)
      .join("");


  if (!/^\d{6}$/.test(otp)) {

    showStatus(
      "Enter the 6-digit OTP.",
      "error"
    );

    inputs[0]?.focus();

    return;
  }


  verifyBtn.disabled = true;

  if (verifyText)
    verifyText.textContent =
      "Verifying...";


  try {

    const res = await fetch(
      `${API}/api/otp/verify`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          applicationId,
          otp
        })
      }
    );


    const data =
      await res.json();


    if (!res.ok || !data.success)
      throw new Error(
        data.error ||
        "Invalid OTP."
      );


    /* Save state */

    sessionStorage.setItem(
      "tectraone_otp_verified",
      "true"
    );

    sessionStorage.setItem(
      "tectraone_application_step",
      "KYC"
    );


    showStatus(
      "OTP verified successfully.",
      "success"
    );


    if (pageStatus)
      pageStatus.textContent =
        "OTP verified";


    /* KYC */

    setTimeout(() => {

      location.href =
        data.nextPage ||
        `/kyc.html?applicationId=${encodeURIComponent(
          applicationId
        )}`;

    }, 600);


  } catch (error) {

    showStatus(
      error.message,
      "error"
    );

    verifyBtn.disabled = false;

    if (verifyText)
      verifyText.textContent =
        "Verify OTP";

  }
}


/* =========================
   TIMER
========================= */

function startTimer(seconds) {

  clearInterval(interval);

  time = seconds;

  updateTimer();

  resendBtn.disabled = true;

  interval =
    setInterval(() => {

      time--;

      updateTimer();

      if (time <= 0) {

        clearInterval(interval);

        resendBtn.disabled = false;

      }

    }, 1000);
}


function updateTimer() {

  const min =
    Math.floor(time / 60);

  const sec =
    String(time % 60)
      .padStart(2, "0");


  if (timer)
    timer.textContent =
      `${min}:${sec}`;


  if (timerText)
    timerText.textContent =
      time > 0
        ? "OTP expires in"
        : "OTP expired";
}


/* =========================
   RESEND
========================= */

resendBtn?.addEventListener(
  "click",
  () => {

    inputs.forEach(
      i => i.value = ""
    );

    sendOTP();

  }
);


/* =========================
   CHANGE NUMBER
========================= */

changeBtn?.addEventListener(
  "click",
  () => {

    if (
      confirm(
        "Go back and change your mobile number?"
      )
    ) {

      sessionStorage.removeItem(
        "tectraone_otp_verified"
      );

      location.href =
        "/application.html";

    }

  }
);


/* =========================
   STATUS
========================= */

function showStatus(
  message,
  type
) {

  if (!status)
    return;

  status.textContent =
    message;

  status.className =
    `status-message show ${type}`;

      }
