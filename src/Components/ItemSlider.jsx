import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({itemSlider}) {
  return (
    <div className=' p-4'>
         <Link to={`/details/${itemSlider?._id}`}>
            <div key={itemSlider.id} className="text-white px-4 relative">
            <img src={`https://image.tmdb.org/t/p/w500/${itemSlider?.backdrop_path}`} alt={"Top Rated"}/>
            <div className=" mt-3">
            <p className="">{itemSlider?.title}</p>
            <span className="">{itemSlider?.vote_average} <i className="fa-solid fa-star" style={{color: 'yellow'}} /></span>
            </div>
          </div>
          </Link>
        </div>
)
}