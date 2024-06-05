import Navbar from "../components/Navbar";
import Particle from "../components/particle";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, globalizeLocalizer } from 'react-big-calendar'
import globalize from 'globalize'
const localizer = globalizeLocalizer(globalize)



// format of date input is (year, month no. minus by 1 , day)


const events = [
  {
    id: 1,
    title: "Something is coming stay tuned",
    start: new Date(2024, 5, 7),    
    end: new Date(2024, 5, 14),
  },
];

function Events() {
  return (
    <>
      <Navbar />
      <Particle name="EVENT" />
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl pb-8 font-semibold">Event Calender</h1>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 450 }}
        />
      </div>
    </>
  );
}

export default Events;
