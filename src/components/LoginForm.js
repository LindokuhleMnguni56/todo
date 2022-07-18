import React from 'react';
import '../css/login.css';
import google from '../images/google.png'
import { Link } from 'react-router-dom';



function LoginForm() {
    return(
        <div className='container'>
            <div className='top'>

            </div>
            <form>
                <div className='form-inner'>
                        <h1>Welcome Back</h1>
                        <h2>Manage Your Task Checklist Easily</h2>
                        {/* error!*/}

                
            
                    <div className='form-group'>
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" name="email" id="email" placeholder='Enter your Email Address here'/>
                    </div><br/>

                    <div className='form-group'>
                        <label htmlFor="password">Password</label><br/>
                        <input type="password" name="password" id="password" placeholder='Enter your Password here'/>
                    </div><br/>
                <button className='button' type="submit" value="Login">Login</button><br></br>
                <span>Don't have an Account?<Link to='./signup'> create one</Link></span>
                <h2>OR</h2>
                <button className='google' ><img src={google}/> Sign in with Google</button>
                </div>
                
            </form>
        </div>

    )
}

export default LoginForm