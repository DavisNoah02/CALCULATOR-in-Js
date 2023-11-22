//Javascript Code to perform the functionalities 

let displayValue = "";
//Appends the given value to the display and updates the input bar.
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("inputBar").value = displayValue;
}
//clears all data in inputbar 
function clearDisplay() {
    displayValue = "";
    document.getElementById("inputBar").value = displayValue;
}
//calculates result from data entered in input bar
function calculateResult() {
    try {
        const result = eval(displayValue);
        document.getElementById("inputBar").value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById("inputBar").value = "Error";
    }
}