import { Link } from 'react-router-dom'
import './login.css'
import { useContext, useRef } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'

export default function Login() {

    const userRef = useRef()
    const passwordRef = useRef()

    const { dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"});

        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        } catch(err) {
            dispatch({type: "LOGIN_FAILURE"});
        }

    }


  return (
    <div className='login'>
        <span className="loginTitleHeader">Login</span>
        <form className="loginTitle" onSubmit={handleSubmit}>
            <label>username</label>
            <input type="text" placeholder='Enter your username...' 
            ref={userRef}
            />
            <label>Password</label>
            <input type="password" placeholder='Enter your password...'
            ref={passwordRef}
            />
            <button className="loginButton" type='submit' disabled={isFetching}>
                Login
            </button>
        </form>
        <button className="loginRegisterButton">
            <Link className='link' to='/register'>Register</Link>
        </button>
    </div>
  )
}
