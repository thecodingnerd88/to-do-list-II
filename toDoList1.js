var todos = ["buy new dog"];
var input = prompt("What would you like to do?");
//   handle input
        while (input !== "quit"){
    if (input === "list"){
        listTodo();
    } else if (input === "new") {
        newTodo();
       
    }else if (input==="delete"){
        deletTodo();
    }
    //   ask for a new input
    var input = prompt("What would you like to do?");
    }
    console.log ("Ok, App. is going to close!");

 function listTodo() {
    console.log("***********");
    todos.forEach(function(todo,i){
        console.log(i+ ": "+ todo);
    });
    console.log("***********");
 }
 function newTodo(){ 
     // ask for a new todo
    var newTodo = prompt ("Enter a new Todo:");
    // add to todos arry
    todos.push(newTodo);
    console.log(" New Todo added!");
 }
 function deletTodo(){
     //ask for index of task to be deleted.
     var index= prompt (" Enter index of todo to be delete :");
     //delete that todo.
     todos.splice(index,1);
     console.log("Item deleted");
 }