"use client";
import React, {useState, useEffect } from "react";
import TaskList from "./components/task-list";
import { checkLoginStatus } from "../utils";
import { useRouter } from 'next/navigation';

type Props = {};

const main = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isExpired, setIsExpired] = useState<any>(checkLoginStatus());

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [router, setRouter] = useState(useRouter());

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {


    if(isExpired){
        router.replace('/login');

    }else{
      return;
    }

  });

  return (
    <div className="sm:m-10 sm:mt-0 md:m-20 md:mt-0 xl:m-30 xl:mt-0  m-5 mt-0">
      <TaskList />
    </div>
  );
};

export default main;