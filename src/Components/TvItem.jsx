import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TvItem({ tvItem }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationControls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
    } else {
      animationControls.start({
        opacity: 0,
        y: 50
      });
    }
  }, [inView, animationControls]);

  return (
    <>
      {tvItem.vote_average > 1 ? (
        <div className='p-4 lg:w-1/5 md:w-1/3 sm:w-1/2 container mt-8'>
          <Link to={`/tvDetails/${tvItem.id}`}>
            <motion.div
              ref={ref}
              animate={animationControls}
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='movie-box pb-3 flex flex-col justify-between'
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${tvItem.poster_path}`}
                alt=""
                className='w-full rounded-xl'
              />
              <p className='p-4'>{tvItem?.original_name}</p>
              <div className='flex justify-between items-center text-gray-400 px-4'>
              <span className="">
                {tvItem?.vote_average}
                <i className="fa-solid fa-star" style={{ color: 'yellow' }} />
              </span>
              <span>{tvItem?.first_air_date}</span>
              </div>
            </motion.div>
          </Link>
        </div>
      ) : ''}
    </>
  );
}