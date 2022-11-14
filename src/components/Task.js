import Button from "./Button"
import TaskDay from "./TaskDay"

const Task = ( {schedule, onDelete} ) => {
  return (
    <div className="container form-control d-flex justify-content-between align-items-center m-2 ">
      <div>{schedule.value.day}</div>
      <TaskDay schedule={schedule} />
      <Button text={'x'} classBtn={'btn-danger btn-sm'} onClick={() => onDelete(schedule.id)} />
    </div> 
  )
}

export default Task
