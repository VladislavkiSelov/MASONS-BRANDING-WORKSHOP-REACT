import React, { useState } from 'react'
import axios from "axios"
const API_URL = "http://localhost:3000/api/emailPerson"

export default function Footer() {
    const [valueEmail, setValueEmail] = useState('')
    function sendEmail() {
        if (valueEmail === null) {
            return
        }
        axios.post(`${API_URL}`, { valueEmail: valueEmail })
    }
    return (
        <div className='box_footer'>
            <footer className='footer conteiner'>
                <div className='box_logo'>
                    <div className='logo'>
                        <img src='./img/header_footer/logo.png' alt="#" />
                    </div>
                    <div className='box_social_networks'>
                        <div className='icon'>
                            <img src='./img/header_footer/telegram.png' alt="#" />
                        </div>
                        <div className='icon instagram'>
                            <img src='./img/header_footer/Instagram.png' alt="#" />
                        </div>
                    </div>
                </div>
                <div className='box_information'>
                    <h3>Информация</h3>
                    <p>Магазины</p>
                    <p>О нас</p>
                    <p>Доставка и оплата</p>
                    <p>Возврат товара</p>
                </div>
                <div className="box_search_string">
                    <h2>Узнавай о новинках первым</h2>
                    <p>Получай от нас смс с сюрпризами</p>
                    <div className='block_search'>
                        <input type="text" onChange={(e) => setValueEmail(e.target.value)} placeholder='Email' />
                        <button type='button' onClick={sendEmail}>Отправить</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}
