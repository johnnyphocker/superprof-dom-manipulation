// let h1 = document.getElementById('main-header');
// let btn = document.getElementById('btn');


// btn.addEventListener('click', manipulation);

// function manipulation() {
//     h1.style.color = 'red';
//     h1.innerHTML = '<a href="/page2">Este texto ha sido cambiado</a>';
// }
    

// function generateRandomColor() {
//     return '#'+Math.floor(Math.random()*16777215).toString(16);
// }

// function changeColor() {
//     var discoBoxes = document.getElementsByClassName("disco-box");
//     for (let i=0; i<discoBoxes.length; i++) {
//         discoBoxes[i].style.backgroundColor = generateRandomColor();
//     }
// }
  
// setInterval(changeColor, 500);


// let id = document.getElementById('main-header');
// let one = document.querySelector('div');

// let all = document.querySelectorAll('.disco-box'); //Nodelist - este no es array
// let classname = document.getElementsByClassName("disco-box"); //HTMLCollection - este si lo es



// for(let i = 0; i < all.length; i++) {
//     console.log(all[i]);
// }


//let id = document.querySelector('#main-header');

// let p = document.querySelector('#start article p')
// let section = document.querySelector('#start')

// function crearElemento() {
//     let article = document.createElement('article');
//     let text = document.createTextNode('Elemento creado');

//     article.appendChild(text);

//     p.parentNode.parentNode.insertBefore(article, p.parentNode.parentNode.childNodes[0])
    
// }

//DOM NAVIGATION

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling




// let shoppingList = [];
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => {
//     var item = document.getElementById('item').value;
//     shoppingList.push(item)
    
//     function addList() {
//         let html = '';
//         let output = document.querySelector('#output');
//         for(let i = 0; i < shoppingList.length; i++) {
//             html += shoppingList[i] + '<br />'
//         }
//         output.innerHTML = html;
//     }
    
//     addList();
// })












/**
 * IRONCART
 */


// let create = document.getElementById('create');
// let calc = document.querySelector('.btn-success');
// let del = document.getElementsByClassName('btn-delete');


// function updateSubtot(product) {
//   let pu = document.querySelectorAll('.pu span')[product].textContent;
//   let qty = document.querySelectorAll('.qty input')[product].value;
//   let subtotal = pu * qty;
//   let sub = document.querySelectorAll('.subtot span')[product];
//   sub.textContent = subtotal;
//   return subtotal;
// }

// function calcAll() {
//   let cadaPrecio = document.querySelectorAll('.subtot span');
//   let result = 0;
//   for (let i = 0; i < cadaPrecio.length; i++) {
//     result += updateSubtot(i);
//   }
//   document.querySelectorAll('h2 span')[0].innerHTML = result;
//   return result;
// }


// function addItem() {
//   var newRow = document.createElement('tr');
//   var name = document.querySelector('.new input');
//   var price = document.querySelector('.price');
//   let table = document.querySelector('tbody');
//   newRow.innerHTML = `
//   <td class="name">
//     <span> ${name.value} </span></td> <td class="pu">$<span> ${price.value} </span>
//   </td>
//   <td class="qty">
//     <label> <input type="number" value="0" min="0" /> </label>
//   </td>
//   <td class="subtot">
//     $<span>0</span>
//   </td>
//   <td class="rm">
//     <button class="btn btn-delete">Delete</button>
//   </td>
//   `;
  
//   table.appendChild(newRow);
  
//   for (let i = 0; i < del.length; i++) {
//     del[i].onclick = (e) => e.currentTarget.parentElement.parentElement.remove();
//   }
//   name.value = '';
//   price.value = '';
// }

// create.onclick = addItem;
// calc.onclick = calcAll;






/**
 * VALIDACIÓN DE FORMULARIO
 */


// let name = document.querySelector('#name');
// let lastname = document.querySelector('#lastname');
// let email = document.querySelector('#email');
// let password = document.querySelector('#password');
// let btn = document.querySelector('#btn');

// btn.onclick = e => {
//     e.preventDefault();
//     console.log('es tarea')
// }






let btn = document.querySelector('#btn');
let x = document.querySelector('#x');
let y = document.querySelector('#y');
let w = document.querySelector('#w');
let h = document.querySelector('#h');
let fill = document.querySelector('#fill');
let stroke = document.querySelector('#stroke');

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;


// DIBUJAR RECTÁNGULOS

// ctx.fillStyle = '#00ff00';
// ctx.strokeStyle = '#ff0000';
ctx.lineWidth = 10;

//ctx.fillRect(200, 50, 400, 200);
//ctx.strokeRect(200, 50, 400, 200);

// btn.onclick = createRect;

// function createRect() {
//     ctx.fillStyle = fill.value;
//     ctx.strokeStyle = stroke.value;
//     ctx.strokeRect(x.value, y.value, w.value, h.value);
//     ctx.fillRect(x.value, y.value, w.value, h.value);
// }


// DIBUJAR LÍNEAS

ctx.lineCap = 'square';
ctx.lineJoin = 'round';
ctx.fillStyle = 'red';

// let strokeArr = [];

// btn.onclick = function() {
//     strokeArr.push({x: x.value, y: y.value});

//     ctx.beginPath();
//     ctx.moveTo(strokeArr[0].x, strokeArr[0].y);

//     for(let i = 1; i < strokeArr.length; i++) {
//         ctx.lineTo(strokeArr[i].x, strokeArr[i].y);
//     }

//     ctx.stroke();
// }

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(700, 100);
// ctx.lineTo(700, 500);
// ctx.lineTo(400, 300);
// ctx.lineTo(100, 500);
// ctx.lineTo(100, 100); // No cerrar los paths de esta manera.
// ctx.closePath();
// ctx.fill();
// ctx.stroke();



// DIBUJAR ARCOS

// ctx.beginPath();
// ctx.arc(100, 150, 50, 0, 2 * Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(250, 150, 50, 0, 1.9 * Math.PI);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(400, 150, 50, 1.1 * Math.PI, 1.9 * Math.PI, true);
// ctx.stroke();


// let img = new Image();
// img.src = './img/charizard.png';

// img.onload = () => ctx.drawImage(img, 0, 0, 135, 94, 100, 100, 135, 94);

class Shoot {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    draw = () => {
        this.x++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

let shoot = new Shoot(227, 155, 10, 10, 'red');

let interval = setInterval(() => {
    shoot.draw()
}, 1000/60);
