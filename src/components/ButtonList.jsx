import React from "react";
import Button from "./Button";

const buttonsList = [
  "All",
  "Gaming",
  "Songs",
  "News",
  "Sports",
  "React",
  "Javascript",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonsList.map((button) => {
        return <Button key={button} name={button} />;
      })}
    </div>
  );
};

export default ButtonList;
