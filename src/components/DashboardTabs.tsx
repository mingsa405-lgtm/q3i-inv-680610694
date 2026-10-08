import { OverviewCards } from "./OverviewCards";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function DashboardTabs() {
  return (
    <div className="w-full">
      <h1>This is the Dashboard Tabs Component</h1>
      <OverviewCards />
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Electronics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-500 font-bold">10</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Stationery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-500 font-bold">15</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Grocery</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl text-blue-500 font-bold">20</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
