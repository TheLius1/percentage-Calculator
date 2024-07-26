const percentNum = document.getElementById("percent");
const amountNum = document.getElementById("amount");
const discount = document.getElementById("discount");
const total__amount = document.getElementById("total__amount");
const calculate__button = document.getElementById("btn1");
const answerValue = document.getElementById("answer1");
const answerValue2 = document.getElementById("answer2");
const calculate__button2 = document.getElementById("btn2");

let percentage__base = 100;

const clearTheValue = function () {
  percentNum.value = amountNum.value = "";
  total__amount.value = discount.value = "";
};

// FIRST
calculate__button.addEventListener("click", () => {
  if (percentNum.value === "" || amountNum.value === "") {
    answerValue.textContent = "";
  } else {
    const anw1 = (percentNum.value / percentage__base) * amountNum.value;
    answerValue.textContent = anw1;
    clearTheValue();
  }
});
calculate__button2.addEventListener("click", () => {
  if (discount.value === "" || total__amount.value === "") {
    answerValue2.textContent = "";
  } else {
    const anw2 = (discount.value / total__amount.value) * percentage__base;
    answerValue2.textContent = `${anw2}%`;
    clearTheValue();
  }
});
