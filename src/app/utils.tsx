"use client";

export function checkLoginStatus() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  if (typeof window !== "undefined") {
    const lastLoginTime = localStorage.getItem("lastLoginTime");
    const currentTime = new Date().getTime();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 1 day in milliseconds
    let isExpired = true;

    if (
      lastLoginTime &&
      currentTime - Number.parseInt(lastLoginTime) < oneDayInMilliseconds
    ) {
      isExpired = false;
    }

    return isExpired;
  }
}

export  function  getUserName():string {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  if (typeof window !== "undefined") {
    const userName =localStorage.getItem("recentUsername");
    return userName ? userName:'';
  }
  return "";
}

export  function  logOut() {
  if (typeof window !== "undefined") {
    localStorage.setItem('lastLoginTime', '');
  }
}

export function formatDate(date: string | number | Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = new Date(date).toLocaleDateString("en-UK", options);

  const [day, month, year] = formattedDate.split(" ");

  const capitalizedMonth = month.toUpperCase();

  return `${day} ${capitalizedMonth} ${year}`;
}
