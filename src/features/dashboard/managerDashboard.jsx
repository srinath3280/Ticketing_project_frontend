import React, { useEffect, useState } from "react";
import axios from "axios";

function Manager() {
    var [tickets, setTickets] = useState();
    var [employees, setEmployees] = useState();
    var [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:3700/manager'
        })
            .then((res) => {
                // console.log(res.data)
                setTickets(res.data)
            })
        axios({
            method: 'get',
            url: 'http://localhost:3700/employees'
        })
            .then((res) => {
                // console.log(res.data)
                setEmployees(res.data)
            })
    }, [])
    // console.log(employees)
    function assignTicketToEmployee(listTicket) {
        axios({
            method: 'put',
            url: `http://localhost:3700/updateTicket/${listTicket._id}`,
            data: { employeeId: selectedEmployeeId }
        }).then((res) => {
            // console.log(res)
            alert('Ticket assigned successfully')
            // if(!res.data.employeeId){
            //     alert("Ticket isn't assigned")
            // }
            // else{
            //     alert('Ticket assigned successfully')
            // }
        })
    }
    return (
        <div style={{ background: "linear-gradient(275deg, #0062ff, #da61ff)", width: "auto", height: "551px", marginTop: "-50px" }}>
            <div class='d-flex justify-content-center'>
                <h1 style={{ marginBottom: "25px",marginRight:'25px' }}>Manager Dashboard</h1>
                {/* <div class='fs-2'>
                    <i class="bi bi-bell-fill" style={{position:'absolute'}}></i>
                    <span id="managerspan">5</span>
                </div> */}
            </div>
            <table class="table table-dark table-hover w-75 me-auto ms-auto">
                <thead>
                    <tr>
                        <th>Issue</th>
                        <th>Select Employee</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tickets && tickets.map((ticket) => {
                            return (
                                <tr>
                                    <td>{ticket.issue}</td>

                                    <td>
                                        <select onChange={(e) => { setSelectedEmployeeId(e.target.value) }}>
                                            <option value="" selected disabled>select employee</option>
                                            {
                                                employees && employees.map((employee) => {
                                                    return (
                                                        <option value={employee._id} selected={ticket.employeeId == employee._id}>{employee.username}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        {
                                            ticket.employeeId ? "Assigned" : <button class="btn btn-secondary" onClick={() => { assignTicketToEmployee(ticket) }}>Assign</button>
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Manager