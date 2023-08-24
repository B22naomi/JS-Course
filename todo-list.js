const todoList = ['cook diner' , 'wash dishes'];

let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
  const todo = todoList[i];
  const html = `<p> ${todo} </p>`;
  todoListHTML += html;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  todoList.push(name);

  inputElement.value ='';
}