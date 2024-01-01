import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddTicketForm() {
    var paramsData = useParams();
    var navigate = useNavigate();
    var ticketForm = useFormik({
        initialValues:{
            issue:"",
            productname:"",
            date:Date.now(),
            customerId:JSON.parse(window.localStorage.getItem('user'))._id
        },
        onSubmit:(values)=>{
            // console.log(values)
            axios({
                method:'post',
                url:'http://localhost:3700/addticket',
                data:values
            })
            .then((res)=>{
                alert('Ticket raised')
            })
            navigate(`/customerDashboard/${paramsData.username}/${paramsData.id}/listoftickets`)
        }
    });
    return (
        <div>
            <form onSubmit={ticketForm.handleSubmit} class='w-25 shadow-lg p-4 bg-secondary bg-opacity-75 me-auto ms-auto mt-4' action="" method="post">
                <h3>Raise Ticket</h3>
                <div class="form-floating mb-3">
                    <textarea class="form-control" name="issue" placeholder="Leave a comment here" style={{ height: '75px' }} onChange={ticketForm.handleChange}></textarea>
                    <label for="floatingTextarea" className='form-label'>Issue</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" name="productname" class="form-control" placeholder="name@example.com" onChange={ticketForm.handleChange}/>
                    <label for="floatingInput" className='form-label'>Product Name</label>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary mb-3">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AddTicketForm