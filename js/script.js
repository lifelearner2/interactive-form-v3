//1. Code should check fields to make sure they contain correct info and display and error if they don't. (use validator)
//2. When form first loads the cursor should automatically focus on the first text field. (Done with focus method)
//3. as user makes selections - the form should update accordingly - as they chose design for shirt, the color options for that shirt will be listed in teh drop down menu next to that selection,
//4. as users register for conf activities the total cost should be highlighted below the list of activities.
//5. When they select an activity that conflicts with another activity, the conflicting activity should be grayed out.
//6. Can pick different payment options. Based on what they select a different message will appear at the bottom of the page.
//7. if they submit form and haven't provided all the necessary info, messages will appear letting them know what they missed (highlighted in red or messaging such as "name field is required")
//8. Provide these messages/validation to the name, email, activity, and credit card fields.
//9. Check all the fields at once for valid info rather than one at a time.
//10. credit card field should check that only numbers have been entered. Number needs to be 13-16 digits (13 and more and 16 and fewer)
//11. Zip code - a five digit number needs to be entered/checked for and a 3 digit number for CVV.
//12. Form should only check for valid credit card errors when that's the payment option that's been chosen.
//13. Make sure when filled out correctly that the page refreshes and resets all the fields.
//14. when JS is unavailable or disabled - all hidden info and form fields should be visible and available to be filled out.
//15. To temp disable JS - open chrome dev tools and click on the setting wheel, then under preferences scroll down to debugger and click on disable javaScript.
//16. when you refresh browser while js disabled you will see a red symbol at top right in search box and the hidden field (other job role) will appear.
//17. Other job role should be hidden when js is back on until "other" is selected under job role. (DONE)
//18. Info on each payment method and all t shirt colors should also show when js if off
//19. be sure to  turn js back on before you submit project.


//basic info/name section:
const nameInput = document.getElementById("name");
//console.log(nameInput);

//the below code loads the cursor to the first line when the page is loaded.(this works) window.onload loads this function upon page refresh
window.onload = function() {
document.getElementById("name").focus();
}

//job role section:
//Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.(this works)
const otherJob = document.getElementById('other-job-role').style.visibility = "hidden";
//console.log(otherJob);

// Program the "Job Role" <select> element to listen for user changes. When a change is detected, display/hide the "text field" based on the user’s selection in the drop down menu.
const jobRole = document.getElementById("title");
//console.log(jobRole);

//listening for a change event on the jobRole 
jobRole.addEventListener('change', e => {
  //console.log(e.target);

  
    for ( let i = 0; i < jobRole.length; i++) {
          const userSelection = e.target.value;
          //console.log(userSelection);
          //console.log(e.target.value);
 //In the conditional, if the value of the event.target is equal to "other", display the “Other job role” field. And if the value is anything else, hide it.
       //I could not use the variable name otherJob since when I declared it I also hid it so I had to use it's values.
          if (e.target.value === "other") {
           document.getElementById('other-job-role').style.visibility = "visible";
          } else {
            document.getElementById('other-job-role').style.visibility = "hidden";
          }
        }
    })

//t-shirt section:
//declaring variables and showing what they hold. Using querySelector to select an element that has multiple values
let shirtSizes = document.querySelector('#shirt-sizes');
let shirtDesigns = document.querySelector('#shirt-designs');
let shirtColors = document.querySelector('#color');
let shirtColorOptions = shirtColors.children;
 
console.log(shirtColorOptions)
// console.log(jsPuns)
// console.log(heartJs)

//disabling the colors from showing at start of page
shirtColors.disabled = true; 

//listen for a change event on shirtDesigns section like selecting from drop down menu.
//enable the shirtColor section once a design theme is selected
shirtDesigns.addEventListener('change', e=> {
  shirtColors.disabled = false;
  //console.log(e.target);

 
  //if the designSelected is jsPuns then show the jsPuns colors and hide the others. Adding children allows the console.log to print the actual selected item for designSelected.
  for ( let i = 0; i < shirtColorOptions.length; i++)  {
    
    const designSelected  = e.target.value;
    const designThemes = shirtColorOptions[i].getAttribute('data-theme');
    console.log(designThemes);
    console.log(designSelected);

    //if value of what the user clicked matches the value of the design theme then we will show those colors that match and hide the ones that don't.
    if (e.target.value === designThemes) {
      shirtColorOptions[i].hidden = false;
      shirtColorOptions[i].selected = true;
      //or else if not matching keep them hidden and unable to select.
  } else {
      shirtColorOptions[i].hidden = true;
      shirtColorOptions[i].selected = false;
  
  }
 
  
  }

})

   //Register for Activities Section
   //Logging two variables - "fieldset(register for activities)" and "p (total)"               


   //creating a variable to store total cost and give it initial value of 0.


//Use the fieldset/register variable already created  to do the change/event listener

//inside e listener create variable to store "data cost" get.attribute of the e.target - getting cost of each item 


 //note: computer will not read numbers as a number when it's in a "string of quotes" so you need to use the unary plus sign operator to make it read as a number.
 //to test: log variable and log a second time with "typeOf" operator to ensure it's being read as a number. 
 //You need to first select it in register section to print to console.
 
 //inside e listener create if/else to listen if it was checked or unchecked. Use "check property"

 //if checked - add the data cost of the selection to the total variable that was created earlier.
//if unchecked - then subtract the data cost. Test by logging out total cost variable as well as checked property of e. target. You need to select activities to see it.


//update the innerHTML of the total p element (p element name.innerHTML = template literal )

 //example: activitiesTotalCostElement.textContent= `Total: $${activitiesTotalCost}`; This has two $$ because one is for the ${} and the other $ is for the literal dollar amount - the amount of the cost will be inside.

 