// CONFIG
let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

let enemies = [];
let bullets = [];
let frames = 0;


// CLASES
class Player {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.life = 3;
    }

    draw() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    crashWith(enemy) {
        return (this.x + this.w > enemy.x) &&
                (this.x < enemy.x + enemy.w) &&
                (this.y + this.w > enemy.y) &&
                (this.y < enemy.y + enemy.w); 
    }

}


class Enemy {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw() {
        this.x -= 5;
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

}


class Bullet {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    draw() {
        this.x += 10;
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    crashWith(enemy) {
        return (this.x < enemy.x + enemy.w) &&
               (this.x + this.w > enemy.x) &&
               (this.y < enemy.y + enemy.w) &&
               (this.y + this.w > enemy.y)
    }
}



// INSTANCIAS
let player = new Player(20, 290, 20, 20);

// FUNCIONES PRINCIPALES

function gameOver() {
    if(player.life <= 0) {
        clearInterval(interval);
        ctx.font = "30px Arial";
        ctx.fillText("Game over", 350, 290);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    player.draw();

    generateEnemies();
    drawEnemies();
    
    drawBullets();

    checkCollition();

    gameOver();

    frames++;
}

let interval = setInterval(draw, 1000/60)


// FUNCIONES COMPLEMENTARIAS

function generateBullets() {
    bullets.push(new Bullet(player.x + player.w , player.y + 5, 10, 10));
}

function drawBullets() {
    bullets.forEach(bullet => {
        bullet.draw();
    });
}

function generateEnemies() {
    if(frames % 100 === 0) {
        enemies.push(new Enemy(canvas.width, Math.random() * (canvas.height - 50),50,50));
    }
}

function drawEnemies() {
    enemies.forEach(enemy => {
        enemy.draw();
    });
}

function checkCollition() {
    enemies.forEach((enemy, ei) => {
        if(player.crashWith(enemy) || enemy.x <= 0) {
            enemies.splice(ei,1);
            player.life--;
        }
        bullets.forEach((bullet, bi) => {
            if(bullet.crashWith(enemy)) {
                bullets.splice(bi,1);
                enemies.splice(ei,1);
            }
        });
    });
}

// EVENT LISTENERS

addEventListener('keydown', e => {

    switch(e.keyCode) {
        case 38:
            player.y -= 12;
            break;
        case 40:
            player.y += 12;
            break;
        case 32:
            generateBullets();
            break;
    }
    
})
