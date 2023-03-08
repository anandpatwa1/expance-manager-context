import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'

function Form() {
  
  const [name , setName] = useState("")
  const [amount , setAmount] = useState("")

  
  const {saveTransection , edit , updateTransection } = useContext(GlobalContext)

  const handleSubmit = (e)=> { 
    e.preventDefault()
    if(edit.isEdit){
      updateTransection(edit.transection.id , amount , name)
    }else{
      saveTransection(amount , name )
    }
    setName("")
    setAmount("")
    
  }
  
  useEffect(()=>{
    setAmount(edit.transection.amount)
    setName(edit.transection.name)
  },[edit])
 
  
  return (
    <form className='w-100 d-flex flex-column align-items-center' onSubmit={(e)=>handleSubmit(e)}>
    <div className="mb-3 w-75 ">
      <label className="form-label">NAME OF EXPENCE / INCONOME</label>
      <input  value={name} onChange={(e)=>setName(e.target.value)} placeholder='NAME OF EXPENCE / INCONOME' type="text" className="form-control" />
    </div>
    <div className="mb-3 w-75 ">
      <label className="form-label">AMOUNT</label>
      <input  value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='AMOUNT'  type="text" className="form-control" />
    </div>
    <button type="submit" className="btn btn-primary w-75">Submit</button>
  </form>
  )
}

export default Form