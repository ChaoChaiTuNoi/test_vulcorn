import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [task , settask] = useState([])
  const [input , setinput] = useState("")
  const [inputid,setid] = useState("")

  const add = () => {
    if(input){
      
      const newtask = {id:inputid, name:input,status:"todo"}
      settask([...task,newtask])
      setinput("")
      setid("")

      console.log(task)
    }

    const deletetask = (id) => {
      settask(task.filter((task => task.id !== id)))
    }

  }


  return (
      <div >
        <h1>
          To-do list App
        </h1>
          <input value={input} onChange={(e) => setinput(e.target.value)}  placeholder='ID' >
          </input>
          <input value={input} onChange={(e) => setid(e.target.value)}  placeholder='Enter task' ></input>
          <button onClick={add}>
          Submit 
        </button>
        
        
        <div>
        {task.map((task,index)=>(
          <div key = {index}>{task.id}{task.name}{task.status}
          <button>
          Edit
        </button>
        <button onClick={() => deletetask(task.id)}>
          Delete
        </button>
           </div>
          
        ))  }
        
        </div>
      

      </div>
  )
}

export default App
