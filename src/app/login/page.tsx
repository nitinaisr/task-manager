"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { users } from "@/app/login/user";

const Login = () => {
  const user: any = users;
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const recentUsername = localStorage.getItem("recentUsername");
    if (recentUsername) {
      setUsername(recentUsername);
    }
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const currentTime = new Date().getTime().toString();

    let foundUser = user.filter(
      (user: any) => user.username === username && user.password === password
    );
    if (foundUser != null && foundUser.length > 0) {
      localStorage.setItem("recentUsername", username);
      localStorage.setItem("lastLoginTime", currentTime);

      router.push("/main");
    } else {
      setPassword("");
      alert("Invalid username or password");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="bg-white px-8 pt-6 pb-8 mb-4 w-10/12 ">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="password"
              type="password"
              placeholder="******************"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <input
              type="submit"
              className="bg-lavender border cursor-pointer hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
