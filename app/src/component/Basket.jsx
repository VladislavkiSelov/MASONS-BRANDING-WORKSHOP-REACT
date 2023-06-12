import React from 'react'
import { useSelector } from 'react-redux'
import OrderBasket from './OrderBasket';
import { useNavigate } from "react-router-dom";

export default function Basket({ setblockBasket }) {
    const orders = useSelector(state => state.orders.orders);
    const navigate = useNavigate();
    function handleclick() {
        navigate('basket')
    }
    return (
        <div className='box_basket_modal' onClick={() => setblockBasket(false)}>
            <div className='block_basket'>
                <div className='text_basket'>
                    <h2>Корзина</h2>
                </div>
                <div className='orders_basket'>
                    {orders.map((order, i) => {
                        return <OrderBasket key ={i} order={order} />
                    })}
                </div>
                <div className='block_btn_basket'>
                    <button onClick={handleclick}>Оформить заказ</button>
                </div>
            </div>
        </div>
    )
}
