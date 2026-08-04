alert('js is working correctly')
console.log("JS load")
//for user input
const  userInput = document.getElementById("userInput")
console.log(userInput)

//1.for buttons
const numberButtons = document.querySelectorAll(".number");
//2. for operators
const operatorButtons = document.querySelectorAll(".operator")
//3. for equals
const equalsTo = document.getElementById("equals")
//4. for AC
const clearValues = document.getElementById("clear")
//5. for DEL
const deleteValues = document.getElementById("delete")
numberButtons.forEach(function (button) {
    button.addEventListener("click", function (){
        userInput.value += button.value;
    })
})

operatorButtons.forEach(function (operand) {
    operand.addEventListener("click", function (){
        userInput.value += operand.value;
    });
});

equalsTo.addEventListener("click", function(){
    //i want the equals calculate the user input
    userInput.value = eval(userInput.value)
    //userInput.value
});

//when equals to is the last
//it should do this calculation
clearValues.addEventListener("click", function(){
userInput.value = ""
});

//i want del to delete value
deleteValues.addEventListener("click", function(){
userInput.value = userInput.value.slice(0, -1);
});