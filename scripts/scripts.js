/* swap theme */
import { swapTheme } from "./swapThemes.js";

const radioButtons = document.querySelectorAll("input[type='radio']");
let screenCalculator = document.querySelector(".screenCalculator");

radioButtons.forEach((element, index) => {
   element.addEventListener("change", () => {
      swapTheme(index);
   });
});

/* ==========  script calculator ========== */

const numbers = document.querySelectorAll("[data-value]");
const operator = document.querySelectorAll("[data-operator]");
const allowedKeys = ["/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "."];

numbers.forEach((numberBtn) => {
   numberBtn.addEventListener("click", () => {
      if (screenCalculator.value === "0" || screenCalculator.value === "Error") {
         screenCalculator.value = null;
      }
      screenCalculator.value += numberBtn.dataset.value;
   });
});

let operatorUsing = null;

operator.forEach((operatorBtn) => {
   operatorBtn.addEventListener("click", () => {
      const operatorMath = ["+", "-", "/", "*"];
      if (screenCalculator.value[0] === "-" && !operatorUsing) {
         screenCalculator.value += operatorBtn.dataset.operator;
         operatorUsing = operatorBtn.dataset.operator;
      } else if (operatorMath.some((op) => screenCalculator.value.includes(op))) {
         return;
      } else {
         screenCalculator.value += operatorBtn.dataset.operator;
         operatorUsing = operatorBtn.dataset.operator;
      }
   });
});

screenCalculator.addEventListener("keydown", (ev) => {
   ev.preventDefault();
   if (allowedKeys.includes(ev.key)) {
      screenCalculator.value += ev.key;
      return;
   }
   if (ev.key === "Backspace") {
      screenCalculator.value = screenCalculator.value.slice(0, -1);
      return;
   }
});

const delet = document.querySelector(".delet");

delet.addEventListener("click", () => {
   screenCalculator.value = screenCalculator.value.slice(0, -1);
});

const reset = document.querySelector(".reset");

const clear = () => {
   operatorUsing = null;
   firstValue = null;
   secondValue = null;
};

reset.addEventListener("click", () => {
   clear();
   screenCalculator.value = null;
});

const result = document.querySelector(".result");

let firstValue = null;
let secondValue = null;

result.addEventListener("click", () => {
   let positionOperator = parseInt(screenCalculator.value.lastIndexOf(operatorUsing));

   firstValue = parseFloat(screenCalculator.value.slice(0, positionOperator));
   if (isNaN(firstValue)) {
      firstValue = "error";
   }

   secondValue = parseFloat(screenCalculator.value.slice(positionOperator + 1, screenCalculator.value.length));
   if (isNaN(secondValue)) {
      secondValue = "error";
   }

   switch (operatorUsing) {
      case "-":
         screenCalculator.value = firstValue - secondValue;
         if (isNaN(screenCalculator.value)) {
            screenCalculator.value = "Error";
         }
         clear();
         break;

      case "+":
         screenCalculator.value = firstValue + secondValue;
         if (isNaN(screenCalculator.value)) {
            screenCalculator.value = "Error";
         }
         clear();
         break;

      case "*":
         screenCalculator.value = firstValue * secondValue;
         if (isNaN(screenCalculator.value)) {
            screenCalculator.value = "Error";
         }
         clear();
         break;

      case "/":
         screenCalculator.value = firstValue / secondValue;
         if (isNaN(screenCalculator.value)) {
            screenCalculator.value = "Error";
         }
         clear();
         break;

      default:
         screenCalculator.value = screenCalculator.value;
   }
});
