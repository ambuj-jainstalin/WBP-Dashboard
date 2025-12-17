
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const funnelData = [
  { stage: "Initiated", count: 1247, percentage: 100, color: "bg-blue-500" },
  { stage: "KYC Done", count: 1089, percentage: 87, color: "bg-green-500" },
  { stage: "Reviewed", count: 956, percentage: 77, color: "bg-yellow-500" },
  { stage: "Completed", count: 798, percentage: 64, color: "bg-purple-500" }
];

export const ConversionFunnel = () => {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Application Conversion Funnel</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {funnelData.map((stage, index) => {
            const nextStage = funnelData[index + 1];
            const dropOffRate = nextStage 
              ? Math.round(((stage.count - nextStage.count) / stage.count) * 100)
              : 0;

            return (
              <div key={stage.stage} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-700">{stage.stage}</span>
                  <div className="text-right">
                    <span className="font-bold text-gray-900">{stage.count.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 ml-2">({stage.percentage}%)</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6 relative overflow-hidden">
                  <div 
                    className={`h-6 rounded-full ${stage.color} transition-all duration-500 ease-out`}
                    style={{ width: `${stage.percentage}%` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium">
                    {stage.count.toLocaleString()}
                  </div>
                </div>
                {nextStage && dropOffRate > 0 && (
                  <div className="text-right mt-1">
                    <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded">
                      -{dropOffRate}% drop-off
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
