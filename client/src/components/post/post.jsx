import './post.css'

export default function post() {
  return (
    <div className='post'>
        <img className='postImg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet 
            </span>
            <span className="postDate">1 hr ago</span>
            <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolore nostrum rem ipsa distinctio vitae qui deleniti 
                 illum quia non nobis voluptas voluptates ut quaerat sit
                  veritatis odio voluptatum, debitis dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolore nostrum rem ipsa distinctio vitae qui deleniti 
                 illum quia non nobis voluptas voluptates ut quaerat sit
                  veritatis odio voluptatum, debitis dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolore nostrum rem ipsa distinctio vitae qui deleniti 
                 illum quia non nobis voluptas voluptates ut quaerat sit
                  veritatis odio voluptatum, debitis dolores!Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Dolore nostrum rem ipsa distinctio vitae qui deleniti 
                 illum quia non nobis voluptas voluptates ut quaerat sit
                  veritatis odio voluptatum, debitis dolores!
            </p>
        </div>
    </div>
  )
}
