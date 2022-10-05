import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement,reset, incrementByAmount } from './CounterSlice'


const Counter = () => {

    const [incrementAmount, setincrementAmount] = useState(0)

    const addValue = Number(incrementAmount) || 0;

    // useselector helps us to get items

    // useselector will first go to store => reducer => counterReducer and from that it can access all items from initialstate of counterSlice.js

    const count = useSelector((state) => state.counterReducer.count)

    // usedispatch wil go to actions and determine it and on the basis of that action and it will perfrom whatsoever logic inside reducer 

    const dispatch = useDispatch()


    const Reset = () => {
        setincrementAmount(0);
        dispatch(reset())
    }

  return (
    <>
    <p>{count}</p>

    <input type="number" className='bg-slate-100 px-6 py-2 m-6 border rounded-lg p-2 outline-none' value={incrementAmount} onChange={ (e) => setincrementAmount(e.target.value)} name="" id="" />

    <button className='px-8 py-2 m-2 rounded-lg bg-slate-100' onClick={ () => dispatch(increment()) }>+</button>
    <button className='px-8 py-2 m-2 rounded-lg bg-slate-100' onClick={ () => dispatch(decrement()) }>-</button>
    <button className='px-8 py-2 m-2 rounded-lg bg-slate-100'  onClick={Reset} >RESET</button>
    <button className='px-8 py-2 m-2 rounded-lg bg-slate-100'  onClick={() => dispatch(incrementByAmount(addValue))} >AddAmount</button>
    
    </>
  )
}

export default Counter