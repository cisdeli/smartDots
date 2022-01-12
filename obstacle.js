class Obstacle {
    constructor(posX, posY) {
        this.dim = createVector(208, 25);
        this.pos = createVector(posX, posY);

    }

    hits(dot){
        if (dot.pos.x > this.pos.x && dot.pos.x < this.pos.x + this.dim.x && dot.pos.y > this.pos.y && dot.pos.y < this.pos.y + this.dim.y) {
            return true;
        }
    }

    show() {
        push();
        fill(255, 0, 0);
        rectMode(CORNER);
        rect(this.pos.x, this.pos.y, this.dim.x, this.dim.y);
        pop();
    }
}
