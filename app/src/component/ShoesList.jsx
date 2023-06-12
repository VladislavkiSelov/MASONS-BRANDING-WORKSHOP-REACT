import React from 'react'
import { NavLink } from 'react-router-dom';

export default function ShoesList() {
    return (
        <div className='blockShoesList'>
            <ul>
                <li><NavLink to="/category/winterShoes">Зимняя обувь</NavLink></li>
                <li><NavLink to="/category/sneakers">Кросовки</NavLink></li>
            </ul>
        </div>
    )
}
