
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { EntityTypeBreakdown } from "@/components/dashboard/EntityTypeBreakdown";
import { ConversionFunnel } from "@/components/dashboard/ConversionFunnel";
import { ApplicationsTable } from "@/components/dashboard/ApplicationsTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />
        <MetricsCards />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <EntityTypeBreakdown />
          <ConversionFunnel />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <ApplicationsTable />
        </div>
      </div>
    </div>
  );
};

export default Index;
