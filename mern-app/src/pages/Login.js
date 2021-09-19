import React, { useState } from 'react' ;



const Login = () => {
  const [ email , setEmail ] = useState('') ;
  const [ password , setPassword ] = useState('') ;
  return (
    <div className='login'>
      <form>
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
      </form>
    </div>
  )
} ;


export default Login ;
