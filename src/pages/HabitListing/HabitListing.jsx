import React, { useContext, useState } from "react";
import { HabitContext } from "../../Contexts/HabitContext";
import "./HabitListing.css";
import { useNavigate } from "react-router-dom";
import NewHabit from "../../Components/AddnewHabit/NewHabit";
export default function HabitListing() {
  const { allhabits } = useContext(HabitContext);
  console.log("habit listing page",allhabits);
  const [addnewhabit,setAddnewhabit]=useState(false)
  const navigate = useNavigate();
  return (
    <div className="habits-container">
      <h1>Habits</h1>
      <ul className="habits-list">
        {allhabits.map((item) => (
          <li
          key={item.id}
            type="none"
            className="habit-card"
            onClick={() => navigate(`/habits/${item.id}`)}
          >
            <div>{item.name}</div>
            <div>{item.repeate}</div>
            <div>{item.SDate}</div>
            <div>{item.goal}</div>
          </li>
        ))}
      </ul>
      <div className="new-habit">
        <button className="new-habit" onClick={() => {setAddnewhabit(true)}}>
          +
        </button>
        <div style={{display:addnewhabit?"block":"none"}}>
          <NewHabit/>
        </div>
      </div>
    </div>
  );
}
