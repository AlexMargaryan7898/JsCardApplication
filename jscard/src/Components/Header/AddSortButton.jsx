import "./AddSortButton.css";
const ButtonComponent = ({ cards,  setCards }) => {
  const AddClick = () => {
    setCards((cards) => [...cards, Math.floor(Math.random() * 100)]);
  };

  const SortingClick = () => {
    setCards((cards) => [...cards.sort((a, b) => a - b)]);
  };

  return (
    <div className="header">
      <button className="button" onClick={AddClick}>
        add card
      </button>
      <button className="button" onClick={SortingClick}>
        sort cards
      </button>

    </div>
  );
};
export default ButtonComponent;
