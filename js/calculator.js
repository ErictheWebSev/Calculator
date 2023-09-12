function addToDisplay(value) {
    let display = document.getElementById("display");
    display.value += value;
    updateDisplayFontSize();
}

// Function to perform the calculation and display the result
function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error 😳';
      console.log(error);
    }
    updateDisplayFontSize();
}


// Function to delete the last character from the display
function deleteCharacter() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
    updateDisplayFontSize();
}

// Function to update the display font size based on the length of the content
function updateDisplayFontSize() {
    let display = document.getElementById("display");
    if (display.value.length >= 15) {
        display.style.fontSize = "15px";
    } else {
        display.style.fontSize = "36px";
    }
}

// Add event listeners to the buttons
let btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.value === "=") {
            calculateResult();
        } else if (btn.value === "DC") {
            deleteCharacter();
        } else {
            addToDisplay(btn.value);
        }
    });
});
