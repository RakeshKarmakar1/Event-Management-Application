import React from 'react'
import EventCard from "../../../components/Eventcard/EventCard"
import { eventList } from '../../../Utils/EventDatabase'
import "./EventList.css"
import Navigation from '../../../components/Navigation/Navigation'
const EventList = () => {

    const renderEventCards=()=>{
        return eventList.map(({id,date,heading,location,img})=>{
            return(
                <EventCard
                key={id}
                id={id}
                date={date}
                heding={heading}
                location={location}
                img={img}
                />

            )

        })
    }

  return (
    
    <div>
        <Navigation/> 
        <div className='event-list-wrapper'>
      <div className='event-list'>
      {
        eventList.length>0?(renderEventCards()):(<p>No Events Found</p>)
      } 

      </div>
      
    </div>
    </div>
  )
}

export default EventList
