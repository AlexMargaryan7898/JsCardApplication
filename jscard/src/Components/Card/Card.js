import "./Card.css";
import React from "react";

const Cardmaker = ({ cards, setCards }) => {
  const CardRemover = (index) => {
    setCards((cards) => cards.filter((item, i) => i !== index));
  };
  return (
    <div className="main">
      <div className="mainContainer">
        <div className="mainContainerScrollbar">
          {cards.map((item, index) => (
            <div className="cards" key={index}>
              {item}
              <div className="removeCards" onClick={() => CardRemover(index)}>
                x
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cardmaker;
