import React from 'react'
import './index.css'

// import Editbtn from './Editbtn'

const Listitem = ({todo , deletetodo ,edittodo}) => {
    // console.log(todo)
    return (
        <li className='todotext'>
           {todo.text}
           <button className='btn-red' onClick={() =>deletetodo(todo.id)} >Delete</button>
            <button className='btn-yellow' onClick={()=>edittodo(todo)}>Edit</button>
        </li>
    )
}

export default Listitem