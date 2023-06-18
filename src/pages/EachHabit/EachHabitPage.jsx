import React, { useContext, useState } from "react";
import { HabitContext } from "../../Contexts/HabitContext";
import { useParams } from "react-router-dom";
import "./EachHabit.css";
import NewHabit from "../../Components/AddnewHabit/NewHabit";
export default function EachHabitPage() {
  const { allhabits, EditHabit, DeleteHabit, ArchiveHabit } =
    useContext(HabitContext);
  const { habitID } = useParams();
  const [addnewhabit, setAddnewhabit] = useState(false);

  return (
    <div className="Each-habit-container">
      {allhabits
        .filter((item) => item.id === habitID)
        .map((habit) => {
          return (
            <div className="Each-habit-card">
              <h1>{habit.name}</h1>
              <div>{habit.repeat}</div>
              <div>{habit.repeat}</div>
              <div>{habit.goal}</div>
              <div>{habit.time}</div>
              <div>{habit.SDate}</div>
              <div style={{ display: addnewhabit ? "block" : "none" }}>
                <EditHabit/>
              </div>
              <button
                onClick={() => {
                  EditHabit(habit, habit.id);
                  setAddnewhabit(true);
                }}
              >
                Edit Habit
              </button>
              <button onClick={() => DeleteHabit(habit.id)}>
                Delete Habit
              </button>
              <button onClick={() => ArchiveHabit(habit.id)}>
                Archive Habit
              </button>
            </div>
          );
        })}
    </div>
  );
}
