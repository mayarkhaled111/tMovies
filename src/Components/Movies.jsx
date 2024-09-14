import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { getMovie, searchMovies } from '../APIS/getMovie';
import { Link } from 'react-router-dom';
import Item from './Item';

export default function Movies() {
    let [array, setArray] = useState([])
    let { data, status } = useQuery({ queryKey: ['movies'], queryFn: getMovie })
    const [message, setMessage] = useState('');

    let [searchedArray, setSearchedArray] = useState([]);

    useEffect(() => {
      if (status === 'success') {
        setArray(data?.data?.results);
        setSearchedArray(data?.data?.results)
  
      }
    }, [data]);
    function searchFn(e) {
      const value = e.target.value.toLowerCase();
      if (value === '') {
        setSearchedArray(array);
        setMessage('');
      } else {
        const filteredArray = array.filter(item => item?.title.toLowerCase().includes(value));
      setSearchedArray(filteredArray);
      setMessage(filteredArray.length === 0 ? 'Sorry, there are no movies' : '');
      }
    }
  return (
    <div className=''>
       <div className="container">
       <input onChange={searchFn} type="text" id="simple-search" className=" my-7 bg-[#f0efef] border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none" placeholder="Search...." />
       {message && <p className='text-red-600 text-center md:text-2xl'>{message}</p>}
       </div>
        <div className='flex flex-wrap'>
        {searchedArray.map((arr) => <Item key={arr?.id} item={arr}></Item>)}
      </div>
    </div>
  )
}
