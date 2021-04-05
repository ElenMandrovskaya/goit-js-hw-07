// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

// const input = document.querySelector('#name-input');
// const name = document.querySelector('#name-output');

const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output')
}
// console.log(refs.input);
// console.log(name);
const unknownName = refs.outputName.textContent;
function onInputNameFilled (event) {
    refs.outputName.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
       refs.outputName.textContent = unknownName
    }
}

refs.inputName.addEventListener('input', onInputNameFilled);