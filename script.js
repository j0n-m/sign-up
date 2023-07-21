const form = document.querySelector("#main-form");

form.addEventListener("submit", validateForm);

function validateForm(e) {
  const passwordField = document.querySelector("#password");
  const confirmPasswordField = document.querySelector("#confirmpassword");
  const errorParagraph = document.querySelector(".error-message");
  // const inputFieldList = document.querySelectorAll("form input");
  // let abort = false;

  // inputFieldList.forEach(node => {
  //   if (!node.value) {
  //     e.preventDefault();
  //     return;
  //   }
  // });

  // if (abort) return;
  errorParagraph.textContent = "";
  if (passwordField.value !== confirmPasswordField.value) {
    const errorMessage = "*Passwords do not match";
    errorParagraph.textContent = errorMessage;
    e.preventDefault();
    return;
  }
}