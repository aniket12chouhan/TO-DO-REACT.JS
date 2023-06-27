import React, { useState } from 'react'
import Form from './Form'
import ListGroup from './ListGroup'

const App = () => {

   const [ todos , settodos] = useState([
      
   ])

   const [ edit , setedit ] =useState({
     todo :{},
     isedit : false, 

     
   }) 

   const edittodo = (todo) =>{
    console.log("edit done");
    setedit({
      todo : todo,
      isedit :true
    })

   }
  //  console.log(edit );

   const updatetodo = (( id , text ) =>{

    console.log( id , text);
     settodos(todos.map((todo)=>{
      if(todo.id === id){
        return{
          ...todo,
          text : text,
        }
      }
      else{
        return todo
      }
     }))
  
     setedit(
      {
      todo:{},
      isedit :false,
    })

   })

   const saveTodo = (text) =>{
   
     const  addTodo ={
    
      id : crypto.randomUUID(),
      text: text,
     }
     settodos([addTodo ,...todos])

   }
 
   const deletetodo = (id)=>{
     settodos(
       todos.filter((todo) =>{
         if(todo.id !== id){
           return 1
          }
        })
        )
        // console.log(settodos);
   }



  return (
   <>
   <div className="container">
    <Form saveTodo={saveTodo} edit={edit} updatetodo={updatetodo}/>
    <ListGroup  todos={todos} deletetodo={deletetodo} edittodo={edittodo}/>
  </div>
   </>
  )
}

export default App