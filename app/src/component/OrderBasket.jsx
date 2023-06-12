import React from 'react';

export default function OrderBasket({ order }) {
    return (
        <div className='block_order'>
            <div className='img_order'><img src={order.img} alt="#" /></div>
            <div>
                <p>{order.name}</p>
                <p>Цена: {order.price}.00</p>
                <p>Цвет: {order.color}</p>
                <p>Размер: {order.size}</p>
                <p>Количество: {order.number}</p>
            </div>
        </div>
    )
}
