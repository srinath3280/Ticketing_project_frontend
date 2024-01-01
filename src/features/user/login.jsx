import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    var navigate = useNavigate();
    var loginForm = useFormik({
        initialValues:{
            username:"",
            password:''
        },
        onSubmit:(values)=>{
            console.log(values);
            axios({
                method : 'post',
                url : 'http://localhost:3700/login',
                data : values
            })
            .then((res)=>{
                console.log(res.data[0])
                // console.log(res.data[0].username,res.data[0].password)
                window.localStorage.setItem("user",JSON.stringify(res.data[0]))
                res.data.filter((data)=>{
                    if(data.role === 'customer'){
                        navigate(`/customerDashboard/${data.username}/${data._id}`)
                    }
                    if(data.role === 'employee'){
                        navigate(`/employeeDashboard/${data.username}/${data._id}`)
                    }
                    if(data.role === 'manager'){
                        navigate(`/managerDashboard/${data.username}/${data._id}`)
                    }
                })
            })
            .catch((err)=>{
                navigate('/')
            })
        }
    })
  return (
    <div id='loginblock'>
        <form id='loginform' class='w-25 shadow-lg p-4 bg-secondary bg-opacity-75 needs-validation' onSubmit={loginForm.handleSubmit} action="" method="post">
            <h3 style={{textAlign:"center"}}>Sign in</h3>
            <div class="form-floating mb-3 mt-3">
                <input type="text" class="form-control" name='username' placeholder="Enter Username" onChange={loginForm.handleChange} required/>
                <label className='form-label'>Username</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" name='password' placeholder="Enter Password" onChange={loginForm.handleChange} required/>
                <label className='form-label'>Password</label>
            </div>
            <button class="btn btn-primary mt-2" type='submit'>Sign in</button><br />
            <span>New Users? &nbsp;<Link to="/register" style={{color:'yellow'}}>Create an account</Link></span>
        </form>
    </div>
  )
}

export default Login