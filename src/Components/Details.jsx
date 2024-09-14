import React, { useEffect, useState } from 'react'
import { movieCredits, movieDetails, movieSimilar, movieVideo } from '../APIS/details'
import { Link, useParams } from 'react-router-dom'
import Item from './Item'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CastSlider from './CastSlider'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:' 80%',
  bgcolor: 'background.paper',
  border: '2px solid red',
  boxShadow: 40,
};

export default function Details() {
  let { id, movieId } = useParams()
  let [movieDetailArray, setMovieDetailArray] = useState([])
  let [similar, setSimilar] = useState([])
  let [cast, setCast] = useState([])
  let [crew, setCrew] = useState([])
  let [videoKey, setVideoKey] = useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function moviesDetails() {
    let data = await movieDetails(id)
    if (data?.data) {
      setMovieDetailArray(data?.data);
    }
  }
  async function moviesSimilar() {
    let data = await movieSimilar(id)
    if (data?.data) {
      setSimilar(data?.data?.results);
    }
  }
  async function video() {
    let data = await movieVideo(id)
    if (data?.data) {
      setVideoKey(data?.data?.results[0]?.key);
    }
  }
  async function credits() {
    let data = await movieCredits(id)
    if (data?.data) {
      setCast(data?.data?.cast);
      setCrew(data?.data?.crew);
    }
  }
  function moreDetails(path) {
    window.location.href = `${path}`;
  }
  useEffect(() => {
    moviesDetails()
    moviesSimilar()
    credits()
    video()
  }, [id]);

  return (
    <div className="container ">
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${videoKey}`}
              title="Movie Trailer"
              box-shadow='1px 1px red'
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Modal>
      </div>
      <div className='details flex flex-wrap justify-center gap-6 my-10'>
        <div className="image md:w-1/4 sm:w-full ">
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetailArray?.poster_path}`} className='w-full' alt="poster" />
          <button onClick={handleOpen} className='w-full bg-red-900 p-2 text-black text-2xl'>WATCH</button>
        </div>
        <div className='md:w-2/3 sm:w-full px-5'>
          <div className='flex justify-between items-center'>
            <h1 className='text-red-600 sm:text-4xl md:text-xl xl:text-4xl font-bold'>{movieDetailArray.original_title}</h1>
            <span className="md:text-xl"><i className="fa-solid fa-star" style={{ color: 'yellow' }} /> {movieDetailArray?.vote_average} </span>
          </div>
          {/* display all details */}
          <div>
            <p className='my-7 text-gray-400'>{movieDetailArray?.overview}</p>
            <p className='text-gray-400'><span className="font-bold text-lg">Country</span> : <span>{movieDetailArray?.origin_country}</span></p>
            <p className='text-gray-400'><span className="font-bold text-lg">Language</span> : <span>{movieDetailArray?.original_language}</span></p>
            <p className='text-gray-400'><span className="font-bold text-lg">Genres</span> :
              <span>{movieDetailArray?.genres?.map((ele, index) =>
                <span key={ele?.id} className='ml-2'>{ele?.name}</span>
              )}</span>
            </p>
            <p className='text-gray-400'><span className="font-bold text-lg">Production Companies</span> :
              <span>{movieDetailArray?.production_companies?.map((ele, index) =>
                <span key={index} className='ml-2'>{ele?.name}</span>
              )}</span>
            </p>
            <p className='text-gray-400'><span className="font-bold text-lg">Release Date</span> : <span>{movieDetailArray?.release_date}</span></p>
            <span className='bg-red-700 p-2 my-3 w-fit block rounded-md cursor-pointer' onClick={() => moreDetails(movieDetailArray?.homepage)}>more details</span>
            <div className='mt-2'><span className='text-gray-400 font-bold text-lg'>Crew:</span> {crew.slice(0, 10).map((ele,index) => (
              <span key={index} className='m-2 bg-gray-300 text-black px-2 inline-block'>{ele?.name}</span>
            ))}</div>
          </div>
        </div>
      </div>
      {/* display cast slider */}
      {cast?.length>0? <><h1 className="w-fit text-red-600 text-4xl font-bold border-b-2 border-red-600 py-2"> CAST</h1>
        <CastSlider cast={cast}></CastSlider></>:''}
      
      {/* display similar data */}
      {similar?.length>0 ? <>
        <h1 className="md:text-2xl border-b-2 border-red-600 mt-20 py-2 w-fit">You may also like</h1>
        <div className='flex flex-wrap mt-10'>
          {similar.map((arr) => <Item key={arr?.id} item={arr}></Item>)}
        </div>
      </> : ''}

    </div>

  )
}
