import { Command } from "@/components/ui/command";
import { CommandInput } from "cmdk";
import { ArrowRight, Calendar1, Coins, Filter, IndianRupee, MapPinIcon, UsersRound } from "lucide-react";
import React, { useState } from "react";
import { filters, events } from "../../test.js";
import { Button } from "@/components/ui/button.jsx";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";

const EventsPage = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const handleActiveFilter = (idx) => {
    setActiveIdx(idx);
  };
  return (
    <div className="w-full pl-10 pr-10 h-12">
      <div className="flex justify-between">
        <div className="text-3xl font-extrabold">Events</div>
        <Command className="h-12 shadow-md ml-10 mr-10 flex-1 p-3 justify-center bg-slate-300">
          <CommandInput
            placeholder="Search Events..."
            className="focus:outline-none "
          />
        </Command>
        <div className="flex items-center justify-center">
          <Filter />
        </div>
      </div>
      <div className="w-full flex items-center justify-center h-14">
        {filters.map((text, idx) => (
          <Button
            key={idx}
            className={`rounded-full p-3 mt-3 m-1 border-0 ${
              activeIdx == idx ? "bg-blue-500" : "bg-slate-300"
            } `}
            variant="outline"
            onClick={() => handleActiveFilter(idx)}
          >
            {text}
          </Button>
        ))}
      </div>
      <div className="w-full">
        {events.map((el, idx) => (
          <Card key={idx} className="border-0 mb-3 shadow-2xl">
            <CardHeader>
              <CardTitle>{el.name}</CardTitle>
              <CardDescription className="text-blue-500">{el.club}</CardDescription>
              <CardAction>
                <Button className=" rounded-xl border-0" variant={"outline"}>
                  {<ArrowRight/>}
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <div className="flex">
                <div className="flex flex-col w-1/2">
                  <div className="flex pb-2">
                    {<Calendar1 className="text-green-500" />}
                    {el.date} | {el.time}
                  </div>
                  <div className="flex pb-2">
                    {<MapPinIcon className="text-green-500" />}
                    {el.location}
                  </div>
                  <div className="flex pb-2">
                    {<UsersRound className="text-green-500" />}
                    {el.registeredUsers}/{el.totalUsers}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex pb-2">
                    {<Coins className="text-green-500 pr-2" />}
                    {el.activityPts} Activity Points
                  </div>
                  <div className="flex pb-2 pr-2">
                    {<IndianRupee className="text-green-500" />}
                    {el.fees === 0 ? <p className="text-green-500">FREE</p> : <p>{el.fees} /- </p>}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full justify-between">
                <div className="rounded-full bg-yellow-300 pl-1 pr-1 flex items-center">
                  {el.category}
                </div>
                <Button className="rounded-xl bg-green-500 p-2">
                  Register Now
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
