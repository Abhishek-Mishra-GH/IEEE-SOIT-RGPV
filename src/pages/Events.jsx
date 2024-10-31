import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, globalizeLocalizer } from 'react-big-calendar';
import globalize from 'globalize';

const localizer = globalizeLocalizer(globalize);


const events = [
  {
    id: 1,
    title: "IEEE Day 2024",
    start: new Date(2024, 9, 1, 12, 0),
    end: new Date(2024, 9, 1, 16, 0),
  },
  {
    id: 2,
    title: "IEEE Blog Competition",
    start: new Date(2024, 9, 11, 12 ,0),
    end: new Date(2024, 9, 11, 16, 0),
  },
  {
    id: 3,
    title: "IEEE Department Hackathon",
    start: new Date(2024, 9, 13, 12, 0),
    end: new Date(2024, 9, 13 ,16 ,0),
  },
  {
    id: 4,
    title: "Eklavya",
    start: new Date(2024, 10, 7, 11, 0),
    end: new Date(2024, 10, 7, 17, 0),
  },
];

function Modal({ isOpen, onClose, event }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-6 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-xl font-semibold">{event.title}</h2>
        <p className="mt-2">
          Date: {event.start.toLocaleDateString()}
        </p>
        <button 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" 
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <h1 className="text-5xl text-center my-8 font-semibold">
        EVENT
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-32 border-b-4 border-black"></div>
      </h1>
      <div className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-3xl pb-8 font-semibold">Event Calendar</h1>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          className="rbc-calendar"
          style={{ fontFamily: "Poppins, sans-serif", height: 450 }}
          onSelectEvent={handleEventClick}
        />
      </div>
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        event={selectedEvent} 
      />
    </>
  );
}

export default Events;
