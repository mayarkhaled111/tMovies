import axios from "axios";

export function movieDetails(movie_id){
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}

export function movieSimilar(movie_id){
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}
export function movieVideo(movie_id){
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}
export function movieCredits(movie_id){
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}

