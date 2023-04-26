import { useRef } from "react";
import { AddTwoNum, Button } from "ui";

const sum = [1, 2]
export default function Docs() {
  const numRef = useRef(0)
  
  const handleSum = function() {
    numRef.current = AddTwoNum(sum)
    alert(`Total sum: ${numRef.current}`)
  }
  return (
    <div>
      <h1>Docs app</h1>
      <Button onClick={handleSum} />
    </div>
  );
}
