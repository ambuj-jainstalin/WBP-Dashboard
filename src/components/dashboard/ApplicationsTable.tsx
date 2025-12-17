
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Eye, Edit, FileText, Filter } from "lucide-react";
import { useState } from "react";

const applications = [
  {
    id: "APP-2024-001",
    businessName: "Harare Trading Co.",
    type: "Sole Proprietorship",
    status: "In Progress",
    agent: "Tendai Mukamuri",
    startDate: "15/01/2024",
    lastUpdated: "28/01/2024"
  },
  {
    id: "APP-2024-002",
    businessName: "Bulawayo Logistics Ltd",
    type: "Private Limited",
    status: "Submitted",
    agent: "Chipo Banda",
    startDate: "12/01/2024",
    lastUpdated: "27/01/2024"
  },
  {
    id: "APP-2024-003",
    businessName: "Mutare Farming Partnership",
    type: "Partnership",
    status: "KYC In Progress",
    agent: "James Moyo",
    startDate: "20/01/2024",
    lastUpdated: "28/01/2024"
  },
  {
    id: "APP-2024-004",
    businessName: "Gweru Tech Solutions",
    type: "Private Limited",
    status: "Awaiting Review",
    agent: "Sarah Ncube",
    startDate: "18/01/2024",
    lastUpdated: "26/01/2024"
  },
  {
    id: "APP-2024-005",
    businessName: "Chitungwiza Retail",
    type: "Sole Proprietorship",
    status: "Rejected",
    agent: "Farai Chirwa",
    startDate: "10/01/2024",
    lastUpdated: "25/01/2024"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Initiated": return "bg-blue-100 text-blue-800";
    case "KYC In Progress": return "bg-yellow-100 text-yellow-800";
    case "In Progress": return "bg-orange-100 text-orange-800";
    case "Awaiting Review": return "bg-purple-100 text-purple-800";
    case "Submitted": return "bg-green-100 text-green-800";
    case "Rejected": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export const ApplicationsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  return (
    <Card className="col-span-1 lg:col-span-4">
      <CardHeader>
        <CardTitle>Applications Management</CardTitle>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search by business name or mobile number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="initiated">Initiated</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="submitted">Submitted</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Entity Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="sole">Sole Proprietorship</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="limited">Private Limited</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>App ID</TableHead>
                <TableHead>Business Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{app.id}</TableCell>
                  <TableCell>{app.businessName}</TableCell>
                  <TableCell>{app.type}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(app.status)}>
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{app.agent}</TableCell>
                  <TableCell>{app.startDate}</TableCell>
                  <TableCell>{app.lastUpdated}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="outline" size="sm">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        disabled={app.status === "Submitted" || app.status === "Rejected"}
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <FileText className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
