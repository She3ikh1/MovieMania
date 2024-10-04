import React, { useState } from 'react';

function GoalForm(props) {
  const [formdata, setFormdata] = useState({ goal: "", by: "" });

  function changehandler(e) {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formdata);
    setFormdata({ goal: "", by: "" });
  }

  return (
    <>
      <h1>My Little Lemon</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name='goal'f placeholder='Goal' value={formdata.goal} onChange={changehandler} />
        <input type="text" name='by' placeholder='By' value={formdata.by} onChange={changehandler} />
        <button type="submit">Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>My goal is {g.goal}, by {g.by}</span>
        </li>
      ))}
    </ul>
  );
}

export function Pracice() {
  const [allGoals, setAllGoals] = useState([]);
  
  function addGoal(goal) {
    setAllGoals([...allGoals, goal]);
  }

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}

export default Pracice;
