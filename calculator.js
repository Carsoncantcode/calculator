const calculatorScreen = document.getElementById("calculator-screen");
const buttons = document.querySelectorAll(".calculator-keys button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonText = button.textContent;

        switch (buttonText) {
            case "=":
                calculatorScreen.value = eval(calculatorScreen.value);
                break;
            case "C":
                calculatorScreen.value = "";
                break;
            default:
                calculatorScreen.value += buttonText;
                break;
        }
    });
});