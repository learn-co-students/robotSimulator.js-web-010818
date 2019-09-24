let bearings = ["north", "east", "south", "west"];

class Robot {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.bearing = "north";
  }

  coordinates() { return [this.x, this.y] }
}
