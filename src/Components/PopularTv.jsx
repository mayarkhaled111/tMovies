import React from 'react'
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import TvItem from "./TvItem";
import { tvPopular } from '../APIS/TV';

export default function PopularTv() {
    let { data, status } = useQuery({
        queryKey: ['popularTv'],
        queryFn: tvPopular,
      });
      
      let [popular, setPopular] = useState([]);
    
      useEffect(() => {
        if (status === 'success') {
            setPopular(data?.data?.results);
        }
      }, [data, status]); 
      
      
    
      return (
        <div className="container flex flex-wrap">
            {popular.map((rate) => ( <TvItem tvItem={rate} key={rate?.id}></TvItem>
            ))}
        </div>
      );
}
