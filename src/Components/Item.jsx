import React from 'react'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Item({ item }) {
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
      {item.vote_average > 1 ? (
        <div className='p-4 lg:w-1/5 md:w-1/3 sm:w-1/2 container mt-8'>
          <Link to={`/movieDetails/${item.id}`}>
            <motion.div
              ref={ref}
              animate={animationControls}
              initial={{ opacity: 0, y: 50 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='movie-box pb-3 flex flex-col justify-between'
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt=""
                className='w-full rounded-xl'
              />
              <p className='p-4'>{item?.original_title || item?.name}</p>
              <span className="p-4">
                {item?.vote_average}
                <i className="fa-solid fa-star" style={{ color: 'yellow' }} />
              </span>
            </motion.div>
          </Link>
        </div>
      ) : ''}
    </>
  );
}