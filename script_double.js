var snake2 = {
    x: grid*15,
    y: grid*15,
    dx: grid,
    dy: 0,
    cells: [],
    maxCells: 4
};
var apple = {
    x: grid * 5,
    y: grid * 5
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function loop() {
    requestAnimationFrame(loop);

    if (++count < 4) {
        return;
    }
    count = 0;
    context.clearRect(0, 0, canvas.width, canvas.height);
    snake.x += snake.dx;
    snake.y += snake.dy;
    snake2.x += snake2.dx;
    snake2.y += snake2.dy;


    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
        snake.x = 0;
    }
    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
        snake.y = 0;
    }
    snake.cells.unshift({ x: snake.x, y: snake.y });
    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }

    if (snake2.x < 0) {
        snake2.x = canvas.width - grid;
    }
    else if (snake2.x >= canvas.width) {
        snake2.x = 0;
    }
    if (snake2.y < 0) {
        snake2.y = canvas.height - grid;
    }
    else if (snake2.y >= canvas.height) {
        snake2.y = 0;
    }
    snake2.cells.unshift({ x: snake2.x, y: snake2.y });
    if (snake2.cells.length > snake2.maxCells) {
        snake2.cells.pop();
    }


    context.fillStyle = 'red';
    context.fillRect(apple.x, apple.y, grid - 1, grid - 1);
    context.fillStyle = 'green';
    snake.cells.forEach(function (cell, index) {
        context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
        if (cell.x === apple.x && cell.y === apple.y) {
            snake.maxCells++;
            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
        }
        for (var i = index + 1; i < snake.cells.length; i++) {
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                snake.x = grid*10;
                snake.y = grid*10;
                snake.cells = [];
                snake.maxCells = 4;
                snake.dx = grid;
                snake.dy = 0;
            }
        }

        for (i = index + 1; i < snake2.cells.length; i++) {
            if (cell.x === snake2.cells[i].x && cell.y === snake2.cells[i].y) {
                snake.x = grid*10;
                snake.y = grid*10;
                snake.cells = [];
                snake.maxCells = 4;
                snake.dx = grid;
                snake.dy = 0;
            }
        }
    });

    context.fillStyle = 'blue';
    snake2.cells.forEach(function (cell, index) {
        context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
        if (cell.x === apple.x && cell.y === apple.y) {
            snake2.maxCells++;
            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
        }
        for (var i = index + 1; i < snake2.cells.length; i++) {
            if (cell.x === snake2.cells[i].x && cell.y === snake2.cells[i].y) {
                snake2.x = grid*15;
                snake2.y = grid*15;
                snake2.cells = [];
                snake2.maxCells = 4;
                snake2.dx = grid;
                snake2.dy = 0;
            }
        }

        for (i = index + 1; i < snake.cells.length; i++) {
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                snake2.x = grid*15;
                snake2.y = grid*15;
                snake2.cells = [];
                snake2.maxCells = 4;
                snake2.dx = grid;
                snake2.dy = 0;
            }
        }
    });


    document.getElementById("points 1").innerHTML = snake.maxCells * 10;
    document.getElementById("points 2").innerHTML = snake2.maxCells * 10;
}
document.addEventListener('keydown', function (e) {

    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }
    else if (e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
    else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }
    else if (e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    }

    if (e.which === 65 && snake2.dx === 0) {
        snake2.dx = -grid;
        snake2.dy = 0;
    }
    else if (e.which === 87 && snake2.dy === 0) {
        snake2.dy = -grid;
        snake2.dx = 0;
    }
    else if (e.which === 68 && snake2.dx === 0) {
        snake2.dx = grid;
        snake2.dy = 0;
    }
    else if (e.which === 83 && snake2.dy === 0) {
        snake2.dy = grid;
        snake2.dx = 0;
    }
});
requestAnimationFrame(loop);