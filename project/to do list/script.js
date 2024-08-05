const inputBox =document.getElementById('inputBox');
const add =document.getElementById('addbtn');
const todolist =document.getElementById('Todo');

let editTodo=null;
const addTodo = ()=>{
  const inputText=inputBox.value.trim();
  if(inputText.length <=0 ){
    alert("You need to write something");
    return false;
  }
  if(addbtn.value==="Edit"){
   editTodo.target.previousElementSibling.innerHTML=inputText;
   addbtn.value="Add";
   inputBox.value="";
  }
else{
  const li=document.createElement("li");
  const p=document.createElement("p");
  p.innerHTML=inputText;
  li.appendChild(p);

  const editBtn=document.createElement('button');
  editBtn.innerText="Edit";
  editBtn.classList.add("Btn","Edit");
  li.appendChild(editBtn);


const deleteBtn=document.createElement('button');
deleteBtn.innerText="Remove";
deleteBtn.classList.add("Btn","Remove");
li.appendChild(deleteBtn);

  Todo.appendChild(li);
  inputBox.value=" ";
  saveLocalTodos(inputText);
}
}

const updating=(e)=>{
    if(e.target.innerHTML==="Remove"){
        todolist.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }
    if(e.target.innerHTML==="Edit"){
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        add.value="Edit";
        editTodo=e;
    }
}

const saveLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
      todos = [];
  }
  else {
      todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
// Function to get local todo
const getLocalTodos = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
      todos = [];
  }
  else {
      todos = JSON.parse(localStorage.getItem("todos"));
      todos.forEach(todo => {

          //Creating p tag
          const li=document.createElement("li");
          const p=document.createElement("p");
          p.innerHTML=inputText;
          li.appendChild(p);


          // Creating Edit Btn
          const editBtn=document.createElement('button');
  editBtn.innerText="Edit";
  editBtn.classList.add("Btn","Edit");
  li.appendChild(editBtn);

          // Creating Delete Btn
          const deleteBtn=document.createElement('button');
          deleteBtn.innerText="Remove";
          deleteBtn.classList.add("Btn","Remove");
          li.appendChild(deleteBtn);
          todoList.appendChild(li);
      });
  }
}

const deleteLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
      todos = [];
  }
  else {
      todos = JSON.parse(localStorage.getItem("todos"));
  }

  let todoText = todo.children[0].innerHTML;
  let todoIndex = todos.indexOf(todoText);
  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  // Array functions : slice / splice
  console.log(todoIndex);
}

const editLocalTodos = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  let todoIndex = todos.indexOf(todo);
  todos[todoIndex] = inputBox.value;
  localStorage.setItem("todos", JSON.stringify(todos));
}

document.addEventListener('DOMContentLoaded', getLocalTodos);
add.addEventListener('click',addTodo);
Todo.addEventListener('click',updating)