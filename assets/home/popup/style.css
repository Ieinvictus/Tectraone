/* =========================================
   GALAXY BRAND SALE POPUP
========================================= */

.sale-popup-overlay {

  position: fixed;
  inset: 0;

  width: 100%;
  height: 100dvh;

  z-index: 999999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background:
    radial-gradient(
      circle at 50% 40%,
      rgba(75, 50, 180, .18),
      transparent 35%
    ),
    radial-gradient(
      circle at 10% 90%,
      rgba(0, 180, 255, .10),
      transparent 30%
    ),
    rgba(3, 5, 15, .88);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  transition:
    opacity .45s ease,
    visibility .45s ease;
}


/* OPEN */

.sale-popup-overlay.show {

  opacity: 1;
  visibility: visible;
  pointer-events: auto;

}


/* =========================================
   STARS
========================================= */

.sale-stars {

  position: absolute;
  inset: 0;

  pointer-events: none;

  background-image:
    radial-gradient(circle, rgba(255,255,255,.9) 1px, transparent 1.5px),
    radial-gradient(circle, rgba(150,190,255,.7) 1px, transparent 1.5px);

  background-size:
    90px 90px,
    150px 150px;

  background-position:
    10px 20px,
    40px 70px;

  opacity: .45;

  animation: starsMove 35s linear infinite;

}


@keyframes starsMove {

  from {
    transform: translate3d(0,0,0);
  }

  to {
    transform: translate3d(-80px,60px,0);
  }

}


/* =========================================
   NEBULA
========================================= */

.sale-nebula {

  position: absolute;

  width: 600px;
  height: 600px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(94,65,255,.13),
      rgba(20,100,255,.05) 40%,
      transparent 70%
    );

  filter: blur(35px);

  animation: nebulaFloat 8s ease-in-out infinite;

}


@keyframes nebulaFloat {

  0%,
  100% {
    transform: scale(1) rotate(0deg);
  }

  50% {
    transform: scale(1.12) rotate(12deg);
  }

}


/* =========================================
   POPUP CARD
========================================= */

.sale-popup {

  position: relative;

  width: min(760px, 100%);

  max-height: calc(100dvh - 40px);

  overflow-y: auto;

  padding: 42px;

  border-radius: 28px;

  background:

    linear-gradient(
      145deg,
      rgba(20,25,48,.96),
      rgba(7,10,25,.97)
    );

  border: 1px solid rgba(255,255,255,.12);

  box-shadow:

    0 35px 100px rgba(0,0,0,.65),

    0 0 80px rgba(82,66,255,.13),

    inset 0 1px 0 rgba(255,255,255,.08);

  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  transform:
    perspective(1000px)
    translateY(40px)
    scale(.94);

  opacity: 0;

  transition:
    transform .6s cubic-bezier(.16,1,.3,1),
    opacity .45s ease;

}


/* CARD OPEN */

.sale-popup-overlay.show .sale-popup {

  transform:
    perspective(1000px)
    translateY(0)
    scale(1);

  opacity: 1;

}


/* =========================================
   COMET GLOW
========================================= */

.sale-popup::before {

  content: "";

  position: absolute;

  top: -120px;
  right: -80px;

  width: 300px;
  height: 300px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(99,102,241,.22),
      transparent 68%
    );

  filter: blur(15px);

  pointer-events: none;

}


/* =========================================
   CLOSE BUTTON
========================================= */

.sale-close {

  position: absolute;

  top: 18px;
  right: 18px;

  width: 42px;
  height: 42px;

  border-radius: 50%;

  border: 1px solid rgba(255,255,255,.12);

  background: rgba(255,255,255,.05);

  color: rgba(255,255,255,.75);

  font-size: 26px;
  line-height: 1;

  cursor: pointer;

  transition:
    .25s ease;

}


.sale-close:hover {

  background: rgba(255,255,255,.12);

  color: #fff;

  transform: rotate(90deg);

}


/* =========================================
   BADGE
========================================= */

.sale-badge {

  display: inline-flex;

  align-items: center;
  gap: 8px;

  padding: 7px 13px;

  border-radius: 100px;

  font-size: 10px;

  letter-spacing: 1.5px;

  font-weight: 700;

  color: #a8f7cf;

  background: rgba(52,211,153,.08);

  border: 1px solid rgba(52,211,153,.18);

}


.badge-dot {

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #4ade80;

  box-shadow:
    0 0 8px #4ade80;

  animation: badgePulse 1.8s infinite;

}


@keyframes badgePulse {

  50% {
    opacity: .35;
    transform: scale(.7);
  }

}


/* =========================================
   BRAND
========================================= */

.sale-brand {

  display: flex;

  align-items: center;

  gap: 15px;

  margin-top: 28px;

}


.sale-brand-icon {

  width: 58px;
  height: 58px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 17px;

  font-size: 25px;

  font-weight: 800;

  color: #fff;

  background:
    linear-gradient(
      135deg,
      #6d5dfc,
      #3b82f6
    );

  box-shadow:
    0 10px 35px rgba(80,90,255,.35);

}


.sale-small {

  display: block;

  margin-bottom: 3px;

  color: rgba(255,255,255,.38);

  font-size: 9px;

  letter-spacing: 1.8px;

  font-weight: 700;

}


.sale-brand h2 {

  margin: 0;

  color: #fff;

  font-size: 24px;

  font-weight: 700;

}


/* =========================================
   CONTENT
========================================= */

.sale-content {

  margin-top: 32px;

}


.sale-label {

  font-size: 10px;

  letter-spacing: 2px;

  font-weight: 700;

  color: #8da2ff;

}


.sale-content h1 {

  margin: 10px 0 15px;

  max-width: 650px;

  color: #fff;

  font-size: clamp(32px, 5vw, 52px);

  line-height: 1.04;

  letter-spacing: -1.8px;

}


.sale-content h1 span {

  display: block;

  background:
    linear-gradient(
      90deg,
      #ffffff,
      #8ea0ff,
      #c5b8ff
    );

  -webkit-background-clip: text;
  background-clip: text;

  -webkit-text-fill-color: transparent;

}


.sale-content p {

  max-width: 570px;

  margin: 0;

  color: rgba(255,255,255,.52);

  font-size: 14px;

  line-height: 1.7;

}


/* =========================================
   ASSETS GRID
========================================= */

.sale-assets {

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 10px;

  margin-top: 30px;

}


.sale-asset {

  position: relative;

  display: flex;

  align-items: center;

  gap: 13px;

  min-width: 0;

  padding: 14px;

  border-radius: 15px;

  background:
    rgba(255,255,255,.035);

  border: 1px solid rgba(255,255,255,.07);

  transition:
    background .25s ease,
    border-color .25s ease,
    transform .25s ease;

}


.sale-asset:hover {

  transform: translateY(-2px);

  background:
    rgba(255,255,255,.065);

  border-color:
    rgba(140,150,255,.25);

}


.asset-icon {

  flex: 0 0 auto;

  width: 38px;
  height: 38px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 11px;

  color: #fff;

  font-size: 17px;

}


.domain-icon {
  background: rgba(59,130,246,.15);
  color: #60a5fa;
}

.instagram-icon {
  background: rgba(225,48,108,.13);
  color: #f472b6;
}

.facebook-icon {
  background: rgba(24,119,242,.15);
  color: #60a5fa;
}

.x-icon {
  background: rgba(255,255,255,.08);
  color: #fff;
}


.asset-info {

  min-width: 0;

}


.asset-info small {

  display: block;

  margin-bottom: 4px;

  color: rgba(255,255,255,.35);

  font-size: 8px;

  letter-spacing: 1.4px;

  font-weight: 700;

}


.asset-info strong {

  display: block;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  color: rgba(255,255,255,.85);

  font-size: 12px;

}


.asset-arrow {

  margin-left: auto;

  color: rgba(255,255,255,.25);

  font-size: 15px;

}


/* =========================================
   FOOTER
========================================= */

.sale-footer {

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  margin-top: 30px;

  padding-top: 22px;

  border-top:
    1px solid rgba(255,255,255,.07);

}


.sale-status {

  display: flex;

  align-items: center;

  gap: 8px;

  color: rgba(255,255,255,.35);

  font-size: 9px;

  letter-spacing: 1.2px;

  font-weight: 700;

}


.sale-status > span {

  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #4ade80;

  box-shadow:
    0 0 9px #4ade80;

}


.sale-contact {

  display: inline-flex;

  align-items: center;

  gap: 10px;

  padding: 13px 20px;

  border-radius: 12px;

  color: #fff;

  text-decoration: none;

  font-size: 12px;

  font-weight: 700;

  background:
    linear-gradient(
      135deg,
      #6657ed,
      #3f74f5
    );

  box-shadow:
    0 10px 30px rgba(73,85,230,.25);

  transition:
    transform .25s ease,
    box-shadow .25s ease;

}


.sale-contact:hover {

  transform: translateY(-2px);

  box-shadow:
    0 15px 35px rgba(73,85,230,.4);

}


.sale-contact span {

  font-size: 15px;

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {

  .sale-popup-overlay {

    padding: 12px;

  }


  .sale-popup {

    padding: 28px 20px 20px;

    border-radius: 23px;

    max-height: calc(100dvh - 24px);

  }


  .sale-close {

    top: 13px;
    right: 13px;

    width: 36px;
    height: 36px;

    font-size: 22px;

  }


  .sale-brand {

    margin-top: 22px;

  }


  .sale-brand-icon {

    width: 50px;
    height: 50px;

    border-radius: 14px;

    font-size: 21px;

  }


  .sale-brand h2 {

    font-size: 20px;

  }


  .sale-content {

    margin-top: 25px;

  }


  .sale-content h1 {

    font-size: 34px;

    letter-spacing: -1.2px;

  }


  .sale-content p {

    font-size: 13px;

  }


  .sale-assets {

    grid-template-columns: 1fr;

    gap: 8px;

    margin-top: 24px;

  }


  .sale-asset {

    padding: 12px;

  }


  .sale-footer {

    flex-direction: column;

    align-items: stretch;

    gap: 15px;

  }


  .sale-status {

    justify-content: center;

  }


  .sale-contact {

    justify-content: center;

  }

}


/* =========================================
   BODY LOCK
========================================= */

body.popup-open {

  overflow: hidden;

}
