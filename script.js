const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display) {
        display.value += input;
    }
}

function clearDisplay() {
    if (display) {
        display.value = "";
    }
}

function deleteLast() {
    if (display) {
        display.value = display.value.slice(0, -1);
    }
}

function calculate() {
    if (display) {
        try {
            display.value = eval(display.value) || "";
        } catch (error) {
            display.value = "error";
        }
    }
}