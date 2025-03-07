/**
 * Link da documentação do enum: https://www.typescriptlang.org/docs/handbook/enums.html?_gl=1*ljas7b*_ga*NDIyMzY0NzA5LjE3MzE5Mzg5MzI.*_ga_37GXT4VGQK*MTc0MTM1NTg1NC4yMC4xLjE3NDEzNTk2MzMuMC4wLjA.
 *
 */

enum Direction {
  LEFT = "left", // 0
  RIGHT = "right", // 1
  TOP = "top", // 2
  BOTTOM = "bottom", // 3
}

function moveTo(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("Move to " + Direction.LEFT);
      break;
    case Direction.RIGHT:
      console.log("Move to " + Direction.RIGHT);
      break;
    case Direction.TOP:
      console.log("Move to " + Direction.TOP);
      break;
    case Direction.BOTTOM:
      console.log("Move to " + Direction.BOTTOM);
      break;
    default:
      console.log("I don't know where to go :(");
  }
}

moveTo(Direction.LEFT);
moveTo(Direction.RIGHT);
