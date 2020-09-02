window.setTimeout(function () {
    // put all of your JS code from the lecture here
var todos = ["Buy New Turtle"];

var input = prompt("What Would You Like To Do?");

while(input !=="quit") {
    //handle input
    if (input === "list") {
        listToDos();
    } else if (input === "new") {
        addToDo();
    } else if(input === "delete") {
        deleteToDo();
    }
    //ask again for new input
    input = prompt("What Would You Like To Do?");
}
console.log("OK, You Quit the App")

function listToDos() {
    console.log("***********")
    todos.forEach(function (todo, i) {
    console.log(i + ": " + todo);
    });
    console.log("***********")
}

function addToDo() {
    //ask for new to do
    var newToDo = prompt("Enter New To Do");
    //add to to do
    todos.push(newToDo);
    console.log("Added To Do")
}

function deleteToDo() {
    //ask for index of to do to be deleted
    var index = prompt("Enter Index of To Do to Delete");
    //delete that to do
    //splice()
    todos.splice(index, 1);
    console.log("Deleted Task!")

}


}, 500);