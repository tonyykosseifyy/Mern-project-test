import React, { useState } from 'react' ;
import axios from '../axios' ;


const Login = () => {
  const [ email , setEmail ] = useState('') ;
  const [ password , setPassword ] = useState('') ;

  
  const handleSubmit = (e) => {
    e.preventDefault() ;
    axios.get("/login" , { email , password })
    .then(response => console.log(response))
    .cathc(err => console.log(err))
  }
  return (
    <div className='login'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='email'>
          Email : 
        </label>
        <input 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          id='email' 
          type='email' 
          placeholder='email' 
        />
        
        
        <label htmlFor='password'>
          password : 
        </label>
        <input
          type='password' 
          id='password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
} ;


export default Login ;
