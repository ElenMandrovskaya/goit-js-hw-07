// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
    input: document.querySelector('#controls > input'),
    renderBtn: document.querySelector('button[data-action="render"]'),
    destroyBtn: document.querySelector('button[data-action="destroy"]'),
    boxesContainer: document.querySelector('#boxes'),
}

function createBoxes(amount) {
    const boxes = [];
    let boxSize = 30;
    const colorRandomizer = () => {
        return `rgb(${Math.floor(Math.random() * 255)}, 
                    ${Math.floor(Math.random() * 255)}, 
                    ${Math.floor(Math.random() * 255)})`
    }
    
    for (let i = 1; i <= amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = colorRandomizer();
        box.style.margin = '10px';
        box.style.border = '3px solid'
        box.style.borderRadius = '4px';
        box.style.borderColor = colorRandomizer();

        boxSize += 10;
         boxes.push(box)
        // console.log(boxes)
    }
    
    refs.boxesContainer.append(...boxes);
    console.log(refs.boxesContainer)
}
// createBoxes(5)

function onRenderBtnClick() {
    refs.boxesContainer.innerHTML = '';
    createBoxes(refs.input.value);
}

function onDestroyBtnClick() {
    refs.boxesContainer.innerHTML = '';
}
refs.renderBtn.addEventListener('click', onRenderBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);