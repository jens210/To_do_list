var todoItems = ["Thing", "Cake", "Bat", "Stuff"];

// Makes btns
function doStuff(){
  for(var i = 0; i < todoItems.length; i++){
    todoItemStuff = "<li class='list_todo_items' onclick='checked(this)'>" +
     todoItems[i] + "<button onclick='remove(" + i +")'class='remove'>x</button></li>";
    document.getElementById('todo_list').innerHTML += todoItemStuff;
  }
}

function show(){
  document.getElementById('todo_list').innerHTML = "";
  var inputValue = form.todo_input.value;
  doStuff();
}

// if there is text in the form, it changes the first letter to Uppercase
// and adds the obj to the array.
function add(form){
  var inputValue = form.todo_input.value;
  var firstchar = inputValue[0];
  if(inputValue === ""){
  alert("Error write something!");
  }
  else {
  inputValue = firstchar.toUpperCase() + inputValue.substring(1);
  todoItems.push(inputValue);
  document.getElementById('todo_list').innerHTML = "";
  show();
  }
}

// id from doStuff().. todoItems[i] + "<button onclick='remove(" + i +")..
// event listener listens to the btn if its clicked, it removes the obj.
function remove(id){
  todoItems.splice(id, 1);
  var buttons = document.getElementsByClassName('remove');
  for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', remove);
  }
  show();
}

function checked(tag){
  tag.classList.toggle('active');
}

// clears form
function clearThis(target){
  target.value = "";
}

function sort(){
  todoItems.sort();
  document.getElementById("todo_list").innerHTML = "";
  doStuff();
}

function reverse(){
  todoItems.reverse();
  document.getElementById("todo_list").innerHTML = "";
  doStuff();
}
