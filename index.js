const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn")
const containerBtns = document.getElementById("modal-choice-btns")

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function (event) {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const consentFormData = new FormData(consentForm)
//   console.log(consentFormData)
  const name = consentFormData.get('fullName')
  const email = consentFormData.get('email')
  console.log(name, email)



  console.log("form submitted");
  modalText.innerHTML = `<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>`;
  setTimeout(function () {
    document.getElementById("uploadText").textContent = `Making the sale... `;
  }, 1500);

  setTimeout(function(){
    modalCloseBtn.disabled = false
    document.getElementById('modal-inner').innerHTML = `
    <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
`
}, 3000)
});

declineBtn.addEventListener('mouseenter', function() {
    console.log('hovered')
    containerBtns.classList.toggle('reverse')
})



