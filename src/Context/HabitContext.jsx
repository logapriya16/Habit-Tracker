import React, { createContext, useEffect, useReducer } from "react";
import { v4 as uuid } from "uuid";

import { Habits } from "../data";
export const HabitContext = createContext();
export default function HabitProvider({ children }) {
  const habitinitial = { all_habits: [] };
  const habitreducer = (state, action) => {
    switch (action.type) {
      case "set_habits":
        return { ...state, all_habits: action.payload };
      default:
        return { ...state };
    }
  };
  const [habitstate, habitdispatch] = useReducer(habitreducer, habitinitial);
  const addHabit = (e) => {
    e.preventDefault();
    const newHabit = {
      id: uuid(),
      name: e.target.elements.name.value,
      repeate: e.target.elements.repeat.value,
      goal: e.target.elements.goal.value,
      time: e.target.elements.time.value,
      SDate: e.target.elements.SDate.value,
      archive: false,
    };
    //console.log(newHabit)
    const temp = [...habitstate.all_habits, newHabit];
    //console.log(temp)
    habitdispatch({ type: "set_habits", payload: temp });
  };
  const editHabit = (e) => {
    e.preventDefault();
    console.log(e);
    const temp = habitstate.all_habits.map((item) => {
      if (item.id === e.target.elements.id.value) {
        return {
          id: uuid(),
          name: e.target.elements.name.value,
          repeate: e.target.elements.repeat.value,
          goal: e.target.elements.goal.value,
          time: e.target.elements.time.value,
          SDate: e.target.elements.SDate.value,
          archive: false,
        };
      } else {
        return item;
      }
    });
    // const temp = [...habitstate.all_habits, updatedHabit];
    console.log(temp);
    habitdispatch({ type: "set_habits", payload: temp });
  };
  const archiveHabit = (habit) => {
    const temp = habitstate.all_habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, archive: !item.archive };
      } else {
        return habit;
      }
    });
    console.log(temp);
    habitdispatch({ type: "set_habits", payload: temp });
  };
  const deleteHabit = (habit) => {
    const temp = habitstate.all_habits.filter((item) => item.id !== habit.id);
    habitdispatch({ type: "set_habits", payload: temp });
  };
  const fetchHabit = () => {
    habitdispatch({ type: "set_habits", payload: Habits });
  };
  useEffect(() => {
    fetchHabit();
  }, []);
  console.log(habitstate);
  return (
    <HabitContext.Provider
      value={{ habitstate, addHabit, editHabit, deleteHabit, archiveHabit }}
    >
      {children}
    </HabitContext.Provider>
  );
}
