import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { movieDetails, movieSimilar} from '../APIS/details'
import { useParams } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { cast, TvDetail, TvEpisode, TvSimilar, Video } from '../APIS/TV'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CastSlider from './CastSlider'
import TvItem from './TvItem'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  border: '2px solid red',
  boxShadow: 40,
};

export default function TvDetails() {
  let { id, series_id } = useParams()
  let [tvDetailArray, setTvDetailArray] = useState([])
  let [allCast, setAllCast] = useState([])
  let [similarTv,setSimilarTv] = useState([])
  let [videoKey, setVideoKey] = useState('')
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


//   FUNCTION TO GET ALL DETAILS
  async function tvDetails() {
    let data = await TvDetail(id)
    if (data?.data) {
        setTvDetailArray(data?.data);
        console.log(tvDetailArray);
    }
  }

//   FUNCTION TO GET SIMILAR DATA
  async function tvSimilar() {
    let data = await TvSimilar(id)
    if (data?.data) {
        setSimilarTv(data?.data?.results);
    }
  }

//   FUNCTION TO GET CAST AND CREW
  async function getCast() {
    let data = await cast(id)
    if (data?.data) {
        setAllCast(data?.data?.cast);
    }
  }

  async function getVideo() {
    let data = await Video(id)
    if (data?.data) {
      setVideoKey(data?.data.results[0]?.key);
        
    }
  }
  

  useEffect(() => {
    tvDetails()
    getCast()
    tvSimilar()
    getVideo()
  },[id]);


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
   <div className="container">
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
    {/* TO DISPLAY ALL DETAILS */}
    <div className='flex flex-wrap justify-center gap-6 my-10'>
      <div className="image md:w-1/4 sm:w-full">
        <img src={`https://image.tmdb.org/t/p/w500/${tvDetailArray?.backdrop_path}`} className='w-full' alt="poster" />
        <button onClick={handleOpen} className='w-full bg-red-900 p-2 text-black text-2xl'>WATCH</button>
      </div>
      <div className='md:w-2/3 sm:w-full px-5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-red-600 sm:text-4xl md:text-xl xl:text-4xl font-bold'>{tvDetailArray?.name}</h1>
          <span className="md:text-xl"><i className="fa-solid fa-star" style={{ color: 'yellow' }} /> {tvDetailArray?.vote_average} </span>
        </div>

        <div className="details">
        <p className='my-7 text-gray-400'>{tvDetailArray?.overview}</p>
        <p className='text-gray-400'><span className="font-bold text-lg">Country</span> : <span>{tvDetailArray?.origin_country}</span></p>
        <p className='text-gray-400'><span className="font-bold text-lg">Language</span> : <span>{tvDetailArray?.original_language}</span></p>
        <p className='text-gray-400'><span className="font-bold text-lg">Genres</span> :
          <span>{tvDetailArray?.genres?.map((ele, index) =>
            <span key={index} className='ml-2'>{ele?.name}</span>
          )}</span>
        </p>
        <p className='text-gray-400'><span className="font-bold text-lg">Production Companies</span> :
          <span>{tvDetailArray?.production_companies?.map((ele, index) =>
            <span key={index} className='ml-2'>{ele?.name}</span>
          )}</span>
        </p>
        <p className='text-gray-400'><span className="font-bold text-lg">Release Date</span> : <span>{tvDetailArray?.last_air_date}</span></p>
      <span className='my-7 mx-2 inline-block bg-red-600 p-2 rounded-md'>{tvDetailArray?.number_of_episodes} Episode</span>
      <span className='my-7 mx-2 inline-block bg-red-600 p-2 rounded-md'>{tvDetailArray?.number_of_seasons} Seasons</span>
        </div>
    
      </div>
    </div>
  


    {/* TO SHOW ALL CAST */}
    {allCast?.length>0? <><h1 className="w-fit text-red-600 text-4xl font-bold border-b-2 border-red-600 py-2"> CAST</h1>
        <CastSlider cast={allCast}></CastSlider></>:''}
      
    {/* TO SHOW SIMILAR DATA */}
    {similarTv?.length>1?<><h1 className="text-red-600 text-5xl font-bold border-b-2 border-red-600 mt-20 py-2"> SIMILAR</h1>
    <div className='flex flex-wrap mt-10'>
        {similarTv.map((arr) => <TvItem key={arr?.id} tvItem={arr}></TvItem>)}
    </div></> :''}
    
   </div>

  )
}
