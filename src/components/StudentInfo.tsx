
import { Button } from "./ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="secondary">pannawat wongkeawjan</Button>} />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>student information</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 p-4">
  <img 
    className="rounded-2xl bg-muted group-data-[swipe-axis=x]/drawer-popup:size-full group-data-[swipe-axis=y]/drawer-popup:h-80 group-data-[swipe-axis=y]/drawer-popup:w-full object-cover" 
    src="/image/i2.jpg" 
    alt="Student" 
  />
</div>
   < div className="p-4">
  <p className="text-sm text-muted-foreground">ชื่อ: pannawat wongkeawjan</p>
  <p className="text-sm text-muted-foreground">รหัสนักศึกษา: 650610694</p>
  <p className="text-sm text-muted-foreground">Email: mingsa405@gmail.com</p>
  <p className="text-sm text-muted-foreground">งานอดเรกเล่นบาสเกตบอล</p>
</div>
        <DrawerFooter>

          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
