"use client";
import React, { useEffect, useState } from "react";
import Task from "@/app/main/components/task";
import InfiniteScroll from "react-infinite-scroll-component";
import { randomUUID } from "crypto";
import { formatDate } from "@/app/utils";
import TapMenu from "./tap-menu";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from "react-swipeable-list";
  import 'react-swipeable-list/dist/styles.css';

type Props = {};

const TaskList = ({}: Props) => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState("TODO");
  const [page, setPage] = useState(0);
  const [group, setGroup] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loadText, setLoadText] = useState("Loading...");
  useEffect(() => {
    async function fetchTasks() {
      const limit = 10;
      const data: {
        totalPages: number;
        tasks: any[];
      } = await fetch(
        `https://todo-list-api-mfchjooefq-as.a.run.app/todo-list?status=${statusFilter}&offset=${page}&limit=${limit}&sortBy=createdAt&isAsc=true`
      ).then((res) => res.json());

      if (page === data.totalPages) {
        setHasMore(false);
        return;
      }

      const groupedTasks = groupingTasks(data.tasks);
      setTasks([...tasks, ...groupedTasks]);
    }
    fetchTasks();
  }, [statusFilter, page]);

  const handleAddTask = () => {
    const name = window.prompt("New task name:");
    const description = window.prompt("New task description:");
    if (name) {
      let tempTasks: any[] = [];

      tasks.forEach((grouped) => {
        tempTasks = [...tempTasks, ...grouped.tasks];
      });

      tempTasks = [
        {
          id: Date.now(),
          title: name,
          description: description,
          status: "TODO",
          createdAt: new Date().toJSON(),
        },
        ...tempTasks,
      ];

      const groupedTasks = groupingTasks(tempTasks);

      setTasks(groupedTasks);

      //   setTasks([...tasks, { id: Date.now(), title:name,description:description, status: "Todo" }]);
    }
  };

  const groupingTasks = (filterTask: any[]): any[any] => {
    const groupedTasks = filterTask.reduce((groups, task) => {
      let date = task.createdAt.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(task);
      return groups;
    }, []);

    const group = [];
    for (const [key, value] of Object.entries(groupedTasks)) {
      group.push({ date: key, tasks: value });
    }

    return group;
  };

  const handleDeleteTask = (id: any) => {
    let oldTasks: any[] = [];

    tasks.forEach((task) => {
      oldTasks = [...oldTasks, ...task.tasks];
    });

    const filterTask = oldTasks.filter((e: { id: any }) => e.id !== id);

    const groupedTasks = groupingTasks(filterTask);

    setTasks(groupedTasks);

    if (groupedTasks.length == 0) {
      setLoadText("Please fecth again!");
    }
  };

  const handleStatusChange = (status: string) => {
    setHasMore(true);
    setPage(0);
    setTasks([]);
    setStatusFilter(status);
  };


  const leadingActions = (id:string) => (
    <LeadingActions>
      <SwipeAction onClick={() => handleDeleteTask(id)} 
      
      destructive={true}>
<div className="flex items-center flex-row bg-red-500">
    Delete
</div>
      </SwipeAction>
    </LeadingActions>
  );

  const trailingAction = (id:string) => (
    <TrailingActions>
      <SwipeAction onClick={() => handleDeleteTask(id)} 
      
      destructive={true}>
<div className="flex items-center flex-row bg-red-500">
    Delete
</div>
      </SwipeAction>
    </TrailingActions>
  );
  


  return (
    <div>
      <TapMenu
        statusFilter={statusFilter}
        onSetStatusFilter={function (status: string): void {
          setStatusFilter(status);
        }}
        onSetHasMore={function (hasMore: boolean): void {
          setHasMore(hasMore);
        }}
        onSetPage={function (page: number): void {
          setPage(page);
        }}
        onSetTasks={function (tasks: any[]): void {
          setTasks(tasks);
        }}
      />

      <div className=" flex justify-around items-center mt-4">
        <InfiniteScroll
          dataLength={tasks.length}
          next={() => {
            setPage(page + 1);
          }}
          hasMore={hasMore}
          initialScrollY={300}
          loader={<h4>{loadText}</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>You have seen it all</b>
            </p>
          }
        >
          {tasks?.map((task, index: React.Key) => (
            <div key={index} className="p-5" >
              <h2>
                <strong>{formatDate(task.date)}</strong>
              </h2>
              <SwipeableList>
              {task.tasks?.map(
                (e: { id:string }, index: React.Key) => (
                    <SwipeableListItem key={e.id} 
                    
                    leadingActions={leadingActions(e.id)}
                    trailingActions={trailingAction(e.id)}
                    >
             <Task  task={e} onDelete={handleDeleteTask} />
                    </SwipeableListItem>
     
                )
              )}
              </SwipeableList>
           
            </div>
          ))}
        </InfiniteScroll>
      </div>

      <div
        className={
          statusFilter != "TODO"
            ? "hidden"
            : "fixed cursor-pointer  right-0 bottom-0 m-5 inline-flex items-center justify-center w-14 h-14 text-white transition-colors duration-325 bg-lavender-50 rounded-full focus:shadow-outline hover:bg-lavender-500"
        }
        onClick={handleAddTask}
      >
        {" "}
        +
      </div>
    </div>
  );
};

export default TaskList;
