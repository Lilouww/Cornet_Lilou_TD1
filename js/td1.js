"use strict";

// M413 - TD1
let message = "JavaScript is ok :)";
// alert( message);
console.log(message);

function onLoad() {
  console.log("In onLoad() function…");
  defineHeading1();
  defineHeading2();
  defineHeading3();
  defineHeading4();
  swapInnerHTML();
  dateAlter();
  updateClock1();
  updateClock2();
  updateGraphicClock();
  changeColor();
}
function defineHeading1() {
  document.title = document.getElementById("title").textContent;
}
function defineHeading2() {
  document.title = document.querySelector("h2").textContent;
}
function defineHeading3() {
  var v = document.querySelectorAll("h2");
  if (v.length == 0) {
    document.title = "Cornet Lilou";
  } else {
    document.title = document.querySelectorAll("h2")[v.length - 1].textContent;
  }
}
function defineHeading4() {
  var v = document.getElementsByClassName("firstOrLast");
  if (v.length % 2 == 0) {
    document.title =
      document.getElementsByClassName("firstOrLast")[0].textContent;
  } else {
    document.title =
      document.getElementsByClassName("firstOrLast")[v.length - 1].textContent;
  }
}
function swapInnerHTML() {
  var v = document.querySelectorAll("p");
  var tmp = v[0].innerHTML;
  document.querySelectorAll("p")[0].innerHTML = v[1].innerHTML;
  document.querySelectorAll("p")[1].innerHTML = tmp;
}
function dateAlter() {
  var date = new Date(document.lastModified);
  var options = { weekday: "long" };
  var v = new Intl.DateTimeFormat("fr-FR", options).format(date);
  var options1 = { month: "long" };
  var v1 = new Intl.DateTimeFormat("fr-FR", options1).format(date);
  document.getElementById("update-date").textContent =
    "Dernière modification : le " +
    v +
    " " +
    date.getDate() +
    " " +
    v1 +
    " " +
    date.getFullYear() +
    " par " +
    document.querySelector("meta[name='author']").getAttribute("content");
}
function getNbDays() {
  var date = Date.now();
  var difference = new Date("July 19,2023").getTime() - date;
  var nb = Math.floor(difference / (1000 * 60 * 60 * 24));
  document.getElementById("nbjoursrestants").textContent =
    "il reste " + nb + " jours avant le 19 juillet 2023";
  if (nb == 1) {
    document.getElementById("nbjoursrestants").textContent =
      "il reste " + nb + " jour avant le 19 juillet 2023";
  }
}

function updateClock1() {
  window.setInterval(() => {
    var date = new Date();
    document.getElementById("clock").textContent =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }, 1000);
}

function updateClock2() {
  window.setTimeout(() => {
    var date = new Date();
    document.getElementById("clock").textContent =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }, 1000);
}
function updateGraphicClock() {
  window.setInterval(() => {
    var heure1 = Math.floor(new Date().getHours() / 10);
    var heure2 = new Date().getHours() % 10;
    var minute1 = Math.floor(new Date().getMinutes() / 10);
    var minute2 = new Date().getMinutes() % 10;
    var seconde1 = Math.floor(new Date().getSeconds() / 10);
    var seconde2 = new Date().getSeconds() % 10;
    document.getElementById("graphic-clock").innerHTML = `
			<img src="assets/images/${heure1}.gif" alt="${heure1}">
			<img src="assets/images/${heure2}.gif" alt="${heure2}">
			<p>:</p>
			<img src="assets/images/${minute1}.gif" alt="${minute1}">
			<img src="assets/images/${minute2}.gif" alt="${minute2}">
			<p>:</p>
			<img src="assets/images/${seconde1}.gif" alt="${seconde1}">
			<img src="assets/images/${seconde2}.gif" alt="${seconde2}">
		  `;
  }, 1000);
}
function changeColor() {
  var nb = document.getElementById("text");
  nb.addEventListener("input", function () {
    if (isNaN(nb.value)) {
      nb.classList.remove("green");
      nb.classList.add("red");
    } else if (nb.value === "") {
      nb.classList.remove("red");
      nb.classList.remove("green");
    } else {
      nb.classList.remove("red");
      nb.classList.add("green");
    }
  });
}
for (let i = 0; i < document.getElementsByClassName("img").length; i++) {
  document.getElementsByClassName("img")[i].innerHTML = `
    <img src="assets/images/plus.gif" alt="+">
    `;
}
function scrollingMenu(event) {
  for (let i = 0; i < document.getElementsByClassName("img").length; i++) {
    if (document.getElementsByClassName("img")[i] === event.target) {
      document.getElementsByClassName("img")[
        i
      ].innerHTML = `<img src="assets/images/minus.gif" alt="-">`;
      for (let j = 0; j < document.querySelectorAll("li").length; j++) {
        document.querySelectorAll("li")[j].style.display = "block";
      }
    }
  }
}
