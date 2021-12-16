import * as inquirer from 'inquirer'
import { TodoCollection } from './todoCollection';
import  { ToDoItem } from './todoItems'

const todos =[
    new ToDoItem(1, "Wake Up 6am", true),
    new ToDoItem(2, "Go for walk"),
    new ToDoItem(3, "More study" , true)
]
let showComplete =true;

const collection = new TodoCollection('Asad' , todos);

// const id = collection.addTodo("shower")

// console.log(`${collection.useName} To do list is`)
// // console.log(JSON.stringify(collection.todoItems))

// collection.getTodoItem(true).forEach(item=>item.printDetails())
// console.log('After Remove complete---------->')
// collection.removeComplete();
// collection.getTodoItem(true).forEach(item=>item.printDetails())

function displayToddo () :void{
    console.log(`${collection.useName} To do list is`)
 collection.getTodoItem(showComplete).forEach(item=>item.printDetails())
}

enum Commands{
    AddTask="Add New Task",
    Toggle="Show/Hide Completed Task",
    Quit="Quit"
}
function promptAdd():void{
    console.clear();
    inquirer.prompt({
        type:'input',
        name:'add',
        message:'Add new Task',

    }).then(ans=>{
        if(ans['add']){
            collection.addTodo(ans['add'])
        }
        promptUser();
    })
}

function promptUser():void{
    console.clear();
    displayToddo();
    inquirer.prompt({
        type:"list",
        name:'command',
        message:'Choose Option',
        choices:Object.values(Commands),
        
    }).then(ans=>{
        switch(ans["command"])
        {
            case Commands.Toggle:
                showComplete = !showComplete;
                promptUser();
                break;
            case Commands.AddTask:
                // collection.addTodo('Make new Task');
                // promptUser();
                promptAdd()
                break;
            case Commands.Quit:
                break;

        }
           
    })
    
}

promptUser()
// console.log(collection.getTodoItem(false))