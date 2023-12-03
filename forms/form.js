const scriptURL = "https://script.google.com/macros/s/AKfycbygAGx_yG6CCJM5tplIYzPphiTesr5-rcklwgEh0eqs_bNWU5sm5Q-HemgLulCkup_2zg/exec";
const form = document.forms["contact-form"];

let forms = document.querySelectorAll(".php-email-form");
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
