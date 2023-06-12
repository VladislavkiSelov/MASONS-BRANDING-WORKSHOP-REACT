import { Formik, Field, Form } from 'formik';
import React from 'react';
import axios from "axios";
const API_URL = "http://localhost:3000/api/contactUs";
const nameCheck = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
const phoneNumberCheck = /^(\+38|8)?0[0-9]{9}$/;
const emailCheck = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;


function ContactUsForm({ setDataPerson }) {
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
    return errors;
  };
  return (
    <Formik
      initialValues={
        {
          name: '',
          phone: '',
          email: '',
        }}

      validate={validate}

      onSubmit={values => {
        axios.post(`${API_URL}`, values)
        setDataPerson(true)
        setTimeout(() => {
          setDataPerson(false)
        }, 2000);
      }
      }
    >
      {({ errors }) => {
        return (
          <Form className='main_form'>
            <Field name="name" placeholder="Ваше имя" />
            <div> {errors.name ? <span>{errors.name}</span> : null}</div>
            <Field name="email" placeholder="Email" />
            <div> {errors.email ? <span>{errors.email}</span> : null}</div>
            <Field name="phone" placeholder="Телефон" />
            <div> {errors.phone ? <span>{errors.phone}</span> : null}</div>
            <button type='submit'>Отправить</button>
          </Form>
        );
      }}
    </Formik>

  )
}

export default ContactUsForm;


















// import { Formik, Field, Form } from 'formik';
// import { useNavigate } from "react-router-dom";
// import React from 'react';
// import './FormAddEditPersonPage.scss'

// function FormAddEditPersonPage({ items, changeState, item }) {
//   const navigate = useNavigate();
//   //приходится использовать useNavigate из-за того что Link делает переход мгновенно (в моем случае это не подходит)
//   const validate = values => {
//     const errors = {};
//     if (!values.name) {
//       errors.name = 'Error';
//     }
//     if (!values.phone) {
//       errors.phone = 'Error';
//     }
//     if (!values.username) {
//       errors.username = 'Error';
//     }
//     return errors;
//   };
//  function btnCancel(){
//     navigate("/");
//   }
//   return (
//     <Formik
//       initialValues={
//         {
//           id: item ? item.id : '',
//           name: item ? item.name : '',
//           phone: item ? item.phone : '',
//           username: item ? item.username : ''
//         }}
//       validate={validate}

//       onSubmit={values => {
//         values.id = item ? item.id : items.length + 1;
//         if (item) {
//           const itemIndex = items.findIndex(i => i.id === values.id)
//           const newItems = [...items]
//           newItems[itemIndex] = values
//           changeState(newItems)
//           navigate("/");
//         } else {
//           changeState([...items, values])
//           navigate("/");
//         }

//       }}
//     >
//       {({ errors }) => {
//         return (
//           <Form className='main_form'>
//             <Field name="name" placeholder="Name" />
//             {errors.name ? <span>{errors.name}</span> : null}
//             <Field name="username" placeholder="Last name" />
//             {errors.username ? <span>{errors.username}</span> : null}
//             <Field name="phone" placeholder="Phone number" />
//             {errors.phone ? <span>{errors.phone}</span> : null}
//             <button type='button' onClick={btnCancel} >Cancel</button>
//             <button type='submit'>Save</button>
//           </Form>
//         );
//       }}
//     </Formik>

//   )
// }

// export default FormAddEditPersonPage;