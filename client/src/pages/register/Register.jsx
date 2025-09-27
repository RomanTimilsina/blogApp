import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
  return (
    <div className='login'>
        <span className="loginTitleHeader">Register</span>
        <form className="loginTitle">
            <label>Username</label>
            <input type="text" placeholder='Enter your Username...' />
            <label>Email</label>
            <input type="text" placeholder='Enter your email...' />
            <label>Password</label>
            <input type="password" placeholder='Enter your password...' />
            <button className="loginButton">
              <Link className='link' to='/register'>Register</Link>
            </button>
        </form>
        <button className="loginRegisterButton">
        <Link className='link' to='/login'>Login</Link>

        </button>
    </div>
  )
}
