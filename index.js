const form = document.querySelector("form");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const country = document.getElementById("country").value;
  const zipCode = document.getElementById("zipCode").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  error.textContent = "";

  if (/[\d]/.test(country)) {
    error.textContent = "Please enter the valid data in Country";
  } else {
    if (3 <= zipCode.length && zipCode.length <= 6) {
      if (/^\d+$/.test(zipCode)) {
        if (password.length <= 16 && confirmPassword.length <= 16) {
          if (password == confirmPassword) {
            error.textContent = "Everything fine till now";
          } else {
            error.textContent = "Confirm Password does not match Password";
          }
        } else {
          error.textContent =
            "Password and Confirm Password length should be less then 17";
        }
      } else {
        error.textContent = "Please enter the valid data in Zip Code";
      }
    } else {
      error.textContent =
        "Zip Code length should be greater then 2 and less then 7";
    }
  }
});
