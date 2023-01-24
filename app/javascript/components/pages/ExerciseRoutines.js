import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ExerciseRoutineCard from '../components/ExerciseRoutineCard'

const ExerciseRoutines = ({current_user,  exercises, exerciseRoutines}) => {

  const {id} = useParams();

  const currentRoutines = exerciseRoutines?.find(routine => routine.schedule_id === +id)

  return (<div>

  <NavLink to={`/newexerciseroutine/${id}`}>Create a new routine</NavLink>

  <h1>Exercise Routines!</h1>

  {exerciseRoutines?.filter(item => item.schedule_id === +id).map( routines => (<p key={routines.id} >{routines.weight}</p>))}

  </div>)
}

export default ExerciseRoutines