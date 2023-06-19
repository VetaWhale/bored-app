const NEW_TITLE = "Ура, теперь не скучно 🔥";

const wrapper = document.querySelector(".container");
const titleNode = document.querySelector(".js-title");
const textNode = document.querySelector(".js-text");
const buttonNode = document.querySelector(".js-button");

buttonNode.addEventListener("click", function () {
  fetch("https://www.boredapi.com/api/activity/")
    .then((response) => response.json())
    .then((res) => {
      let activ = res.activity;

      textNode.innerHTML = activ;
    });
  wrapper.classList.add("container-activ");
  titleNode.textContent = NEW_TITLE;
});