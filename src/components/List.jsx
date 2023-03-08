import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import ListItem from './ListItem'

function List() {
    const {transections} = useContext(GlobalContext)
    return (
        <ul className="list-group container">
           
         {
            transections.map(item =>  <ListItem key={item.id} transection={item}/>)
         }
         
        </ul>
    )
}

export default List