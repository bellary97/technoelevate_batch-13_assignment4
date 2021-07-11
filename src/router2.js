

import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeList from "./components/EmployeeList";
import Home from "./components/Home"
export const routing2 = (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/home">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/employeelist">
                Employee List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/details">
                Employee Details
              </Link>
            </li>
  
            <li className="nav-item">
              <Link className="nav-link " to="/bgcolor">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
      <Route path="/home" exact>
        {" "}
        <Home/>{" "}
      </Route>
      <Route path="/employeelist" component={EmployeeList}/>
      <Route path="/details" component={EmployeeDetails}/>
    </Switch>
     
    </BrowserRouter>
)