import React, { useState } from "react";
import "../styles/gridCard.css";

export const GridCard = ({ containerRef, content }) => {
  //Component 를 인자로 받아서 hover 되면 Component 를 보여주는 코드
  const [isClicked, setIsClicked] = useState(false);
  const hanleClick = () => {
    console.log(containerRef.current.offsetWidth);
    setIsClicked(!isClicked);
  };
  const gridCardStyle = {
    backgroundColor: isClicked ? "yellow" : "chartreuse",
    height: isClicked ? Math.max(containerRef.current.offsetWidth * 0.5625, 320) : "100%",
    gridColumn: isClicked ? "1 / -1" : "",
    borderRadius: "5%",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "hidden",

    cursor: "pointer",
  };

  const gridCardImageStyle = {
    background: `white url("/assets/griditem.png") no-repeat left top`,
    borderTop: "5%",
    height: "280px",
  };
  return (
    <>
      <div className="gridCard" onClick={() => hanleClick()} style={gridCardStyle}>
        <div className="gridImage" style={gridCardImageStyle}>
          GridCard
        </div>
        <div className="gridTitle">Title</div>
      </div>
    </>
  );
};
