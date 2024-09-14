import React from "react";
import Slider from "react-slick";
import noImage from '../assets/image-not-found.png'

function CastSlider({ cast }) {
  console.log(cast);

  var settings = {
    dots: true,
    dotsColor: 'white',
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,  // عدد الشرائح في الشاشة الكبيرة
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 4,  // تقليل عدد الشرائح في الشاشات المتوسطة
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,  // شريحة واحدة فقط في الشاشات الصغيرة
          slidesToScroll: 3
        }
      }
    ]
  };
  

  return (
    <div className="slider-container">
      {cast && cast.length > 0 ? (
        <Slider {...settings}>
          {cast.slice(0, 20).map((ele) => (
            <div key={ele?.id} className="my-7 p-4">
                <img
                  className=" object-cover flex justify-center items-center"
                  src={`https://image.tmdb.org/t/p/w500/${ele?.profile_path}`}
                  alt={'not found'}
                />
            </div>
          ))}
        </Slider>
      ) : (
        <p>No cast available</p>
      )}
    </div>
  );
  
}

export default CastSlider;
