import React from "react";
import { HabitContext } from "../../Contexts/HabitContext";
const { AddNewHabit, setHabitinfo, habitinfo } = useContext(HabitContext);
export default function EditHabit() {
  return (
    <div className="new-habit-card">
      <div className="habit-arguments">
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          placeholder="Habit-name"
          value={habitinfo.name}
          onChange={(e) =>
            setHabitinfo((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div className="habit-arguments">
        <label htmlFor="repeat"></label>
        <input
          type="text"
          id="repeat"
          placeholder="No of repeats of habit"
          value={habitinfo.repeate}
          onChange={(e) =>
            setHabitinfo((prev) => ({ ...prev, repeate: e.target.value }))
          }
        />
      </div>
      <div className="habit-arguments">
        <label htmlFor="goal"></label>
        <input
          type="text"
          id="goal"
          value={habitinfo.goal}
          placeholder="Goal for habit"
          onChange={(e) =>
            setHabitinfo((prev) => ({ ...prev, goal: e.target.value }))
          }
        />
      </div>
      <div className="habit-arguments">
        <label htmlFor="time"></label>
        <input
          type="text"
          id="time"
          value={habitinfo.time}
          placeholder="time to do "
          onChange={(e) =>
            setHabitinfo((prev) => ({ ...prev, time: e.target.value }))
          }
        />
      </div>
      <div className="habit-arguments">
        <label htmlFor="SDate"></label>
        <input
          type="date"
          id="SDate"
          value={habitinfo.SDate}
          placeholder="starting date of habit"
          onChange={(e) =>
            setHabitinfo((prev) => ({ ...prev, SDate: e.target.value }))
          }
        />
      </div>
      <button
        onClick={() => {
          AddNewHabit();
        }}
      >
        Add Habit !{" "}
      </button>
    </div>
  );
}
