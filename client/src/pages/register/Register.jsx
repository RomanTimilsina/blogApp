import { Link } from 'react-router-dom'
import './register.css'
import { useState } from 'react'
import axios from 'axios'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log("submit:", username, email, password)
    try {
      setError(false)
    const postUser = 
       await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password
    
    })
    postUser.data && window.location.replace("/login")
  } catch (err) {
    setError(true)
  }
  }

  return (
    <div className='login'>
        <span className="loginTitleHeader">Register</span>
        <form className="loginTitle" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
            type="text" 
            placeholder='Enter your Username...' 
            onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input 
            type="text" 
            placeholder='Enter your email...' 
            onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input 
            type="password" 
            placeholder='Enter your password...'
            onChange={(e) => setPassword(e.target.value)}
            />
            {/* <button className="loginButton">
              <Link className='link' to='/register'>Register</Link>
            </button> */}
            {/* <Link className="loginButton link" to="/register">Register</Link> */}
            <button className="loginButton" type="submit">Register</button>
        </form>
        <button className="loginRegisterButton">
        <Link className='link' to='/login'>Login</Link>

        </button>
        {error && <span>Something went wrong!</span>}
    </div>
  )
}
