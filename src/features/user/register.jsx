import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    var navigate = useNavigate();
    var registerForm = useFormik({
        initialValues:{
            fullname:"",
            username:"",
            password:'',
            role:'customer'
        },
        onSubmit:(values)=>{
            // console.log(values);
            axios({
                method:'post',
                url:'http://localhost:3700/register',
                data:values
            }).then(()=>{alert('Registered Successfully')})
            navigate('/login')
        }
    })
  return (
    <div>
        <form id='registerform' class='w-25 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation' onSubmit={registerForm.handleSubmit} action="" method="post">
            <h3 style={{textAlign:"center"}}>Sign up Here</h3>
            <div class="form-floating mb-3 mt-3">
                <input type="text" name='fullname' class="form-control" placeholder="Enter Fullname" onChange={registerForm.handleChange} required/>
                <label className='form-label'>Fullname</label>
            </div>
            <div class="form-floating mb-3 mt-3">
                <input type="text" name='mobile' class="form-control" placeholder="Enter Phone Number" onChange={registerForm.handleChange} required/>
                <label className='form-label'>Phone Number</label>
            </div>
            <div class="form-floating mb-3 mt-3">
                <input type="text" name='username' class="form-control" placeholder="Enter Username" onChange={registerForm.handleChange} required/>
                <label className='form-label'>Username</label>
            </div>
            <div class="form-floating">
                <input type="password" name='password' class="form-control" id="floatingPassword" placeholder="Enter Password" onChange={registerForm.handleChange} required/>
                <label className='form-label' for="floatingPassword">Password</label>
            </div>
            <button class="btn btn-primary mt-2" type='submit'>Sign up</button><br />
        </form>
    </div>
  )
}

export default Register