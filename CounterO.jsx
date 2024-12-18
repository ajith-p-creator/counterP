import React, { useState } from 'react'
import{useDispatch, useSelector}from'react-redux'
import { decrement, increment, incrementByAmount, reset } from './Redux/counterSlice'






export default function 
() {
  const[amount,setamount]=useState('')
  const {count}= useSelector(state=>state.counterReduce)
  const dispatch=useDispatch()
  const handilingremet=()=>{
    if(amount){
      dispatch(incrementByAmount(parseInt(amount)))

    }
    else{
      alert('please enter the value')
    }
    
  }
  return (
    <>
    <div className=' bg-dark' style={{height:"100vh"}}>
       <h3 className='text-center text-light mb-5'>Counter App</h3>
       <div className='container border border-3 border-light bg-dark w-75 d-flex flex-column align-items-center justify-content-center ' style={{height:"70vh"}}>
              <h3 className='text-light'>{count}</h3>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={()=>dispatch(increment())} className='btn btn-warning me-5'>Increment</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger me-5'>Reset</button>
                <button onClick={()=>dispatch(decrement())} className='btn btn-success'>Decrement</button>
            </div>
            <div className='d-flex justify-content-center mt-5'>
              <input onChange={(e)=>setamount(e.target.value)} type="text" className='form-control m-1 ' />
              <button onClick={handilingremet} className='btn btn-primary m-1'>Increment By Amount</button>
            </div>
            <h1>hello</h1>
       </div>
    </div>
  </>

  )
}
