import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ListTicket(){
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
        <div style={{textAlign:'start'}}>
            <h1>List of Tickets</h1>
            <ul>
                {
                    tickets && tickets.map((ticket)=>{
                        if(ticket.customerId == userdata.id){
                            return <li>{ticket.issue}</li>
                        }
                    })
                }
            </ul>
        </div>
    )
}
export default ListTicket