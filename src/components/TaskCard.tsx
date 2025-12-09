import { Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  title: string;
  tags: string[];
  onDelete?: () => void;
}

const tagVariantMap: Record<string, "html" | "css" | "javascript" | "react"> = {
  HTML: "html",
  CSS: "css",
  JavaScript: "javascript",
  React: "react",
};

const TaskCard = ({ title, tags, onDelete }: TaskCardProps) => {
  return (
    <div className="card-glass rounded-xl p-4 group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(145_70%_45%/0.2)]">
      <div className="flex justify-between items-start gap-3">
        <h3 className="text-foreground font-medium text-sm flex-1">{title}</h3>
        <button
          onClick={onDelete}
          className="text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
        >
          <Trash2 size={16} />
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag) => (
          <Badge 
            key={tag} 
            variant={tagVariantMap[tag] || "default"}
            className="text-xs"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
