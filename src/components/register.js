import React from 'react';
// import '../css/login.css';


function Register() {
    return(
        <div className='container'>
            <div className='top'>

            </div>
            <form>
                <div className='form-inner'>
                        <h1>Welcome</h1>
                        <h2>Manage Your Task Checklist Easily</h2>
                        {/* error!*/}

                
                   <div className='form-group'>
                        <label htmlFor="email">Full Name</label><br/>
                        <input type="email" name="email" id="email" placeholder='Tebo Fire'/>
                    </div><br/>


                    <div className='form-group'>
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" name="email" id="email"/>
                    </div><br/>

                    <div className='form-group'>
                        <label htmlFor="password">Password</label><br/>
                        <input type="password" name="password" id="password"/>
                    </div><br/>
                <input type="submit" value="Create Account"/>
                </div>


            </form>
        </div>

    )
}
export default Register