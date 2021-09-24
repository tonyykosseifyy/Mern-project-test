import React, { useState , useContext } from 'react' ;
import axios from '../axios' ;
import '../styles/Login.css' ;
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { UserContext } from '../context/index' ;
import { Redirect } from 'react-router-dom' ;


const Login = () => {
  const [ email , setEmail ] = useState('') ;
  const [ password , setPassword ] = useState('') ;

  const [ state , setState ] = useContext(UserContext) ;

  const handleSubmit = (e) => {
    e.preventDefault() ;
    axios.post("/api/login" , { email , password })
    .then(({ data }) => {
      setState({user : data.user , token: data.token })
      window.localStorage.setItem("auth" , JSON.stringify(data) ) ;
    })
    .catch(err => console.log(err))
  }
  if (!state?.token) {
    return (
      <div className='login'>
        <section>
          <h1>MERN TEST PROJECT</h1>
          <p>{JSON.stringify(state)}</p>
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
  }
  return (
    <Redirect to='/' />
  )
  
} ;


export default Login ;
