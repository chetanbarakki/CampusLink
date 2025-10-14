import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {apiClient} from "@/lib/apiClient";
import { SIGNUP_ROUTE } from "@/lib/constants";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const navigate = useNavigate();
  const validateSignUp = () => {
      if(email == "" || password == "" || password != confirmedPassword){
        return false;
      }
      return true;
    }
    const handleSignUp = async() => {
      if(!validateSignUp()) return false;
      const response = await apiClient.post(SIGNUP_ROUTE,{email,password},{withCredentials:true});
      navigate("/sign-in");
      console.log(response);
    }
  return (
    <div className="flex w-full h-[100dvh] bg-blue-300 justify-center items-center">
      <div className="w-3/4 h-3/4 flex">
        <div className="w-1/2">
          <img src="CampusLife.png" alt="Picture" className="h-full rounded-2xl w-full object-fill" />
        </div>
        <Card className="bg-slate-100 w-1/2">
          <CardHeader>
            <CardTitle className="p-2">Sign up</CardTitle>
            <CardDescription>
            <div className="flex flex-col p-2 gap-2 justify-around">
              <Label>UserEmail</Label>
              <Input placeholder="Enter your email:" onChange={(e) => setEmail(e.target.value)} value={email}></Input>
              <Label>Password</Label>
              <Input placeholder="Enter your password:" onChange={(e) => setPassword(e.target.value)} value={password}></Input>
              <Label>Confirm Password</Label>
              <Input placeholder="Enter your password again:" onChange={(e) => setConfirmedPassword(e.target.value)} value={confirmedPassword}></Input>
            </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              Or sign-up with
            </div>
            <div className="flex justify-center items-center pt-1 pb-1 gap-1">
              <button className="rounded-full hover:border-2">
                <FaGoogle className="w-8 h-8 p-2"/>
              </button>
                <button className="rounded-full hover:border-2">
                <FaFacebook className="w-8 h-8 p-2"/>
              </button>
            <button className="rounded-full hover:border-2">
                <FaInstagram className="w-8 h-8 p-2"/>
              </button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button>
              Already have an account? |{" "}
              <Link to={"/sign-in"} className="text-blue-700 underline">
                <b>Login now</b>{" "}
              </Link>{" "}
            </button>
            <Button className="flex flex-col mt-3 w-full pb-2 bg-green-500" onClick={handleSignUp}>Sign up</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default SignUp;