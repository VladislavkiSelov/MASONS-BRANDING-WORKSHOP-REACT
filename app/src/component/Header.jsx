import React from 'react'
import { useState } from 'react'
import ClothingList from './ClothingList'
import ShoesList from './ShoesList';
import { NavLink } from 'react-router-dom';
import Basket from './Basket'

export default function Header() {
  const [blockClothStatus, setBlockClothStatus] = useState(false)
  const [blockShoesStatus, setBlockShoesStatus] = useState(false)
  const [blockBasket, setblockBasket] = useState(false)

  return (
    <div className='box_header'>
      <header className='header conteiner'>
        <div className='top_header_box'>
          <div className='search'> <input type="text" placeholder='Поиск' /></div>
          <div className='logo'>
            <NavLink to="/"><img src='./img/header_footer/logo.png' alt="#" /></NavLink>
          </div>
          <div className='box_lang'>
            <span>RU</span>
            <span className='line'></span>
            <span>UA</span>
            <img src='./img/header_footer/basket.png' alt="#" onClick={() => setblockBasket(!blockBasket)} />
            {blockBasket && <Basket setblockBasket={value => setblockBasket(value)} />}
            <img src='./img/header_footer/like.png' alt="#" />
          </div>
        </div>
        <nav className='navigation'>
          <ul>
            <li><NavLink to="/">Главная</NavLink></li>
            <li onMouseEnter={() => setBlockClothStatus(true)} onMouseLeave={() => setBlockClothStatus(false)}>Одежда
              {blockClothStatus === true && <ClothingList />}
            </li>
            <li onMouseEnter={() => setBlockShoesStatus(true)} onMouseLeave={() => setBlockShoesStatus(false)}>Обувь
              {blockShoesStatus === true && <ShoesList />}
            </li>
            <li><NavLink to="/category/bags">Рюкзаки и сумки </NavLink></li>
            <li><NavLink to="/contact">Контакты</NavLink></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
