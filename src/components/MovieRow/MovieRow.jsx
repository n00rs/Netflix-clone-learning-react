import React, { useEffect, useState } from 'react'
import './MovieRow.css'
import axios from '../../axios'
import { API_KEY, iMAGE_URL } from '../../constants/constants'

function MovieRow(props) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get(props.url)
            .then((res) => {
                setMovies(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="movie-posters">
                {movies.map((obj) => 
                <img className={ props.isSmall ?'small-poster' : 'poster-img'} src={`${iMAGE_URL + obj.backdrop_path}`} alt="" />
                )}
                {/* <img className='poster-img' src="/images/defaultPoster.jpg" alt=""  /> */}
            </div>
        </div>
    )
}

export default MovieRow