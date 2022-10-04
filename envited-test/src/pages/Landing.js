import React from 'react'
import "../Landing.css"
import {Routes, Route, useNavigate} from "react-router-dom"

function Landing() {
    const navigate = useNavigate()

    const navigateToCreate = () => {
        navigate("/create")
    }
  return (
    <div className='landing-page'>
        <div className='movie-card'>
            <img className='movie-img' src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T163432Z&X-Amz-Expires=86400&X-Amz-Signature=4c792cdd11ea4521a0ecdfbb3a486af24eb0c824fe1785cba8d2d40bdcbb4271&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject' />
        </div>
        <div className='add-event'>
            <div className='add-event-text'>
                <h1 className='add-event-heading'>Imagine if<br/>
                <span className='snapchat'>Snapchat</span><br/>
                had events.</h1>
                <p className='info'>Easily host and share events with your friends across any social media.</p>
            </div>
            <div className='add-event-btn'>
                <button className='add-event-btn-text' onClick={navigateToCreate}>🎉 Create my event</button>
            </div>
        </div>
    </div>
  )
}

export default Landing
