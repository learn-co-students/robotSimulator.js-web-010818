const Bearings = ["north", "east", "south", "west"];

class Robot {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.bearing = "north";
    this.coordinates = [this.x, this.y]
  }

  setCoordinates(x, y) {
    this.x = x;
    this.y = y;
    this.coordinates = [x, y]
    return this.coordinates
  };

  setBearing(direction) {
    if (Bearings.includes(direction)) {
      this.bearing = direction;
      return this.bearing;
    } else{
      throw "Invalid Robot Bearing"
    }
  }
  // { x: -2, y: 1, direction: "east" }
  place(placement) {
    this.setCoordinates(placement.x, placement.y)
    this.setBearing(placement.direction)
  }

  turnRight() {
    switch (this.bearing) {
    case "north":
      this.bearing = "east";
      break;
    case "east":
      this.bearing = "south";
      break;
    case "south":
      this.bearing = "west";
      break;
    case "west":
      this.bearing = "north"
      break;
    }
  }

  turnLeft() {
    switch (this.bearing) {
    case "north":
      this.bearing = "west";
      break;
    case "east":
      this.bearing = "north";
      break;
    case "south":
      this.bearing = "east";
      break;
    case "west":
      this.bearing = "south"
      break;
    }
  }

  advance() {
    switch (this.bearing) {
    case "north":
      this.setCoordinates(this.x, this.y + 1)
      break;
    case "east":
      this.setCoordinates(this.x + 1, this.y)
      break;
    case "south":
      this.setCoordinates(this.x, this.y - 1)
      break;
    case "west":
      this.setCoordinates(this.x - 1, this.y)
      break;
    }
  }

  translateInstructions(instructions) {
    for (var i = 0; i < instructions.length; i++) {
      switch (instructions.charAt(i)) {
        case "L":
          this.turnLeft();
          break;
        case "R":
          this.turnRight();
          break;
        case "A":
          this.advance();
          break;
      }
    }

  }
}
