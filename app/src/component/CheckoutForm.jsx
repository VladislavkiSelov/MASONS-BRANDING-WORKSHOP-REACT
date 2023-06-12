import { Formik, Field, Form } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { clearBasket } from '../store/action';
const API_URL = "http://localhost:3000/api/dataOrders";
const nameCheck = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
const phoneNumberCheck = /^(\+38|8)?0[0-9]{9}$/;
const emailCheck = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const cityCheck = /^[А-Я][а-я]{1,30}$/;
const postOfficeCheck = /^[1-9]{1,4}$/;

export default function CheckoutForm({ valuePayment, valueDelivery, setSendOrders }) {
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();
  const validate = values => {
    const errors = {};
    if (!nameCheck.test(values.name)) {
      errors.name = 'Некорректное имя пользователя';
    }
    if (!phoneNumberCheck.test(values.phone)) {
      errors.phone = 'Некорректный номер телефона пример:0686492018';
    }
    if (!emailCheck.test(values.email)) {
      errors.email = 'Некорректный e-mail';
    }
    if (!cityCheck.test(values.city)) {
      errors.city = 'Некорректный город';
    }
    if (!postOfficeCheck.test(values.postOffice)) {
      errors.postOffice = 'Некорректный номер почтового отделения';
    }
    return errors;
  };

  return (
    <Formik
      initialValues={
        {
          name: '',
          phone: '',
          email: '',
          city: '',
          postOffice: ''

        }}

      validate={validate}

      onSubmit={values => {
        if (orders.length < 1) {
          setSendOrders('error')
          setTimeout(() => {
            setSendOrders(null)
          }, 2000);
          return
        }

        setSendOrders('ok')
        setTimeout(() => {
          setSendOrders(null)
        }, 2000);
        const newValues = { ...values, delivery: valueDelivery, payment: valuePayment }
        axios.post(`${API_URL}`, newValues)
        dispatch(clearBasket())

      }
      }


    >
      {({ errors }) => {
        return (
          <Form className='checkout_form'>
            <Field name="name" placeholder="Ваше имя" />
            <p>{errors.name ? <span>{errors.name}</span> : null}</p>
            <Field name="email" placeholder="Email" />
            <p>{errors.email ? <span>{errors.email}</span> : null}</p>
            <Field name="phone" placeholder="Телефон" />
            <p>{errors.phone ? <span>{errors.phone}</span> : null}</p>
            <Field name="city" placeholder="Город" />
            <p>{errors.city ? <span>{errors.city}</span> : null}</p>
            <Field name="postOffice" placeholder="Отделение" />
            <p>{errors.postOffice ? <span>{errors.postOffice}</span> : null}</p>
            <button type='submit'>Отправить</button>
          </Form>
        );
      }}
    </Formik>

  )
}
