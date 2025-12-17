
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, CheckCircle, XCircle, FileText } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon: React.ReactNode;
}

const MetricCard = ({ title, value, change, trend, icon }: MetricCardProps) => (
  <Card className="hover:shadow-lg transition-shadow duration-200">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      {change && (
        <div className="flex items-center mt-2">
          <Badge 
            variant={trend === "up" ? "default" : trend === "down" ? "destructive" : "secondary"}
            className="text-xs"
          >
            {change}
          </Badge>
        </div>
      )}
    </CardContent>
  </Card>
);

export const MetricsCards = () => {
  const metrics = [
    {
      title: "Total Applications",
      value: "1,247",
      change: "+12%",
      trend: "up" as const,
      icon: <FileText className="h-4 w-4 text-blue-600" />
    },
    {
      title: "In Progress",
      value: "342",
      change: "+8%",
      trend: "up" as const,
      icon: <Clock className="h-4 w-4 text-amber-600" />
    },
    {
      title: "Completed",
      value: "798",
      change: "+15%",
      trend: "up" as const,
      icon: <CheckCircle className="h-4 w-4 text-green-600" />
    },
    {
      title: "Rejected",
      value: "107",
      change: "-3%",
      trend: "down" as const,
      icon: <XCircle className="h-4 w-4 text-red-600" />
    },
    {
      title: "Avg. Completion Time",
      value: "5.2 days",
      change: "-0.8 days",
      trend: "up" as const,
      icon: <TrendingUp className="h-4 w-4 text-purple-600" />
    },
    {
      title: "Active Agents",
      value: "23",
      change: "+2",
      trend: "up" as const,
      icon: <Users className="h-4 w-4 text-indigo-600" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
};
