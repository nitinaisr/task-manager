'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function checkLoginStatus() {

     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [router,setRouter] =useState(useRouter());
          // eslint-disable-next-line react-hooks/rules-of-hooks
     const [user,setUser] = useState<any>('');

 

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const lastLoginTime = localStorage.getItem('lastLoginTime');
        const currentTime = new Date().getTime();
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds
      
        if (lastLoginTime && currentTime - Number.parseInt(lastLoginTime) < oneDayInMilliseconds) {
          setUser(localStorage.getItem('recentUsername'));
        } else {

          setUser('');
        }
    },[]);

}