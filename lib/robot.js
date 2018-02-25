const directions = ["north", "east", "south", "west"];
class Robot {
	//your solution here
  constructor (name, coordinates = [0,0], bearing = 'north'){
    this.name = name
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(num1, num2){
      this.coordinates[0] = num1
      this.coordinates[1] = num2
    //  return this.coordinates
  }

  setBearing(bearing){
    //let directions = ["north", "south", "east", "west"];
    if(directions.includes(bearing)){
      this.bearing = bearing
      //return this.bearing
    } else {
      throw new Error("Invalid Robot Bearing");
    }
  }

  place(hash){
    this.coordinates[0] = hash.x
    this.coordinates[1] = hash.y
    this.bearing = hash.direction
  }

  turnRight(){
    let current_bearing = this.bearing
    let new_bearing = (directions.indexOf(current_bearing) + 1) % directions.length
    this.bearing = directions[new_bearing]
  }
  turnLeft(){
    let current_bearing = this.bearing
    if (directions.indexOf(current_bearing) === 0){
      this.bearing = directions[directions.length - 1]
    } else {
    let new_bearing = (directions.indexOf(current_bearing) - 1) % 4
    this.bearing = directions[new_bearing]
    }
  }
  advance(){
    let current_bearing = this.bearing
    if (current_bearing === 'north'){
      this.coordinates[1] += 1
    } else if (current_bearing === 'east') {
      this.coordinates[0] += 1
    } else if (current_bearing === 'west') {
      this.coordinates[0] -= 1
    } else if (current_bearing === 'south') {
      this.coordinates[1] -= 1
    }
  }

  translateInstructions(string){
    let instructions = string.split('');
    for (let i = 0; i < instructions.length; i++){
      let instruction = instructions[i];
      if (instruction === 'L'){
        this.turnLeft()
      } else if (instruction === 'R'){
        this.turnRight()
      } else if (instruction === 'A'){
        this.advance()
      }
    }
  }
}
