import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import timeGridPlugin from '@fullcalendar/timegrid'

const events = [
  {     title: 'Meeting', start: new Date() },
  {title:'Delivery to 4423 yonge', start:new Date("2023-02-01T13:10:00Z")},
  {title:'Delivery to 542 yonge', start:new Date("2023-02-01T13:08:00Z")},
  {title:'Delivery to 6423 yonge', start:new Date("2023-02-01T13:07:00Z")},
  {title:'Delivery to 7423 yonge', start:new Date("2023-02-01T13:06:00Z")},
  {title:'Delivery to 8423 yonge', start:new Date("2023-02-01T13:05:00Z")},
  {title:'Delivery to 9423 yonge', start:new Date("2023-02-01T13:04:00Z")},
  {title:'Delivery to 11423 yonge', start:new Date("2023-02-01T13:03:00Z")},
  {title:'Delivery to 4314423 yonge', start:new Date("2023-02-01T13:02:00Z")},
  {title:'Delivery to 44232 yonge', start:new Date("2023-02-01T13:01:00Z")},


]

export default function HomeCalendar() {
  return (
    <div >

      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin,listPlugin]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek'
        }}
        initialView='listWeek'
        weekends={true}
        height="auto"
        events={events}
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