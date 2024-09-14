import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query"; 
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { topRelatedSeries } from "../APIS/TV";
import { Link } from "react-router-dom";
import { motion, useAnimation } from 'framer-motion';
import TvItem from "./TvItem";
export default function TopRelatedTV() {
    let { data, status } = useQuery({
        queryKey: ['topTV'],
        queryFn: topRelatedSeries, 
    });
    let [topRatedTv, setTopRatedTv] = useState([]);

      useEffect(() => {
        if (status === 'success') {
            setTopRatedTv(data?.data?.results);
          console.log(data?.data?.results);
        }
      }, [data]); 

      return (
        <div className="flex flex-wrap">
        {topRatedTv.map((rate) => ( <TvItem key={rate?.id} tvItem={rate}></TvItem>
        ))}
     </div>     
      );
}
