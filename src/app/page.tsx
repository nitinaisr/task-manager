'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { checkLoginStatus } from "./utils";

type Props = {}

const Home = (props: Props) => {
  
  const [user, setUser] = useState<any>(checkLoginStatus());

  const [router, setRouter] = useState(useRouter());

  useEffect(() => {

    if(user){
      router.push('/main');
    }else{
      router.push('/login');
    }

  });
  return (
    <div>Home</div>
  )
}

export default Home