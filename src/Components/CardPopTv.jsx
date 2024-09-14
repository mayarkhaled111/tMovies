import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { tvPopular } from '../APIS/TV';

export default function CardPopTv() {
    let { data, status } = useQuery({
        queryKey: ['popularTv'],
        queryFn: tvPopular,
    });

    let [PopularTv, setPopularTv] = useState([]);

    useEffect(() => {
        if (status === 'success') {
            setPopularTv(data?.data?.results.slice(0,3));
        }
    }, [data, status]);

    return (
        <div className='container'>
            <div className="flex justify-between items-center my-3">
                <h1 className="text-red-600 text-2xl font-bold border-b-2 border-red-600 w-fit pb-1">Popular TV</h1>
                <Link to={'/popularTv'}><p className='flex justify-end my-3 text-gray-400 items-center'>Show more <i className="fa-solid fa-arrow-right"></i></p></Link>
            </div>
            <div className='flex flex-wrap mb-9'>
                {PopularTv.map((rate) => (
                    <Link to={`/tvDetails/${rate.id}`} key={rate.id} className='md:w-1/3'>
                        <div className="text-white px-4 relative my-3 ">
                            <img src={`https://image.tmdb.org/t/p/w500/${rate?.backdrop_path}`} alt={"Top Rated"} />
                            <div className=" mt-3 flex justify-between">
                                <p className="">{rate?.title}</p>
                                <span className="">{rate?.vote_average} <i className="fa-solid fa-star" style={{ color: 'yellow' }} /></span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
