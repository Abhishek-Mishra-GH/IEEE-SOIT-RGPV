import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, globalizeLocalizer } from 'react-big-calendar';
import globalize from 'globalize';
import { TypewriterEffect } from "../components/aceui/typewriter-effect";
import { HoverEffect } from "../components/aceui/card-hover-effect";
import TBA from "../assets/events/tba.png"
import EKLAVYA from "../assets/events/eklavya.jpg"

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
    start: new Date(2024, 9, 11, 12, 0),
    end: new Date(2024, 9, 11, 16, 0),
  },
  {
    id: 3,
    title: "IEEE Department Hackathon",
    start: new Date(2024, 9, 13, 12, 0),
    end: new Date(2024, 9, 13, 16, 0),
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

  const events = [
    {
      title: "07 NOV 2024",
      description:
        "Join us at the event for an exciting lineup of games, quizzes, and prizes! Test your skills, team up, and compete to be the top scorer!",
      link: "",
      img: EKLAVYA,
    },
    {
      title: "To Be Announced...",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "",
      img: TBA,
      tba: true,
    },
    {
      title: "To Be Announced...",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "",
      img: TBA,
      tba: true,
    },
    {
      title: "To Be Announced...",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "",
      img: TBA,
      tba: true,
    }
  ];

  const headingWords = [{text: "Explore"}, {text: "Our"}, {text: " Events. ", className: " text-[#7796ff]"}];

  return (
    <>
      <Navbar />
      <div className="md:mb-4 md:mt-8">
        <TypewriterEffect words={headingWords} className="text-center text-black mt-4" />
      </div>

      <div className="flex flex-col sm:flex-row justify-around">
        <div className="flex-1 my-2">
          <HoverEffect items={events} />
        </div>
        {/* Event Calender */}
        <div className="flex justify-center max-w-sm md:mt-6 md:mx-8">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            className="rbc-calendar bg-white rounded-md shadow-lg p-4 m-3"
            style={{ height: 450 }}
            onSelectEvent={handleEventClick}
          />
        </div>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          event={selectedEvent}
        />
      </div>
    </>
  );
}

export default Events;
