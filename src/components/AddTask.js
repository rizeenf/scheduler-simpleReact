import { useState } from "react"
import Button from "./Button"

const AddTask = () => {
  const [day, setDay] = useState('')
  const [sch1, setSch1] = useState('')
  const [sch2, setSch2] = useState('')
  const [sch3, setSch3] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!day || !sch1){
      alert('Please fill schedule first')
      return
    }

    setDay('')
    setSch1('')
    setSch2('')
    setSch3('')
  }

  return (
    <div> 
      <form className="container" onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="mb-1">Day</label>
          <input className="form-control" type="text" value={day} placeholder="Add Day" onChange={(e) => { setDay(e.target.value)}} />
        </div>
        <div className="mb-3">
          <Button text={'Add'} classBtn={'btn-secondary btn-sm d-inline float-end mb-1'} />
          <label>Schedule</label>
          <input className="form-control mb-1" type="text" value={sch1} placeholder="Add Schedule" onChange={(e) => { setSch1(e.target.value)}} />
          <input className="form-control mb-1" type="text" value={sch2} placeholder="Add Schedule" onChange={(e) => { setSch2(e.target.value)}} />
          <input className="form-control mb-1" type="text" value={sch3} placeholder="Add Schedule" onChange={(e) => { setSch3(e.target.value)}} />
        </div>
        <input className="form-control btn btn-secondary" type="submit" value="Save Schedule"  />
      </form>
    </div>
  )
}

export default AddTask