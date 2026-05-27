import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuAction,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarRail
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Link from "next/link"
 
export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="text-xl">
        Budget Bento
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel />
                <SidebarMenuItem className="text-sm">
                    Charts
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                            <Link href="/#expenses">Expenses</Link>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <Link href="/#incoming+outgoing+funds">Incoming and Outgoing Funds</Link>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                            <Link href="/#savings">Savings</Link>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </SidebarMenuItem>
            </SidebarGroup>
        </SidebarContent>
      <SidebarFooter>
        <div className="flex justify-end items-center">
            <a href="/" className="pr-4 text-sm flex justify-center">fishlover26</a>
            <Avatar>
                <AvatarImage
                src="icon.png"
                alt="fish avatar"
                className="grayscale"
            />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
      </SidebarFooter>
      <SidebarRail/>
    </Sidebar>
  )
}