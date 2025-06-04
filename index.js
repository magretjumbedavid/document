

 document.body.style.backgroundColor = "silver";
 title.style.color = "green";


 
 

//  adding fruit
const newFruit = document.createElement('pineapple');
fruitList.appendChild(newFruit);
newFruit.textContent = 'pineapple';
newFruit.setAttribute('class','new-Fruit');

//adding vegetable

const newVegetable = document.createElement('Mustard');
vegList.appendChild(newVegetable);
newVegetable.textContent = 'Mustard';
newVegetable.setAttribute('class','new-Vegetable');
