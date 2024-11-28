const dropDownItem = document.querySelector(".dropDown");
const tooltip = document.querySelector("#tooltip");
const burgerMenu = document.querySelector("#menu-item");
const burgerMenuText = document.querySelector("#burger-menu-second-text");
const burgerMenuMainText = document.querySelector("#burger-menu-main-text");

const mettreDropDown = document.querySelector(".mettre-dropDown");
const dropMettre = document.querySelector(".drop-mettre");
const favorisDropDown = document.querySelector("#favoris-dropDown");
const dropFavoris = document.querySelector("#drop-favoris");

const headerV1 = document.querySelector(".header-v1");
const headerV2 = document.querySelector(".header-v2");
const footerV1 = document.querySelector(".footer-v1");
const footerV2 = document.querySelector(".footer-v2");

const countdownEl = document.querySelector("#countdown");

const startingMinutes = 1.5;
let time1 = startingMinutes * 60;

setInterval(countdown, 1000);

function countdown() {
  time1 = time1 < 0 ? startingMinutes * 60 : time1;

  const minutes = Math.floor(time1 / 60);
  let seconds = time1 % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;

  if (time1 === 0) {
    count();
  }
  time1--;
}

mettreDropDown.addEventListener("mouseover", () => {
  dropMettre.style.display = "flex";
});
mettreDropDown.addEventListener("mouseout", () => {
  dropMettre.style.display = "none";
});

favorisDropDown.addEventListener("mouseover", () => {
  dropFavoris.style.display = "flex";
});
favorisDropDown.addEventListener("mouseout", () => {
  dropFavoris.style.display = "none";
});

burgerMenu.addEventListener("mouseover", () => {
  burgerMenu.classList.add("change");
  burgerMenuText.style.display = "block";
  burgerMenuMainText.style.display = "none";
});

burgerMenu.addEventListener("mouseout", () => {
  burgerMenu.classList.remove("change");
  burgerMenuText.style.display = "none";
  burgerMenuMainText.style.display = "block";
});

dropDownItem.addEventListener("mouseover", () => {
  console.log("hhh");
  tooltip.style.display = "flex";
});

dropDownItem.addEventListener("mouseout", () => {
  console.log("ssss");
  tooltip.style.display = "none";
});

let time = 10000;
let turn = 1;

function count() {
  console.log("turn", turn);
  console.log("WORKED!");

  console.log(headerV1.style.display == false);

  if (turn % 2 === 0) {
    headerV2.style.animation = "vanish 2s";
    footerV2.style.animation = "vanish 2s";
    headerV1.style.animation = "";
    footerV1.style.animation = "";
    headerV2.addEventListener(
      "animationend",
      (ev) => {
        if (ev.type === "animationend") {
          headerV2.style.display = "none";
          headerV1.style.display = "flex";
        }
      },
      false
    );

    footerV2.addEventListener(
      "animationend",
      (ev) => {
        if (ev.type === "animationend") {
          footerV2.style.display = "none";
          footerV1.style.display = "block";
          footerV1.style.animation = "";
        }
      },
      false
    );
    turn++;
  } else {
    headerV1.style.animation = "vanish 2s";
    footerV1.style.animation = "vanish 2s";
    headerV2.style.animation = "";
    footerV2.style.animation = "";
    headerV1.addEventListener(
      "animationend",
      (ev) => {
        if (ev.type === "animationend") {
          headerV1.style.display = "none";
          headerV2.style.display = "flex";
        }
      },
      false
    );

    footerV1.addEventListener(
      "animationend",
      (ev) => {
        if (ev.type === "animationend") {
          footerV1.style.display = "none";
          footerV2.style.display = "block";
          footerV2.style.animation = "";
        }
      },
      false
    );
    turn++;
  }
}

const accordion = document.getElementsByClassName("footer-nav-mobile-section");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
