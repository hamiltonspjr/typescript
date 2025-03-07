/**
 * Tipos Literais - Literal Types
 * Uma variável pode fazer parte de um conjunto específico de string ou number
 * exemplo: Direction => left, top, right, and bottom
 */

type Direction = "left" | "top" | "right" | "bottom";
//const value: Direction = "right";

function moveTo(direction: Direction) {
  switch (direction) {
    case "left":
      console.log("Move to the left");
      break;
    case "top":
      console.log("Move to the top");
      break;
    case "right":
      console.log("Move to the right");
      break;
    case "bottom":
      console.log("Move to the bottom");
      break;
    default:
      console.log("I don't know where to go :(");
  }
}
moveTo("top");
