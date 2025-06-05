

 document.body.style.backgroundColor = "silver";
 title.style.color = "green";


 
 

//  adding fruit
const newFruit = document.createElement('li');
fruitList.appendChild(newFruit);
newFruit.textContent = 'pineapple';
newFruit.setAttribute('class','new-Fruit');

//adding vegetable

const newVegetable = document.createElement('li');
vegList.appendChild(newVegetable);
newVegetable.textContent = 'Mustard';
newVegetable.setAttribute('class','new-Vegetable');


const upper=document.getElementById("upper");
upper.style.textTransform="uppercase";


const ase=document.getElementById("ase");
ase.style.textTransform="upperCase";

// adding images
const img = document.createElement('img');
