import React from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function Customer(){
    var x = useParams()
    var navigate = useNavigate();
    function addTicket(){
        navigate(`/customerDashboard/${x.username}/${x.id}/addticketForm`)
    }
    function listTicket(){
        navigate(`/customerDashboard/${x.username}/${x.id}/listoftickets`)
    }
    return (
        <div style={{background: "linear-gradient(160deg, rgba(36,191,240,1) 33%, rgba(7,69,60,1) 92%, rgba(3,46,46,1) 100%)",width:"auto",height:"551px",marginTop:"-50px"}}>
            <h1 style={{marginBottom:"25px"}}>Customer Dashboard</h1>
            <button onClick={()=>{listTicket()}}>List of Tickets</button>&nbsp;&nbsp;
            <button onClick={()=>{addTicket()}}>Raise Ticket</button>
            <Outlet></Outlet>
        </div>
    )
}

export default Customer