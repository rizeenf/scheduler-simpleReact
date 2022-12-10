import Task from './Task'

const Tasks = ( {schedule, onDelete, onDoubleClick} ) => {
  return (
    <div className='ms-1 me-3'>
      {
        schedule.map((schedule) => (
          <Task key={schedule.id} schedule={schedule} onDelete={onDelete} onDoubleClick={onDoubleClick} />
        ))
      }
    </div>
  )
}

export default Tasks
