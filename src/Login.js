import React from 'react';
import axios from 'axios';

const Login =()=>{
    
    const onSubmitSignup =(e)=>{
        const formData = new FormData(e.target)
        const data = {}
        e.preventDefault()
        for (let entry of formData.entries()) {
            data[entry[0]] = entry[1]
        }

        console.log(data);

        // const rec = fetch("https://reqres.in/api/register",
        //             {
        //                 method: 'POST',
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                   },
        //                 body: JSON.stringify(data),
        //             })
        //             .then(rdata=>rdata.json())
        //             .then(data=>console.log(data));
        //             // console.log(response.data);       


    }



    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>SignUp</h1>
                        <div className='signup'><br />
                              <form onSubmit={(e)=>onSubmitSignup(e)}>
                                
                                <label>Email</label>
                                <input type="email" name="email" placeholder='Enter Email' /><br /><br />
                                <label>Password</label>
                                <input type="password" name="password" placeholder='Enter Password' /><br /><br />

                                <button type="submit" className='btn-signup'>Signup</button>
                            </form>
                            

                        </div>
                    </div>
                    
                    {/* <div className='col-md-6'>
                        <br /><br />
                        <h1>LOGIN</h1><br />
                        <div className='login'>
                            <form>
                            <label>Email</label>
                            <input type="email" name="email" placeholder='Enter Email' /><br /><br />
                            <label>Password</label>
                            <input type="password" name="password" placeholder='Enter Password' /><br /><br />

                            <button type="submit" className='btn-login'>Login</button>

                            </form>

                        </div>                        
                    </div> */}
                </div>


            </div>
        
        
        </>
    )
}
export default Login;