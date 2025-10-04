import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const SignIn = () => {
  return (
    <div className="flex w-full h-[100dvh] bg-blue-300 justify-center items-center">
      <div className="w-3/4 h-3/4 flex">
        <div className="w-1/2">
          <img
            src="CampusLife.png"
            alt="Picture"
            className="h-full rounded-2xl w-full object-fill"
          />
        </div>
        <Card className="bg-slate-100 w-1/2">
          <CardHeader>
            <CardTitle className="p-3">Sign in</CardTitle>
            <CardDescription>
              <div className="flex flex-col p-2 gap-2 justify-around">
                <Label>UserName</Label>
                <Input placeholder="Enter your name:"></Input>
                <Label>Password</Label>
                <Input placeholder="Enter your password:"></Input>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              Or sign-up with
            </div>
            <div className="flex justify-center items-center pt-4 pb-2 gap-4">
              <button className="rounded-full hover:border-2">
                <FaGoogle className="w-8 h-8 p-2" />
              </button>
              <button className="rounded-full hover:border-2">
                <FaFacebook className="w-8 h-8 p-2" />
              </button>
              <button className="rounded-full hover:border-2">
                <FaInstagram className="w-8 h-8 p-2" />
              </button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button>
              New to Campus Link |{" "}
              <Link to={"/sign-up"} className="text-blue-700 underline">
                <b>Join Now</b>{" "}
              </Link>{" "}
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
