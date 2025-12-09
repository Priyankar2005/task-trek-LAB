import { useState } from "react";
import Header from "@/components/Header";
import TaskInput from "@/components/TaskInput";
import TaskColumn from "@/components/TaskColumn";
import BackgroundEffects from "@/components/BackgroundEffects";

interface Task {
  id: string;
  title: string;
  tags: string[];
  status: string;
}

const initialTasks: Task[] = [
  { id: "1", title: "Change Delete Icon", tags: ["HTML", "CSS"], status: "todo" },
  { id: "2", title: "Start Section 4 for React", tags: ["React"], status: "todo" },
  { id: "3", title: "This is new tasks", tags: ["HTML", "CSS"], status: "todo" },
  { id: "4", title: "Complete Project 1", tags: ["React"], status: "doing" },
  { id: "5", title: "This is another task", tags: ["JavaScript", "CSS"], status: "doing" },
  { id: "6", title: "Working on HTML", tags: ["HTML"], status: "done" },
];

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (title: string, tags: string[], status: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      tags,
      status,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const todoTasks = tasks.filter((t) => t.status === "todo");
  const doingTasks = tasks.filter((t) => t.status === "doing");
  const doneTasks = tasks.filter((t) => t.status === "done");

  return (
    <div className="min-h-screen animated-bg relative">
      <BackgroundEffects />
      
      <main className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <Header />
        
        <TaskInput onAddTask={addTask} />

        <div className="flex flex-col lg:flex-row gap-6">
          <TaskColumn
            title="To do"
            icon="🎯"
            tasks={todoTasks}
            onDeleteTask={deleteTask}
          />
          <TaskColumn
            title="Doing"
            icon="⚡"
            tasks={doingTasks}
            onDeleteTask={deleteTask}
          />
          <TaskColumn
            title="Done"
            icon="✅"
            tasks={doneTasks}
            onDeleteTask={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
