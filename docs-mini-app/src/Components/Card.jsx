/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragSnapToOrigin
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.1}
      className="flex-shrink-0 relative w-52 h-72 bg-zinc-900/90 rounded-[30px] text-white py-7 overflow-hidden px-6"
    >
      <FaRegFileAlt />
      <p className="text-xs mt-5 leading-normal ">{data.desc}</p>
      <footer className="absolute bottom-0 w-full left-0 ">
        <div className="flex items-center justify-between  px-6 py-3">
          <h6 className="text-sm">{data.fileSize}</h6>
          <span className="w-7 h-7 rounded-full flex items-center justify-center bg-cyan-300">
            {data.close ? (
              <AiOutlineCloseCircle size="0.9em" color="black" />
            ) : (
              <LuDownload size="0.9em" color="black" />
            )}
          </span>
        </div>
        {data.tagDetails.isOpen && (
          <div
            className={` w-full py-3 ${
              data.tagDetails.tagColor == "green"
                ? "bg-green-500"
                : "bg-amber-500"
            } flex justify-center items-center tracking-wider `}
          >
            <h4 className="text-sm ">{data.tagDetails.tagTitle}</h4>
          </div>
        )}
      </footer>
    </motion.div>
  );
};

export default Card;
