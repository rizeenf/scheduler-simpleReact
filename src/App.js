import './App.css'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [schedule, setSchedule] = useState([{
    id : 1,
    value : {
      day : 'Senin',
      class : ['Jepang', 'MTK', 'Aljabar']
    }
  },{
    id : 2,
    value : {
      day : 'Selasa',
      class : ['ReactJS', 'Laravel', 'Java']
    }
  },{
    id : 3,
    value : {
      day : 'Rabu',
      class : ['Git', 'Github', 'CI']
    }
  }
  ])

  const deleteSchedule = (id) => {
    setSchedule(schedule.filter((schedule) => schedule.id !== id))
    console.log('Deleting id: ', id)
  }

  return (
    <div className='container border rounded my-2' >
      <Header  />
      <AddTask />
      { schedule.length > 0 ? <Tasks schedule={schedule} onDelete={deleteSchedule} /> : 'No Schedule'}

    </div>
  );
}

export default App;
