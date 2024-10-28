import React from 'react'
import Navbar from '../components/Navbar'
const Getintouch = () => {
    const submit =()=>{
        alert("submited")

    }
  return (
    <>
    <Navbar/>
    <h1  className='h' >Get In Touch</h1>
     <p  className='teeext'  align="center"  >Lorem ih2sum dolor sit amet consectetur adih2isicing elit. Numquam fugiat incidunt h2laceat illo exh2licabo non cuh2iditate ab aut ducimus dolorum! Dolorum a dignissimos eveniet sit sint quod ratione temh2ore obcaecati.</p>  
    
    <div className="formm">
        <form>
            <h4  className='ha'>Email</h4>
            <input placeholder='Enter Email' type="text" />
            
            <h4  className='ha'>Mobile</h4>
            <input   placeholder='Enter Mobile' type="text" />
            <h4 className='ha' >Message</h4>
             <textarea placeholder='Enter Your Message..'  ></textarea>
             <br />
             <br />
             <button onClick={submit} className='get-btn' >Submit</button>
        </form>
    </div>
    
    
    
    </>
  )
}

export default Getintouch
