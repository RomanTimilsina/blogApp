import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import './write.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

export default function Write() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const path = queryParams.get("path");
    const titleQuery = queryParams.get("title")
    const descQuery = queryParams.get('desc')
    const photoQuery = queryParams.get('photo')

    console.log("userId:",user)

    useEffect(() => {
        if (titleQuery) setTitle(titleQuery)
        if (descQuery) setDesc(descQuery)
    },[titleQuery, descQuery])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newPost = {
            title,
            desc,
            username: user.username,
            userId: user._id
        }
        if(file) {
            const data = new FormData()
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            newPost.photo = filename
            try {
                await axios.post('http://localhost:5000/api/upload', data)
            } catch(err) {
                console.log(err)
            }
        }
        try {
            if (path) {
                const res = await axios.put(` http://localhost:5000/api/post/${path}` , newPost)
                window.location.replace('/post/' + res.data._id)

            } else {
                const res = await axios.post('http://localhost:5000/api/post', newPost)
                window.location.replace('/post/'+res.data._id)
            }
            // window.location.replace('/post/'+res.data._id)
            // console.log(res)
        } catch(err) {
            console.log(err)
        }
    }

  return (
    <div className='write'>
        {(!photoQuery && file) && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
        {(photoQuery && !file) && (
        <img className="writeImg" src={`http://localhost:5000/images/${photoQuery}`} alt="" />
        )}
        {(photoQuery && file) && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
        )}
            <form className='writeForm' onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: 'none'}} onChange={(e) => setFile(e.target.files[0])} />
                    <input type="text" placeholder='Title' className='writeInput'  value={title} autoFocus={true} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="writeFormGroup">
                    <textarea
                    placeholder='Tell your story...'
                    type='text'
                    className='writeInput writeText'
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className='writeSubmit' type='submit'>Publish</button>
            </form>
    </div>
  )
}
