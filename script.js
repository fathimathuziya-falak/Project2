// This is edited from Git Hub
// 1. Select the elements using querySelector and their IDs
const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");
const addBtn = document.querySelector("#add-btn");
const resultDiv = document.querySelector("#result");

// 2. Create a function to add the numbers
function calculateSum() {
    // Check if either of the text boxes are empty strings ""
    if (input1.value === "" || input2.value === "") {
        // Show a warning message and stop the function early
        resultDiv.textContent = "Please enter both numbers!";
        resultDiv.style.color = "red"; // Make the warning text red
        return; 
    }

    // If both boxes have numbers, change text color back to normal and add them
    resultDiv.style.color = "#333"; 
    
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const total = value1 + value2;
    
    resultDiv.textContent = "Result: " + total;
}

// 3. Tell the button to run the function whenever it is clicked
addBtn.addEventListener("click", calculateSum);

