import React from "react";
import ProgressBar from "./ProgressBar"
import Step from "./Step";

const Timeline = props => {
  return (
    <div className="px-6 md:px-16 pt-8">
      <div className="w-full md:w-4/5 ml-auto bg-white shadow-lg rounded-lg py-6 px-8">
        <h2 className="font-bold pb-12">
          My Project - 4827 West 9th Avenue, Vancouver
        </h2>
        <p className="pb-4">Timeline</p>
        <ProgressBar percentage={props.progress} />
        <div className="py-4">
          {props.roadMap.map((step, i) => (
            <Step key={i} step={step} updateCompleted={props.updateCompleted} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
