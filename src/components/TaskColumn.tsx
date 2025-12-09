import TaskCard from "./TaskCard";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  tags: string[];
}

interface TaskColumnProps {
  title: string;
  icon: string;
  tasks: Task[];
  onDeleteTask?: (id: string) => void;
  className?: string;
}

const TaskColumn = ({ title, icon, tasks, onDeleteTask, className }: TaskColumnProps) => {
  return (
    <div className={cn("flex-1 min-w-[280px]", className)}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-xl font-bold text-foreground text-glow">{title}</h2>
        <span className="ml-auto bg-muted text-muted-foreground text-xs font-semibold px-2 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            tags={task.tags}
            onDelete={() => onDeleteTask?.(task.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
