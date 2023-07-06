'use client'
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { checkLoginStatus } from "./utils";

type Props = {}

const Home = (props: Props) => {
  
  const [isExpired, setIsExpired] = useState<any>(checkLoginStatus());

  const [router, setRouter] = useState(useRouter());

  useEffect(() => {

  console.log('isExpired',isExpired);

    if(isExpired){
      router.push('/login');

    }else{
      router.push('/main');
    }

  });
}

export default Home