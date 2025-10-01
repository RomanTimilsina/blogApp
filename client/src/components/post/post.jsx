import './post.css'
import {Link} from 'react-router-dom'

export default function post({ post }) {
  return (
    <div className='post'>
        {post.photo && (
            <img className='postImg' 
            src={`http://localhost:5000/images/${post.photo}`}
            alt="" />
        )}
        <div className="postInfo">
            <div className="postCats">
                {/* <span className="postCat">Music</span>
                <span className="postCat">Life</span> */}
                {
                post.categories.map((cat) => (
                  <span className="postCat">{cat}</span>
                ))
                }
            </div>
            <Link to={`/post/${post._id}`} className='link'>
            <span className="postTitle">
                {post.title} 
            </span>
            </Link>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            <p className='postDesc'>
                {post.desc}
            </p>
        </div>
    </div>
  )
}
