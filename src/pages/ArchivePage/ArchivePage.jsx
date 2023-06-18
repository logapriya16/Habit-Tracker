import React, { useContext } from 'react'
import { HabitContext } from '../../Contexts/HabitContext';

export default function ArchivePage() {
  const {allhabits}=useContext(HabitContext)
  return (
    <div>
      {allhabits
        .filter((item) => item.archive=== true)
        .map((habit) => {
          return (
            <div >
              <h1>{habit.name}</h1>
              <div>{habit.repeat}</div>
              <div>{habit.repeat}</div>
              <div>{habit.goal}</div>
              <div>{habit.time}</div>
              <div>{habit.SDate}</div>
              
            </div>
          );
        })}
    </div>
  )
}
