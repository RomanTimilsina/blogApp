import { Link } from 'react-router-dom';
import './topBar.css'

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className='topCenter'>
        <ul className="topList">
                <li className="topListItem">
                  <Link className='link' to='/' >HOME</Link>
                </li>
                <li className="topListItem">
                  <Link className='link' to='/' >ABOUT</Link>
                </li>
                <li className="topListItem">
                  <Link className='link' to='/' >CONTACT</Link>
                </li>
                <li className="topListItem">
                  <Link className='link' to='/write' >WRITE</Link>
                </li>
                <li className="topListItem">
                  { user && "LOGOUT"}
                </li>
        </ul>
      </div>
      <div className='topRight'>
        { user ? (<img className='topImg' 
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            />)
             : 
            (<span className='links'>
            <Link className='link registerLink' to='/register' >REGISTER</Link>
            <Link className='link loginLink' to='/login' >LOGIN</Link>
            </span >)}
            
            <i class="topSearchIcon fa-brands fa-searchengin"></i>
      </div>
    </div>
  )
}
