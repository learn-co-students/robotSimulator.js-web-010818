var compass = ["north", "east", "south", "west"];

class Robot {
	constructor() {
    this.coordinates = [0, 0];
    this.bearing = 'north';
  }

  setCoordinates(x, y) {
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }

  setBearing(bearing) {
    if (compass.includes(bearing)) {
      this.bearing = bearing;
    } else {
      throw 'Invalid Robot Bearing';
    }
  }

  place(location) {
    this.setCoordinates(location.x, location.y);
    this.setBearing(location.direction);
  }

  turnRight() {
    for(var i = 0; i < compass.length; i++) {
      if (this.bearing === compass[i] && i < 3) {
        this.bearing = compass[i + 1];
        break;
      } else if (this.bearing === compass[i] && i === 3) {
        this.bearing = compass[0];
        break;
      }
    }
  }

  turnLeft() {
    for(var i = 0; i < compass.length; i++) {
      if (this.bearing === compass[i] && i > 0) {
        this.bearing = compass[i - 1];
        break;
      } else if (this.bearing === compass[i]) {
        this.bearing = compass[3];
        break;
      }
    }
  }

  advance() {
    if (this.bearing === 'north') {
      this.coordinates[1]++;
    } else if (this.bearing === 'east') {
      this.coordinates[0]++;
    } else if (this.bearing === 'south') {
      this.coordinates[1]--;
    } else {
      this.coordinates[0]--;
    }
  }

  translateInstructions(ins) {
    console.log(ins);
    for(let i = 0; i < ins.length; i++) {
      if (ins[i] === 'L') {
        this.turnLeft();
      } else if (ins[i] === 'R') {
        this.turnRight();
      } else if (ins[i] === 'A') {
        this.advance();
      }
    }
  }
}
