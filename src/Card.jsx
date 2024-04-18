import { useEffect, useState } from "react"
import Title from "./Title"
import Count from "./Count"
import ResetButton from "./ResetButton"
import ButtonContainer from "./ButtonContainer"
import CountButtons from "./CountButtons"

const Card = () => {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.code === "Space") {
        setCount(prev => prev < 5 ? count + 1 : 5);
      }
    }

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    }
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButtons type="minus" setCount={setCount} locked={locked} />
        <CountButtons type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  )
}

export default Card;