import React from "react";

type Props = {
  onSetStatusFilter: (status: string) => void;
  onSetHasMore: (hasMore: boolean) => void;
  onSetPage: (page: number) => void;
  onSetTasks: (tasks: any[]) => void;
  statusFilter:string;
};

function TapMenu({
  onSetStatusFilter,
  onSetHasMore,
  onSetPage,
  onSetTasks,
  statusFilter,
}: Props) {
  const handleStatusChange = (status: string) => {
    onSetHasMore(true);
    onSetPage(0);
    onSetStatusFilter(status);
    onSetTasks([]);
  };

  return (
    <div className="flex justify-center">
      <div className="relative top-[-25px] rounded-[20px] bg-whitesmoke w-[80%] h-[3.13rem] flex justify-around items-center">
        {["TODO", "DOING", "DONE"].map((status) => (
          <button
            key={status}
            type="button"
            className={statusFilter === status ? "active-status" : "py-1 px-3"}
            onClick={() => handleStatusChange(status)}
          >
            {status}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TapMenu;
