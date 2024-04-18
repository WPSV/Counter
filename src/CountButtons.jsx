import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButtons = ({ type, setCount, locked }) => {

  const handleClick = (event) => {
    setCount((prev) => type == "minus" ? (prev > 0 ? prev - 1 : prev) : prev + 1);
    event.currentTarget.blur();
  }

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type == "minus" && <MinusIcon className="count-btn-icon" />}
      {type == "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  )
}

export default CountButtons;