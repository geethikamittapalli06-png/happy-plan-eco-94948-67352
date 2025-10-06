import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Circle, Clock, Plus, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const initialTasks = [
  { id: 1, title: "Book Caterer", status: "completed", assignee: "You", dueDate: "2025-11-15" },
  { id: 2, title: "Confirm Decorator", status: "pending", assignee: "You", dueDate: "2025-11-20" },
  { id: 3, title: "Finalize Photographer", status: "in-progress", assignee: "Partner", dueDate: "2025-11-25" },
  { id: 4, title: "Send Invitations", status: "pending", assignee: "You", dueDate: "2025-12-01" },
  { id: 5, title: "Book Transportation", status: "in-progress", assignee: "You", dueDate: "2025-11-28" },
];

const initialGuests = [
  { id: 1, name: "Rahul Sharma", location: "Delhi", rsvp: "yes", email: "rahul@example.com" },
  { id: 2, name: "Priya Singh", location: "Jaipur", rsvp: "no", email: "priya@example.com" },
  { id: 3, name: "Ankit Mehra", location: "Mumbai", rsvp: "yes", email: "ankit@example.com" },
  { id: 4, name: "Sneha Patel", location: "Bangalore", rsvp: "pending", email: "sneha@example.com" },
  { id: 5, name: "Vikram Kumar", location: "Chennai", rsvp: "yes", email: "vikram@example.com" },
];

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [guests, setGuests] = useState(initialGuests);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: tasks.length + 1,
        title: newTask,
        status: "pending",
        assignee: "You",
        dueDate: new Date().toISOString().split("T")[0]
      }]);
      setNewTask("");
      toast.success("Task added successfully!");
    }
  };

  const handleToggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, status: task.status === "completed" ? "pending" : "completed" }
        : task
    ));
  };

  const getStatusIcon = (status: string) => {
    if (status === "completed") return <CheckCircle2 className="h-5 w-5 text-secondary" />;
    if (status === "in-progress") return <Clock className="h-5 w-5 text-accent" />;
    return <Circle className="h-5 w-5 text-muted-foreground" />;
  };

  const getStatusBadge = (status: string) => {
    if (status === "completed") return <Badge className="bg-secondary">Completed</Badge>;
    if (status === "in-progress") return <Badge className="bg-accent">In Progress</Badge>;
    return <Badge variant="outline">Pending</Badge>;
  };

  const getRSVPBadge = (rsvp: string) => {
    if (rsvp === "yes") return <Badge className="bg-secondary">Confirmed</Badge>;
    if (rsvp === "no") return <Badge variant="destructive">Declined</Badge>;
    return <Badge variant="outline">Pending</Badge>;
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Tasks & <span className="text-primary">Guest List</span>
          </h1>
          <p className="text-muted-foreground">
            Manage your event tasks and track guest responses
          </p>
        </div>

        <Tabs defaultValue="tasks" className="space-y-6">
          <TabsList>
            <TabsTrigger value="tasks">To-Do List</TabsTrigger>
            <TabsTrigger value="guests">Guest List</TabsTrigger>
          </TabsList>

          <TabsContent value="tasks" className="space-y-6">
            <Card className="p-6">
              <div className="flex gap-2 mb-6">
                <Input
                  placeholder="Add a new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
                />
                <Button onClick={handleAddTask}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Task
                </Button>
              </div>

              <div className="space-y-3">
                {tasks.map((task) => (
                  <Card key={task.id} className="p-4 hover:shadow-md transition-smooth">
                    <div className="flex items-center gap-4">
                      <button onClick={() => handleToggleTask(task.id)}>
                        {getStatusIcon(task.status)}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className={`font-semibold ${task.status === "completed" ? "line-through text-muted-foreground" : ""}`}>
                            {task.title}
                          </h3>
                          {getStatusBadge(task.status)}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>Assigned to: {task.assignee}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="guests" className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <h2 className="text-xl font-semibold">Total Guests: {guests.length}</h2>
                </div>
                <Button onClick={() => toast.success("Guest list feature coming soon!")}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Guest List
                </Button>
              </div>

              <div className="space-y-3">
                {guests.map((guest) => (
                  <Card key={guest.id} className="p-4 hover:shadow-md transition-smooth">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold mb-1">{guest.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{guest.location}</span>
                          <span>•</span>
                          <span>{guest.email}</span>
                        </div>
                      </div>
                      {getRSVPBadge(guest.rsvp)}
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
