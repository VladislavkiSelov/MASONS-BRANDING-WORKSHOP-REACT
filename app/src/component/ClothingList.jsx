import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ClothingList() {
    return (
        <div className='blockClothingList'>
            <ul>
                <li><NavLink to="/category/jeans">Джинсы</NavLink></li>
                <li><NavLink to="/category/tracksuits">Спортивные костюмы</NavLink></li>
                <li><NavLink to="/category/jacket">Верхняя одежда</NavLink></li>
                <li><NavLink to="/category/tShirts">Футболки и майки</NavLink></li>
                <li><NavLink to="/category/sweatshirts">Толстовки</NavLink></li>
            </ul>
        </div>
    )
}
