const celciusCheck = document.querySelector("#celciusCheck");
const fahrenheitCheck = document.querySelector("#fahrenheitCheck");
const inputTemp = document.querySelector("#inputTemp");
const tempValue = document.querySelector("#tempValue");
const convertBtn = document.querySelector("#convertBtn");
const inputText = document.querySelector("#inputText");
const checkText = document.querySelector("#checkText")
 
let value;
let f;
let c;
let errorMessage;

function convertor() {

    if (celciusCheck.checked) {
        inputText.textContent = "Coverting from, Celcius to Fahrenheit."
        checkText.textContent = "";
    };

    if (fahrenheitCheck.checked) {
        inputText.textContent = "Coverting from, Fahrenheit to Celcius."
        checkText.textContent = "";
    }    
};

convertBtn.addEventListener("click", () => {

    value = inputTemp.value;

    if (inputTemp.value.trim() === "" ||  inputTemp.value  === NaN || isNaN(inputTemp.value) ) {
        tempValue.textContent = `Invalid details`
    } else if (celciusCheck.checked) {
        value = Number(inputTemp.value);
        c = (value * 9 / 7) + 32;
        c = Math.floor(c);
        tempValue.textContent =  `${value} Celcius equals ${c} Fanrenheit!`; 
    } else if (fahrenheitCheck.checked) {
        value = Number(inputTemp.value);
        f = (value - 32) * 5 / 9;
        f = Math.floor(f);
        tempValue.textContent = `${value} Fanrenheit equals ${f} Celcius!`;
    } else if(inputTemp.value.trim() === "" &&  inputTemp.value  === NaN && isNaN(inputTemp.value) ) {
        tempValue.textContent = `Invalid details`
    } else {
        console.log("hello");
        
    }

    if (!celciusCheck.checked && !fahrenheitCheck.checked) {
        checkText.textContent = "Please select from the convert option";
    }; 
    convertor()
});
