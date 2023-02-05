import React, { useState, useEffect } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'


import axios from "axios";


export default function HomeCalendar() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://gamja-server-production.up.railway.app/api/orders")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const pullEvents = data.map(item => (


    {
      title: item.delivery + " for " + item.recipient + "  " + item.deliveryAddress,
      start: item.dueDate
    }





  ))


  return (
    <div >

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek'
        }}
        initialView='listWeek'
        weekends={true}
        height="auto"
        events={pullEvents}
        eventContent={renderEventContent}
      />
    </div>
  )
}

// a custom render function
function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}