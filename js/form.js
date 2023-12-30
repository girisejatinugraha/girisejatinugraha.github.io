function submitForm(event) {
  event.preventDefault(); 

  var fullName = document.getElementById('fullName').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('msg').value;

  if (!fullName || !email || !phone || !message) {
      alert("Please fill in all form fields.");
      return;
  }

  var successMessage = "Your message was sent successfully.";

  alert(successMessage);
  document.querySelector('.formSubmit').reset();
}