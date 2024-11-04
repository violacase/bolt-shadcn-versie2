import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, Trash2 } from "lucide-react";
import type { RootState } from "@/store/store";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  setFilter,
  updateTodoPriority,
} from "@/store/todoSlice";

export function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.items);
  const filter = useSelector((state: RootState) => state.todos.filter);
  const [newTodoText, setNewTodoText] = useState("");
  const [selectedPriority, setSelectedPriority] = useState<"low" | "medium" | "high">("medium");

  // First filter, then sort by date (newest first)
  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    })
    .sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim()) {
      dispatch(
        addTodo({
          text: newTodoText,
          completed: false,
          priority: selectedPriority,
          dueDate: new Date().toISOString().split("T")[0],
        })
      );
      setNewTodoText("");
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500 dark:text-red-400";
      case "medium":
        return "text-yellow-500 dark:text-yellow-400";
      case "low":
        return "text-green-500 dark:text-green-400";
      default:
        return "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge className="mb-4" variant="secondary">
          Redux Demo
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Todo Manager</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A feature-rich todo application demonstrating Redux state management
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Add New Todo</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddTodo} className="flex gap-4">
              <Input
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="What needs to be done?"
                className="flex-1"
              />
              <Select
                value={selectedPriority}
                onValueChange={(value: "low" | "medium" | "high") =>
                  setSelectedPriority(value)
                }
              >
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
              <Button type="submit">Add Todo</Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex gap-2 mb-4">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => dispatch(setFilter("all"))}
          >
            All
          </Button>
          <Button
            variant={filter === "active" ? "default" : "outline"}
            onClick={() => dispatch(setFilter("active"))}
          >
            Active
          </Button>
          <Button
            variant={filter === "completed" ? "default" : "outline"}
            onClick={() => dispatch(setFilter("completed"))}
          >
            Completed
          </Button>
        </div>

        <div className="space-y-4">
          {filteredTodos.map((todo) => (
            <Card key={todo.id}>
              <CardContent className="flex items-center gap-4 p-4">
                <Checkbox
                  checked={todo.completed}
                  onCheckedChange={() => dispatch(toggleTodo(todo.id))}
                />
                <div className="flex-1">
                  <p
                    className={`${
                      todo.completed ? "line-through text-muted-foreground" : ""
                    }`}
                  >
                    {todo.text}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(todo.dueDate), "MMM d, yyyy")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <Select
                        value={todo.priority}
                        onValueChange={(value: "low" | "medium" | "high") =>
                          dispatch(
                            updateTodoPriority({ id: todo.id, priority: value })
                          )
                        }
                      >
                        <SelectTrigger
                          className={`h-6 w-[100px] ${getPriorityColor(
                            todo.priority
                          )}`}
                        >
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}