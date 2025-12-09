import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const categories = ["HTML", "CSS", "JavaScript", "React"] as const;
type Category = typeof categories[number];

interface TaskInputProps {
  onAddTask: (title: string, tags: string[], status: string) => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [title, setTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState<Category[]>([]);
  const [status, setStatus] = useState("todo");

  const toggleTag = (tag: Category) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = () => {
    if (title.trim() && selectedTags.length > 0) {
      onAddTask(title, selectedTags, status);
      setTitle("");
      setSelectedTags([]);
    }
  };

  const tagVariantMap: Record<Category, "html" | "css" | "javascript" | "react"> = {
    HTML: "html",
    CSS: "css",
    JavaScript: "javascript",
    React: "react",
  };

  return (
    <div className="card-glass rounded-2xl p-6 mb-8 animate-[float_4s_ease-in-out_infinite]">
      <input
        type="text"
        placeholder="Enter your task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 mb-4"
      />
      
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleTag(cat)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border",
                selectedTags.includes(cat)
                  ? "border-primary bg-primary/20 text-primary"
                  : "border-border bg-muted/50 text-muted-foreground hover:border-primary/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-input border border-border rounded-lg px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
        >
          <option value="todo">To do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>

        <Button 
          variant="glow" 
          size="default" 
          onClick={handleSubmit}
          className="ml-auto"
        >
          <Plus size={18} />
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default TaskInput;
