import { useSelector } from 'react-redux'
import Product from '../component/Product';
import { Pagination } from 'antd'
import { getDataProductsMiddeleware } from '../store/Middeleware/getDataProductsMiddeleware';
import { getDataProductsNextMiddeleware } from '../store/Middeleware/getDataProductsNextMiddeleware';
import { getDataProductsPrevMiddeleware } from '../store/Middeleware/getDataProductsPrevMiddeleware';
import { getDataProductsFilterCheapExpensiveNextMiddeleware } from '../store/Middeleware/getDataProductsFilterCheapExpensiveNextMiddeleware'
import { getDataProductsFilterCheapExpensivePrevMiddeleware } from '../store/Middeleware/getDataProductsFilterCheapExpensivePrevMiddeleware';
import { getDataProductsFilterExpensiveCheapNextMiddeleware } from '../store/Middeleware/getDataProductsFilterExpensiveCheapNextMiddeleware';
import { getDataProductsFilterExpensiveCheapPrevMiddeleware } from '../store/Middeleware/getDataProductsFilterExpensiveCheapPrevMiddeleware';
import { getDataProductsFilterExpensiveCheapMiddeleware } from '../store/Middeleware/getDataProductsFilterExpensiveCheapMiddeleware';
import { getDataProductsFilterCheapExpensiveMiddeleware } from '../store/Middeleware/getDataProductsFilterCheapExpensiveMiddeleware';
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { Select, Space } from 'antd';
import { useParams } from 'react-router-dom';


export default function Products() {
  const dispatch = useDispatch()
  const params = useParams()
  const current = params.categoryId
  const API_URL = `http://localhost:3000/api/category`;

  useEffect(() => {
    dispatch(getDataProductsMiddeleware({ API_URL: API_URL, current: current }))
  }, [current])

  const option = {
    option: [
      {
        value: 'По рейтингу',
      },
      {
        value: 'От дешевых к дорогим',
      },
      {
        value: 'От дорогих к дешевым',
      },
    ]
  }

  const products = useSelector(state => state.dataProducts.data);
  const nextOffset = useSelector(state => state.dataProducts.nextOffset);
  const arrayLength = useSelector(state => state.dataProducts.arrayLength);
  const [selectedPage, setselectedPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState('По рейтингу')

  function switchPage(page) {
    if (selectedPage < page) {
      if (statusFilter === 'По рейтингу') {
        dispatch(getDataProductsNextMiddeleware({ API_URL: API_URL, nextOffset: nextOffset, current: current }))
        setselectedPage(page)
      }
      if (statusFilter === 'От дешевых к дорогим') {
        dispatch(getDataProductsFilterCheapExpensiveNextMiddeleware({ API_URL: API_URL, nextOffset: nextOffset, current: current }))
        setselectedPage(page)
      }
      if (statusFilter === 'От дорогих к дешевым') {
        dispatch(getDataProductsFilterExpensiveCheapNextMiddeleware({ API_URL: API_URL, nextOffset: nextOffset, current: current }))
        setselectedPage(page)
      }
    }

    if (selectedPage > page) {
      if (statusFilter === 'По рейтингу') {
        dispatch(getDataProductsPrevMiddeleware({ API_URL: API_URL, nextOffset: nextOffset, current: current }))
        setselectedPage(page)
      }
      if (statusFilter === 'От дешевых к дорогим') {
        dispatch(getDataProductsFilterCheapExpensivePrevMiddeleware({ API_URL: API_URL, nextOffset: nextOffset, current: current }))
        setselectedPage(page)
      }
      if (statusFilter === 'От дорогих к дешевым') {
        dispatch(getDataProductsFilterExpensiveCheapPrevMiddeleware({ API_URL: API_URL, nextOffset: nextOffset, current: current }))
        setselectedPage(page)
      }
    }
  }

  const handleChange = (value) => {
    setselectedPage(1)
    setStatusFilter(value)

    if (value === 'По рейтингу') {
      dispatch(getDataProductsMiddeleware({ API_URL: API_URL, current: current }))
    }
    if (value === 'От дешевых к дорогим') {
      dispatch(getDataProductsFilterCheapExpensiveMiddeleware({ API_URL: API_URL, current: current }))
    }
    if (value === 'От дорогих к дешевым') {
      dispatch(getDataProductsFilterExpensiveCheapMiddeleware({ API_URL: API_URL, current: current }))
    }
  };

  return (
    <div className='box_products conteiner'>
      <Space wrap>
        <span className='textSelect'>Сортировака: </span> <Select
          defaultValue="По рейтингу"
          onChange={handleChange}
          options={option.option}
        />
      </Space>
      <div className='block_products'>
        {products.map((item, i) => {
          return <Product key={i} id={item.id} name={item.name} price={item.price} url={item.img} />
        })}
      </div>
      <div className='block_pagination'>
        {products.length !== 0 && <Pagination total={arrayLength} defaultCurrent={1} pageSize={6} onChange={(page) => { switchPage(page) }} />}
      </div>
    </div>
  )
}
















































