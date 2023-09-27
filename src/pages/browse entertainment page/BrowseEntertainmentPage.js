import React from 'react'
import browstyle from './BrowseEntertainmentPage.module.css'
import image14 from '../../assets/image 14.png'
import Moviecard from '../../components/Moviescard/Moviecard'
import { Link } from 'react-router-dom'
function BrowseEntertainmentPage() {

    // const apiKey = process.env.REACT_APP_MOVIE_API


    return (
        <>
            <div >
                <header className={browstyle.header}>
                    <p>Super app</p>
                    <div className={browstyle.headerright}>
                        <Link to='/category'> <button >Back</button></Link>
                        <img src={image14} alt="" />
                    </div>
                </header>
                <p className={browstyle.p}>Entertainment according to your choice</p>
                <div className={browstyle.container}>

                    <div className={browstyle.cardcontainer}>
                        <Moviecard />
                    </div>
                </div>

            </div>
        </>

    )
}

export default BrowseEntertainmentPage