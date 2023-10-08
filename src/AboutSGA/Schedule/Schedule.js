import React, { useEffect, useRef, useState, useContext } from "react";
import { AppContext } from "../../AppContext";
import "./Schedule.css";

function Schedule() {
  const { navigateTrainingScheduleRef } = useContext(AppContext);

  const dayRefs = useRef([]);

  const [dayNumber, setDayNumber] = useState();

  useEffect(() => {
    const date = new Date();

    setDayNumber(date.getDay());

    const dayOptions = {
      rootMargin: "0px 0px -20% 0px",
    };

    const dayObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const entryId = Number(entry.target.id);
        const entryClassList = entry.target.classList;
        const todayTagClasslist =
          entry.target.children[0].children[0].classList;

        if (entry.isIntersecting && entryId === dayNumber) {
          entryClassList.add("current-day");

          todayTagClasslist.remove("today-tag-closed");
        }

        if (!entry.isIntersecting && entryId === dayNumber) {
          entryClassList.remove("current-day");

          todayTagClasslist.add("today-tag-closed");
        }
      });
    }, dayOptions);

    dayRefs.current.forEach((ref) => {
      if (ref) {
        dayObserver.observe(ref);
      }
    });

    return () => {
      dayObserver.disconnect();
    };
  }, [dayNumber]);

  return (
    <div
      ref={navigateTrainingScheduleRef}
      className="training-schedule-container"
    >
      <h2 className="training-schedule-h2">ROZPIS TRÉNINGOV</h2>
      <div className="training-schedule-grid">
        <div
          ref={(el) => (dayRefs.current[0] = el)}
          id="1"
          className="schedule-column column-1"
        >
          <div className="day">
            <div className="today-tag today-tag-closed">Dnes</div>
            <p>PONDELOK</p>
          </div>

          <div className="comp-class class-div">
            <p>COMPETITION CLASS</p>
            <p>8:00 - 10:30</p>
          </div>

          <div className="comp-class class-div">
            <p>COMPETITION CLASS</p>
            <p>17:00 - 18:00</p>
          </div>

          <div className="grappling-class class-div">
            <p>GRAPPLING</p>
            <p>18:00 - 19:00</p>
          </div>
          <div className="mma-class class-div">
            <p>MMA</p>
            <p>19:00 - 20:00</p>
          </div>
        </div>
        <div
          ref={(el) => (dayRefs.current[1] = el)}
          id="2"
          className="schedule-column column-2"
        >
          <div className="day">
            <div className="today-tag today-tag-closed">Dnes</div>
            <p>UTOROK</p>
          </div>

          <div className="comp-class class-div">
            <p>COMPETITION CLASS</p>
            <p>8:00 - 10:30</p>
          </div>

          <div className="comp-class class-div">
            <p>COMPETITION CLASS</p>
            <p>17:00 - 18:00</p>
          </div>

          <div className="wrestling-class class-div">
            <p>WRESTLING</p>
            <p>18:00 - 19:00</p>
          </div>
          <div className="grappling-class class-div">
            <p>GRAPPLING</p>
            <p>19:00 - 20:00</p>
          </div>
        </div>
        <div
          ref={(el) => (dayRefs.current[2] = el)}
          id="3"
          className="schedule-column column-3"
        >
          <div className="day">
            <div className="today-tag today-tag-closed">Dnes</div>
            <p>STREDA</p>
          </div>
          <div className="comp-class class-div">
            <p>COMPETITION CLASS</p>
            <p>8:00 - 10:30</p>
          </div>
          <div className="comp-class class-div">
            <p>COMPETITION CLASS</p>
            <p>17:00 - 18:00</p>
          </div>
          <div className="grappling-class class-div">
            <p>GRAPPLING</p>
            <p>18:00 - 19:00</p>
          </div>
          <div className="mma-class class-div">
            <p>MMA</p>
            <p>19:00 - 20:00</p>
          </div>
        </div>
        <div
          ref={(el) => (dayRefs.current[3] = el)}
          id="4"
          className="schedule-column column-4"
        >
          <div className="day">
            <div className="today-tag today-tag-closed">Dnes</div>
            <p>ŠTVRTOK</p>
          </div>
          <div className="comp-class class-div">
            <p>COMPETITION CLASS</p>
            <p>8:00 - 10:30</p>
          </div>
          <div className="comp-class class-div">
            <p>COMPETITION CLASS</p>
            <p>17:00 - 18:00</p>
          </div>
          <div className="wrestling-class  class-div">
            <p>WRESTLING</p>
            <p>18:00 - 19:00</p>
          </div>
          <div className="grappling-class class-div">
            <p>GRAPPLING</p>
            <p>19:00 - 20:00</p>
          </div>
        </div>
        <div
          ref={(el) => (dayRefs.current[4] = el)}
          id="5"
          className="schedule-column column-5"
        >
          <div className="day">
            <div className="today-tag today-tag-closed">Dnes</div>
            <p>PIATOK</p>
          </div>
          <div className="comp-class class-div">
            <p>COMPETITION CLASS</p>
            <p>8:00 - 10:30</p>
          </div>
          <div className="comp-class class-div">
            <p>COMPETITION CLASS</p>
            <p>17:00 - 18:00</p>
          </div>
          <div className="sparring-class class-div">
            <p>SPARINGY</p>
            <p>18:00 - 19:00</p>
          </div>
          <div className="sparring-class class-div">
            <p>SPARINGY</p>
            <p>19:00 - 20:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
