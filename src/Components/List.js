import React from 'react'

function List(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <button  
        onClick={e=>{
            props.deleteItem(props.index)
        }}>X</button>
        </span>
    </li>
  )
}

export default List;