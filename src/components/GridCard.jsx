import React, { useEffect, useRef, useState } from "react";
import "../styles/gridCard.css";

export const GridCard = ({ containerRef, content }) => {
  //Component 를 인자로 받아서 hover 되면 Component 를 보여주는 코드
  const cardRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  const hanleClick = () => {
    setIsClicked(!isClicked);
  };
  useEffect(() => {
    if (isClicked && cardRef.current) {
      cardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isClicked]);

  const gridCardStyle = {
    backgroundColor: isClicked ? "yellow" : "chartreuse",
    height: isClicked ? Math.max(containerRef.current.offsetWidth * 0.5625, 320) : "100%",
    gridColumn: isClicked ? "1 / -1" : "",
    borderRadius: "30px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    overflow: "hidden",
    cursor: isClicked ? "" : "pointer",
  };

  const gridCardImageStyle = {
    background: `white url("/assets/griditem.png") no-repeat left top`,
    height: "90%",
    // height: "280px",
  };
  const titleContainerStyle = {
    backgroundColor: "lavender",
    display: "flex",
    justifyContent: "space-between",
  };
  const closeStyle = {
    backgroundColor: "magenta",
    cursor: "pointer",
  };
  const contentContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90%",
    backgroundColor: "gray",
  };

  if (isClicked) {
    return (
      <>
        <div
          ref={cardRef}
          className="gridCard"
          onClick={isClicked ? undefined : () => hanleClick()}
          style={gridCardStyle}
        >
          <div style={contentContainer}>{content}</div>
          <div className="titleContainer" style={titleContainerStyle}>
            <div className="gridTitle">Title</div>
            <div onClick={() => hanleClick()} style={closeStyle} className="closeButton">
              close
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          ref={cardRef}
          className="gridCard"
          onClick={isClicked ? undefined : () => hanleClick()}
          style={gridCardStyle}
        >
          <div className="gridImage" style={gridCardImageStyle}>
            GridCard
          </div>
          <div className="titleContainer" style={titleContainerStyle}>
            <div className="gridTitle">Title</div>
          </div>
        </div>
      </>
    );
  }
};
