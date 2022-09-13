import React from 'react'

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div style={{width: '40vw', height: '50vh', backgroundColor: 'gray'}}>
        <h3 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bold'}}>Login</h3>
        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap:'2vh', padding: '5vh 7vw'}}>
            <input type='text' placeholder='username'/>
            <input type='password' placeholder='password'/>
            <input type='submit' value='Login'/>
        </form>
    </div>
  )
}

export default Login