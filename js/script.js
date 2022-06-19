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
//17. Other job role should be hidden when js is back on until "other" is selected under job role. (it's hidden but I haven't made it come back yet)
//18. Info on each payment method and all t shirt colors should also show when js if off
//19. be sure to  turn js back on before you submit project.



const nameInput = document.getElementById("name");
console.log(nameInput);

//the below code loads the cursor to the first line when the page is loaded.(this works)
window.onload = function() {
document.getElementById("name").focus();

}

//Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.(this works)
const otherJob = document.getElementById('other-job-role').style.visibility = "hidden";

console.log(otherJob);

// Program the "Job Role" <select> element to listen for user changes. When a change is detected, display/hide the "text field" based on the user’s selection in the drop down menu.

const jobRole = document.getElementById("title");
console.log(jobRole);

jobRole.addEventListener('change', e => {
  console.log(e.target);

  
    for ( let i = 0; i < jobRole.length; i++) {
  
          //let jobRole = otherJob[i];
          const userSelection = e.target.value;
          console.log(userSelection);

 //In the conditional, if the value of the event.target is equal to "other", display the “Other job role” field. And if the value is anything, hide it.
         
          if (e.target.value === "other") {
           document.getElementById('other-job-role').style.visibility = "visible";
          } else {
            document.getElementById('other-job-role').style.visibility = "hidden";
          }
        }

    })








// // function clicked (e) {
// //    let clicked = e.target;
// //    console.log(clicked);
// // //Listening for a change event on Job Role (not working)
// // const jobRole = document.querySelector("Job Role");
// //  jobRole = 
// //                      clicked.addEventListener('change', e => {
// //                      console.log(e.target.value);

// //                      for ( let i = 0; i < jobRole.length; i++ ) {
                      
// //                         const userRole = jobRole[i];
// //                         const userSelection = e.target.value;

// //                         console.log(jobRole);

// //                         if (userSelection === userRole) {
// //                           jobRole.classList.add("clicked");
// //                         } else {
// //                           jobRole.classList.remove("clicked");
                       
// //                         }
                        

// //                         if (jobRole === otherJob) {
// //                            display: "other job role";
// //                            //console.log(e.target.value); 
// //                         }

//                       }
                                 
//                      });
                            
                  
//                //                       `<label for="title">Job Role</label>
//                //  <select id="title" name="other-job-role"> document.querySelector('Job Role')  
//                //  input.addEventListener('change', (e) => {  
                 
//    // };`

//    //Make Other Job Role field appear if "other " is selected under Job Role

                 
  
                 
//                };
                  console.log('test')
                  console.log(nameInput)
                  console.log(otherJob)
                  console.log(addEventListener)
                            
 