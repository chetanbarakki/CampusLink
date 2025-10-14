import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {apiClient} from "@/lib/apiClient";
import { SIGNIN_ROUTE } from "@/lib/constants";
const SignIn = ({setUserInfo}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const validateLogin = () => {
    if(email === "" || password === ""){
      return false;
    }
    return true;
  }
  const handleLogin = async () => {
    if(!validateLogin()) return;
    const response = await apiClient.post(SIGNIN_ROUTE,{email,password},{withCredentials:true});
    if(response.status === 200){
      setUserInfo(response.data.data);
      console.log(response.data);
      
      navigate("/");
    }
  }
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
                <Label>Email</Label>
                <Input placeholder="Enter your email:" onChange={(e) => setEmail(e.target.value)} value={email}></Input>
                <Label>Password</Label>
                <Input placeholder="Enter your password:" onChange={(e) => setPassword(e.target.value)} value={password}></Input>
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
            <Button className="flex flex-col mt-3 w-full bg-green-500 w-full " onClick={handleLogin}>Sign in</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
