import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete account</span>
          </div>
          <form action="" className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img 
              className='PPImage'
              src="https://images.pexels.com/photos/6941666/pexels-photo-6941666.jpeg" 
              alt="" />
              <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-user"></i>
              </ label>
              <input type="file" id='fileInput' style={{ display: 'none'}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder='Username' />
            <label>Email</label>
            <input type="email" placeholder='Email' />
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar />
    </div>
  )
}
