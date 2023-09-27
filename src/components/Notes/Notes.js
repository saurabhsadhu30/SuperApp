import React, { useState } from 'react'
import NotesStyle from '../Notes/Notes.module.css'




function Notes() {

    const [text, setText] = useState('');

    const handleOnChange = (e) => {
        setText(e.target.value)
        localStorage.setItem("note", JSON.stringify(text))
    }



    return (
        <div className={NotesStyle.card} >
            <h1 className={NotesStyle.heading}>All Notes</h1>
            <div>
                <textarea className={NotesStyle.text} value={text} onChange={handleOnChange} cols="30" rows="8">
                </textarea>
            </div>

        </div>
    )
}

export default Notes