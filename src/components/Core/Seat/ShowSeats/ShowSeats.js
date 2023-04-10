import React, { useEffect, useState } from "react";
import SingleSeat from "./SingleSeat";
import "./showSeat.css"

const ShowSeats = ({ seats, index }) => {
  const [segregatedSeat, setSegregatedSeat] = useState([])
  const [maxRow, setMaxRow] = useState(0)
  
  
  const findSegregatedSeat = () => {
    let val = seats.filter((item)=> {
      return item.index == index
    })
    setSegregatedSeat(val)

    let max = val.reduce((v, seat)=>{
      if(seat.row > v.row) return seat;
      return v; 
    },{row:0})
    setMaxRow(max.row)
  }


  useEffect(()=> {
    findSegregatedSeat()
  }, [seats])
  return (
    <div className="show-seats-wrapper" style={{gridTemplateRows: `repeat(${maxRow+1}, 2rem)`, display: `${segregatedSeat.length === 0 ? "none" : "grid"}`}} >
      {
        segregatedSeat?.map((item, idx)=> {
          const {row, column, seatType, seatName, length, width} = item;
          return <SingleSeat key={idx} {...{row, column, seatName, seatType, length, width, seats}}/>
        })
      }
    </div>
  );
};

export default ShowSeats;
