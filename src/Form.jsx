import React, { useEffect, useState } from 'react'


const Form = ({saveTodo , edit ,updatetodo}) => {

    const [text , settext] = useState()
     
 console.log(text);
    const sumbithandle = (e) =>{
        e.preventDefault()
    //  saveTodo()
   if(edit.isedit){
    updatetodo(edit.todo.id , text)
    settext("")
   }
   else{
    saveTodo(text)
    settext("")
   }



    }

    useEffect(()=>{
      settext(edit.todo.text)
      // console.log(edit.todo.text);
    }, [edit])


  return (
   <>
    <form className="todo-app"  onSubmit={sumbithandle}>
    <div className="heading">
      <h2>To-do List</h2> <img src="./public/image/list icon.webp" alt="" />
    </div>
    <div className="row">
      <input type="text" id=" input-box" 
      placeholder="Enter your todo list" 
      onChange={(e) => settext(e.target.value)}
      value={text}
      />
      <button  > ADD </button>
    </div>
  </form>
   
   </>
  )
}

export default Form