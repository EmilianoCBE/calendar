import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns'
import { CalendarEvent, CalendarModal, Navbar } from "../"
import { localizer } from '../../helpers'
import { useState } from 'react'

const events = [{
  title: 'Birthday',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#FAFAFA',
  user: {
    _id: '123',
    name: 'Elden'
  }
}]

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const eventSyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    if(isSelected) return {
      style
    }
  }

  const onDoubleClick = (event) => {
    console.log({doubleClick: event})
  }

  const onSelect = (event) => {
    console.log({click: event})
  }

  const onViewChange = (event) =>{
    localStorage.setItem('lastView', event)
    
  }

  return (
    <>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        defaultView={lastView}
        endAccessor="end"
        style={{ height: 'calc(100vh -80px)' }}
        eventPropGetter={eventSyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

        <CalendarModal />
    </>
  )
}
