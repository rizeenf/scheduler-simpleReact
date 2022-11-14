import Task from './Task'

const Tasks = ( {schedule, onDelete} ) => {
  return (
    <div className='ms-1 me-3'>
      {
        schedule.map( (schedule) => (
          <Task key={schedule.id} schedule={schedule} onDelete={onDelete} />
        ))
      }
    </div>
  )
}

export default Tasks
