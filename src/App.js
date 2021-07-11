import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { routing } from './router';
import { routing2}   from "./router2"
import LoginContext from './context/LoginContext';
import {useState} from "react"

function App() {
  const [login,setlogin]=useState(true)
  function sign()
  {
    setlogin(!login)
  }
 const data ={login,sign}
    return (
    <div>
      <BrowserRouter>
       <LoginContext.Provider value={data}>
         {login ? <>{routing}</>:<>{routing2}</>}
       </LoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
