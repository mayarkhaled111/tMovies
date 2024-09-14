import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { getTrending, popular } from '../APIS/getMovie'
import { movieVideo } from '../APIS/details'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Slider from 'react-slick';

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
  var settings = {
    dots: true,
    dotsColor: 'white',
    arrows: false,
    infinite: false,
    slidesToShow: 1,  
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
  };
  
export default function Header() {
    let {data,status} = useQuery({queryKey:['trending'],queryFn:getTrending})
    let[trendingArray,setTrendingArray] = useState([])
    let [videoKey, setVideoKey] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    async function video(id) {
        let data = await movieVideo(id)
        if (data?.data) {
            setVideoKey(data?.data?.results[1]?.key);
        }
    }

    useEffect(() => {
        if (status === 'success') {
            setTrendingArray(data?.data?.results?.splice(4,4));
            console.log(trendingArray);
        }
      }, [data]);
  return (
    <>
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
      <Slider {...settings} >
   
      {trendingArray?.map((ele)=>
      <div key={ele?.id} className='w-full relative mb-10 flex flex-col justify-center'>
        <img src={`https://image.tmdb.org/t/p/w500/${ele?.backdrop_path}`} alt="" className='w-full opacity-40' />
        <div className="absolute top-1 left-2 md:top-1/3 md:left-[40px] md:right-4 w-full md:w-2/3  ">
  <h1 className="text-xl md:text-4xl font-bold mt-3">
    {ele?.original_title}
  </h1>
  <div className="md:mt-4">
    <span className="bg-gray-100 text-black p-1 md:p-3 rounded-md mt-4 mx-1  inline-block">
      {ele?.media_type}
    </span>
    <span className="bg-gray-100 text-black p-1 md:p-3 rounded-md md:mt-4 mx-1  inline-block">
      {ele?.vote_average} <i className="fa-solid fa-star" style={{ color: '#eab300' }} />
    </span>
    <span className="bg-gray-100 text-black p-1 md:p-3 rounded-md mt-4 mx-1  inline-block">
      <i className="fa-solid fa-calendar-days" /> {ele?.release_date}
    </span>
  </div>
  <p className="my-2  text-gray-300 text-[10px]  md:text-lg ">
    {ele?.overview}
  </p>
  <button
    className="bg-red-600 text-sm md:text-2xl text-white py-1  md:py-4 px-4  block rounded-3xl"
    onClick={() => {
      video(ele?.id);
      handleOpen();
    }}
  >
    <span className="py-2 ">Watch</span>{' '}
    <i className="fa-solid fa-play" style={{ color: '#fff' }}></i>
  </button>
</div>

    </div>)}
     </Slider>
    
    </>
  )
}
