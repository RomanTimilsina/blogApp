import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitleHeader">Login</span>
        <form className="loginTitle">
            <label>Email</label>
            <input type="text" placeholder='Enter your email...' />
            <label>Password</label>
            <input type="password" placeholder='Enter your password...' />
            <button className="loginButton">
            <Link className='link' to='/login'>Login</Link>

            </button>
        </form>
        <button className="loginRegisterButton">
            <Link className='link' to='/register'>Register</Link>
        </button>
    </div>
  )
}
