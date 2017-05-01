var todoItems = ["Thing", "Cake", "Bat", "Stuff"];

// checks if clicked
// lav knapper X remove udfor hvert enkelt todoItems obj
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

function add(form){
  var inputValue = form.todo_input.value;
  if(inputValue === ""){
  // nope
  alert("Error write something! ");
  }
  else {
  todoItems.push(inputValue);
  document.getElementById('todo_list').innerHTML = "";
  show();
  }
}

// tager id fra doStuff().. todoItems[i] + "<button onclick='remove(" + i +")..
// listener lytter på om knappen er clicked
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
