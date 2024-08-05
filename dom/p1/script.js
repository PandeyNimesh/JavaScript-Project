// //<<<<<<<<<<<<<<< method for accesing html and css element and tag by javascrit>>>>>>>>>>>
var myElement = 
document.getElementById('header-title');
myElement.textContent='welcome to my course';
console.log(myElement);
//<<<<<<<<<<second metho>>>>>>>
myElement.innerText='computer courses'
//>>>>>>>>>third method>>>>>>>>>>>>
myElement.innerHTML='<h>HELLO</h1>'
myElement.style.borderBottom='5px solid black'


// <<<<<<<<<<----------------------------->>>>>>>>>>.>>.
// <<<<<<<<<accesing element by class name>>>>>>>>>>>>>>
// <<<<<<<<<<<------------------------>>>>>>>>>>>>>>>>>>>



 let items=document.getElementsByClassName('item')
 items[1].textContent='Nimesh';
 items[1].style.fontWeight='bold';
 items[2].style.color='green';



 //<<<<<<<<<<<<<<for styling all item of same class>>>>>>>>>>>>>
 for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor='yellow';
 }


//  <<<<<<<<<<taking element by tag name>>>>>>>>>>>>>>>
//  <<<<<<<<<<--------------------------->>>>>>>>>>>>>>
 
 let li =document.getElementsByTagName('li');
 li[1].style.color='yellow';


// <<<<<<<<<<<<By using qery selector>>>>>>>>>>>>>



let Input=document.querySelector('input'); 
Input.value='enter your name';
var button=document.querySelector('input[type="subbmit"]');
button.style.backgroundColor='pink';
button.color='red';
button.value='send';
let items=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor='yellow';
}




// <<<<<<<<<<<<<<amking html element by javascript>>>>>>>>>>>>>>>>>>>>

// creating div
// var newDiv=document.createElement('div');




// // //add class
// newDiv.className='box';

// // //add id
// newDiv.id='txt-box';

// // //create text node
// var newDivText=document.createTextNode('WElcome to javaScript');
// // //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('#content');

// var form=document.querySelector('form');

// newDiv.style.color = 'red';
// newDiv.style.fontSize='50px';
// newDiv.style.fontWeight ='bold';
// newDiv.style.backgroundColor = 'beige';
// newDiv.style.padding='10px';
// newDiv.style.margin= '4px 4px';
// container.insertBefore(newDiv,form);
// console.log(newDiv);