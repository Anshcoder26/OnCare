import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

const Login = () => {

    return(
        <div className='foram'>
         <form action=''>
         <h1 className='register'>LOGIN</h1>
         <div className='input-box'>
             <input type='text' name="name" placeholder='Name' id='name' required/>
         </div>
            <br/>
            <div className='input-box'>
                 <input type='email' name='email' placeholder='Email ID' id='email' required/>
            
            </div>
            <br/>
            <button type='submit' className='enroll'>Login</button>
            </form>
            <Link to="/Register">Don't have an Account</Link>

        </div>
    )
}


export default Login;