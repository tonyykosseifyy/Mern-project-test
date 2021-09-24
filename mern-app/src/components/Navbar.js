import React, { useContext, useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link , useLocation} from 'react-router-dom' ;
import { UserContext } from '../context/index' ;
import Button from '@mui/material/Button';


const Navbar = () => {
  const [ state , setState ] = useContext(UserContext) ;
  const [ current , setCurrent ] = useState("") ;
  let location = useLocation() ;


  useEffect(() => {
    setCurrent(location.pathname) ;
  },[location])


  console.log("current =>>",current) ;
  const logout = () => {
    window.localStorage.removeItem("auth") ;
    setState(null) ;
  }
  return (
    <nav className="navbar">
      <Link to='/' className={current === '/' ? "active" : ''} >Home</Link>
      {
        state !== null ? 
        <>
          <Button variant='filled' onClick={() => logout()}>
            Logout
          </Button> 
          <Link to='/user/dashboard' className={current === '/user/dashboard' ? "active" : ''}>
            {state.user.name}
          </Link>
        </>
      : 
        <>
          <Link to='/login' className={current === '/login' ? "active" : ''}>Login</Link>
          <Link to='/register' className={current === '/register' ? "active" : ''} >Register</Link>
        </>
      }
    </nav>
  );
};

export default Navbar;
