'use client';
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import {users} from '@/app/login/user';

const Login = () => {

const user:any = users;
    const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Retrieve the recent username from localStorage
    const recentUsername = localStorage.getItem("recentUsername");
    if (recentUsername) {
      setUsername(recentUsername);
    }
  }, []);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();


    const currentTime = new Date().getTime().toString();
    // Save the entered username to localStorage


   let foundUser = user.filter((user:any)=>user.username === username && user.password === password);
    if(foundUser !=null && foundUser.length > 0){
        localStorage.setItem("recentUsername", username);
        localStorage.setItem('lastLoginTime', currentTime);
    
        router.push('/main');
    }else{

        setPassword('');
        alert('Invalid username or password');
    }


  };

  return (
    <div className="container justify-self-center">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
        style={{color:'black'}}
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
                style={{color:'black'}}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
