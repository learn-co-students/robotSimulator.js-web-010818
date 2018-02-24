class Robot {
  constructor () {
    this.coordinates = [0, 0]
    this.bearing = 'north'
  }
  setCoordinates(x, y){
    this.coordinates = [x, y]
  }

  setBearing(direction){
    const validDirection = ['north', 'east', 'south', 'west'];
    if (validDirection.includes(direction)) {
      this.bearing = direction;
    } else {
      throw "Invalid Robot Bearing";
    }
  }

  place(place){
    this.setCoordinates(place.x, place.y)
    // this.coordinates = [place.x, place.y];
    // this.bearing = place.direction;
    this.setBearing(place.direction);
  }

  turnRight(){
    if (this.bearing === 'north') {
      this.setBearing('east');
    }else if (this.bearing === 'east') {
      this.setBearing('south');
    }else if (this.bearing === 'south') {
      this.setBearing('west');
    }else if (this.bearing === 'west') {
      this.setBearing('north');
    }
  }

  turnLeft(){
    if (this.bearing === 'north') {
      this.setBearing('west');
    }else if (this.bearing === 'west') {
      this.setBearing('south');
    }else if (this.bearing === 'south') {
      this.setBearing('east');
    }else if (this.bearing === 'east') {
      this.setBearing('north');
    }
  }

  advance(){
    if (this.bearing === 'north') {
      this.coordinates[1] += 1;
    } else if (this.bearing === 'east') {
      this.coordinates[0] += 1;
    } else if (this.bearing === 'south') {
      this.coordinates[1] -= 1;
    } else if (this.bearing === 'west') {
      this.coordinates[0] -= 1;
    }
  }

  translateInstructions(instructions) {
    instructions.split("").forEach(instruction => {
      if (instruction === 'L') {
        this.turnLeft();
      } else if (instruction === 'R') {
        this.turnRight();
      } else if (instruction === 'A') {
        this.advance();
      }
      debugger;
    });
  }


}
