import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import Movies from './Components/Movies'
import Details from './Components/Details'
import TvDetails from './Components/TvDetails'
import TopRelatedMovies from './Components/TopRelatedMovies'
import PopularMovies from './Components/PopularMovies'
import PopularTv from './Components/PopularTv'
import TopRelatedTV from './Components/TopRelatedTV'
import Series from './Components/Series'


function App() {
  let routes = createHashRouter([{
    path:'/',element:<Layout></Layout>,children:[
      {index:true,element: <Home></Home>},
      {path:'/movies',element: <Movies></Movies>},
      {path:'/series',element: <Series></Series>},
      {path:'/movieDetails/:id',element: <Details></Details>},
      {path:'/tvDetails/:id',element: <TvDetails></TvDetails>},
      {path:'/topMovies',element: <TopRelatedMovies></TopRelatedMovies>},
      {path:'/popularMovie',element: <PopularMovies></PopularMovies>},
      {path:'/popularTv',element: <PopularTv></PopularTv>},
      {path:'/topTv',element: <TopRelatedTV></TopRelatedTV>},
    ]
  }])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
