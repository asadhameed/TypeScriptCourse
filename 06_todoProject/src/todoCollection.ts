import { ToDoItem } from "./todoItems";

export class TodoCollection{
   private nextId:number=1;
   constructor (public useName:String , public todoItems:ToDoItem[]){

   }

   addTodo(task:string): number {
       while(this.getTodoById(this.nextId)){
           this.nextId++;
       }
       this.todoItems.push(new ToDoItem(this.nextId, task))
    return this.nextId
   }

   getTodoById(id:number):ToDoItem{
       return this.todoItems.find(item=>item.id==id)
   }
   makeComplete(id:number , complete:boolean){
       const todoItem = this.getTodoById(id);
       if(todoItem){
           todoItem.complete= complete
       }
   }
   getTodoItem (includeComplete:boolean) : ToDoItem[]{
       return [...this.todoItems].filter(item=> includeComplete || !item.complete)
   }

   removeComplete(){
       this.todoItems.forEach(item=>{
           if(item.complete){
               
           }
       })
       this.todoItems = this.todoItems.filter(item=> !item.complete)
   }
   }