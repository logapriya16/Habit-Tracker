import React, { useContext, useState } from "react";
import Sidenav from "../../components/sidenav";
import { HabitContext } from "../../Context/HabitContext";
import { useParams } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { BsArchive, BsArchiveFill } from "react-icons/bs";

export default function EachHabit() {
  const { habitstate, editHabit, deleteHabit, archiveHabit } =
    useContext(HabitContext);
  const [displaynew, setDisplayNew] = useState(false);

  const { habitId } = useParams();
  return (
    <div style={{ display: "flex" }}>
      <Sidenav />
      <div className="center_area">
        <ul type="none">
          {habitstate.all_habits
            .filter((item) => item.id === habitId)
            .map((habit) => {
              return (
                <li key={habit.id} className="each-habit">
                  <h1>{habit.name}</h1>
                  <p>
                    {habit.repeate} | {habit.goal}
                  </p>
                  <p>Started from : {habit.SDate}</p>
                  <p>Do it at : {habit.time}</p>
                  <AiFillEdit
                    onClick={() => {
                      setDisplayNew(true);
                    }}
                  />{" "}
                  <AiFillDelete
                    onClick={() => {
                      deleteHabit(habit);
                    }}
                  />{" "}
                  {!habit.archive ? (
                    <BsArchive
                      onClick={() => {
                        archiveHabit(habit);
                      }}
                    />
                  ) : (
                    <BsArchiveFill
                      onClick={() => {
                        archiveHabit(habit);
                      }}
                    />
                  )}
                  <form
                   className="form"
                    style={{ display: displaynew ? "block" : "none" }}
                    onSubmit={(e) => {
                      editHabit(e);
                      setDisplayNew(false);
                    }}
                  >
                    <label htmlFor="">
                      Id :
                      <input type="text" id="id" readOnly value={habit.id} />
                    </label>
                    <br />
                    <label htmlFor="">
                      Name :
                      <input type="text" id="name" defaultValue={habit.name} />
                    </label>
                    <br />
                    <label htmlFor="">
                      {" "}
                      Repat :
                      <select name="" id="repeat" defaultValue={habit.repeate}>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                      </select>
                    </label>
                    <br />
                    <label htmlFor="">
                      {" "}
                      Goal :
                      <select name="" id="goal" defaultValue={habit.goal}>
                        <option value="1 time a day">1 time a day</option>
                        <option value="2 times a day">2 times a day</option>
                        <option value="3 times a day">3 times a day</option>
                      </select>
                    </label>
                    <br />
                    <label htmlFor="">
                      {" "}
                      Time :
                      <select defaultValue={habit.time} id="time">
                        <option value="Any time">Any time</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                      </select>
                    </label>
                    <br />
                    <label htmlFor="">
                      {" "}
                      Start Date :
                      <input
                        type="Date"
                        id="SDate"
                        defaultValue={habit.SDate}
                      />
                    </label>
                    <button type="submit">Edit Habit</button>
                  </form>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
