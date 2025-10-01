import { Link } from 'react-router-dom';
import './topBar.css'
import { Context } from '../../context/Context';
import { useContext } from 'react';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {

    dispatch({type: "LOGOUT"})
  }

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
                <li className="topListItem" onClick={handleLogout}>
                  { user && "LOGOUT"}
                </li>
        </ul>
      </div>
      <div className='topRight'>
        { user ? 
        <Link to={`/settings?${user.profilePic}`}>
        (<img className='topImg' 
            src={`http://localhost:5000/images/${user.profilePic}`} 
            alt="" 
            />)
        </Link>
             : 
            (<span className='links'>
            <Link className='link registerLink' to='/register' >REGISTER</Link>
            <Link className='link loginLink' to='/login' >LOGIN</Link>
            </span >)}
            
            <i className="topSearchIcon fa-brands fa-searchengin"></i>
      </div>
    </div>
  )
}
