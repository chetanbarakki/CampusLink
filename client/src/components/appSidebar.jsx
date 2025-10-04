import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { CircleUserRound, User } from "lucide-react"
import { Link } from "react-router-dom"
 
export function AppSidebar() {
  return (
    <Sidebar className="bg-slate-300">
      <SidebarHeader className="flex items-center font-extrabold justify-center">
        Campus Link
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
          <Link className="flex justify-center p-2 font-medium hover:underline" to={'/'}>
            Home
          </Link>
          <Link className="flex justify-center p-2 font-medium hover:underline" to={'/clubs'}>
            Clubs
          </Link>
          <Link className="flex justify-center p-2 font-medium hover:underline" to={'/events'}>
            Events
          </Link> 
          <Button variant="link" className="m-3 bg-slate-400">
            Profile
          </Button> 
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter >
        <div className="w-full p-3 rounded-full bg-white">
        <Popover>
          <PopoverTrigger className="w-full flex justify-between">
            <CircleUserRound className="rounded-full flex items-center justify-center bg-white"/>
            <p className="flex-1 items-center justify-center">
            Profile
            </p>
          </PopoverTrigger>
          <PopoverContent>

          </PopoverContent>
        </Popover>
        </div>
        <Button className="bg-red-500">
          Log out
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}