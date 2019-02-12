import React from 'react';
import Market from './Market';

const marketSchedule = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];

function Schedule(){
  return (
    <div>
      <style jsx>{`
        div {
          border: 1px solid #000;
          margin: 5px;
          width: 33%;
          float: left;
        }
        `}</style>
        <h1>Schedule Component</h1>
      <hr/>
      {marketSchedule.map((market, index) =>
        <Market day={market.day}
          location={market.location}
          hours={market.hours}
          booth={market.booth}
          key={index}/>
      )}
    </div>
  );
}

export default Schedule;
