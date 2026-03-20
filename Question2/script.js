
const paypal = document.getElementById("PayPal");
const cardFields = [
  document.getElementById("cardNumber"),
  document.getElementById("expiry"),
  document.getElementById("cvv")
];

document.querySelectorAll("input[name='payment']").forEach(radio => {
  radio.addEventListener("change", function () {
    if (paypal.checked) {
      cardFields.forEach(field => field.disabled = true);
    } else {
      cardFields.forEach(field => field.disabled = false);
    }
  });
});

    

// Shipping address toggle
const sameBillingCheckbox = document.getElementById("sameBilling");
const shippingFields = document.getElementById("shippingFields");

sameBillingCheckbox.addEventListener("change", function () {
    if (sameBillingCheckbox.checked) {
        shippingFields.style.display = "none";
    } else {
        shippingFields.style.display = "block";
    } 
});


//Form Validation 

const NameInput = document.getElementById('Name');
const addressInput = document.getElementById('address');
const stateInput = document.getElementById('state');
const zipInput = document.getElementById('zip');
const countryInput = document.getElementById('country');

NameInput.addEventListener('input', function () {
  const typedValue = NameInput.value.toLowerCase();

  if (typedValue.length === 0) {
    NameInput.setCustomValidity('Please enter your Full Name.');
  } 
  else if (typedValue.length < 5) {
    NameInput.setCustomValidity('Name must be at least 5 characters.');
  } 
  else if (typedValue.includes('admin')) {
    NameInput.setCustomValidity('Name cannot include "admin".');
  } 
  else {
    NameInput.setCustomValidity('');
  }
  NameInput.reportValidity();
});

addressInput.addEventListener('input', function (){
   if (addressInput.value.trim().length === 0){
    addressInput.setCustomValidity('Please enter your address.');
  }else {
    addressInput.setCustomValidity('');
  }
    addressInput.reportValidity();
});

stateInput.addEventListener('input', function (){
   if (stateInput.value.trim().length === 0){
    stateInput.setCustomValidity('Please enter your state.');
  }else {
    stateInput.setCustomValidity('');
  }
    stateInput.reportValidity();
});

zipInput.addEventListener('input', function () {
  const zip = zipInput.value.trim();

  if (zip.length === 0) {
    zipInput.setCustomValidity('Please enter your postal/zip code.');
  }  
  else if (!/[a-zA-Z]/.test(zip) || !/[0-9]/.test(zip)) {
    zipInput.setCustomValidity('Zip code must include both letters and numbers.');
  } 
  else {
    zipInput.setCustomValidity('');
  }
  zipInput.reportValidity();
});
  
countryInput.addEventListener('change', function () {
  if (countryInput.value.trim() === '') {
    countryInput.setCustomValidity('Please select a country.');
  } else {
    countryInput.setCustomValidity('');
  }
  countryInput.reportValidity();
});

//Email Regex 
const form = document.getElementById('form');
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', function () {

  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue.length === 0) {
    emailInput.setCustomValidity('Please enter your email address.');
  } 
  else if (!emailRegex.test(emailValue)) {
    emailInput.setCustomValidity('Please enter a valid email address (e.g., name@example.com).');
  } 
  else {
    emailInput.setCustomValidity('');
  }

  emailInput.reportValidity(); 
});



if (!form.checkValidity()){
  form.reportValidity();
}else{
  console.log('Form is valid! Submitting.....');
  alert('Payment submitted successfully!');
  form.requestFullscreen();
}

