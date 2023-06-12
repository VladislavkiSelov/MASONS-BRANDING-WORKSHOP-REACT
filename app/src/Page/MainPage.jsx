import React, { useState } from 'react'
import ContactUsForm from '../component/ContactUsForm.jsx'
import { Carousel, Alert } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useRef } from 'react'

export default function MainPage() {
  const ref = useRef();
  const [dataPerson, setDataPerson] = useState(false)
  return (
    <div className="box_main_page">
      <section className='main_block conteiner'>
        <div className='main_text'>
          <h1>masons<br /><span className='yellow'>branding</span><br />wordshop</h1>
          <p>Высококачественная печать<br />Брендирование одежды и аксессуаров</p>
        </div>
      </section>
      <section className='srv_block conteiner'>
        <h2>Наши <span className='yellow'>услуги</span></h2>
        <p>Технологии, которые мы используем</p>
        <div className='services_block'>
          <div>
            <h3>Шелкотрафарет</h3>
            <p>
              Нанесение продавливанием
              через трафарет</p>
            <button type='button'>Подробней</button>
            <img src='./img/service1.png' alt="#" />
          </div>
          <div>
            <h3>Термоперенос</h3>
            <p>Нанесение с помощью флок-пленки</p>
            <button type='button'>Подробней</button>
            <img src='./img/service2.png' alt="#" />
          </div>
          <div>
            <h3>Прямая печать</h3>
            <p>Нанесение с помощью текстильного принтера</p>
            <button type='button'>Подробней</button>
            <img src='./img/service3.png' alt="#" />
          </div>
        </div>
      </section>
      <section className='print_example_block conteiner'>
        <h2><span className='yellow'>Пример</span> печати</h2>
        <p>Это может быть на тебе</p>
        <div className='carousel_box'>
          <Carousel slidesToShow={3} slidesToScroll={3} dots={false} draggable={true} ref={ref}>
            <div><img src='./img/sweatshirt.png' alt="#" /></div>
            <div><img src='./img/sweatshirt.png' alt="#" /></div>
            <div><img src='./img/sweatshirt.png' alt="#" /></div>
            <div><img src='./img/sweatshirt.png' alt="#" /></div>
            <div><img src='./img/sweatshirt.png' alt="#" /></div>
            <div><img src='./img/sweatshirt.png' alt="#" /></div>
            <div><img src='./img/sweatshirt.png' alt="#" /></div>
            <div><img src='./img/sweatshirt.png' alt="#" /></div>
            <div><img src='./img/sweatshirt.png' alt="#" /></div>
          </Carousel>
          <div className='carousel_btn_box'>
            <LeftOutlined className='carousel_btn_left' onClick={() => { ref.current.prev() }} />
            <RightOutlined className='carousel_btn_right' onClick={() => { ref.current.next() }} />
          </div>
        </div>
      </section>
      <section className='parent_promotions_offers_block'>
        <div className='promotions_offers_block conteiner'>
          <h2> <span className='yellow'>Акции</span> и предложения</h2>
          <p>Успей урвать себе</p>
          <div className='carousel_box'>
            <Carousel slidesToShow={1} slidesToScroll={1} dots={false} draggable={true} arrows={true} accessibility={true} pauseOnDotsHover={true} autoplay={true} autoplaySpeed={5000}>
              <div>
                <div className='carousel_box_block_promotions'>
                  <div className='content_carousel'>
                    <h2>Русский корабль</h2>
                    <p>Купи футболку и 10% с каждой покупки пойдёт на нуждый ВСУ, купи стильную футболку и поддержи своего брата на фронте</p>
                    <button>Подробнее</button>
                  </div>
                  <div className='img_carousel'>
                    <img src='./img/t-shirt.png' alt="#" />
                    <img src='./img/logo.png' alt="#" className='logo' />
                  </div>
                </div>
              </div>
              <div>
                <div className='carousel_box_block_promotions'>
                  <div className='content_carousel'>
                    <h2>Русский корабль</h2>
                    <p>Купи футболку и 10% с каждой покупки пойдёт на нуждый ВСУ, купи стильную футболку и поддержи своего брата на фронте</p>
                    <button>Подробнее</button>
                  </div>
                  <div className='img_carousel'>
                    <img src='./img/t-shirt.png' alt="#" />
                    <img src='./img/logo.png' alt="#" className='logo' />
                  </div>
                </div>
              </div>
              <div>
                <div className='carousel_box_block_promotions'>
                  <div className='content_carousel'>
                    <h2>Русский корабль</h2>
                    <p>Купи футболку и 10% с каждой покупки пойдёт на нуждый ВСУ, купи стильную футболку и поддержи своего брата на фронте</p>
                    <button>Подробнее</button>
                  </div>
                  <div className='img_carousel'>
                    <img src='./img/t-shirt.png' alt="#" />
                    <img src='./img/logo.png' alt="#" className='logo' />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className='block_yellow_behind'></div>
      </section>
      <section className='parent_reviews_block'>
        <div className='reviews_block conteiner'>
          <h2>От<span className='yellow'>зы</span>вы</h2>
          <p>Только посмотри что о нас говорит твоя соседка</p>
          <Carousel slidesToShow={1} slidesToScroll={1} draggable={true}>
            <div className='carousel_box_phone'>
              <img src='./img/iPhone.png' alt="#" />
            </div>
            <div className='carousel_box_phone'>
              <img src='./img/iPhone.png' alt="#" />
            </div>
            <div className='carousel_box_phone'>
              <img src='./img/iPhone.png' alt="#" />
            </div>
          </Carousel>
        </div>
        <div className='block_yellow_behind'></div>
      </section>
      <section className='contact_block conteiner'>
        <h2>Свяжитесь с <span className='yellow'>нами</span></h2>
        <p>Это бысто и удобно</p>
        <div className='block_form_and_map'>
          {dataPerson && <Alert className='alert_data_person' message="Данные отправлены" />}
          <div><ContactUsForm setDataPerson={(value) => { setDataPerson(value) }} /></div>
          <div className='box_map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.0549301749834!2d36.234406299999996!3d49.991579599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0f1b04aa383%3A0x95193f4aa08177cb!2z0KLQoNCmIE5JS09MU0tZ!5e0!3m2!1sru!2sua!4v1683923151288!5m2!1sru!2sua"></iframe>
          </div>
        </div>
      </section>
    </div>

  )
}
