import React from "react";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <div>
      <h1>tab menu</h1>
      <div>{children}</div>
    </div>
  );
}

export default layout;
