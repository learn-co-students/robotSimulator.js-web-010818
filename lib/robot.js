class Robot {
  constructor(){
    this.coordinates = [0, 0];
    this.bearing = 'north'
  }

  setCoordinates(first, second){
    this.coordinates = [first, second];
  }

  setBearing(direction){
    const directions = ["north", "south", "east", "west"]
    if (directions.includes(direction)){
      this.bearing = direction
    } else {
      throw 'Invalid Robot Bearing'
    }
  }

  place(newObj){
    this.setCoordinates(newObj.x, newObj.y);
    this.setBearing(newObj.direction);
  }

  turnRight(){
    if (this.bearing === 'north'){
      this.bearing = 'east'
    } else if (this.bearing === 'east'){
      this.bearing = 'south'
    } else if (this.bearing === 'south'){
      this.bearing = 'west'
    } else {
      this.bearing = 'north'
    }
  }

  turnLeft(){
    if (this.bearing === 'north'){
      this.bearing = 'west'
    } else if (this.bearing === 'east'){
      this.bearing = 'north'
    } else if (this.bearing === 'south'){
      this.bearing = 'east'
    } else {
      this.bearing = 'south'
    }

  }

  advance(){
    if (this.bearing === 'north'){
      this.coordinates = [this.coordinates[0],this.coordinates[1]+1]
    } else if (this.bearing === 'east'){
      this.coordinates = [this.coordinates[0]+1,this.coordinates[1]]
    } else if (this.bearing === 'south'){
      this.coordinates = [this.coordinates[0],this.coordinates[1]-1]
    } else {
      this.coordinates = [this.coordinates[0]-1,this.coordinates[1]]
    }
  }

  translateInstructions(instructions){
    for(let i = 0; i < instructions.length; i++) {
      if (instructions[i] === "L") {
        this.turnLeft();
      } else if (instructions[i] === "R") {
        this.turnRight();
      } else if (instructions[i] === "A") {
        this.advance();
      }
    };

  }




}
