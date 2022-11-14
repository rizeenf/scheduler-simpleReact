
const TaskDay = ({ schedule}) => {
  
  return (
    <>
      <ul >
      {schedule.value.class.map( (sch, index) => (
        <div key={index}>{sch}</div>
        ))}
      </ul>
    </>
  )
}

export default TaskDay
