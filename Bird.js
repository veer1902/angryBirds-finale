class Bird extends BaseClass {
  constructor(x, y) {
    super(x, y, 50, 50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    //to print smoke dot for changing position of the bird
    this.trajectory = [];

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    //to store x, y position of bird body continuously
    var position = [this.body.position.x, this.body.position.y];

    if (this.body.position.x > 220 && this.body.speed > 10) {
      //to push position array in trajectory array
      this.trajectory.push(position);
    }


    //i is index position of trajectory array starting from 0 
    //i++ means increase by 1 everytime
    // start; stop; increase
    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
