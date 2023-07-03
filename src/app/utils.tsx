'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function checkLoginStatus() {

     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [router,setRouter] =useState(useRouter());


    //  const lastLoginTime = localStorage.getItem('lastLoginTime');
    //  const currentTime = new Date().getTime();
    //  const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds
   
    //  if (lastLoginTime && currentTime - Number.parseInt(lastLoginTime) < oneDayInMilliseconds) {
    //    router.push('/main');
    //  } else {
   
    //    console.debug('else');
    // //    // User needs to perform a fresh login, update the last login time and perform necessary actions
    // //    localStorage.setItem('lastLoginTime', currentTime.toString());
    //    router.replace('/login');
    //  }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    // setRouter(useRouter());
 

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const lastLoginTime = localStorage.getItem('lastLoginTime');
        const currentTime = new Date().getTime();
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds
      
        if (lastLoginTime && currentTime - Number.parseInt(lastLoginTime) < oneDayInMilliseconds) {
          router.push('/main');
        } else {
      
          console.debug('else');
       //    // User needs to perform a fresh login, update the last login time and perform necessary actions
       //    localStorage.setItem('lastLoginTime', currentTime.toString());
       setTimeout(() => {
        router.replace('/login');
       }, 5000);
        //   router.replace('/login');
        }
    },[]);

}