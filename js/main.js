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


let name = document.querySelector('#name');
let lastname = document.querySelector('#lastname');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let btn = document.querySelector('#btn');

btn.onclick = e => {
    e.preventDefault();
    console.log('es tarea')
}


