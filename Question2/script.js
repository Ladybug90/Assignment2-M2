
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