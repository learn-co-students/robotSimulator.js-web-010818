let directions = ["north", "east", "south", "west"]
class Robot {
	constructor(){
    this.coordinates = [0,0]
    this.bearing = "north"
  }

  setCoordinates(x,y){
   this.coordinates[0] = x
   this.coordinates[1] = y
  }

  setBearing(direction){
      if(directions.includes(direction)){
        this.bearing = direction
    } else {
      throw "Invalid Robot Bearing"
    }

  }

   place(location) {
    this.setCoordinates(location.x, location.y);
    this.setBearing(location.direction);
   }

   turnRight() {
     if(this.bearing === "north"){
      this.bearing = "east"
    }
     else if  (this.bearing === "east") {
      this.bearing = "south"
    }
     else if  (this.bearing === "south") {
     this.bearing = "west"
   } else {
     this.bearing = "north"
   }
 }

 turnLeft() {
   if(this.bearing === "north"){
    this.bearing = "west"
  }
   else if  (this.bearing === "west") {
    this.bearing = "south"
  }
   else if  (this.bearing === "south") {
   this.bearing = "east"
 } else {
   this.bearing = "north"
 }
}

  advance(){
  if (this.bearing == "north"){
    this.coordinates[1]++
  } else if (this.bearing == "east"){
    this.coordinates[0]++
  } else if (this.bearing == "south"){
    this.coordinates[1]--
  } else {
    this.coordinates[0]--
  }
}

  translateInstructions(ins){
    for(let i = 0; i <ins.length; i++){
      if (ins[i] == "L"){
        this.turnLeft()
      }
      else if (ins[i] == "R"){
        this.turnRight()
      }
      else if (ins[i] == "A"){
        this.advance()
      }
    }
  }

}
