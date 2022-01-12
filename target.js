class Target {
    constructor() {
        this.dim = 15;
        this.pos = createVector(width / 2, this.dim * 4);
    }

    show() {
        push();
        fill(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, this.dim * 3, this.dim * 3);
        fill(255, 255, 255);
        ellipse(this.pos.x, this.pos.y, this.dim * 2, this.dim * 2);
        fill(255, 0, 0);
        ellipse(this.pos.x, this.pos.y, this.dim, this.dim);
        pop();
    }
}
