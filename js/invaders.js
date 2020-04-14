let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 500;

let x = 100;
let y = 100;

let KEY_LEFT = 37;
let KEY_RIGHT = 39;
let BARRA = 32;

let imagen, imagenEnemigo, de;

let teclaPulsada = null;
let tecla = [];
let colorBala = "red";
let balas_array = [];
let enemigos_array = [];
let balasEnemigas_array = [];
let puntos = 0;
let finJuego = false;


let boing = document.getElementById("boing");
let disparo = document.getElementById("disparo");
let intro = document.getElementById("intro");
let fin = document.getElementById("fin");

x = canvas.width/2;

imagen = new Image();
imagenEnemigo = new Image();
imagenEnemigo.src = "img/invader.fw.png";
imagen.src = "img/torre.fw.png";

mensaje("INVASORES");

imagen.onload = function(){
    jugador = new Jugador(0);
    setTimeout(anima,3500);
}

imagenEnemigo.onload = function(){
    for(let i=0; i<5; i++){
        for(let j=0; j<10; j++){
            enemigos_array.push(new Enemigo(100+40*j, 30+45*i));
        }
    }
    de = setTimeout(disparaEnemigo,3500);
}




class Jugador {
    constructor(x) {
        this.x = x;
        this.y = 450;
        this.w = 30;
        this.h = 15;
    }

    dibuja() {
        ctx.drawImage(imagen, this.x, this.y, this.w, this.h);
    }
}

class Enemigo {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.w = 35;
        this.veces = 0;
        this.dx = 5;
        this.ciclos = 0;
        this.num = 14;
        this.figura = true;
        this.vive = true;
    }
    
    dibuja() {
        // VERIFICA SI LLEGA AL PRINCIPIO O FINAL DEL CANVAS Y LUEGO SE VAN PARA ABAJO LOS ENEMIGOS
        if(this.ciclos > 30){
			if(this.veces>this.num){
				this.dx *= -1;
				this.veces = 0;
				this.num = 28;
				this.y += 20;
				this.dx = (this.dx>0) ? this.dx++ : this.dx--;
			} else {
				this.x += this.dx;
			}
			this.veces++;
			this.ciclos = 0;
			this.figura = !this.figura;
		} else {
			this.ciclos++;
        }
        
		if(this.vive){
			if(this.figura){
				ctx.drawImage(imagenEnemigo,0,0,40,30, this.x, this.y, 35,30);
			} else {
				ctx.drawImage(imagenEnemigo,50,0,35,30, this.x, this.y, 35, 30);
			}
		} else {
			ctx.fillStyle = "black";
			ctx.fillRect(this.x, this.y, 35, 30);
		}
    }
}

class Bala {
    constructor(x, y, w) {
        this.x = x;
        this.y = y;
        this.w = w;
    }

    dibuja() {
        ctx.save();
		ctx.fillStyle = colorBala;
		ctx.fillRect(this.x, this.y, this.w, this.w);
		this.y = this.y - 4;
		ctx.restore();	
    }

    dispara() {
        ctx.save();
		ctx.fillStyle = colorBala;
		ctx.fillRect(this.x, this.y, this.w, this.w);
		this.y = this.y + 6;
		ctx.restore();
    }
}



function anima(){
	if(finJuego==false){
		requestAnimationFrame(anima);
		verifica();
		pinta();
		colisiones();
	}
}

function score(){
	ctx.save();
	ctx.fillStyle = "white";
	ctx.clearRect(0,0,canvas.width,40);
	ctx.font = "bold 20px Courier";
	ctx.fillText("SCORE: "+puntos,10,20);
	ctx.restore();	
}

function mensaje(cadena){
	let lon = (canvas.width-(53*cadena.length))/2;
	ctx.fillStyle = "green";
	ctx.clearRect(0,0,canvas.width, canvas.height);
	ctx.font = "bold 75px Rosewood Std";
	ctx.fillText(cadena,lon,220);	
}

function colisiones(){
	for(let i=0; i<enemigos_array.length; i++){
		for(let j=0; j<balas_array.length; j++){
			enemigo = enemigos_array[i];
			bala = balas_array[j];
			if(enemigo != null && bala != null){
				if((bala.x > enemigo.x)&& 
					(bala.x < enemigo.x+enemigo.w)&& 
					(bala.y > enemigo.y)&& 
					(bala.y < enemigo.y+enemigo.w)){
						enemigo.vive = false;
						enemigos_array[i] = null;
						balas_array[j] = null;
						puntos += 10;
						boing.play();	
					}
				
			}
		}
	}
	for(let j=0; j<balasEnemigas_array.length; j++){
		bala = balasEnemigas_array[j];
		if(bala != null){
			if((bala.x > jugador.x)&& 
				(bala.x < jugador.x+jugador.w)&& 
				(bala.y > jugador.y)&& 
				(bala.y < jugador.y+jugador.h)){
					gameOver();	
			}
		}
	}
}

function gameOver(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	balas_array = [];
	enemigos_array = [];
	balasEnemigas_array = [];
	clearTimeout(de);
	finJuego = true;
	mensaje("GAME OVER");
	fin.play();
}

function verifica(){
	if(tecla[KEY_RIGHT]) jugador.x+=10;
	if(tecla[KEY_LEFT]) jugador.x-=10;
	//Verifica cañon
	if(x>canvas.width-10) x = canvas.width -10;
	if(x<0) x = 0;
	//Disparo
	if(tecla[BARRA]){
		balas_array.push(new Bala(jugador.x+12,jugador.y-3,5));	
		tecla[BARRA]=false;
		disparaEnemigo();
		disparo.play();
	}
}

function pinta(){
	ctx.clearRect(0,0,canvas.width, canvas.height);
	score();
	jugador.dibuja(x);
	//Balas
	for(let i=0; i<balas_array.length; i++){
		if(balas_array[i]!=null){
			balas_array[i].dibuja();
			if(balas_array[i].y<0) balas_array[i] = null;	
		}
	}
	//Balas Enemigas
	for(let i=0; i<balasEnemigas_array.length; i++){
		if(balasEnemigas_array[i]!=null){
			balasEnemigas_array[i].dispara();
			if(balasEnemigas_array[i].y>canvas.height) balasEnemigas_array[i] = null;	
		}
	}
	//Enemigos
	numEnemigos = 0;
	for(let i=0; i<enemigos_array.length; i++){
		if(enemigos_array[i] != null){
			enemigos_array[i].dibuja();
			numEnemigos++;
			if(enemigos_array[i].y==jugador.y) gameOver();	
		}
	}
	if(numEnemigos==0) gameOver();
}

function disparaEnemigo(){
	let ultimos = [];
	for(let i=enemigos_array.length-1; i>0; i--){
		if(enemigos_array[i]!=null){
			ultimos.push(i);		
		}
		if(ultimos.length==10) break;
	}
	d = ultimos[Math.floor(Math.random()*10)];
	balasEnemigas_array.push(new Bala(enemigos_array[d].x+enemigos_array[d].w/2,
	enemigos_array[d].y,5));
}

window.requestAnimationFrame=(function() {
	return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			function(callback){window.setTimeout(callback,17);}
})();



document.addEventListener("keydown", function(e) {
	teclaPulsada = e.keyCode;
	tecla[e.keyCode] = true;
});

document.addEventListener("keyup", function(e) {
	tecla[e.keyCode] = false;
});
