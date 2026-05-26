import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem
} from "@/components/ui/sidebar"
 
export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="text-xl">
        Budget Sense
      </SidebarHeader>
      <SidebarGroup/>
        <SidebarGroupLabel />
        <SidebarContent>
            <SidebarMenuItem>
                Charts
                <SidebarMenuSub>
                    <SidebarMenuSubItem>Expenses</SidebarMenuSubItem>
                    <SidebarMenuSubItem>Income and Outgoing Funds</SidebarMenuSubItem>
                </SidebarMenuSub>
            </SidebarMenuItem>
        </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}