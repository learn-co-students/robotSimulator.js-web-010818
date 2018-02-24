const nsew = ["north", "east", "south", "west"];
class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
  }
  setCoordinates(x, y) {
    return this.coordinates = [x, y]
  }
  setBearing(direction) {
    if (nsew.includes(direction)) {
      return this.bearing = direction;
    } else {
      throw new Error("Invalid Robot Bearing")
    }
  }
  place(xyDir) {
    this.coordinates = [xyDir.x, xyDir.y];
    this.bearing = xyDir.direction;
  }
  turnRight() {
    const curBearInd = nsew.indexOf(this.bearing);
    if (curBearInd < 3) {
      return this.bearing = nsew[curBearInd + 1]
    } else {
      return this.bearing = nsew[0];
    }
  }
  turnLeft() {
    const curBearInd = nsew.indexOf(this.bearing);
    if (curBearInd > 0) {
      return this.bearing = nsew[curBearInd - 1]
    } else {
      return this.bearing = nsew[3];
    }
  }
  advance() {
    switch (this.bearing) {
      case "north":
        return this.coordinates[1] += 1;
      case "south":
        return this.coordinates[1] -= 1;
      case "east":
        return this.coordinates[0] += 1;
      case "west":
        return this.coordinates[0] -= 1;
      default:
        break;
    }
  }
  translateInstructions(str) {
    const instructions = str.split('');
    instructions.map((instruction) => {
      switch(instruction) {
        case "R":
          return this.turnRight();
        case "L":
          return this.turnLeft();
        case "A":
          return this.advance();
        default:
          break;
      }
    });
  }

}
