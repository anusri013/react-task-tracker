import Header from './components/Header'
import Tasks from './components/Tasks'
import  {useState, useEffect} from 'react'
import AddTask from './components/AddTask'

const App = () => {

  const [shadtsk,setShadtsk] = useState(false)
  const [tsk, setTasks] = useState([
    {
        id: 1,
        text: 'Dr.Akhila Joshi appointment',
        day: 'March 11th at 2:30 p.m.',
        remainder: true,
    },
    {
        id: 2,
        text: 'Meeting with Ghetto groupo' ,
        day: 'May be sunday',
        remainder: false,
    },
    {
        id: 3,
        text: 'Meeting with Debdeep',
        day: 'March 12 at 7:30 p.m. ',
        remainder: true,
    },
])

 useEffect(() => {
   const getsk = async() => {
     const tskfrmsrvr = await ftchtsks()
     setTasks(tskfrmsrvr)
   }
  getsk()
  },[])


// Fetching the tasks

const ftchtsks = async () => {
      const res = await fetch('http://localhost:5000/tsk')
      const data = await res.json()
      return data
    }

// Fetching the task

const ftchtsk = async (id) => {
      const res = await fetch(`http://localhost:5000/tsk/${id}`)
      const data = await res.json()
      return data
    }    

//  Adding a task

const adt= async(task) => {
  console.log(task);

  const res = await fetch('http://localhost:5000/tsk',{
    method : 'POST',
    headers : {'Content-type' : 'application/json',},
    body : JSON.stringify(task),
  })

  const data = await res.json()
  setTasks([...tsk, data])

  // const id = Math.floor(Math.random()*1000)+1
  // const newTsk = {id, ...task}
  // setTasks([...tsk,newTsk])

}

// Delete Task

const dt = async(id) => {
  console.log('deleting it', id)
  await fetch(`http://localhost:5000/tsk/${id}`,{
    method :'DELETE',
  })
  setTasks(tsk.filter((task) => task.id !== id ))
}

// Toggle Remainding

const tr = async(id) => {
  console.log('U double tapped this thing',id)
  const tsktotgl = await ftchtsk(id)
  const updtsk = {...tsktotgl , remainder: !tsktotgl.remainder}

  const res = await fetch(`http://localhost:5000/tsk/${id}`,{
    method : 'PUT',
    headers : {'Content-type' : 'application/json',},
    body : JSON.stringify(updtsk),

  })

const data = await res.json()
  setTasks(tsk.map((tsk) => tsk.id === id ? { ...tsk, remainder : data.remainder} : tsk))
}

  return(
    <div className="container">
     <Header title='Task Tracker' onAddi = {() => setShadtsk(!shadtsk)}  shad = {shadtsk}/>
     {shadtsk && <AddTask onAdde = {adt} />}
     {tsk.length > 0  ? 
     (<Tasks tt={tsk} onDel = {dt} onTgl = {tr}/>)
     : ("No More Taskss To Show")}</div>
  )
}

// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }

export default App;


