import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function Amount() {

  const {transections} = useContext(GlobalContext)

  const total = transections.reduce((p,c)=>{
    return p + c.amount
  },0)
  const income = transections.filter(item => item.amount > 0).reduce((p,c)=>{
    return p + c.amount
  },0)
  const expance = transections.filter(item => item.amount < 0).reduce((p,c)=>{
    return p + c.amount
  },0)
   
  return (
    <div className='d-flex container'>
        <h1 className="bg-success p-5 income">Income ₹{income}</h1>
        <h1 className="b-danger mx-5 p-5 expense">Expense ₹{expance}</h1>
        <h1 className="bg-warning  p-5 total">total ₹{total}</h1>
    </div>
  )
}

export default Amount