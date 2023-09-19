let input = document.getElementById('todo');
let button = document.getElementById('btn');
let todoList = document.getElementById('todoList');
let inputValue;

input.addEventListener('change', (event) => {
   inputValue = event.target.value;
})

button.addEventListener('click', () => {
   let todo = document.createElement('div');

   let icon = document.createElement('img');
   icon.setAttribute('src', 'trash.png');
   icon.id = 'delete';
   icon.classList.add('deleteIcon');

   let textSpan = document.createElement('span');
   textSpan.innerText = inputValue;
   textSpan.id = 'text';
   textSpan.classList.add('todoSpan');

   todo.classList.add('listItem');
   todo.append(textSpan, icon);

   todoList.appendChild(todo);
   input.value = '';
})

todoList.addEventListener('click', (event) => {
   if(event.target.id === 'text') {
      event.target.classList.toggle('done');
   } else {
      event.target.parentElement.remove();
   }
})

