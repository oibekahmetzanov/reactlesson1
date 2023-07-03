import React from 'react'
import Logo from '../assets/Funiro..png'
import './header.css'
import Head_fut from '../assets/Icons.png'
import block from '../assets/Image Gallery.png'

const Header = () => {
  return (
  <header className='header'>
    <div className='container'>
        <nav className='header__nav'>
            <h1 className='header__title'>
                <img src={Logo} alt="" />
            </h1>
            <ul>
              <li className='header_item'>products</li>
              <li className='header_item'>Rooms</li>
              <li className='header_item'>Inspirations</li>
            </ul>
            <div>
            <button type="submit"></button>
            <input type='text' placeholder='Search for minimalist chair'></input>
            </div>
            <div className='head_fut'><img src={Head_fut} alt="" /></div>

        </nav>
        <div className='block'>
          <img src ={block} alt="" />
        </div>
        <div className='windou_block'>
          <h1>
          High-Quality<br></br>
          Furniture Just<br></br>
          For You
          </h1>
          <p>Our furniture is made from selected<br></br>and best quality materials that are <br></br>suitable for your dream home</p>
          <button>
            shop now
          </button>
        </div>
    </div>

  </header>
  )
}

export default Header;