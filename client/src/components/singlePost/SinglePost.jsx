import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img 
            className='singlePostImg'
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
            alt="" 
            />
            <h1 className="singlePostTitle">
                <p className='title'>Lorem ipsum dolor sit amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
                </p>
                
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Person</span>
                    <span className="singlePostDate">1 hr ago</span>
                </div>
                <p className='singlePageDesc'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore adipisci repudiandae eveniet in quae? Quam exercitationem voluptatum a cupiditate ipsa dolorum, porro excepturi repellendus itaque eligendi perspiciatis nesciunt harum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore adipisci repudiandae eveniet in quae? Quam exercitationem voluptatum a cupiditate ipsa dolorum, porro excepturi repellendus itaque eligendi perspiciatis nesciunt harum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore adipisci repudiandae eveniet in quae? Quam exercitationem voluptatum a cupiditate ipsa dolorum, porro excepturi repellendus itaque eligendi perspiciatis nesciunt harum?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta inventore adipisci repudiandae eveniet in quae? Quam exercitationem voluptatum a cupiditate ipsa dolorum, porro excepturi repellendus itaque eligendi perspiciatis nesciunt harum?
                </p>
            </h1>
        </div>
    </div>
  )
}
