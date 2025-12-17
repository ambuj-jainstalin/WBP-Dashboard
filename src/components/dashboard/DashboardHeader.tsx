
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Download, RefreshCw } from "lucide-react";
import { useState } from "react";

export const DashboardHeader = () => {
  const [dateRange, setDateRange] = useState("this-month");
  const [branch, setBranch] = useState("all");

  const currentTime = new Date().toLocaleString("en-GB", {
    timeZone: "Africa/Harare",
    dateStyle: "full",
    timeStyle: "short"
  });

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SME Onboarding Dashboard</h1>
        <p className="text-gray-600">
          {currentTime} (Africa/Harare)
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[150px]">
            <Calendar className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="last-month">Last Month</SelectItem>
            <SelectItem value="this-quarter">This Quarter</SelectItem>
          </SelectContent>
        </Select>
        <Select value={branch} onValueChange={setBranch}>
          <SelectTrigger className="w-[150px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Branches</SelectItem>
            <SelectItem value="harare">Harare</SelectItem>
            <SelectItem value="bulawayo">Bulawayo</SelectItem>
            <SelectItem value="mutare">Mutare</SelectItem>
            <SelectItem value="gweru">Gweru</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>
    </div>
  );
};
