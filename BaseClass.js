class BaseClass {
    constructor(x, y, width, height, angle) {
        var options = {
            //isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2,
        };
        this.body = Bodies.rectangle(x, y, 35, 35, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage('paper.png');
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var ang = this.body.angle;

        push() 
        translate(pos.x, pos.y);
        rotate(ang);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}