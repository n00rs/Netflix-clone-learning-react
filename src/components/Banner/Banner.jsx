import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, iMAGE_URL } from '../../constants/constants'
import './Banner.css'
function Banner() {
    let  randomMovie = ()=>  (Math.floor(Math.random() * 20))
    // console.log(randomMovie)
    const [movie, setMovie] = useState()
    useEffect(() => {
        // https://api.themoviedb.org/3/trending/all/day?api_key=9e7bdc996fb02437dbbe84eaf223890f
        axios.get(`trending/all/day?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                // console.log(res.data.results[randomMovie()]);
                setMovie(res.data.results[randomMovie()])
            })
            .catch(err => console.log(err))



    }, [])

    return (
        <div
            //  style={{backgroundImage:  ${movie ? movie.} }}
            style={{ backgroundImage: `url( ${movie ? iMAGE_URL + movie.backdrop_path : ''})` }}
            className='banner'>
            <div className='content'>
                <h1 className='title'>{ console.log(movie)}{movie ? movie.title ? movie.title : movie.name : 'hi'}</h1>
                <div className="banner-btn">
                    <button className="btn">Play</button>
                    <button className="btn">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview : "description"}</h1>
            </div>
            <div className="fade-bnr"></div>
        </div>
    )
}

export default Banner