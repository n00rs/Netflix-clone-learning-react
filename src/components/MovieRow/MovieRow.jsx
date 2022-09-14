import React, { useEffect, useState } from 'react'
import './MovieRow.css'
import axios from '../../axios'
import { API_KEY, iMAGE_URL } from '../../constants/constants'
import YouTube from 'react-youtube'



function MovieRow(props) {
    const [movies, setMovies] = useState([])
    const [urlKey, setUrlKey] = useState( )
    
    useEffect(() => {
        axios.get(props.url)
            .then((res) => setMovies(res.data.results))
            .catch(err => console.log(err))
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    //GETTING THE KEY TO PLAY THE YOUTUBE VIDEO

    const playVideo = (id) => {
        // console.log(id, 'playVid')
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
            .then((res) => {
                console.log(res.data.results ,'res');
                if(res.data.results.length !==0){
                    setUrlKey(res.data.results[0])
                }else alert('no url')
            }).catch(err => console.log(err.message ,'error'))
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="movie-posters">
                {movies.map((obj) =>
                    <img onClick={() => playVideo(obj.id)} className={props.isSmall ? 'small-poster' : 'poster-img'} src={`${iMAGE_URL + obj.backdrop_path}`} alt="" />
                )}
                {/* <img className='poster-img' src="/images/defaultPoster.jpg" alt=""  /> */}
            </div>
            { urlKey && <YouTube videoId={urlKey.key} opts={opts} /> }
        </div>
    )
}

export default MovieRow