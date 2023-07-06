'use client';

export function checkLoginStatus() {

    // eslint-disable-next-line react-hooks/rules-of-hooks

    if (typeof window !== 'undefined') {

        const lastLoginTime = localStorage.getItem('lastLoginTime');
        const currentTime = new Date().getTime();
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds
        let isExpired = true;
      
        if (lastLoginTime && currentTime - Number.parseInt(lastLoginTime) < oneDayInMilliseconds) {
          isExpired = false;
        }

        return isExpired;

      }
}