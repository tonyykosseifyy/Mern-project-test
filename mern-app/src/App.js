import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios.js";
import { BrowserRouter as Router, Route, Switch , useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import 'antd/dist/antd.css';

function App() {

  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
