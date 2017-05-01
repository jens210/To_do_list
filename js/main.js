var todoItems = ["Thing", "Cake", "Bat", "Stuff"];

// checks if clicked
// lav knapper X remove
function doStuff(){
  for(var i = 0; i < todoItems.length; i++){
    todoItemStuff = "<li class='list_todo_items' onclick='checked(this)'>" +
     todoItems[i] + "<button onclick='remove(" + i +")'>x</button></li>";

    document.getElementById('todo_list').innerHTML += todoItemStuff;

  }
}
