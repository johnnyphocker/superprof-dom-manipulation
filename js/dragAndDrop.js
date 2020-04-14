let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

// class Ball {
//     constructor(x, y, radius, color) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//     }

//     draw() {
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//         ctx.closePath();
//         ctx.fill();
//     }
// }

// let ball = new Ball(canvas.width / 2, canvas.height / 2, 50, 'red');
// ball.draw();

// canvas.addEventListener('mousedown', function () {
// 	canvas.addEventListener('mousemove',onDrag,false);
// 	canvas.addEventListener('mouseup',onDrop,false);
// }, false);

// setInterval(init, 1000/60);

// function onDrag(e){
// 	ball.x = e.offsetX;
//     ball.y = e.offsetY;
// }

// function onDrop(){
// 	canvas.removeEventListener('mousemove',onDrag,false);
// 	canvas.removeEventListener('mouseup',onDrop,false);	
// }

// function init() {
// 	ctx.clearRect(0, 0, canvas.width, canvas.height);  
// 	ball.draw(ctx); 
// };


class Square {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.s = 15;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}


