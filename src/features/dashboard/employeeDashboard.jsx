import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Employee(){
    var userdata = useParams();
    // console.log(userdata)
    var [tickets,setTickets] = useState();
    useEffect(()=>{
        axios({
            method:'get',
            url:'http://localhost:3700/tickets'
        })
        .then((res)=>{
            // console.log(res.data)
            setTickets(res.data)
        })
    },[])
    return (
        <div style={{textAlign:"start",background:"linear-gradient(275deg, #0062ff, #da61ff)",width:"auto",height:"551px",marginTop:"-50px"}}>
            <h1 style={{marginBottom:"25px",textAlign:"center"}}>List of tickets assigned by manager</h1>
            <ul>
                {
                    tickets && tickets.map((ticket)=>{
                        if(ticket.employeeId == userdata.id){
                            return <li>{ticket.issue}</li>
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default Employee