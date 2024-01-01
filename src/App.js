import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  var u = JSON.parse(window.localStorage.getItem("user"));
  var navigate = useNavigate();
  function logout(){
    window.localStorage.removeItem("user");
    navigate(`/`)
  }
  function register(){
    navigate(`/register`)
  }
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-danger mb-5">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <h3 className="app-h1">Customer Help Desk {window.localStorage.getItem("user")?(('|| Hello..! ')+u.fullname):null}</h3>
            <div>
              <button class='me-2' id="log-btn" onClick={()=>logout()}>{window.localStorage.getItem("user")?"Logout":"Login"}</button>
              {
                !window.localStorage.getItem("user")? <button id="log-btn" onClick={()=>register()}>Register</button>:null
              }
            </div>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
