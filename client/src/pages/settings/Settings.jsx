import { useContext, useRef, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
import { Context } from '../../context/Context'
import axios from 'axios'

export default function Settings() {

  const userRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const [file, setFile] = useState(null)

  const { user, dispatch, isFetching } = useContext(Context)
  console.log("User:", user)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newProfile = {
        userId: user._id,
        username: userRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }

    dispatch({type: "UPDATE_START"})

    if(file) {
      const data = new FormData()
      const filename = Date.now()+file.name;
      data.append("name", filename)
      data.append("file", file)
      newProfile.profilePic = filename
      try {
          await axios.post('http://localhost:5000/api/upload', data)
      } catch(err) {
        console.log(err)
      }
    }

    try {
      const res = await axios.put(`http://localhost:5000/api/users/${user._id}`, 
        newProfile
    )
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data})
      window.location.replace('/')
      console.log('data:',res.data)
    } catch(err) {
      dispatch({type: "UPDATE_FAILURE"})
    }
  }


  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update your account</span>
            <span className="settingsDeleteTitle">Delete account</span>
          </div>
          <form action="" className="settingsForm" onSubmit={handleSubmit}>
            <label>Profile Picture</label>
            <div className="settingsPP">
              {
                file && 
              <img 
              className='PPImage'
              src={URL.createObjectURL(file)}
              alt="" 
              />
              }
              {
              !file && 
              <img 
              className='PPImage'
              src={`http://localhost:5000/images/${user.profilePic}`}
              alt="" 
              />
              }
              <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-solid fa-user"></i>
              </ label>
              <input type="file" id='fileInput' style={{ display: 'none'}} onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <label>Username</label>
            <input type="text" placeholder='Username' ref={userRef} />
            <label>Email</label>
            <input type="email" placeholder='Email' ref={emailRef}/>
            <label>Password</label>
            <input type="password"  ref={passwordRef}/>
            <button className="settingsSubmit" type='submit'>Update</button>
          </form>
        </div>
        <Sidebar />
    </div>
  )
}
