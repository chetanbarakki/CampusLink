import { AppWindowIcon, CalendarFold, CodeIcon, UsersRound } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { clubs } from "./../../test.js"

const ClubsPage = () => {
  return (
    <div className="flex w-full items-center flex-col">
      <Tabs defaultValue="myClubs" className="w-full p-2">
        <TabsList className="pr-3 pl-3 gap-3 w-full ">
          <TabsTrigger value="myClubs" className="bg-slate-100">My clubs</TabsTrigger>
          <TabsTrigger value="discoverClubs" className="bg-slate-100">Discover clubs</TabsTrigger>
        </TabsList>
        <TabsContent value="myClubs">
          {
            clubs.map((el,idx) => {
              if(el.position !== undefined){
                return (
                  <Card key= {idx} className="border-0 mb-3 bg-slate-50 shadow-2xl">
                    <div className="flex">
                      <div className="w-1/4 flex flex-col items-center justify-center">
                        <div className="font-extrabold">{el.name}</div>
                        <div className="text-blue-700 font-medium">
                          {el.position}
                        </div>
                      </div>
                      <div className="w-1/4 flex items-center justify-center">
                        <img src={`${el.img}`} alt="Image" className="p-2 w-24 h-24 rounded-full"/>
                      </div>
                      <div className="w-1/4 flex items-center justify-center">
                        <CardContent className="flex flex-col">
                          <div className="flex gap-3">
                            {<UsersRound className="text-blue-600"/>}{`${el.people}`} members
                          </div>
                          <div className="flex gap-3">
                            {<CalendarFold className="text-blue-600"/>}{`${el.events}`} events
                          </div>
                        </CardContent>
                      </div>  
                      <div className="w-1/4 flex flex-col items-center justify-center gap-2">
                        {<Button className="w-1/2 rounded-xl hover:bg-amber-400 bg-amber-300" >View events</Button>}
                        {<Button className="w-1/2 rounded-xl text-white bg-red-500 hover:bg-red-600">Exit club</Button>}
                      </div>
                    </div>
                  </Card>
                )
              }
            })
          }
        </TabsContent>
        <TabsContent value="discoverClubs">
          {
            clubs.map((el,idx) => {
              if(el.position === undefined){
                return (
                  <Card key= {idx} className="border-0 mb-3 bg-slate-50 shadow-2xl">
                    <div className="flex">
                      <div className="w-1/4 flex flex-col items-center justify-center">
                        <div className="font-extrabold">{el.name}</div>
                        <div className="text-blue-700 font-medium">
                          Non member
                        </div>
                      </div>
                      <div className="w-1/4 flex items-center justify-center">
                        <img src={`${el.img}`} alt="Image" className="p-2 w-24 h-24 rounded-full"/>
                      </div>
                      <div className="w-1/4 flex items-center justify-center">
                        <CardContent className="flex flex-col">
                          <div className="flex gap-3">
                            {<UsersRound className="text-blue-600"/>}{`${el.people}`} members
                          </div>
                          <div className="flex gap-3">
                            {<CalendarFold className="text-blue-600"/>}{`${el.events}`} events
                          </div>
                        </CardContent>
                      </div>  
                      <div className="w-1/4 flex flex-col items-center justify-center gap-2">
                        {<Button className="w-1/2 rounded-xl hover:bg-amber-400 bg-amber-300" >View events</Button>}
                        {<Button className="w-1/2 rounded-xl text-white bg-green-600 hover:bg-green-700">Apply now</Button>}
                      </div>
                    </div>
                  </Card>
                )
              }
            })
          }
        </TabsContent>
      </Tabs>
    </div>
  )
}
export default ClubsPage;