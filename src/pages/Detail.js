import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Detail = () => {

    const {movieId} = useParams()

    const [movie, setMovie] = useState({})

    const getMovie = async () => {

        try{

            const options = {
                headers : {
                    Authorzation : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTAyZWViZjJiZGFiMDVmMmUyNzljZTlhYjFhMDdjMCIsInN1YiI6IjY0YmI3MDdjZmQ0YTk2MDEwNmIyMjEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._t6jjV99VSKuUJFHUixvjI3gScgP_3fxDIr55RNvQfQ",
                }

            }

            const {data, status} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, options)

            console.log("&&&&&&&&&&", data)

            console.log(status)

        }catch(e){
            console.log(e.message)


        }

    }


    useEffect(() => {
        getMovie();
    }, [])




    return (
        <div>
            <h1>영화 상세정보</h1>
            <h1>{movieId}</h1>
        </div>
    );
};

export default Detail;