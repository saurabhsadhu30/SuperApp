import React, { useState, useEffect } from 'react'
import weastyle from './Weather.module.css'
import pressureimg from '../../assets/Vector (3).png'
import windimg from '../../assets/Vector (4).png'
import humnityimg from '../../assets/Group.png'


function Weather(props) {

    let [weatherdata, setWeatherdata] = useState({});
    let [conditiondata, setConditiondata] = useState({});

    const apiKey = process.env.REACT_APP_WEATHER_API

    const updateWeather = async () => {
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Sirohi`;
        let data = await fetch(url);
        let parsedData = await data.json()
        const obj = parsedData.current["condition"]
        setWeatherdata(parsedData.current)
        setConditiondata(obj)
    }
    useEffect(() => {
        updateWeather()
    }, [])


    return (
        <div className={weastyle.wcontainer}>
            <div className={weastyle.topcon}>
                <p>{weatherdata.last_updated}</p>
            </div>
            <div className={weastyle.botcon}>
                <div className={weastyle.box1} >
                    <img src={conditiondata.icon} alt="" style={{ width: "68px", height: "58px" }} />
                    <p>{conditiondata.text}</p>
                </div>
                <hr />
                <div className={weastyle.box2}>
                    <p>{weatherdata.temp_c}°C</p>
                    <div>
                        <img src={pressureimg} alt="" style={{ width: "20px", height: "35px" }} />
                        <div className={weastyle.pressure}>
                            <p>{weatherdata.pressure_mb} mbar</p>
                            <p>Pressure</p>
                        </div>
                    </div>

                </div>
                <hr />
                <div className={weastyle.box3}>
                    <div>
                        <img src={windimg} alt="" style={{ width: "30px", height: "30px" }} />
                        <div className={weastyle.wind}>
                            <p>{weatherdata.wind_kph}km/h</p><p>Wind</p>
                        </div>

                    </div>
                    <div>
                        <img src={humnityimg} alt="" style={{ width: "20px", height: "27px" }} />
                        <div className={weastyle.humnity}>
                            <p>{weatherdata.humidity}%</p>
                            <p>Humidiy</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Weather