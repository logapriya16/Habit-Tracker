import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

import { Habits } from "../Backend/habits";
import { useNavigate } from "react-router-dom";

export const HabitContext = createContext();
export default function HabitProvider({ children }) {
  const navigate = useNavigate();
  const [allhabits, setAllhabits] = useState(Habits);
  const [habitinfo, setHabitinfo] = useState({
    id: uuid(),
    name: "",
    repeate: "",
    goal: "",
    time: "",
    SDate: "",
    archive: false,
  });
  const AddNewHabit = () => {
    const temp = habitinfo;
    setAllhabits([...allhabits, temp]);
  };
  const EditHabit = (habit, it) => {
    
  };
  const ArchiveHabit = (id) => {
    const temp = allhabits.reduce(
      (acc, item) =>
        item.id === id
          ? [...acc, { ...item, archive: true }]
          : [...acc, { ...item }],
      []
    );
    setAllhabits(temp);
  };
  const DeleteHabit = (id) => {
    const temp = allhabits
      .filter((item) => item.id != id)
      .map((habit) => habit);
    setAllhabits(temp);
    navigate("/habits");
  };
  console.log("context page", allhabits);
  return (
    <HabitContext.Provider
      value={{
        AddNewHabit,
        allhabits,
        habitinfo,
        setHabitinfo,
        EditHabit,
        DeleteHabit,
        ArchiveHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
}
