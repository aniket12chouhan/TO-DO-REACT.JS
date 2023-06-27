import React from 'react'
import Listitem from './Listitem'

const ListGroup = ({todos ,deletetodo ,edittodo}) => {
    return (
        <ul id="list-container">
{
    todos.map((todo ,id ) =>(
        <Listitem key={id} todo={todo} deletetodo={deletetodo} edittodo={edittodo}/>
    ))
}
            

        </ul>
    )
}

export default ListGroup