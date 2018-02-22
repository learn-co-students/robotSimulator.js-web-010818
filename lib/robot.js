class Robot {
  constructor() {
    this.coordinates = [0, 0];
    this.bearing = "north";
  }

  setCoordinates(x, y) {
    this.coordinates = [x, y];
  }

  setBearing(direction) {
    const directions = ["north", "south", "east", "west"];
    if (directions.includes(direction)) {
      this.bearing = direction;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place(obj) {
    this.setCoordinates(obj.x, obj.y);
    this.setBearing(obj.direction);
  }

  turnRight() {
    if (this.bearing === "north") {
      this.setBearing("east");
    } else if (this.bearing === "south") {
      this.setBearing("west");
    } else if (this.bearing === "east") {
      this.setBearing("south");
    } else if (this.bearing === "west") {
      this.setBearing("north");
    }
  }

  turnLeft() {
    if (this.bearing === "north") {
      this.setBearing("west");
    } else if (this.bearing === "south") {
      this.setBearing("east");
    } else if (this.bearing === "east") {
      this.setBearing("north");
    } else if (this.bearing === "west") {
      this.setBearing("south");
    }
  }

  advance() {
    if (this.bearing === "north") {
      this.coordinates[1]++;
    } else if (this.bearing === "south") {
      this.coordinates[1]--;
    } else if (this.bearing === "east") {
      this.coordinates[0]++;
    } else if (this.bearing === "west") {
      this.coordinates[0]--;
    }
  }

  translateInstructions(instructions) {
    let instructionsArr = instructions.split('')
    for (const e of instructionsArr) {
      if (e === "A") {
        this.advance();
      } else if (e === "R") {
        this.turnRight();
      } else if (e === "L") {
        this.turnLeft();
      }
    }
    return this.coordinates;
  }
}
