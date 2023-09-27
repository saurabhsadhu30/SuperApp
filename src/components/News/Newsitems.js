import React from 'react'
import newsstyle from './NewsCard.module.css'
function Newsitems({ title, description, imageUrl, date }) {
    return (
        <>
            <div className={newsstyle.card}>
                <div className={newsstyle.image}>
                    <img src={imageUrl} alt="" />
                    <div className={newsstyle.title}>
                        <p>{title}</p>
                        <div className={newsstyle.date}>
                            <p>{new Date(date).toGMTString()}</p>
                        </div>
                    </div>
                </div>
                <div className={newsstyle.description} ><p>{description}</p></div>
            </div>
        </>
    )
}

export default Newsitems