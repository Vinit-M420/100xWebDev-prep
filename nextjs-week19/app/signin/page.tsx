"use client";
import axios from "axios";
// import Link from "next/link";
import { useState } from "react";

export default function Signin() {
    const [username, setUsername] = useState<string>("");
        const [password, setPassword] = useState("");

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-5 text-lg">
      <h1 className="text-4xl">Signin Page</h1>
    
    <label>username</label>
    <input type="text" placeholder="John" 
        onChange={(e) => {setUsername(e.target.value);}}
        className="bg-white placeholder:text-gray-500 text-black p-2" />
    <label>Password</label>
    <input type="password" placeholder="******" 
        onChange={(e) => {setPassword(e.target.value);}}
        className="bg-white placeholder:text-gray-500 text-black p-2"></input>
    <button className="bg-white rounded-xl text-black py-2 px-4" 
        onClick={() => {
            // console.log(username);
            axios.post("http://localhost:3000/api/v1/signin", {
                username, 
                password
            })
        }} >
        Submit</button>

    {/* <Link href="/" className="bg-white rounded-xl text-black py-2 px-4">Go Back</Link> */}
    {/* <Link href="/signup" className="bg-white rounded-xl text-black py-2 px-4">Signup</Link> */}

    </div>
  );
}
