class Population {
    constructor() {
        this.dots = [];
        this.pop = 100;
        for (let i = 0; i < this.pop; i++) {
            this.dots[i] = new Dot();
        }
        this.matingpool = [];
        this.best_i = 0;
    }

    // ----- SELECTION METHODS -----

    // Elitism selection: the best one crossovers with all the other individuals.
    // Probably needs fixing, cause converges.
    elitismSelection() {
        let best = this.dots[this.best_i].brain;
        let newdots = [];
        for (let i = 0; i < this.dots.length; i++) {
            if (i == this.best_i) {
                newdots[i] = new Dot(best);
                continue;
            }
            let parentB = this.dots[i].brain;
            let child = best.crossOver(parentB);
            child.mutation();
            newdots[i] = new Dot(child);
        }
        this.dots = newdots;
    }

    // Returns the winners of the tournament that will crossover.
    tournamentWinners() {
        let firstFather = random(this.dots);
        let firstMother = random(this.dots);
        let secondFather = random(this.dots);
        while (secondFather == firstFather) {
            secondFather = random(this.dots);
        }
        let secondMother = random(this.dots);
        while (secondMother == firstMother) {
            secondMother = random(this.dots);
        }
        let Father = firstFather.fitness > secondFather.fitness ? firstFather : secondFather;
        let Mother = firstMother.fitness > secondMother.fitness ? firstMother : secondMother;
        return [Father.brain, Mother.brain];
    }

    // Tournament selection: tournament of 2 for choosing the parents. 
    // The participants of the tournament are chosen randomly.
    tournamentSelection() {
        let newdots = [];
        for (let i = 0; i < this.dots.length; i++) {
            let [parentA, parentB] = this.tournamentWinners();
            let child = parentA.crossOver(parentB);
            child.mutation();
            newdots[i] = new Dot(child);
        }
        this.dots = newdots;
    }

    // Roulette selection 
    rouletteSelection() {
        this.matingpool = [];
        for (let i = 0; i < this.pop; i++) {
            let n = this.dots[i].fitness * 100;
            for (let j = 0; j < n; j++) {
                this.matingpool.push(this.dots[i]);
            }
        }
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

    // Calculate fitness
    evaluate() {
        let maxfit = 0;
        for (let i = 0; i < this.pop; i++) {
            this.dots[i].calcFitness();
            if (this.dots[i].fitness > maxfit) {
                maxfit = this.dots[i].fitness;
                this.max_i = i;
            }
        }

        for (let i = 0; i < this.pop; i++) {
            this.dots[i].fitness /= maxfit;
        }
    }

    // Reproduce based on the method chosen
    reproduce(method) {
        switch (method) {
            case 'ELITISM':
                this.elitismSelection();
                break;
            case 'TOURNAMENT':
                this.tournamentSelection();
                break;
            case 'ROULETTE':
                this.rouletteSelection();
                break;
            default:
                this.rouletteSelection();
        }
    }

    run() {
        for (let i = 0; i < this.pop; i++) {
            this.dots[i].update();
            this.dots[i].show();
        }
    }
}