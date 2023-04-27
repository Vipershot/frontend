import CreateTask from "@/components/CreateTask/CreateTask"
import Task from "./task"

export default function Home() {
  return (
    <>
      <div>
        <CreateTask />
        <Task />
      </div>
    </>
  )
}
