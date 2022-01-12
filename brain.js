class Brain {
    constructor(genes) {
        if (genes) {
            this.genes = genes;
        } else {
            this.genes = [];
            for (let i = 0; i < maxSteps; i++) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.1);
            }
        }
        this.mutationRate = 0.0001;
    }

    crossOver(partner) {
        let newGenes = [];
        let midPoint = floor(random(this.genes.length));
        for (let i = 0; i < this.genes.length; i++) {
            if (i > midPoint) {
                newGenes[i] = this.genes[i];
            } else {
                newGenes[i] = partner.genes[i];
            }
        }
        return new Brain(newGenes);
    }

    mutation() {
        for (let i = 0; i < this.genes.length; i++) {
            if (random(1) < this.mutationRate) {
                this.genes[i] = p5.Vector.random2D();
                this.genes[i].setMag(0.1);
            }
        }
    }
}