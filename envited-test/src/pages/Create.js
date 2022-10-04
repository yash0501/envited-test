import React, {useState} from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import "../Create.css"

function Create() {
    const [image, setImage] = useState(null);
    const navigate = useNavigate()

    const navigateToEvent = () => {
        navigate("/event")
    }

    const onImageUpload = (event)=>{
      if(event.target.files && event.target.files[0]){
        setImage(URL.createObjectURL(event.target.files[0]));
      }
    }

  return (
    <div className='create-page'>
      <h2 className="create-heading">Create Event</h2>
      <h4 className="create-subheading">Invite your friends to binge watch with you.</h4>
      <form className="form">
        <input type="text" placeholder="Event Name" className="text-field" />
        <input type="text" placeholder="Host Name" className="text-field" />
        <input type="datetime-local" placeholder="Start Date/Time" className="text-field" />
        <input type="datetime-local" placeholder="End Date/Time" className="text-field" />
        <input type="text" placeholder="Host Name" className="text-field" />
        <input type="file" placeholder="Upload Image" className="text-field" onChange={onImageUpload} />
        {image && <img src={image} className="display-img" />}
        
      </form>
      <div className='add-create-btn'>
          <button className='add-create-btn-text' onClick={navigateToEvent}>Next</button>
      </div>
    </div>
  )
}

export default Create
