import React, { useEffect, useState } from 'react'
import moviestyle from '../Moviescard/Moviescard.module.css'
import requests from '../../request'


function Movieitem({ title }) {

    const [results, setResults] = useState([])

    let urlpath;

    const updatemovie = async () => {
        filterdata()
        let data = await fetch(urlpath);
        let parsedData = await data.json()
        setResults(parsedData.results)
    }
    useEffect(() => {
        updatemovie();
    }, [])

    function filterdata() {
        if (title === "Action") {
            urlpath = requests.fetchActionMovies;
        }
        else if (title === "Drama") {
            urlpath = requests.fetchDramaMovies;
        }
        else if (title === "Romance") {
            urlpath = requests.fetchRomanceMovies;
        }
        else if (title === "Thriller") {
            urlpath = requests.fetchThrillerMovies;
        } else if (title === "Western") {
            urlpath = requests.fetchWesternMovies;
        } else if (title === "Horror") {
            urlpath = requests.fetchHorrorMovies;
        } else if (title === "Fantasy") {
            urlpath = requests.fetchFantasyMovies;
        } else if (title === "Music") {
            urlpath = requests.fetchMusicMovies;
        } else if (title === "Fiction") {
            urlpath = requests.fetchFictionMovies;
        }
    }


    return (
        <>
            <p>{title}</p>
            <div className={moviestyle.cardflex} >
                {results.map((element, i) => {
                    return <img key={i} src={`https://image.tmdb.org/t/p/original/${element.backdrop_path}`} alt="" />
                })}
            </div>
        </>
    )
}

export default Movieitem