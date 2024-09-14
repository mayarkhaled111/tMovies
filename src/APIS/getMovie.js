import axios from "axios";

export function getMovie(){
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}

export function getList(){
    return axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}

export function topRelated(){
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}

export function popular(){
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}
export function getTrending(){
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}

export function searchMovies(){
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=657defed615b19ce28b894e258e911d9`,{headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTdkZWZlZDYxNWIxOWNlMjhiODk0ZTI1OGU5MTFkOSIsIm5iZiI6MTcyNTkwNjc5MS40NzUxMTYsInN1YiI6IjY2YzBjNThlNGNiYjg0MjIyYzlkY2I0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F_IDOjKaJY5Fj_wBWyrCApUzKAQs0AW7rvXZ2t2s2BE'
      }})
}

