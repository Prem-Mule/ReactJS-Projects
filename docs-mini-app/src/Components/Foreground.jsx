/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { React, useRef } from "react";
import Card from "./Card";
const Foreground = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing kjkjfs eahihw.",
      fileSize: " 0.5mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "amber",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing kjkjfs eahihw.",
      fileSize: " 0.5mb",
      close: false,
      tagDetails: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing kjkjfs eahihw.",
      fileSize: " 0.5mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing kjkjfs eahihw.",
      fileSize: " 0.5mb",
      close: false,
      tagDetails: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "amber",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing kjkjfs eahihw.",
      fileSize: " 0.5mb",
      close: true,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "cyan",
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing kjkjfs eahihw.",
      fileSize: " 0.5mb",
      close: false,
      tagDetails: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];
  const ref = useRef(null);
  return (
    <>
      <div
        ref={ref}
        className=" z-[3] fixed w-full h-full flex gap-7 flex-wrap p-10 justify-between items-center"
      >
        {data.map((item, index) => {
          return <Card data={item} reference={ref} />;
        })}
      </div>
    </>
  );
};

export default Foreground;
