import React from 'react'
import { useParams } from 'react-router-dom'
import ExerciseRoutineCard from './ExerciseRoutineCard'

const ExerciseRoutines = ({current_user,  exercises, exerciseRoutines}) => {

  const {id} = useParams();

  const currentRoutines = exerciseRoutines?.find(routine => routine.schedule_id === +id)
  
  return (<div>

  <h1>Exercise Routines!</h1>

    {exerciseRoutines?.filter(item => item.schedule_id === +id).map( routines => (<p key={routines.id} >{routines.weight}</p>))}

  </div>)
}

export default ExerciseRoutines