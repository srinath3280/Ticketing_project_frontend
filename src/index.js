import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './features/user/login';
import Register from './features/user/register';
import Customer from './features/dashboard/customerDashboard';
import Employee from './features/dashboard/employeeDashboard';
import Manager from './features/dashboard/managerDashboard';
import AddTicketForm from './features/dashboard/addTicketForm';
import ListTicket from './features/dashboard/listtickets';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Login/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/customerDashboard/:username/:id",
        element:<Customer></Customer>,
        children:[
          {
            path:"/customerDashboard/:username/:id/addticketForm",
            element:<AddTicketForm></AddTicketForm>
          },
          {
            path:"/customerDashboard/:username/:id/listoftickets",
            element:<ListTicket></ListTicket>
          }
        ]
      },
      {
        path:"/employeeDashboard/:username/:id",
        element:<Employee></Employee>
      },
      {
        path:"/managerDashboard/:username/:id",
        element:<Manager></Manager>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
