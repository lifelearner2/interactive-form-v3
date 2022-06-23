//To temp disable JS - open chrome dev tools and click on the setting wheel, then under preferences scroll down to debugger and click on disable javaScript.

//BASIC INFO/NAME SECTION:
const nameInput = document.getElementById("name");
console.log(nameInput);

//The window.onload code loads the cursor to the first line/name section when the page is loaded or refreshed.
window.onload = function () {
  document.getElementById("name").focus();
};

//JOB ROLE SECTION:
//Hiding the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.

const otherJob = (document.getElementById("other-job-role").style.visibility = "hidden");
console.log(otherJob);

const jobRole = document.getElementById("title");
console.log(jobRole);

//listening for a change event on the jobRole to either display/hide the text field based on users selection.
jobRole.addEventListener("change", (e) => {
  console.log(e.target);

  for (let i = 0; i < jobRole.length; i++) {
    const userSelection = e.target.value;
    console.log(userSelection);
    console.log(e.target.value);

    //The conditional below: if the value of the event.target is equal to "other", display the “Other job role” field. And if the value is anything else, hide it.
    //I could not use the variable name otherJob since when I declared it I also hid it, so I had to use it's values.
    if (e.target.value === "other") {
      document.getElementById("other-job-role").style.visibility = "visible";
    } else {
      document.getElementById("other-job-role").style.visibility = "hidden";
    }
  }
});

//T-SHIRT SECTION:
//declaring variables and showing what values they hold. Using querySelector to select an element that has multiple values
let shirtSizes = document.querySelector("#shirt-sizes");
let shirtDesigns = document.querySelector("#shirt-designs");
let shirtColors = document.querySelector("#color");
let shirtColorOptions = shirtColors.children;

console.log(shirtColorOptions);

//disabling the shirt color options from showing at start of page
shirtColors.disabled = true;

//listening for a change event on shirtDesigns section, such as a selection from drop down menu.
//enabling the shirtColor section once a design theme is selected
shirtDesigns.addEventListener("change", (e) => {
  shirtColors.disabled = false;
  console.log(shirtDesigns);

  //below: if the designSelected is jsPuns then show the jsPuns colors and hide the others.
  //Adding children allows the console.log prints the actual selected item for designSelected.
  for (let i = 0; i < shirtColorOptions.length; i++) {
    const designSelected = e.target.value;
    const designThemes = shirtColorOptions[i].getAttribute("data-theme");
    console.log(designThemes);
    console.log(designSelected);

    //if value of what the user clicked matches the value of the design theme, show those colors that match and hide the ones that don't.
    if (e.target.value === designThemes) {
      shirtColorOptions[i].hidden = false;
      shirtColorOptions[i].selected = true;
      //or else if not matching keep them hidden and unable to select.
    } else {
      shirtColorOptions[i].hidden = true;
      shirtColorOptions[i].selected = false;
    }
  }
});

//REGISTER FOR ACTIVITIES SECTION
//Logging two variables - "fieldset(register for activities)" and "p (total)"
const registerForActivities = document.querySelector("#activities-box");
const activitiesCost = document.querySelector(".activities-cost");

console.log(registerForActivities);
console.log(activitiesCost);

//creating a variable to store total cost and give it initial value of 0.
let totalCost = 0;

//Using the fieldset/register variable already created  to do the change/event listener
registerForActivities.addEventListener("change", (e) => {
  //inside e listener, creating variable to store "data cost" get.attribute of the e.target - getting cost of each item
  let dataCost = e.target.getAttribute("data-cost");

  //turning dataCost from a string to a number with unary plus operator
  dataCost = +dataCost;
  console.log(dataCost);

  //note: computer will not read numbers as a number when it's in a "string of quotes" so you need to use the unary plus sign operator to make it read as a number.
  //to test: log variable and log a second time with "typeOf" operator to ensure it's being read as a number.
  //You need to first select it in register section to print to console.
  console.log(typeof dataCost);

  //inside e listener create if/else to listen if it was checked or unchecked. Use "check property"
  //if checked - adding the data cost of the selection to the total variable that was created earlier.
  //if unchecked - then subtracting the data cost.
  //Test by logging out total cost variable as well as checked property of e. target. You need to select activities to see it.
  if (e.target.checked) {
    totalCost += dataCost;
  } else {
    totalCost -= dataCost;
    console.log(totalCost);
    console.log(e.target);
    console.log(dataCost);
  }

  //update the innerHTML of the total p element (p element name.innerHTML = template literal )
  //example: activitiesTotalCostElement.textContent= `Total: $${activitiesTotalCost}`;
  //This has two $$ because one is for the ${} and the other $ is for the literal dollar amount - the amount of the cost will be inside.
  activitiesCost.innerHTML = `Total: $${totalCost}`;
});

//PAYMENT INFO SECTION:
//created variables to reference paymentType, creditCard, paypal and bitcoin. Log to console.
let paymentType = document.getElementById("payment");
let creditCard = document.querySelector(".credit-card-box");
let paypal = document.getElementById("paypal");
let bitcoin = document.getElementById("bitcoin");

console.log(paymentType);
console.log(creditCard);
console.log(paypal);
console.log(bitcoin);

//use paypal and bitcoin variables to hide when page loads
paypal = document.querySelector(".paypal").style.visibility = "hidden";
bitcoin = document.querySelector(".bitcoin").style.visibility = "hidden";

//used paymentType to target the second child and give it the selected property. Use .children property and setAttribute method.
//I'm selecting the second child of paymentType with the number one. Zero is "select method", one gives credit card and two and three give the others.
//Selecting this (and using the word 'selected'(this equals credit card on html) makes credit card appear as a default when page is loaded.
paymentType[1].setAttribute("selected", " ");

//used paymentType variable to listen for a change event - when detected, displaying the div element w/id that matches the value of the e.target and hiding the other two div elements.
//I created an event listener to listen for any changes on the paymentType.
//I created a conditional statement if paypal is clicked to show the paypal info and hide other info and repeated this for bitcoin.
//I also added another conditional statement for credit-card because if they clicked bitcoin or paypal and then wanted to go back to credit card I had to make sure the credit card info would display again and I did that with ' ' and then made the others hidden.
paymentType.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    creditCard.style.display = "none";
    document.getElementById("paypal").style.visibility = "visible";
    document.getElementById("bitcoin").style.visibility = "hidden";
  } else {
    if (e.target.value === "bitcoin") {
      creditCard.style.display = "none";
      document.getElementById("paypal").style.visibility = "hidden";
      document.getElementById("bitcoin").style.visibility = "visible";
    } else {
      if ((e.target.value = "credit-card")) {
        creditCard.style.display = "";
        document.getElementById("paypal").style.visibility = "hidden";
        document.getElementById("bitcoin").style.visibility = "hidden";
      }
    }
  }
});

//FORM VALIDATION SECTION
//used nameInput variable from earlier, created emailAddress variable, used registerForActivities variable from earlier, created cardNumber var, created zipCode var, create cvv and form variables. Log out.
const emailAddress = document.getElementById("email");
const cardNumber = document.querySelector("#cc-num");
const zipCode = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");
const form = document.querySelector("form");
console.log(form);
console.log(emailAddress);
console.log(cardNumber);
console.log(zipCode);
console.log(cvv);
console.log(form);

//created two functions to test if sections are valid or not.
function validationPass(element) {
  element.parentElement.classList.add("valid");
  element.parentElement.classList.remove("not-valid");
  element.parentElement.lastElementChild.style.display = "none";
  console.log(element.lastElementChild);
}
console.log(validationPass);

function validationFail(element) {
  element.parentElement.classList.add("not-valid");
  element.parentElement.classList.remove("valid");
  element.parentElement.lastElementChild.style.display = "block";
}
console.log(validationFail);

//created another var to store results of testing the name value var that was just created.
//Used regex to establish condition that the name must contain letters and accepts first and last name.
//This var will equal true if the test passes, false otherwise.
const nameValidator = () => {
  const nameIsValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(nameInput.value);
  if (nameIsValid) {
    validationPass(nameInput);
    console.log("Name value is: ", `"${nameInput.value}"`);
  } else {
    validationFail(nameInput);
    console.log("this name validator prevented submission");
  }
  return nameIsValid;
};

//this regex will ensure that there are some characters before the @ and also after, in addition to a .com type of format.
const emailValidator = () => {
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailAddress.value);
  if (emailIsValid) {
    validationPass(emailAddress);
    console.log("Email value is: ", `"${emailAddress.value}"`);
  } else {
    validationFail(emailAddress);
    console.log("this email validator prevented submission");
  }
  console.log(
    `Email validation test on "${emailAddress}" evaluates to ${emailIsValid}`
  );
  return emailIsValid;
};

//this section is testing if at least one box or activity was selected.
const registerValidator = () => {
  const registerSectionIsValid = totalCost > 0;
  if (registerSectionIsValid) {
    validationPass(registerForActivities);
    let totalCost = registerSectionIsValid;
    console.log(
      "The activities registered section evaluates to: ",`"${totalCost}"`
    );
  } else {
    validationFail(registerForActivities);
    console.log(`This registration validator prevented submission`);
  }
  console.log(
    `Register for activities section validation test evaluates to ${registerSectionIsValid}`
  );
  return registerSectionIsValid;
};

//this section ensures that the credit card number will be 13 to 16 digits.
const creditCardValidator = () => {
  const creditCardSectionIsValid = /^[0-9]{13,16}$/.test(cardNumber.value);
  if (creditCardSectionIsValid) {
    validationPass(cardNumber);
    console.log("Credit Card entered is: ", `"${cardNumber.value}"`);
  } else {
    validationFail(cardNumber);
    console.log(`This credit card validator prevented submission`);
  }
  console.log(
    `Credit card section validation test evaluates to ${creditCardSectionIsValid}`
  );
  return creditCardSectionIsValid;
};
//remember: credit card fields should only be validated if "credit card" is the selected payment method.

//this regex tests to ensure that the zip code entry is 5 digits.
const zipCodeValidator = () => {
  const zipCodeIsValid = /^[0-9]{5}$/.test(zipCode.value);
  if (zipCodeIsValid) {
    validationPass(zipCode);
    console.log("Zip code entered is: ", `"${zipCode.value}"`);
  } else {
    validationFail(zipCode);
    console.log(`This zip code validator prevented submission`);
  }
  console.log(
    `Zip code section validation test evaluates to ${zipCode.value}`
  );
  return zipCodeIsValid;
};

//the cvv regex tests to see if there are 3 digits entered.
const cvvValidator = () => {
  const cvvIsValid = /^[0-9]{3}$/.test(cvv.value);
  if (cvvIsValid) {
    validationPass(cvv);
    console.log("CVV entered is: ", `"${cvv.value}"`);
  } else {
    validationFail(cvv);
    console.log(`This cvv validator prevented submission`);
  }
  console.log(`cvv section validation test evaluates to ${cvv.value}`);
  return cvvIsValid;
};

//using form var to listen for the submit event
form.addEventListener("submit", (e) => {
  console.log("submit handler is working");
  e.preventDefault();

  //In below section: if these validators are not validated then the event.preventDefault() will not allow for the form to submit.
  if (!nameValidator()) {
    console.log("Invalid name prevented submission");
    e.preventDefault();
  }

  if (!emailValidator()) {
    console.log("Invalid email prevented submission");
    e.preventDefault();
  }

  if (!registerValidator()) {
    console.log("Invalid registration prevented submission");
    e.preventDefault();
  }

  if (!creditCardValidator()) {
    console.log("Invalid credit card prevented submission");
    e.preventDefault();
  }

  if (!zipCodeValidator()) {
    console.log("Invalid zip code prevented submission");
    e.preventDefault();
  }

  if (!cvvValidator()) {
    console.log("Invalid cvv prevented submission");
    e.preventDefault();
  }

  // try to create a helper functions for each required field that can be called in the e.listener to do the testing and return true or false depending on whether the field is valid or not.
});

//if you added an extra e.preventDefault() for testing, remove it.
//at this point, the form should only be prevented from submitting if one or more of required form fields is invalid.
//save and refresh. form should only submit and refresh if all required fields are valid.
//be sure to  turn js back on before you submit project.Info on each payment method and all t shirt colors should also show when js if off.

//When user select an activity that conflicts with another activity, the conflicting activity should be grayed out.

//ACCESSIBILITY SECTION:
//creating var to ref activities and logging it out.
const activitiesCheckbox = document.getElementById("activities-box");
console.log(activitiesCheckbox);

//used var above to loop over the activities' checkboxes.
//added focus and blur events
for (let i = 0; i < activitiesCheckbox.length; i++) {
  activitiesCheckbox[i].addEventListener("focus", (e) => {
    activitiesCheckbox[i].parentElement.classList.add.focus;
  });
  activitiesCheckbox[i].addEventListener("blur", (e) => {
    activitiesCheckbox[i].parentElement.classList.remove.focus;
  });
}
