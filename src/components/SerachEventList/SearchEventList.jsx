import React from 'react'
import EventCard from '../Eventcard/EventCard'
import {eventList} from "../../Utils/EventDatabase"

const SearchEventList = ({monthYear}) => {
  const{selectedMonth,selectedYear}=monthYear

  const filterEvents=eventList.filter((eventDetail)=>{
    return (
      eventDetail.date.year===selectedYear &&
      eventDetail.date.month===selectedMonth
    )
  })
  
  const renderEventCards=()=>{
    return filterEvents.map(({id,date,heading,location,img})=>{
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
    <>
   {
    filterEvents.length>0 ? (renderEventCards()):
    (
      <p>No Events in the date</p>
    )
   }
    </>
  )
}

export default SearchEventList
