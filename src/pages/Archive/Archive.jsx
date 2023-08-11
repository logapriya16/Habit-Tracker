import React, { useContext } from "react";
import Sidenav from "../../components/sidenav";
import { HabitContext } from "../../Context/HabitContext";
import { BsArchiveFill } from "react-icons/bs";
export default function Archive() {
  const { habitstate, archiveHabit } = useContext(HabitContext);
  return (
    <div style={{ display: "flex" }}>
      <Sidenav />
      <div className="center_area">
        <ul type="none">
          {habitstate.all_habits.filter((item) => item.archive === true)
            .length > 0 ? (
            habitstate.all_habits
              .filter((item) => item.archive === true)
              .map((habit) => {
                return (
                  <li
                  className="each-habit"
                    key={habit.id}
                    // onClick={() => navigate(`/eachhabit/${habit.id}`)}
                  >
                    <h1>{habit.name}</h1>
                    {/* <p>
                          {habit.repeate} | {habit.goal}
                        </p> */}
                    <p>Started from : {habit.SDate}</p>
                    <p>Do it at : {habit.time}</p>
                    <BsArchiveFill onClick={() => archiveHabit(habit)} />
                  </li>
                );
              })
          ) : (
            <h2>No Archives</h2>
          )}
        </ul>
      </div>
    </div>
  );
}
