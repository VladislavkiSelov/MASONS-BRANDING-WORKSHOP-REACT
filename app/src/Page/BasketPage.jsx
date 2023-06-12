import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ElementOrderPageBasket from '../component/ElementOrderPageBasket';
import CheckoutForm from '../component/CheckoutForm';
import { Radio, Alert } from 'antd';
import { useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';


export default function BasketPage() {
    const orders = useSelector(state => state.orders.orders);
    const [valueDelivery, setValueDelivery] = useState('Самовывоз');
    const [valuePayment, setValuePayment] = useState('Наложеный платёж');
    const [generalPrice, setGeneralPrice] = useState(0);
    const [sendOrders, setSendOrders] = useState(null)

    const onChangeDelivery = (e) => {
        setValueDelivery(e.target.value);
    };

    const onChangePayment = (e) => {
        setValuePayment(e.target.value);
    };

    useEffect(() => {
        const price = orders.reduce((acc, item) => {
            return acc += item.price * item.number
        }, 0)
        setGeneralPrice(price)
    }, [orders])

    return (
        <div className='basket_page_block conteiner'>
            {sendOrders === 'error' && <Alert className='send_orders' message="Корзина пуста" type="error" />}
            {sendOrders === 'ok' && <Alert className='send_orders' message="Заказ оформлен" />}
            <div className='orders'>
                <h2>Корзина</h2>
                {orders.length < 1 && <ShoppingCartOutlined className='cartEmpty'></ShoppingCartOutlined>}
                {orders.map((item, i) => {
                    return <ElementOrderPageBasket key={i} order={item} />
                })}
            </div>
            <div>
                <h2>Оформить заказ</h2>
                <div className='block_flex_checkout'>
                    <CheckoutForm valuePayment={valuePayment} valueDelivery={valueDelivery} setSendOrders={(value) => setSendOrders(value)} />
                    <div>
                        <div className='radio_block'>
                            <div>
                                <h3>Доставка</h3>
                                <Radio.Group onChange={onChangeDelivery} value={valueDelivery}>
                                    <Radio value={'Самовывоз'}>Самовывоз</Radio>
                                    <Radio value={'Новая почта'}>Новая почта</Radio>
                                </Radio.Group>
                            </div>
                            <div>
                                <h3>Оплата</h3>
                                <Radio.Group onChange={onChangePayment} value={valuePayment}>
                                    <Radio value={'Наложеный платёж'}>Наложеный платёж</Radio>
                                    <Radio value={'Безналичный'}>Безналичный</Radio>
                                </Radio.Group>
                            </div>
                        </div>
                        <div className='general'>
                            <h4>Итого: {generalPrice} </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
