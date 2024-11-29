"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleUserRound, LockKeyhole, User } from "lucide-react";
import Link from "next/link";

interface LoginFormInputs {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();

  // Submit handler for the form
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);

    try {
      console.log("Logging in with:", data);
      // Replace this with your API call for login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Handle successful login (e.g., redirect)
      console.log("Login successful!");
    } catch (error) {
      console.error(error);
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[url('../assets/loginBG.jpg')] bg-cover bg-center">
      <div className="bg-zinc-950 bg-opacity-60 w-full h-full flex flex-col min-h-screen items-center justify-between  ">
        <div className="py-10 flex justify-between w-4/5 text-white text-lg">
          <h1 className="w-fit">Zmail</h1>
          <ul className="flex w-fit gap-5">
            <li>Register</li>
            <li>About Us</li>
            <li>Login</li>
          </ul>
        </div>
        <Card className="w-full max-w-sm bg-transparent border-none">
          <CardHeader>
            <CardTitle className="w-fit mx-auto">
              <CircleUserRound size={100} color="gray"/>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="relative">
                <Input
                  id="username"
                  type="text"
                  className="border-none bg-white bg-opacity-10 py-6 rounded-3xl px-5 text-gray-300"
                  placeholder="Username"
                  {...register("username", { required: "Username is required" })}
                />
                {/* <User className="absolute left-4 text-gray-400 top-3"/> */}
                {errors.username && (
                  <p className="mt-1 text-sm text-red-500">{errors.username.message}</p>
                )}
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  className="border-none bg-white bg-opacity-10 py-6 rounded-3xl px-5 text-gray-300"
                  placeholder="Password"
                  {...register("password", { required: "Password is required" })}
                />
                <Link href='' className="self-end text-sm underline !mt-4 text-right text-slate-400">Forget Password</Link>
                {/* <LockKeyhole className="absolute left-4 text-gray-400 top-3"/> */}
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>
              <Button type="submit" disabled={loading} className="w-full !py-6 !px-5 rounded-3xl bg-slate-800">
                {loading ? "Loading..." : "Login"}
              </Button>
            </form>
            <ul className="flex w-full justify-between py-4 px-2 text-zinc-400">
              <li>Create Account</li>
              <li>Need Help?</li>
            </ul>
          </CardContent>
        </Card>
        <footer className="flex w-4/5 justify-between py-10 text-slate-400">
          <ul className="flex gap-3">
            <li>Privacy and Policy</li>
            <li>Terms Of Use</li>
          </ul>
          <p className="">2024, All Rights Reserved | Developed by Naveen Chinnadurai</p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
