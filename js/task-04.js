// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

let currentValue = 0;

function onDecrementBtnClick() {
    currentValue -= 1;
    counterValue.textContent = currentValue;
}

function onIncrementBtnClick() {
    currentValue += 1;
    counterValue.textContent = currentValue;
}

decrementBtn.addEventListener('click', onDecrementBtnClick)
incrementBtn.addEventListener('click', onIncrementBtnClick)

// console.log(decrementBtn);
// console.log(incrementBtn);