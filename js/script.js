
const nameInput = `<input type="text" id="name"`

//const nameInput = document.querySelector("name");

//adding a focus element to highlight text fields when clicked (this works)
let name = 
                `<script type="text/javascript">
                function myFunction() {
                    document.getElementById("focus").focus();
}`
//Hide the "text field" with the id of "other-job-role" so it is not displayed when the form first loads.(this works)

const otherJob = document.getElementById('other-job-role').style.visibility = "hidden";


//Listening for a change event on Job Role (not sure if it's working)
const jobRole = 
                `<label for="title">Job Role</label>
                <select id="title" name="other-job-role"> document.querySelector('Job Role')  
                input.addEventListener('change', (e) => {  
                console.log(e.target.value);  
   });`

//Make Other Job Role field appear if "other " is selected under Job Role

//if (e.target.value === "Other") {
   // display: "other job role";
//}
  








//const jobRole = document.querySelector("Job Role");

//console.log(otherJob)

//console.log(jobRole);
//console.log(nameInput)
//console.log(name);
//console.log('test')


