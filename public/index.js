const send = () => {
  var windowName = 'userConsole'; 
var popUp = window.open(window.location.replace(
  "https://www.google.com/maps/search/" +
    document.getElementById("address").value
), windowName );
if (popUp == null || typeof(popUp)=='undefined') {  
    alert('Please disable your pop-up blocker and try again.'); 
} 
else {  
    popUp.focus();
}
};



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
      document.getElementById("results").classList = "mt-3 mb-3 card";

      document.getElementById("firstnameResult").innerHTML =
        "First Name: " + document.getElementById("firstname").value;

      document.getElementById("lastnameResult").innerHTML =
        "Last Name: " + document.getElementById("lastname").value;

      document.getElementById("addressResult").innerHTML =
        "Address: " + document.getElementById("address").value;
      document.getElementById("zipResult").innerHTML =
        "Zip Code: " + document.getElementById("zip").value;
      
      document.getElementById("dobResult").innerHTML =
        "Date of Birth: " + document.getElementById("dob").value;

      document.getElementById("eduResult").innerHTML =
        "Education Level: " + document.getElementById("edu").value;
      if (
        document.getElementById("feet").value.trim() !== "" &&
        document.getElementById("inches").value.trim() !== ""
      ) {
        document.getElementById("heightResult").innerHTML =
          "Height: " +
          document.getElementById("feet").value +
          " feet and " +  
          document.getElementById("inches").value +
          " inches";
      }

      document.getElementById("phoneResult").innerHTML =
        "Phone: " + document.getElementById("phone").value;

      document.getElementById("emailResult").innerHTML =
        "Email: " + document.getElementById("email").value;
    }
  };
};
