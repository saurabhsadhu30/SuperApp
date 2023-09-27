import React from 'react'
import moviestyle from './Moviescard.module.css'
import Movieitem from '../Movieitem/Movieitem'


function Moviecard() {

    let Myselectgenre = JSON.parse(localStorage.getItem('selectgenre'))

    // const genres = [{ "id": 28, "name": "Action" }, { "id": 12, "name": "Adventure" }, { "id": 16, "name": "Animation" }, { "id": 35, "name": "Comedy" }, { "id": 80, "name": "Crime" }, { "id": 99, "name": "Documentary" }, { "id": 18, "name": "Drama" }, { "id": 10751, "name": "Family" }, { "id": 14, "name": "Fantasy" }, { "id": 36, "name": "History" }, { "id": 27, "name": "Horror" }, { "id": 10402, "name": "Music" }, { "id": 9648, "name": "Mystery" }, { "id": 10749, "name": "Romance" }, { "id": 878, "name": "Science Fiction" }]

    return (
        <>  {
            Myselectgenre.map((item, i) => {
                return <div key={i} className={moviestyle.card}>
                    <Movieitem title={item} />
                </div>
            }
            )
        }

        </>
    )
}

export default Moviecard