import React, { useState } from "react";
import ButtonComponent from "../Header/AddSortButton";
import Cardmaker from "../Card/Card";
import "./CardAndHeader.css";
import Footer from "../footer/footer";

function CardAndHeader() {
  const [cards, setCards] = useState([]);
  return (
    <div className="firstCol">
      <ButtonComponent setCards={setCards} />
      <Cardmaker cards={cards} setCards={setCards} />
      <Footer />
    </div>
  );
}

export default CardAndHeader;
