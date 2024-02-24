"use client";
import { list } from "postcss";
import React from "react";
import { useState } from "react";
const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setmaintask] = useState([]);

  let rendertask = <h1>No Task Available</h1>;

  const submitHander = (e) => {
    e.preventDefault();
    console.log(title);
    setTitle("");
    setDesc("");
    setmaintask([...maintask, { title, desc, status: "Done" }]);
    console.log(maintask);
  };

  const deleteHander = (i) => {
    let copytask = [...maintask];
    copytask.splice(i, 1);
    setmaintask(copytask);
  };
  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (
        <>
          <div key={i} className="pr-4 pl-4 flex mb-10">
            <div className="w-1/3 flex justify-center font-semibold">
              <h4>{t.title}</h4>
            </div>
            <div className="w-2/3 flex justify-between font-semibold">
              <h6>{t.desc}</h6>

              <button
                onClick={() => {
                  deleteHander(i);
                }}
                className="bg-red-600 font-bold rounded-md p-3"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-4xl font-bold text-center p-5 flex">
        Prem's Todo List
      </h1>
      <form onSubmit={submitHander}>
        <input
          type="text"
          placeholder="Eg. Make notes"
          className="border-black border-2 m-4 px-4 py-2"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter description of your task"
          className="border-black border-2 m-8 px-4 py-2 "
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-black rounded-md text-white font-bold text-xl px-4 py-2 m-5 "
        >
          Add Task
        </button>
      </form>
      <hr />
      <div className="flex  bg-slate-900 text-white p-6  border-y-white">
        <div className="w-1/3 bg-amber-400 flex justify-center">
          <h2 className="font-bold ml-4 "> Task </h2>
        </div>
        <div className="w-2/3 bg-blue-400 flex justify-center">
          <h2 className="font-bold mr-6">Description</h2>
        </div>
      </div>
      <hr />
      <div className="bg-slate-400 p-8 ">
        <ul>{rendertask}</ul>
      </div>
    </>
  );
};

export default page;
