import React from "react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";



type Props = {
  task: any;
  onDelete: any;
};

const Task = ({ task, onDelete }: Props) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => onDelete(task.id),
    onSwipedRight: () => onDelete(task.id),
    trackMouse: true,
  });

  return (

        <div className="card sm:min-w-[400px] max-w-[400px] ">
          <div
            className="hover:bg-gray-200 cursor-pointer grid grid-cols-6  p-3"
            style={{ position: "relative", animation: "left" }}
          >
            <div>
              <Image
                src={"/notes.png"}
                width={30}
                height={30}
                alt={""}
                className="rounded-lg"
              />
            </div>

            <div className="col-span-5 flex flex-col">
              <p className="">
                <strong>{task.title}</strong>
              </p>

              <p className="text-gray-400 text-sm">{task.description}</p>
              <p className="text-gray-400 text-sm">{task.status}</p>
            </div>
          </div>
        </div>
  );
};

export default Task;
