import { useState } from "react"
import PropTypes from 'prop-types'


const AddTask = ({ onAdd }) => {
  const [day, setDay] = useState('')
  const [classes, setClasses] = useState('')
  const [prac, setPract] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!day || !classes){
      alert('Please fill schedule first ')
      return
    }

    onAdd({day, classes, prac });

    setDay('');
    setClasses('');
    setPract(false);
  }

  return (
    <div> 
      <form className="container" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="mb-1">Day</label>
          <input className="form-control" type="text" value={day} placeholder="Add Day" onChange={(e) => { setDay(e.target.value)}} />
        </div>
        <div className="mb-3">
          <label>Schedule</label>
          <input className="form-control mb-1" type="text" value={classes} placeholder="Add Schedule" onChange={(e) => { setClasses(e.target.value)}} />

          <div className="d-flex justify-content-end">
            <label>Practice </label>
            <input className="mx-2" type="checkbox" value={prac} onChange={ e => setPract(e.currentTarget.checked)} checked={prac} />
          </div>
        </div>
        <input className="form-control btn btn-secondary mb-5" type="submit" value="Save Schedule"  />
      </form>
    </div>
  )
}

AddTask.propTypes ={
  day : PropTypes.string,
  classes : PropTypes.string,
  prac : PropTypes.bool,
}

export default AddTask