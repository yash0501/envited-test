import React from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import "../Landing.css"

function Create() {
    const navigate = useNavigate()

    const navigateToEvent = () => {
        navigate("/event")
    }
  return (
    <div className='create-page'>
      <h1>This is Create</h1>

        <div className='add-event-btn'>
            <button className='add-event-btn-text' onClick={navigateToEvent}>Next</button>
        </div>

    </div>
  )
}

export default Create
