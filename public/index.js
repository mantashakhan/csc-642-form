const load = () => {
  document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();

    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    var confirmEmail = document.getElementById("confirmemail");

    if (phone.value < 0 || String(phone.value).length !== 7) {
      alert("Phone no must be a 7 digit positive number");
    } else if (email.value !== confirmEmail.value) {
      alert(
        "Email Addresses do not match... Please confirm your email address..."
      );
    } else if (grecaptcha.getResponse() == "") {
      alert("Please check the reCaptcha to proceed...");
    } else {
      document.getElementById("submission").classList += " hide";
      document.getElementById("submitted").classList = "card-body";
    }
  };
};
