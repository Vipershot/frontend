import axios from "axios";
import { useEffect, useState } from "react";

export default function Task() {
  const [tasks, setTasks] = useState([])
  const list = async () => {
    const { data } = await axios.get("http://localhost:3002/task")
    console.log(data)
    setTasks(data)
  };

  const deleteTask = async (id: string) => {
    const { data } = await axios.delete(`http://localhost:3002/task/${id}`)
  }
  useEffect(() => {
    list()
  }, [])

  return (
    <>
      <div>
        <ul>
          {tasks.map(({ _id, title, description }) =>
            <li key={_id}>{title}<br />{description}<button className="button-basic" onClick={() => deleteTask(_id)}>Delete</button></li>)}
        </ul>
      </div>
    </>
  )
}
