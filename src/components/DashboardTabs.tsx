

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards";
export function DashboardTabs() {
  return (
    <div className="w-full">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <OverviewCards />
        </TabsContent>
        <TabsContent value="categories">
          <CategoryCards />
        </TabsContent>
      </Tabs>

      
    </div>
  );
}
