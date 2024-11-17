// Rover.js

export default class Rover {
    constructor(x, y, direction, plateau) {
      this.x = x;
      this.y = y;
      this.direction = direction;
      this.plateau = plateau;
      this.directions = ['N', 'E', 'S', 'W'];
    }
  
    rotateLeft() {
      let index = this.directions.indexOf(this.direction);
      this.direction = this.directions[(index + 3) % 4];
    }
  
    rotateRight() {
      let index = this.directions.indexOf(this.direction);
      this.direction = this.directions[(index + 1) % 4];
    }
  
    moveForward() {
      switch (this.direction) {
        case 'N':
          if (this.y < this.plateau.height) this.y += 1;
          break;
        case 'E':
          if (this.x < this.plateau.width) this.x += 1;
          break;
        case 'S':
          if (this.y > 0) this.y -= 1;
          break;
        case 'W':
          if (this.x > 0) this.x -= 1;
          break;
      }
    }
  
    executeCommands(commands) {
      for (let command of commands) {
        if (command === 'L') this.rotateLeft();
        else if (command === 'R') this.rotateRight();
        else if (command === 'M') this.moveForward();
      }
    }
  
    getPosition() {
      return `${this.x} ${this.y} ${this.direction}`;
    }
  }
  