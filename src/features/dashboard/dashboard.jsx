import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard(){
    var [data,setData] =  useState();
    useEffect(()=>{
        axios({
            method : 'get',
            url : 'http://localhost:3800/dashboard'
        }).then((res)=>{
            setData(res)
        })
    },[])
    console.log(data)
    return (
        <div>
            <h1>Customer Dashboard</h1>
        </div>
    )
}

export default Dashboard