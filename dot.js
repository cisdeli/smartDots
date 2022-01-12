class Dot {
    constructor(brain) {
        this.dim = 5;
        this.pos = createVector(width / 2, height - this.dim * 20);
        this.vel = createVector(0, 0);
        this.acel = createVector();
        if (brain) {
            this.brain = brain;
        } else {
            this.brain = new Brain();
        }
        this.fitness = 0;

        this.won = false;
        this.dead = false;
    }

    appForce(force) {
        this.acel.add(force);
    }

    reachedGoal() {
        var dx = this.pos.x - target.pos.x;
        var dy = this.pos.y - target.pos.y;
        let d = Math.sqrt(dx * dx + dy * dy);
        if(d < this.dim / 2 + target.dim / 4){
            this.won = true;
            return true;
        } else
            return false;
    }

    offBoundaries() {
        if (this.pos.x > width / 1.51 || this.pos.x < width / 2.95 || this.pos.y > height - 8 || this.pos.y < 10) {
            return true;
        } else {
            return false;
        }
    }

    update() {
        this.appForce(this.brain.genes[steps]);
        if (!this.reachedGoal() && !this.offBoundaries() && !this.dead) {
            this.vel.add(this.acel);
            this.pos.add(this.vel);
            this.acel.mult(0);
        }
    }

    calcFitness() {
        let d = dist(this.pos.x, this.pos.y, target.pos.x, target.pos.y);
        this.fitness = map(d, 0, width, width, 0);
        if (this.reachedGoal()) {
            this.fitness *= 10;
        }
    }

    show() {
        push();
        translate(this.pos.x, this.pos.y)
        rotate(this.vel.heading());
        stroke(0);
        fill(255, 255, 255);
        ellipseMode(CENTER);
        ellipse(0, 0, this.dim * 2, this.dim * 2);
        pop();
    }
}
