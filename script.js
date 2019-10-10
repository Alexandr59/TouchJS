var move_block = document.getElementById('move_block'),
    move_block_pos = {
        top: 0,
        left: 0
    },
    clickPoint = {
        top: 0,
        left: 0
    },
    cursor = {},
    countPxMoveX = 0,
    countPxMoveY = 0,
    moveCursorX = 0,
    moveCursorY = 0,
    move = false;

move_block.addEventListener('mousedown', click);
document.addEventListener('mousemove', mousemove);
document.addEventListener('mouseup', unclick);

function click(x) {
    // чекер для увеличения координат
    move = true;
    // Точка начала учета сдвига
    clickPoint.left = x.clientX;
    clickPoint.top = x.clientY;

    // текущее расположение el
    var currentСoord = this.getBoundingClientRect();

    // добавили немного бесполезной визуальной магии
    move_block.classList.add('is_move');
}

// на сколько пикселей сдвинулся курсор
function mousemove(e) {
    if (move) {
        // берем данные о координатах курсора
        moveCursorX = e.clientX;
        moveCursorY = e.clientY;

        // вычисляем на сколько пикселей сдвинулся курсор после клика
        countPxMoveX = moveCursorX - clickPoint.left;
        countPxMoveY = moveCursorY - clickPoint.top;

        // меняем позицию у el
        move_block.style.top = parseInt(move_block_pos.top) + countPxMoveY + 'px';
        move_block.style.left = parseInt(move_block_pos.left) + countPxMoveX + 'px';
    }
}

function unclick() {
    // чекер для увеличения координат. true = можно менять, false = нельзя
    move = false;

    // сохраняем позицию el, чтобы потом не сбрасывалось к изначальным
    move_block_pos.top = move_block.style.top;
    move_block_pos.left = move_block.style.left;

    // убрали бесполезную визуальную магию
    move_block.classList.remove('is_move');
}
