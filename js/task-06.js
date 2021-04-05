// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.querySelector('#validation-input');

function onInputValidation () {
  if (input.value.length < input.dataset.length || input.value.length > input.dataset.length) {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
  else {
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
}
input.addEventListener('blur', onInputValidation);

// console.log(input.dataset.length)
