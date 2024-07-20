import React from "react";
import "../styles/gridCard.css";
export const GridCard = () => {
  //Component 를 인자로 받아서 hover 되면 Component 를 보여주는 코드
  return (
    <>
      <div className="gridCard">
        <div className="gridImage">GridCard</div>
        <div className="gridTitle">Title</div>
      </div>
    </>
  );
};
