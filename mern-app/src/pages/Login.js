import React, { useState } from 'react' ;
import axios from '../axios' ;
import '../styles/Login.css' ;
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {
  const [ email , setEmail ] = useState('') ;
  const [ password , setPassword ] = useState('') ;

  
  const handleSubmit = (e) => {
    e.preventDefault() ;
    axios.get("/login" , { email , password })
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
  return (
    <div className='login'>
      <section>
        <h1>MERN TEST PROJECT</h1>
        <p>After you have registered, please sign in to your account </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            id='email' 
            type='email' 
            label="Email" 
            size='small'
            variant="outlined"
            required
          />
          <TextField 
            type='password' 
            id='password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            label="Password" 
            variant="outlined"
            size='small'
            required
          />

          <Button 
            variant="contained" 
            type='submit'
          >
            Login
          </Button>
        </form>


      </section> 
    </div>
  )
} ;


export default Login ;
