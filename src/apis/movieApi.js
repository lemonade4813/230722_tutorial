import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AUTH_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTAyZWViZjJiZGFiMDVmMmUyNzljZTlhYjFhMDdjMCIsInN1YiI6IjY0YmI3MDdjZmQ0YTk2MDEwNmIyMjEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._t6jjV99VSKuUJFHUixvjI3gScgP_3fxDIr55RNvQfQ'
const BASE_URL = 'https://api.themoviedb.org/3'

const getMovies = async () => {
    const options = {
        headers : {
            Authorization : AUTH_KEY
        }
    }
    const response = await axios.get(`${BASE_URL}/movie/now_playing`, options)
    return response.data.results
}

const useMovies = () => {
    const queryData = useQuery(['movies'], () => getMovies())
    return queryData

}

export {getMovies, useMovies}
