import React, { useEffect, useState } from 'react'
import timerstyle from './Timer.module.css';
// import sound from '../../assets/sound.mp3'
// import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import ring from '../../assets/Ellipse 4.png'

function Timer() {


    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [running, setRunning] = useState(null);

    // const [endAudio, setEndAudio] = useState({
    //     show: false,
    // })

    const [remainingTime, setRemainingTime] = useState(60);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                if (second > 0) {
                    setSecond((second) => second - 1);
                }
                else if (minute > 0) {
                    setMinute((minute) => minute - 1);
                    setSecond(59)
                }
                else if (hour > 0) {
                    setHour((hour) => hour - 1);
                    setSecond(59)
                    setMinute(59)
                }
                else if (remainingTime > 0) {
                    setRemainingTime((prevTime) => prevTime - 1);
                }
            }, 1000)
        }
        if (hour === 0 && minute === 0 && second === 0) {
            //     setEndAudio({ ...endAudio, show: true })

        }

        return () => {
            clearInterval(interval)
        }
    }, [second, minute, hour, running, remainingTime])



    function starttimer() {
        if (hour !== 0 || minute !== 0 || second !== 0) {
            setRunning(true)
            // setEndAudio({ ...endAudio, show: false })
            setRemainingTime((hour * 3600) + (minute * 60) + (second * 1));
        }
        else (
            window.alert('please set time to start countdown timer')
        )
    }

    const handlesecond = (e) => {
        setSecond(e.target.value)
    }
    const handlehour = (e) => {
        setHour(e.target.value)
    }
    const handleminute = (e) => {
        setMinute(e.target.value)
    }

    // if (!running) {
    //     function playaudio() {
    //         new Audio(sound).play()
    //     }
    //     playaudio()
    // }


    return (
        <>
            <div className={timerstyle.Card}>
                <div className={timerstyle.maincontainer}>
                    <div className={timerstyle.ring}>
                        <img src={ring} alt="" />
                        <h1>{hour}:{minute}:{second}</h1>
                    </div>
                </div>

                <div className={timerstyle.timer}>
                    <div className={timerstyle.timertop} >
                        <div className={timerstyle.hourcard} >
                            <p>Hour</p>
                            <button className={timerstyle.button} onClick={() => setHour(hour + 1)} ><div className={timerstyle.trianglebuttonstriangle}></div></button>
                            <input value={hour} onChange={handlehour} />

                            <button className={timerstyle.button} onClick={() => setHour(hour + 1)} ><div className={timerstyle.trianglebuttonstriangle} style={{ transform: " rotate(180deg)" }}></div></button>
                        </div>
                        <p className={timerstyle.dots}>:</p>
                        <div className={timerstyle.mincard} >
                            <p>Minute</p>
                            <button className={timerstyle.button} onClick={() => setMinute(minute + 1)}  >
                                <div className={timerstyle.trianglebuttonstriangle}></div>
                            </button >
                            <input value={minute} onChange={handleminute} />
                            <button className={timerstyle.button} onClick={() => setMinute(minute - 1)} ><div className={timerstyle.trianglebuttonstriangle} style={{ transform: " rotate(180deg)" }}></div></button>
                        </div>
                        <p className={timerstyle.dots}>:</p>
                        <div className={timerstyle.seccard}>
                            <p>Second</p>
                            <button className={timerstyle.button} onClick={() => setSecond(second + 1)} ><div className={timerstyle.trianglebuttonstriangle}></div></button>
                            <input value={second} onChange={handlesecond} />
                            <button className={timerstyle.button} onClick={() => setSecond(second - 1)} ><div className={timerstyle.trianglebuttonstriangle} style={{ transform: " rotate(180deg)" }}></div></button>
                        </div>
                    </div>
                    <div className={timerstyle.timerbot}>
                        <button className={timerstyle.start} onClick={starttimer}>Start</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Timer