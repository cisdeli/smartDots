class Graph {
    constructor(posX, posY, xMax, yMax) {
        this.pos = createVector(posX, posY);
        this.data;
        this.xMax = xMax;
        this.yMax = yMax;

        this.size = 400;
        this.dotSize = 7;
    }

    setData(data){
        this.data = data;
    }

    show(){
        push();
        translate(80, height/2);
        stroke(220);
        //y
        for (var j = 0; j <= this.size; j = j + Math.floor(this.size / this.yMax)){
            line(0, j, this.size, j);
        }
        //x
        for (var i = 0; i <= this.size ; i = i + Math.floor(this.size / this.xMax)){
            line(i, 0, i, this.size);
        }
        //min val, x and y max val
        noStroke();
        text(this.yMax * 10, -10, 420);
        text(this.xMax * 10, 400, -20);
        text(0, -10, -20);
        fill(255, 255, 255);
        text("Generations", 200, -20);
        text("Failed", -40, 220);

        //actual data
        if(this.data){
            let lx = min(this.data.x) * this.size / 100, ly = max(this.data.y) * this.size / 100;
            for (var index = 0; index < this.data.x.length; index++){
                strokeWeight(2);
                stroke(255, 127, 127);
                line(lx, ly, this.data.x[index] * this.size / 100, this.data.y[index] * this.size / 100);
                lx = this.data.x[index] * this.size / 100;
                ly = this.data.y[index] * this.size / 100
            }

            for (var index = 0; index < this.data.x.length; index++){
                fill(255, 0, 0);
                strokeWeight(2);
                stroke(0);
                ellipse(this.data.x[index] * this.size / 100, this.data.y[index] * this.size / 100, this.dotSize);
            }
        }
        pop();

    }
}
