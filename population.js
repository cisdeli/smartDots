class Population {
    constructor() {
        this.dots = [];
        this.pop = 100;
        for (let i = 0; i < this.pop; i++) {
            this.dots[i] = new Dot();
        }

        this.matingpool = [];
    }

    evaluate() {
        let maxfit = 0;
        for (let i = 0; i < this.pop; i++) {
            this.dots[i].calcFitness();
            if (this.dots[i].fitness > maxfit) {
                maxfit = this.dots[i].fitness;
            }
        }

        for (let i = 0; i < this.pop; i++) {
            this.dots[i].fitness /= maxfit;
        }

        this.matingpool = [];
        for (let i = 0; i < this.pop; i++) {
            let n = this.dots[i].fitness * 100;
            for (let j = 0; j < n; j++) {
                this.matingpool.push(this.dots[i]);
            }
        }
    }

    nSelection() {
        let newdots = [];
        for (let i = 0; i < this.dots.length; i++) {
            let parentA = random(this.matingpool).brain;
            let parentB = random(this.matingpool).brain;
            let child = parentA.crossOver(parentB);
            child.mutation();
            newdots[i] = new Dot(child);
        }
        this.dots = newdots;
    }

    run() {
        for (let i = 0; i < this.pop; i++) {
            this.dots[i].update();
            this.dots[i].show();
        }
    }
}
