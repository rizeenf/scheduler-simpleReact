import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import NoSchedule from './components/NoSchedule'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [showAddSch, setShowAddSch] = useState(true)
  const [schedule, setSchedule] = useState([]);

// Fetch Data
  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/schedule');
    const data = await res.json();

    return data;
  }


  // GET DATA FROM SERVER
  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();
      setSchedule(dataFromServer);
    }
    getData();
  }, []);


  // Delete Schedule
  const deleteSchedule = async (id) => {
    // Delete from Server
    await fetch(`http://localhost:5000/schedule/${id}`, {
      method : 'DELETE'
    })

    // Delete from UI
    setSchedule(schedule.filter((schedule) => schedule.id !== id))
    console.log('Deleting id: ', id)
  }
  
  // Add Schedule
  const addTask = async (schedules) => {
    // Add schedule from Server
    const res = await fetch('http://localhost:5000/schedule', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(schedules)
    })
    const data = await res.json();

    setSchedule([...schedule, data])



    // Just UI delete
    // const id = Math.floor(Math.random() * 1000) + 1;

    // const newSchedule = {id, ...schedules}
    // setSchedule([...schedule, newSchedule]);
  }

  // Change Practice checked
  const changePrac = (sch) => {
    console.log(sch.id)
    setSchedule(schedule , !sch.prac)
  }

  // Edit Show Add Schedule Button
  const showAddSchBtn = (e) => {
    setShowAddSch(!showAddSch);
  }

  return (
    <Router>
    <div className='container border rounded my-2' >
      <Header showBtn={showAddSchBtn} showAddSch={showAddSch} />
      <Routes>
      <Route path='/' element={
        <>
        {showAddSch ? <AddTask onAdd={addTask} /> : ''}
        { schedule.length > 0 ? <Tasks schedule={schedule} onDelete={deleteSchedule} onDoubleClick={changePrac} /> : <NoSchedule/>}
        </>
      }/>
      <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
