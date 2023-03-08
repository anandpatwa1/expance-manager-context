import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function ListItem({transection}) {
  const {deleteTransection , editTransection} = useContext(GlobalContext)

  return (
    // <li className="list-group-item bg-danger" >
    <li className={transection.amount < 0 ? "list-group-item bg-danger" : "list-group-item bg-success"}>
   <span> ₹{transection.amount}</span>
<span className="mx-5 fs-3 ">{transection.name}</span>
        {/* <button className='btn-success btn float-end'>delete</button> */}
        <button onClick={()=>deleteTransection(transection.id)} className={transection.amount < 0 ? 'btn-success btn float-end' : 'btn-danger btn float-end'}>DELETE</button>
        <button onClick={()=>editTransection(transection)} className="btn-warning mx-2 btn float-end">UPDATE</button>
    </li>
  )
} 

export default ListItem