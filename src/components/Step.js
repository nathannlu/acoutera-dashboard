import React, { useState } from "react";

const Step = props => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    !isChecked
      ? (props.step.jobCompleted = true)
      : (props.step.jobCompleted = false);
    props.updateCompleted(props.step);
  };

  return (
    <div className="py-3 step">
      <div className={`round ${props.step.jobCompleted ? '' : 'hover'}`} >
        <input type="checkbox" checked={props.step.jobCompleted} id="checkbox" />
        <label onClick={handleCheckbox}></label>
        <span className="pl-6" onClick={handleCheckbox} style={props.step.jobCompleted ? {color: '#FC5C63'} : {}}>
        {props.step.title} ({props.step.days} days)
      </span>
      </div>
    </div>
  );
};

export default Step;
