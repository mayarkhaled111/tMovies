import axios from "axios"

export function topRelatedSeries(){
    return axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
  }

  
export function TvDetail(series_id){
    return axios.get(`https://api.themoviedb.org/3/tv/${series_id}?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
  }

  
export function TvSimilar(series_id){
    return axios.get(`https://api.themoviedb.org/3/tv/${series_id}/similar?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
  }

  
export function TvEpisode(series_id){
    return axios.get(`https://api.themoviedb.org/3/tv/${series_id}/episode_groups?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}
export function cast(series_id){
    return axios.get(`https://api.themoviedb.org/3/tv/${series_id}/credits?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}
export function Video(series_id){
    return axios.get(`https://api.themoviedb.org/3/tv/${series_id}/videos?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}
export function getTvs(){
    return axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}

export function tvPopular(){
  return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
  }})
}
  