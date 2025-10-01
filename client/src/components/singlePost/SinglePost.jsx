import { useLocation, Link } from 'react-router-dom'
import './singlePost.css'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState([])
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const { user } = useContext(Context)
    
    console.log(singlePost)

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get(`http://localhost:5000/api/post/${path}`)
            // console.log(res)
            setSinglePost(res.data)
            console.log('singlePOst:', res.data)
        }
        getPost()
    },[path])

    const handleDelete = async () => {
        try {
          const res = await axios.delete(
            `http://localhost:5000/api/post/${path}`,
            { data: { username: user.username } } // ✅ username sent in request body
          );
      
          console.log("handleDelete:", res.data);
          window.location.replace("/"); // redirect to home after successful delete
        } catch (err) {
          console.error("Delete error:", err.response ? err.response.data : err.message);
        }
      };

      const handleWrite = async () => {
        try {
            // window.location.replace(`/write/${path}`);
            window.location.replace(`/write?path=${path}&title=${encodeURIComponent(singlePost.title)}&desc=${encodeURIComponent(singlePost.desc)}&photo=${encodeURIComponent(singlePost.photo)}`);
        } catch(err) {

        }
      }

  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            {singlePost.photo && 
                <img 
                className='singlePostImg'
                src={`http://localhost:5000/images/${singlePost.photo}`}
                alt="" 
                />
            }
            <h1 className="singlePostTitle">
                <p className='title'>{singlePost.title}
                
                {
                singlePost.userId === user?._id &&
                (<div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen" onClick={handleWrite}></i>
                    <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                </div>)}
                </p>
                
                <div className="singlePostInfo">
                    <Link to={`/?user=${singlePost.username}`} className='link'>
                    <span className="singlePostAuthor">Author: {singlePost.username}</span>
                    </Link>
                    <span className="singlePostDate">{new Date(singlePost.createdAt).toDateString()}</span>
                </div>
                <p className='singlePageDesc'>
                    {singlePost.desc}
                </p>
            </h1>
        </div>
    </div>
  )
}
