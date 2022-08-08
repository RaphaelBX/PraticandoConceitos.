import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { useState } from "react";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App () {
   const [tasks, setTasks] = useState<ITask[]>([
    {
      id:'teste',
      title: 'teste',
      isCompleted: true,
     },
     {
      id:'sgrsrgsrg',
      title: 'teste2',
      isCompleted: false,
     },
   ]);

   function addTask(taskTitle: string) {
     setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      },
     ]);
   }

   function deleteTaskbyId(taskId: string) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
   }

   function toggleTaskCompleteById(taskId: string) {
    const newTasks = tasks.map ( task =>{
      if(task.id === taskId) {
       return {
          ...task,
          isCompleted:  !task.isCompleted,
       };
      }
      return task;
    });
    setTasks(newTasks);
   }

   return (
    <>
    <Header onAddTask={addTask} />
    <Tasks 
    tasks={tasks} 
    onDelete={deleteTaskbyId} 
    onComplete={toggleTaskCompleteById}
    />
    
    </>
  )
}

export default App
