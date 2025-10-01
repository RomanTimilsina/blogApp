import axios from 'axios'
import './sidebar.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCat = async () => {
      const res = await axios.get('http://localhost:5000/api/cat')
      console.log("categoryname", res)
      setCategories(res.data)
    }
    getCat()
  },[])

  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, culpa. Vero minima eos, placeat architecto incidunt beatae accusantium eum corporis amet unde. Suscipit veritatis ut facere consectetur fuga quibusdam fugit!</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
              {categories.map((c) => (
                <Link to={`/?cat=${c.name}`} className='link'>
                  <li className="sidebarListItem" key={c.name}>{c.name}</li>
                </Link>
              ))}
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>FOllOW US</span>
            <div className='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-instagram"></i>
            </div>
        </div>
    </div>
  )
}
