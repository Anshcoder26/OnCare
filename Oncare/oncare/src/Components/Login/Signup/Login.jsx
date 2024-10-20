import React from 'react';
import "./Login.css";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";

const Login = () => {

    return(
        <div className='foram'>
         <form action=''>
         <h1 className='register'>REGISTER</h1>
         <div className='input-box'>
             <input type='text' name="name" placeholder='Name' required/>
         </div>
            <br/>
            <div className='input-box'>
                <input type='number' name='Contact Number' placeholder='Contact Number' required/>
            </div>
            <br/>
            <div className='input-box'>
                 <input type='email' name='email' placeholder='Email ID' required/>
            
            </div>
            <br/>
            <div className='input-box'>
                 <input type="number" name='Age' placeholder='Age' required/>
            </div>
            <br/>
            <label className='nana'>Gender</label><br/>

            <button className='gender' type='male'><FaMale className='icon' /></button><button type='female' className='gender1' ><FaFemale className='icon'/></button>
            <br/>
            <button type='submit' className='enroll'>Enroll</button>
            </form>
        </div>
    )
}


export default Login;