import React from 'react'

export default function ContactPage() {
    return (
        <div className='block_contact conteiner'>
            <div className='box_map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.0549301749834!2d36.234406299999996!3d49.991579599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0f1b04aa383%3A0x95193f4aa08177cb!2z0KLQoNCmIE5JS09MU0tZ!5e0!3m2!1sru!2sua!4v1683923151288!5m2!1sru!2sua"></iframe>
            </div>
            <div className='content_contact'>
                <h3>Адрес</h3>
                <p>ТРЦ NIKOLSKY улица Пушкинская, 2а, Харьков, Харьковская область, 61000</p>
                <h3>Телефон</h3>
                <p>+380 66 622 5191</p>
                <p>+380 73 622 5190</p>
                <h3>Email</h3>
                <p>zakaz@masons.com.ua</p>
            </div>
        </div>
    )
}
