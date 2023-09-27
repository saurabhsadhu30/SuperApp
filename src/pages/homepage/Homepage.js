import UserProfile from '../../components/UserProfile/UserProfile'
import NewsCard from '../../components/News/NewsCard'
import Weather from '../../components/Weather/Weather'
import Homestyle from './Homepage.module.css'
import { Link } from 'react-router-dom'
import Timer from '../../components/Timer/Timer'
import Notes from '../../components/Notes/Notes'

function Homepage() {
    const apiKey = process.env.REACT_APP_WEATHER_API
    // const newsapiKey = process.env.REACT_APP_NEWS_API

    return (
        <>
            <div className={Homestyle.dashboard}>
                <div className={Homestyle.leftsection}>
                    <div className={Homestyle.leftsection_top} >
                        <div className={Homestyle.topleft}>
                            < UserProfile />
                            <Weather apiKey={apiKey} />
                        </div>
                        <div className={Homestyle.topright}>
                            <Notes />
                        </div>
                    </div>
                    <div className={Homestyle.leftsection_bot}> <Timer /></div>
                </div>
                <div className={Homestyle.rightsection} > <NewsCard /></div>
            </div>
            <div className={Homestyle.browbtn}> <Link to='/browse'><button >Browse</button></Link></div>
        </>

    )
}

export default Homepage