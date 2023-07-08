'use client';
import React, { use, useEffect, useState } from "react";
import { getUserName, logOut } from "../utils";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userName,setUserName] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isActive, setIsActive] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setUserName(getUserName());
    },[userName]);

    const handleClick = (event: any) => {
        setIsActive(current => !current);
      };
  return (
    <div>


<div  className='absolute z-10 top-0 right-0 cursor-pointer bottom-0 m-5 w-14 h-14 text-white transition-colors duration-325 bg-whitesmoke rounded-full' >
             <Image
            src={'/account.svg'}
            width={60}
            height={60}
            alt={""}
            className="rounded-lg"
            onClick={handleClick}
          />
                                  <ul className={isActive ? 'dropdown active hover:bg-lavender-500':'dropdown'}>
      <li><a href="/login" onClick={logOut}>Logout</a></li>
    </ul>
</div>



             
      <div className="sm:p-10  md:p-20 xl:p-30 p-5 flex flex-col justify-center relative rounded-t-none rounded-b-20xl bg-lavender-50 w-full h-[15.63rem]">
      <h1>Hi! {userName}</h1>
        <h4>This is just a sample UI. <br/>
        Open to create your style :D
        </h4>
      </div>
      

      <div>{children}</div>
    </div>
  );
}

export default layout;
