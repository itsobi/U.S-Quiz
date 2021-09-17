
function checkQuiz() {
    let q1 = document.getElementsByName("question1");
    let q2 = document.getElementsByName("question2");
    let q3 = document.getElementsByName("question3");
    let display1 = document.getElementById("one-result");
    let display2 = document.getElementById("two-result");
    let display3 = document.getElementById("three-result");

   if(q1[1].checked) {
       display1.innerHTML = "Correct!"
   }
   else {
       display1.innerHTML = "Incorrect! George W. Bush was the 43rd President."
       display1.style.color = "red";
   }
   if (q2[1].checked) {
       display2.innerHTML = "Correct!";
   }
   else {
       display2.innerHTML = "Incorrect! Alaska is the biggest state in the U.S."
       display2.style.color = "red";
   }
   if (q3[3].checked) {
       display3.innerHTML = "Correct!"
   }
   else {
       display3.innerHTML = "Incorrect! There are 50 stars on the American Flag."
       display3.style.color = "red";
   }

}

function resetQuiz() {
    window.location.reload();
}