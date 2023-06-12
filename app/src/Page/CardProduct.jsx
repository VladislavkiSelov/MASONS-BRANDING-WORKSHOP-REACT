import React from 'react'
import { useSelector } from 'react-redux'
import { Select, Space, Alert } from 'antd';
import { useState, useEffect } from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { setOrderBasket } from '../store/action';
import { getCardSelectedIdMiddeleware } from '../store/Middeleware/getCardSelectedIdMiddeleware';
import { useParams } from 'react-router-dom';


export default function CardProduct() {
    const [statusAlert, setStatusAlert] = useState(false)
    const [statusAlertOrder, setstatusAlertOrder] = useState(false)
    const dispatch = useDispatch()
    const params = useParams()
    const current = params.categoryId
    const id = params.productId
    const API_URL = `http://localhost:3000/api/category`;

    useEffect(() => {
        dispatch(getCardSelectedIdMiddeleware({ id: id, API_URL: API_URL, current: current }))
    }, [current])

    const product = useSelector(state => state.product.data);

    useEffect(() => {
        let orderDefault = {
            id: product.id,
            img: product.img,
            name: product.name,
            price: product.price,
            size: "L",
            color: "Белый",
            number: 0,
        }
        setOrder(orderDefault)
    }, [product])

    const [numberProduct, setNumberProduct] = useState(0)
    const [order, setOrder] = useState({})


    const handleChange = (value) => {
        setOrder({ ...order, size: value })
    };

    const handleChangeColor = (value) => {
        setOrder({ ...order, color: value })
    };

    const addNumberProduct = () => {
        setNumberProduct((numberProduct) => numberProduct + 1)
    }

    const minusNumberProduct = () => {
        if (numberProduct === 0) {
            return
        }
        setNumberProduct((numberProduct) => numberProduct - 1)
    }

    useEffect(() => {
        setOrder({ ...order, number: numberProduct })
    }, [numberProduct])

    const addOrderOrders = (order) => {
        if (order.number < 1) {
            setStatusAlert(true)
            setTimeout(() => {
                setStatusAlert(false)
            }, 1000);
            return
        }

        if (order.number > 0) {
            setstatusAlertOrder(true)
            setTimeout(() => {
                setstatusAlertOrder(false)
            }, 1000);
        }

        dispatch(setOrderBasket(order))
    }

    return (
        <div className='block_product conteiner'>
            <div className='block_main_info_product'>
                <div className='img_product'>
                    <img src={product.img} alt="#" />
                </div>
                <div className='info_product'>
                    <h3>{product.name}</h3>
                    <p>{product.price}.00 грн</p>
                    <div className='box_size_color_number'>
                        <Space wrap>
                            <span className='textSelect'>Размер: </span> <Select
                                defaultValue="L"
                                onChange={handleChange}
                                options={product.size}
                            />
                        </Space>
                        <Space wrap>
                            <span className='textSelect'>Цвет: </span><Select
                                defaultValue="Белый"
                                onChange={handleChangeColor}
                                options={product.color}
                            />
                        </Space>
                        <div className='block_number'>
                            <h3 className='textSelect'>Количество: </h3>
                            <div>
                                <MinusOutlined onClick={minusNumberProduct} />
                                <span className='number_product_plus'>{numberProduct}</span>
                                <PlusOutlined onClick={addNumberProduct} /></div>
                        </div>
                    </div>
                    <div className='alert'>
                        {statusAlertOrder === true && <Alert message="Заказ добавлен в корзину" type="success" />}
                        {statusAlert === true && <Alert message="Укажите количество товара" type="warning" />}
                    </div>
                    <button onClick={() => addOrderOrders(order)}>Купить</button>
                </div>
            </div>
            <div className='product_description'>
                <h2>Описание</h2>
                <p>{product.description}</p>
            </div>
        </div>
    )
}
