import React, { useState } from 'react'
import './Categorycard.css'




function CategoryCard({ title, img, color, val, setVal, handleDelete }) {

    const [cardstate, setCardstate] = useState(false)


    const handleAdd = (title) => {
        const Addvalue = [...val, title]
        if (!cardstate) {
            setVal(Addvalue)
            localStorage.setItem('selectgenre', JSON.stringify(val))
        } else {
            handleDelete()
        }
        setCardstate(cardstate => !cardstate)
    }

    let mystyle = cardstate ? " active" : ' ';


    return (
        <>
            <div className={`genre_cat_card${mystyle}`} style={{ backgroundColor: color }} onClick={() => handleAdd(title)} >
                <p className="genre_title">{title}</p>
                <div className="genre_insidecat_card"><img src={img} alt="" /></div>
            </div>
        </>
    )
}

export default CategoryCard