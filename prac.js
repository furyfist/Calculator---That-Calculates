/* 
   Script for self-revision: 
   This file acts as a rough notebook to revise concepts in the future. 
*/

// query selector, selects the all numbers from doument with a id of .numbers
// forEach is used to iterate over each element we get in a node list, where item is just a 
// variable declaration, it represents the current(choose element from a node list);
// addeventListner used to listen a event here its click ,, when click execute a function
// event -> details about the element that triggered the event (the clicked element)
// event.target property gives you a reference to the element that caused the event.

const inputValue = document.getElementById("user-input");

// Adding event listner for all number buttons.
document.querySelectorAll(".numbers").forEach(function(item){
    item.addEventListener("click",function(event){

        if(inputValue.innerText === "NaN" || inputValue.innerText === "0"){
            inputValue.innerText = "";
        }

        // inner text is used here instead of inner html as it is faster and deals only with text;
        // event -> when an event occurs (like a click), the event object provides details about the event.
        // event.target -> refers to the specific HTML element that triggered the event. (<button class="numbers">7</button>)
        // event.target.innerHTML -> 7 (just the text inside the button).
        // trim() -> only removes space from start and end of text.
        
        // Here we append the clicked number in the display box.
        inputValue.innerText = inputValue.innerText + event.target.innerText.trim();
    });
});

// Adding event listners for operation buttons.
document.querySelectorAll(".operations").forEach(function (item){
    item.addEventListener(("click") ,function(event){
        const operation = event.target.innerHTML.trim(); // stored the clicked element.
        let lastValue = inputValue.innerText.substring(inputValue.innerText.length - 1);  // get the last character of input.
        if(operation === "="){
            try{
                // eval() is a built-in JavaScript function that evaluates a string as a JavaScript expression.
                if(!isNaN(lastValue)) {
                    inputValue.innerText = eval(inputValue.innerText);
                }
            } catch(error){
                // isNaN() is a function that checks if a value is "Not a Number", 5 -> false ,, "a" -> True;
                inputValue.innerText = "NaN";
            } 
        } else if(operation === "DEL") {
            // slice(0, -1) :"start from index 0 and end before the last element".
            // slice(-1) : extract the last element of array or string.
            inputValue.innerText = inputValue.innerText.slice(0,-1);
            if(inputValue.innerText.length === 0){
                // if the length after DEL becomes 0 then do this
                input.value.innerText = "0";
            }
        } else if (operation === "AC") {
            // clear the input to reset the input.
            inputValue.innerText = "0";
        } else if (operation === "%"){
            // will calculate the percentage by dividing the current value by 100;
            if(!isNaN(lastValue)){
                inputValue.innerText = eval(inputValue.innerText + "/100");
            }
        } else{
            // add opearators only if last character is not a operations
            if(!isNaN(lastValue) || lastValue === "."){
                inputValue.innerText += operation;
            }
        }  
    });
});
