import Eventlist from "../assets/pages/EventList/EventList"
import EventsDetails from "../assets/pages/EventsDetails/EventsDetails"
import FilterEvents from "../assets/pages/FilterEvents/FilterEvents"

export const routes= [
  {
    path:'/',element:<Eventlist/>
  },
  {
    path:'/find-events',element:<FilterEvents/>
  },
  {
    path:'/events/:id',element:<EventsDetails/>
  }
]
