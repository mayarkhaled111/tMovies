import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { popular } from "../APIS/getMovie";
import Item from "./Item";


export default function PopularMovies() {
  let { data, status } = useQuery({
    queryKey: ['popular'],
    queryFn: popular,
  });
  
  let [Popular, setPopular] = useState([]);

  useEffect(() => {
    if (status === 'success') {
        setPopular(data?.data?.results);
    }
  }, [data, status]); 
  
  

  return (
    <div className="container flex flex-wrap">
        {Popular.map((rate) => ( <Item item={rate} key={rate?.id}></Item>
        ))}
    </div>
  );
}
