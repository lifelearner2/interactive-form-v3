//Unit 3 Project: Interactive Forms
//BASIC INFO/NAME SECTION:
const nameInput = document.getElementById("name");

//The window.onload code loads the cursor to the first line/name section when the page is loaded or refreshed.
window.onload = function () {
  document.getElementById("name").focus();
};

//JOB ROLE SECTION:
//Hiding the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.
const otherJob = (document.getElementById("other-job-role").style.visibility = "hidden");
const jobRole = document.getElementById("title");

//listening for a change event on the jobRole to either display/hide the text field based on users selection.
jobRole.addEventListener("change", (e) => {
  for (let i = 0; i < jobRole.length; i++) {
    const userSelection = e.target.value;
    
//The conditional below reads: if the value of the event.target is equal to "other", display the “Other job role” field. And if the value is anything else, hide it.
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

//disabling the shirt color options from showing at start of page
shirtColors.disabled = true;

//listening for a change event on shirtDesigns section, such as a selection from drop down menu.
//enabling the shirtColor section once a design theme is selected
shirtDesigns.addEventListener("change", (e) => {
  shirtColors.disabled = false;
 
//below: depending on the designSelected then show the matching colors and hide the others.
//Adding children allows the console.log prints the actual selected item for designSelected.
  for (let i = 0; i < shirtColorOptions.length; i++) {
    const designSelected = e.target.value;
    const designThemes = shirtColorOptions[i].getAttribute("data-theme");
    
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

//REGISTER FOR ACTIVITIES SECTION:
//Logging two variables - "fieldset(register for activities)" and "p (total)"
const registerForActivities = document.querySelector("#activities-box");
const activitiesCost = document.querySelector(".activities-cost");

//creating a variable to store total cost and give it initial value of 0. Using the word let since the value of this variable will eventually change.
let totalCost = 0;

//Using the fieldset/register variable already created to do the change/event listener
registerForActivities.addEventListener("change", (e) => {
//inside e listener, creating variable to store "data cost" get.attribute of the e.target - getting cost of each item
  let dataCost = e.target.getAttribute("data-cost");

//turning dataCost from a string to a number with unary plus operator
  dataCost = +dataCost;
  
//note: computer will not read numbers as a number when it's in a "string of quotes" so you need to use the unary plus sign operator to make it read as a number.
//to test: log variable and log a second time with "typeof" operator to ensure it's being read as a number.
//You need to first select it in register section to print to console. Keeping this note and console for future reference.
  //console.log(typeof dataCost);

//inside e listener create if/else to listen if it was checked or unchecked. Use "check property"
//if checked - adding the data cost of the selection to the total variable that was created earlier.
//if unchecked - then subtracting the data cost.
//Test by logging out total cost variable as well as checked property of e. target. You need to select activities to see it.
//The totalCost is now the sum of totalCost and dataCost else - totalCost is minus the dataCost if unchecked.
  if (e.target.checked) {
    totalCost += dataCost;
  } else {
    totalCost -= dataCost;
  }

//update the innerHTML of the total p element (p element name.innerHTML = template literal )
//This has two $$ because one is for the ${} and the other $ is for the literal dollar amount - the amount of the cost will be inside and it will be a number since we converted dataCost from a string.
  activitiesCost.innerHTML = `Total: $${totalCost}`;
});

//PAYMENT INFO SECTION:
//created variables to reference paymentType, creditCard, paypal and bitcoin. 
let paymentType = document.getElementById("payment");
let creditCard = document.querySelector(".credit-card");
let paypal = document.getElementById("paypal");
let bitcoin = document.getElementById("bitcoin");

//used paypal and bitcoin variables to hide when page loads
paypal = document.querySelector(".paypal").style.display = "none";
bitcoin = document.querySelector(".bitcoin").style.display = "none";

//used paymentType to target the second child and give it the selected property. Used .children property and setAttribute method.
//I'm selecting the second child of paymentType with the number one. Zero is "select method", one gives credit card and two and three give the others.
//Selecting this (and using the word 'selected'(this equals credit card on html) makes credit card appear as a default when page is loaded.
paymentType[1].setAttribute("selected", " ");

//used paymentType variable to listen for a change event - when detected, it displays the div element w/id that matches the value of the e.target and hides the other two div elements.
//I created an event listener to listen for any changes on the paymentType.
//I created a conditional statement if paypal is clicked to show the paypal info and hide other info and repeated this for bitcoin.
//I also added another conditional statement for credit-card because if they clicked bitcoin or paypal and then wanted to go back to credit card I had to make sure the credit card info would display again and I did that with ' ' and then made the others hidden.
paymentType.addEventListener("change", (e) => {
  if (e.target.value === "paypal") {
    creditCard.style.display = "none";
    document.getElementById("paypal").style.display = "";
    document.getElementById("bitcoin").style.display = "none";
  } else {
    if (e.target.value === "bitcoin") {
      creditCard.style.display = "none";
      document.getElementById("paypal").style.display = "none";
      document.getElementById("bitcoin").style.display = "";
    } else {
      if ((e.target.value = "credit-card")) {
        creditCard.style.display = "";
        document.getElementById("paypal").style.display = "none";
        document.getElementById("bitcoin").style.display = "none";
      }
    }
  }
});

//FORM VALIDATION SECTION and Helper functions:
//used nameInput variable from earlier, created emailAddress variable, used registerForActivities variable from earlier, created cardNumber var, created zipCode var, create cvv and form variables. 
const emailAddress = document.getElementById("email");
const cardNumber = document.querySelector("#cc-num");
const zipCode = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");
const form = document.querySelector("form");

//created two functions to test if sections are valid or not.
function validationPass(element) {
  element.parentElement.classList.add("valid");
  element.parentElement.classList.remove("not-valid");
  element.parentElement.lastElementChild.style.display = "none";
}
function validationFail(element) {
  element.parentElement.classList.add("not-valid");
  element.parentElement.classList.remove("valid");
  element.parentElement.lastElementChild.style.display = "block";
}
//created another var to store results of testing the name value var that was just created.
//Used regex to establish condition that the name must contain letters and must be a first and last name.
//I updated the html hint text (in index.html) to state that name must be a first and last name rather than it just can't be blank.
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
//adding a live validator to the name field - this will give immediate feedback to user about what's required in this field.
nameInput.addEventListener("keyup", nameValidator);

//this regex will ensure that there are some characters before the @ and also after, in addition to a .com type of format.
//Keeping these console.log's as reference.
const emailValidator = () => {
  const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailAddress.value);
  if (emailIsValid) {
    validationPass(emailAddress);
    //console.log("Email value is: ", `"${emailAddress.value}"`);
  } else {
    validationFail(emailAddress);
    //console.log("this email validator prevented submission");
  }
  // console.log(
  //   `Email validation test on "${emailAddress}" evaluates to ${emailIsValid}`
  // );
  return emailIsValid;
};

//adding a live validator to the email field - this will give immediate feedback to user about what's required in this field.
emailAddress.addEventListener("keyup", emailValidator);

//this section is testing if at least one box or activity was selected. keeping my console.log for reference.
const registerValidator = () => {
  const registerSectionIsValid = totalCost > 0;
  if (registerSectionIsValid) {
    validationPass(registerForActivities);
    let totalCost = registerSectionIsValid;
    // console.log(
    //   "The activities registered section evaluates to: ",
    //   `"${totalCost}"`
    // );
  } else {
    validationFail(registerForActivities);
    // console.log(`This registration validator prevented submission`);
  }
  // console.log(
  //   `Register for activities section validation test evaluates to ${registerSectionIsValid}`
  // );
  return registerSectionIsValid;
};

//this section ensures that the credit card number will be 13 to 16 digits.Keeping console logs as reference.
const creditCardValidator = () => {
  const creditCardSectionIsValid = /^[0-9]{13,16}$/.test(cardNumber.value);
  if (creditCardSectionIsValid) {
    validationPass(cardNumber);
    // console.log("Credit Card entered is: ", `"${cardNumber.value}"`);
  } else {
    validationFail(cardNumber);
    // console.log(`This credit card validator prevented submission`);
  }
  // console.log(
  //   `Credit card section validation test evaluates to ${creditCardSectionIsValid}`
  // );
  return creditCardSectionIsValid;
};
//this regex tests to ensure that the zip code entry is 5 digits. Keeping console.logs for reference.
const zipCodeValidator = () => {
  const zipCodeIsValid = /^[0-9]{5}$/.test(zipCode.value);
  if (zipCodeIsValid) {
    validationPass(zipCode);
    // console.log("Zip code entered is: ", `"${zipCode.value}"`);
  } else {
    validationFail(zipCode);
    // console.log(`This zip code validator prevented submission`);
  }
  // console.log(`Zip code section validation test evaluates to ${zipCode.value}`);
  return zipCodeIsValid;
};

//the cvv regex tests to see if there are 3 digits entered. Keeping console.logs for reference.
const cvvValidator = () => {
  const cvvIsValid = /^[0-9]{3}$/.test(cvv.value);
  if (cvvIsValid) {
    validationPass(cvv);
    // console.log("CVV entered is: ", `"${cvv.value}"`);
  } else {
    validationFail(cvv);
    // console.log(`This cvv validator prevented submission`);
  }
  // console.log(`cvv section validation test evaluates to ${cvv.value}`);
  return cvvIsValid;
};

//using form variable to listen for the submit event. Commented out this preventDefault to allow form to submit if correct.
form.addEventListener("submit", (e) => {
  // console.log("submit handler is working");
  //e.preventDefault();

  //In below section: if these validators are not validated then the event.preventDefault() will not allow for the form to submit.
  if (!nameValidator()) {
    // console.log("Invalid name prevented submission");
    e.preventDefault();
  }

  if (!emailValidator()) {
    // console.log("Invalid email prevented submission");
    e.preventDefault();
  }

  if (!registerValidator()) {
    // console.log("Invalid registration prevented submission");
    e.preventDefault();
  }
 
  if (paymentType.value === "credit-card") {
    if (!creditCardValidator()) {
      // console.log("Invalid credit card prevented submission");
      e.preventDefault();
    }

    if (!zipCodeValidator()) {
      // console.log("Invalid zip code prevented submission");
      e.preventDefault();
    }

    if (!cvvValidator()) {
      // console.log("Invalid cvv prevented submission");
      e.preventDefault();
    }
  }
});

//ACCESSIBILITY SECTION:
//creating var to ref activities 
const activitiesCheckbox = document.querySelectorAll("#activities input");

//used var above to loop over the activities' checkboxes.
//added focus and blur events so when you click on a box it's outlined in blue.
for (let i = 0; i < activitiesCheckbox.length; i++) {
  activitiesCheckbox[i].addEventListener("focus", (e) => {
    activitiesCheckbox[i].parentElement.classList.add("focus");
  });
  activitiesCheckbox[i].addEventListener("blur", (e) => {
    const active = document.querySelector(".focus");
    active.classList.remove("focus");
  });
};
