
// let compass = ["north", "east", "south", "west"]

class Robot {
    constructor(x = 0, y = 0){
      this.coordinates = [x,y]
      this.bearing = "north"
    }

    setCoordinates(x,y){
      this.coordinates = [x,y]
    }

    setBearing(bearing){
      if (bearing === "north" || bearing === "south" || bearing === "east" || bearing === "west"){
        this.bearing = bearing
      }else{
        throw "Invalid Robot Bearing"
      }
    }

    place(object){
      // object = {x: -2, y:1, direction: "east"}
      this.setCoordinates(object.x, object.y)
      this.setBearing(object.direction)
    }

    turnRight(){
      let bearing = this.bearing;
      switch(bearing){
        case "north":
        this.setBearing("east");
          break;
        case "east":
          this.setBearing("south");
          break;
        case "south":
          this.setBearing("west");
          break;
        case "west":
          this.setBearing("north");
          break;
        default:
          throw "Error, no valid bearing";
      }
    }

    turnLeft(){
      let bearing = this.bearing;
      switch(bearing){
        case "north":
        this.setBearing("west");
          break;
        case "east":
          this.setBearing("north");
          break;
        case "south":
          this.setBearing("east");
          break;
        case "west":
          this.setBearing("south");
          break;
        default:
          throw "Error, no valid bearing";
      }
    }

    advance(){
      let bearing = this.bearing;
      switch(bearing){
        case "north":
          this.coordinates[1]++;
          break;
        case "east":
          this.coordinates[0]++;
          break;
        case "south":
          this.coordinates[1]--;
          break;
        case "west":
          this.coordinates[0]--;
          break;
        default:
          throw "Error, no valid bearing";
      }
    }



    translateInstructions(instructions) {
      instructions.split("").forEach(instruction => {
        switch (instruction) {
          case "L":
          debugger;
            this.turnLeft();
            break;
          case "R":
            this.turnRight();
            break;
          case "A":
            this.advance();
            break;
          default:
            break;
        }
      });
  }

    // translateInstructions(directions){
    //   function followOrder(instruction){
    //     switch(instruction){
    //       case "L":
    //       // debugger;
    //         this.turnLeft();
    //         break;
    //       case "R":
    //         this.turnRight();
    //         break;
    //       case "A":
    //         this.advance();
    //         break;
    //       default:
    //         throw "Error, not a valid direction";
    //     }
    //   }
    //   debugger;
    //
    //   let directArray = directions.split("")
    //
    //   directArray.forEach.call(this)(
    //     function(instruction){
    //
    //       followOrder.call(this, instruction)
    //     }
    //   )
    // }

}
