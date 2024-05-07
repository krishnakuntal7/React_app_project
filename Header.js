"use client"
import React, { useState } from 'react'

const Header = () => {
    const [name, setname] = useState("")
    const [mail, setmail] = useState("")
    const [mobile, setmobile] = useState("")
    const [mainTask, setmainTask] = useState([])

    const submitHandler = (e)=>{
        e.preventDefault();
        setmainTask([ ...mainTask, {name,mail,mobile}]);
        setname("");
        setmail("");
        setmobile("");
        console.log(mainTask)
    };
    
    const deleteHandler = (i) => {
        let copytask = [...mainTask]
        copytask.splice(i,1)
        setmainTask(copytask)
    }
    

    let renderTask = <h2>No records</h2>;

   if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
        return(
            <li key={i} className='flex items-center justify-between mb-5'>
            <div className='flex justify-between w-2/3'>
             <h4>{t.name}</h4>
             <h5>{t.mail}</h5>
             <h6>{t.mobile}</h6>
            </div>
            <button 
            onClick={() => {
                deleteHandler(i)
            }}
            className='bg-red-400 text-white px-4 py-2 rounded font-bold'> 
                Delete
            </button>
            </li>
        )
    })
   }

  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Attendance Portal System
    </h1>
    <form onSubmit={submitHandler}>
        <input type='text'
        className='text 2xl border-zinc-800 border-4 m-8 px-4 py-2'
        placeholder='Enter Your Name'
        value={name}
        onChange={(e)=>{
            setname(e.target.value)
        }}
        />
        <input type='text'
        className='text 2xl border-zinc-800 border-4 m-8 px-4 py-2'
        placeholder='Enter your E-mail Address'
        value={mail}
        onChange={(e)=>{
            setmail(e.target.value)
        }}
        />
        <input type='text'
        className='text 2xl border-zinc-800 border-4 m-8 px-4 py-2'
        placeholder='Enter Your Mobile number'
        value={mobile}
        onChange={(e)=>{
            setmobile(e.target.value)
        }}
        />
        <button className='bg-black text-white px-4 py-3 text-large font-bold rounded m-4'>
            Sign Up
        </button>
    </form>
    <hr />
    <div className='p-8 bg-slate-400'>
       <ul>
         {renderTask}</ul>  
        </div>
        

     
    </>
  )
}

export default Header



