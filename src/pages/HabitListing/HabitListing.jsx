import React, { useContext, useState } from "react";

import Sidenav from "../../components/sidenav";
import { HabitContext } from "../../Context/HabitContext";
import { GrAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
export default function HabitListing() {
  const navigate = useNavigate();
  const { habitstate, addHabit } = useContext(HabitContext);
  const [displaynew, setDisplayNew] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <Sidenav />
      <div className="center_area">
        {habitstate.all_habits.length > 0 ? (
          <div>
            <ul type="none">
              {habitstate.all_habits
                .filter((item) => item.archive === false)
                .map((habit) => {
                  return (
                    <li
                    className="each-habit"
                      key={habit.id}
                      onClick={() => navigate(`/eachhabit/${habit.id}`)}
                    >
                      <h1>{habit.name}</h1>
                      {/* <p>
                  {habit.repeate} | {habit.goal}
                </p> */}
                      <p>Started from : {habit.SDate}</p>
                      <p>Do it at : {habit.time}</p>
                    </li>
                  );
                })}
            </ul>
            <GrAdd onClick={() => setDisplayNew(true)} />
            <form
            className="new form"
              style={{ display: displaynew ? "block" : "none" }}
              onSubmit={(e) => {
                addHabit(e);
                setDisplayNew(false);
              }}
            >
              <label htmlFor="">
                Name :
                <input type="text" id="name" />
              </label>
              <br />
              <label htmlFor="">
                {" "}
                Repat :{/* <input type="text" id="repeat" /> */}
                <select name="" id="repeat">
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </label>
              <br />
              <label htmlFor="">
                {" "}
                Goal :{/* <input type="text" id="goal" /> */}
                <select name="" id="goal">
                  <option value="1 time a day">1 time a day</option>
                  <option value="2 times a day">2 times a day</option>
                  <option value="3 times a day">3 times a day</option>
                </select>
              </label>
              <br />
              <label htmlFor="">
                {" "}
                Time :{/* <input type="text" id="time" /> */}
                <select name="" id="time">
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
                <input type="Date" id="SDate" />
              </label>
              <button type="submit">Add Habit</button>
            </form>
          </div>
        ) : (
          <div>
            <h3>
              Want to Add new Habit ?
              <br/>
              <GrAdd onClick={() => setDisplayNew(true)} />
            </h3>
            <form
              style={{ display: displaynew ? "block" : "none" }}
              onSubmit={(e) => {
                addHabit(e);
                setDisplayNew(false);
              }}
            >
              <label htmlFor="">
                Name :
                <input type="text" id="name" />
              </label>
              <br />
              <label htmlFor="">
                {" "}
                Repat :{/* <input type="text" id="repeat" /> */}
                <select name="" id="repeat">
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </label>
              <br />
              <label htmlFor="">
                {" "}
                Goal :{/* <input type="text" id="goal" /> */}
                <select name="" id="goal">
                  <option value="1 time a day">1 time a day</option>
                  <option value="2 times a day">2 times a day</option>
                  <option value="3 times a day">3 times a day</option>
                </select>
              </label>
              <br />
              <label htmlFor="">
                {" "}
                Time :{/* <input type="text" id="time" /> */}
                <select name="" id="time">
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
                <input type="Date" id="SDate" />
              </label>
              <button type="submit">Add Habit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
