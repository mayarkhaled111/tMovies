import React, { useEffect, useState } from 'react'
import { getTvs } from '../APIS/TV';
import TvItem from './TvItem'
import { useQuery } from '@tanstack/react-query';

export default function Series() {
  let [array, setArray] = useState([])
  let { data, status } = useQuery({ queryKey: ['Tvs'], queryFn: getTvs })
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
      const filteredArray = array.filter(item => item?.name.toLowerCase().includes(value));
    setSearchedArray(filteredArray);
    setMessage(filteredArray.length === 0 ? 'Sorry, there are no Series' : '');
    }
  }

return (
  <div className=''>
    <div className="container">
       <input onChange={searchFn} type="text" id="simple-search" className=" my-7 bg-[#f0efef] border border-red-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 outline-none" placeholder="Search...." />
       {message && <p className='text-red-600 text-center md:text-2xl'>{message}</p>}
       </div>
      <div className='flex flex-wrap'>
      {searchedArray.map((arr) => <TvItem key={arr?.id} tvItem={arr}></TvItem>)}
    </div>
  </div>
)
}
