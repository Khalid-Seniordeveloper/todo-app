
const input =  document.querySelector('#input');
const div = document.querySelector('div')
const array = []



function onFor() {
div.innerHTML = '';
array.push(input.value);
input.value = '';
console.log(input.value);
console.log(array);



for (let i = 0; i < array.length; i++) {
   div.innerHTML +=  `
   <div>
   <h1>${array[i]}</h1>
  <button onClick= "todelete(${i})">delete</button>
  <button onClick ="edit(${i})">edit</button>
    </div>`;
}

}


function todelete(index) {
div.innerHTML = ''
array.splice(index , 1);             
for (let i = 0; i < array.length; i++) {
    div.innerHTML +=  `
    <div>
    <h1>${array[i]}</h1>
   <button onClick= "todelete(${i})">delete</button>
   <button>edit</button>
     </div>`;
 }
 

}
function edit(index) {
div.innerHTML =''
let updateValue = prompt('ENTER UPDATED VALUE HERE' )
array.splice(index, 1 , updateValue);
for (let i = 0; i < array.length; i++) {
    div.innerHTML +=  `
    <div>
    <h1>${array[i]}</h1>
   <button onClick= "todelete(${i})">delete</button>
   <button>edit</button>
     </div>`;
 }
 

}















