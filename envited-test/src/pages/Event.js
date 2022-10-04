import React from 'react'
import "../Event.css"
import {BiCalendar} from "react-icons/bi"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {GrNext} from "react-icons/gr"

function Event() {
  return (
    <div className='event-page'>
        <div className='event-card'>
            <h1 className='event-heading'>Birthday Bash</h1>
            <h2 className='event-subheading'>Hosted by Elysia</h2>
            <div className='info'>
                <div className='info-box' id='calender-box'>
                    <div className='more-info'>
                        <div className='info-box-icon'>
                            <BiCalendar className='icon-major' />
                        </div>
                        <div className='info-box-text'>
                            <p className='info-box-heading'><b>18 August 6:00PM</b></p>
                            <p className='info-box-subheading'>to <b>19 August 1:00PM</b> UTC +10</p>
                        </div>
                    </div>
                    <GrNext className='arrow'/>
                </div>
                <div className='info-box' id="location-box">
                    <div className='more-info'>
                        <div className='info-box-icon'>
                            <HiOutlineLocationMarker className='icon-major' />
                        </div>
                        <div className='info-box-text'>
                            <p className='info-box-heading'><b>Street Name</b></p>
                            <p className='info-box-subheading'>Suburb, State, Postcode+10</p>
                        </div>
                    </div>
                    <GrNext className='arrow'/>
                </div>
            </div>
        </div>
        <img className='event-img' src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T163502Z&X-Amz-Expires=86400&X-Amz-Signature=ece93d7a1bca76992fa2305c7caa48d9280ff2e143e2cb1ff9ccd7194a38c8b4&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"/>
    </div>
  )
}

export default Event
