import React from 'react';
import "./Register.css";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";

const Register = () => {

    return(
        <div className='foram'>
         <form action=''>
         <h1 className='register'>REGISTER</h1>
         <div className='input-box'>
             <input type='text' name="name" placeholder='Name' id='name' required/>
         </div>
            <br/>
            <div className='input-box'>
                <input type='number' name='Contact Number' placeholder='Contact Number' id='number' required/>
            </div>
            <br/>
            <div className='input-box'>
                 <input type='email' name='email' placeholder='Email ID' id='email' required/>
            
            </div>
            <br/>
            <div className='input-box'>
                 <input type="number" name='Age' placeholder='Age' id='age' required/>
            </div>
            <br/>
            <label className='nana'>Gender</label><br/>

            <button className='gender' type='male'><FaMale className='icon' /></button>
            <button type='female' className='gender1'><FaFemale className='icon'/></button>
            <br/>
            <button type='submit' className='enroll'>Enroll</button>
            </form>
        </div>
    )
}


export default Register;