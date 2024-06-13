let submitBtn = document.getElementsByClassName("submit-btn")[0];
let inputTxt = document.querySelectorAll("input");
let emptyAction = document.querySelectorAll(".form div");
let spanTabs = document.querySelectorAll(".rezult div .tab");
let yearsRezult = document.querySelector(".rezult .years");
let monthsRezult = document.querySelector(".rezult .months");
let dayRezult = document.querySelector(".rezult .days");
let date = new Date();
let newInputTest = [];

submitBtn.addEventListener("click", () => {
  checkEmpty();
  checkDay();
  checkMonth();
  checkYear();
  checkvalue();
  inputsCheck();
});

let rezultsY = document.createElement("p");
let rezultsM = document.createElement("p");
let rezultsD = document.createElement("p");
yearsRezult.prepend(rezultsY);
monthsRezult.prepend(rezultsM);
dayRezult.prepend(rezultsD);

function inputsCheck() {
  if (
    newInputTest.length == 3 &&
    !isNaN(newInputTest[0]) &&
    !isNaN(newInputTest[1]) &&
    !isNaN(newInputTest[2])
  ) {
    spanTabs.forEach((e) => {
      e.style.cssText = "display: none ";
    });

    let userBirth = `${newInputTest[1]} ${newInputTest[0]} ${newInputTest[2]}`;
    let currentDate = new Date().getTime();
    let birthDate = new Date(userBirth).getTime();
    let diffrentDate = currentDate - birthDate;
    rezultsY.textContent = Math.floor(
      diffrentDate / (1000 * 60 * 60 * 24 * 365)
    );
    rezultsM.textContent = Math.floor(
      (diffrentDate % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
    );
    rezultsD.textContent = Math.floor(
      (diffrentDate % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
    );
  }
}

function checkvalue() {
  for (let i = 0; i < inputTxt.length; i++) {
    if (
      inputTxt[i].value &&
      !inputTxt[i].parentElement.classList.contains("not-valid")
    ) {
      newInputTest[i] = inputTxt[i].value;
    }
  }
}

function checkEmpty() {
  for (let i = 0; i < inputTxt.length; i++) {
    if (inputTxt[i].value) {
      inputTxt[i].parentElement.classList.remove("empty");
    } else {
      inputTxt[i].parentElement.classList.add("empty");
    }
  }
}

function checkDay() {
  if (inputTxt[0].value) {
    if (inputTxt[0].value >= 1 && inputTxt[0].value < 32) {
      inputTxt[0].parentElement.classList.remove("not-valid");
    } else {
      inputTxt[0].parentElement.classList.add("not-valid");
    }
  }
}

function checkMonth() {
  if (inputTxt[1].value) {
    if (inputTxt[1].value >= 1 && inputTxt[1].value < 13) {
      inputTxt[1].parentElement.classList.remove("not-valid");
    } else {
      inputTxt[1].parentElement.classList.add("not-valid");
    }
  }
}

function checkYear() {
  if (inputTxt[2].value) {
    if (
      inputTxt[2].value >= 2 &&
      inputTxt[2].value < new Date().getFullYear()
    ) {
      inputTxt[2].parentElement.classList.remove("not-valid");
    } else {
      inputTxt[2].parentElement.classList.add("not-valid");
    }
  }
}

document.onkeyup = function (e) {
  if (e.key === "Enter") {
    checkEmpty();
    checkDay();
    checkMonth();
    checkYear();
    checkvalue();
    inputsCheck();
  }
};
