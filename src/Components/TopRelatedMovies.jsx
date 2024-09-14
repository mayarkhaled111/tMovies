import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { topRelated } from "../APIS/getMovie";
import Item from "./Item";

export default function TopRelatedMovies() {
  let { data, status } = useQuery({
    queryKey: ['topRated'],
    queryFn: topRelated, 
  });
  
  let [topRated, setTopRated] = useState([]);

  useEffect(() => {
    if (status === 'success') {
      setTopRated(data?.data?.results);
    }
  }, [data, status]);

  return (
    <div className="container flex flex-wrap">
        {topRated.map((rate) => ( <Item item={rate} key={rate?.id}></Item>
        ))}
    </div>

  );
}
