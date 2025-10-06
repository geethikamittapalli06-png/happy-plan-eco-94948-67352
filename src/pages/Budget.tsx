import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Legend, 
  Tooltip 
} from "recharts";
import { DollarSign, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { AddExpenseDialog } from "@/components/AddExpenseDialog";

const budgetData = [
  { name: "Venue", value: 80000, color: "hsl(345, 75%, 55%)" },
  { name: "Catering", value: 60000, color: "hsl(40, 85%, 60%)" },
  { name: "Decoration", value: 40000, color: "hsl(145, 35%, 55%)" },
  { name: "Photography", value: 30000, color: "hsl(260, 60%, 60%)" },
  { name: "Entertainment", value: 20000, color: "hsl(200, 70%, 55%)" },
];

const expenses = [
  { category: "Venue", budgeted: 80000, spent: 80000, status: "paid" },
  { category: "Catering", budgeted: 60000, spent: 45000, status: "partial" },
  { category: "Decoration", budgeted: 40000, spent: 40000, status: "paid" },
  { category: "Photography", budgeted: 30000, spent: 0, status: "pending" },
  { category: "Entertainment", budgeted: 20000, spent: 10000, status: "partial" },
];

export default function Budget() {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const totalBudget = 250000;
  const totalSpent = budgetData.reduce((sum, item) => sum + item.value, 0);
  const remaining = totalBudget - totalSpent;
  const percentageUsed = (totalSpent / totalBudget) * 100;

  return (
    <div className="min-h-screen gradient-subtle">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Budget <span className="text-primary">Tracker</span>
          </h1>
          <p className="text-muted-foreground">
            Manage your event expenses and stay on track
          </p>
        </div>

        {/* Budget Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Total Budget</div>
                <div className="text-2xl font-bold">₹{(totalBudget / 1000).toFixed(0)}K</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Total Spent</div>
                <div className="text-2xl font-bold">₹{(totalSpent / 1000).toFixed(0)}K</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full gradient-eco flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-secondary-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Remaining</div>
                <div className="text-2xl font-bold">₹{(remaining / 1000).toFixed(0)}K</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Progress Bar */}
        <Card className="p-6 mb-8">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Overall Budget Usage</h3>
              <span className="text-sm font-medium">{percentageUsed.toFixed(1)}%</span>
            </div>
            <Progress value={percentageUsed} className="h-3" />
          </div>
          {percentageUsed > 90 && (
            <div className="flex items-center gap-2 text-sm text-destructive">
              <AlertCircle className="h-4 w-4" />
              <span>You're approaching your budget limit</span>
            </div>
          )}
        </Card>

        {/* Charts and Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Budget Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Expense Details */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-6">Expense Breakdown</h3>
            <div className="space-y-4">
              {expenses.map((expense) => {
                const percentage = (expense.spent / expense.budgeted) * 100;
                return (
                  <div key={expense.category} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{expense.category}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          ₹{expense.spent.toLocaleString()} / ₹{expense.budgeted.toLocaleString()}
                        </span>
                        {expense.status === "paid" && (
                          <CheckCircle2 className="h-4 w-4 text-secondary" />
                        )}
                        {expense.status === "pending" && (
                          <AlertCircle className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                    <Progress value={percentage} className="h-2" />
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <Button variant="default" size="lg" onClick={() => setShowAddExpense(true)}>
            Add New Expense
          </Button>
        </div>
      </main>

      <AddExpenseDialog open={showAddExpense} onOpenChange={setShowAddExpense} />
    </div>
  );
}
