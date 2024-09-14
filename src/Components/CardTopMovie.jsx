import * as React from 'react';
import { topRelated } from '../APIS/getMovie';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function CardItem() {
  let { data, status } = useQuery({
    queryKey: ['topRated'],
    queryFn: topRelated, 
  });
  
  let [topRated, setTopRated] = useState([]);

  React.useEffect(() => {
    if (status === 'success') {
      setTopRated(data?.data?.results.slice(0,3));
    }
  }, [data, status]); 

  return (
    <div className='container'>
    <div className="flex justify-between items-center my-3">
    <h1 className="text-red-600 text-2xl font-bold border-b-2 border-red-600 w-fit pb-1">TOP RATED MOVIES</h1>
    <Link to={'/topMovies'}><p className='flex justify-end my-3 text-gray-400 items-center'>Show more <i className="fa-solid fa-arrow-right"></i></p></Link>
    </div>
    <div className='flex flex-wrap mb-9'>
    {topRated.map((rate) => (
          <Link to={`/movieDetails/${rate.id}`} key={rate.id} className='md:w-1/3'>
            <div className="text-white px-4 relative my-3 ">
            <img src={`https://image.tmdb.org/t/p/w500/${rate?.backdrop_path}`} alt={"Top Rated"}/>
            <div className=" mt-3 flex justify-between">
            <p className="">{rate?.title}</p>
            <span className="">{rate?.vote_average} <i className="fa-solid fa-star" style={{color: 'yellow'}} /></span>
            </div>
          </div>
          </Link>
        ))}
    </div>
    </div>
  );
}
