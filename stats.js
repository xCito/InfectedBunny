class Stats {
    constructor(x,y) {
        this.pos = createVector(x,y);
        this.virusStrength;
        this.totalInfected = 0;
    }

    draw() {
        stroke(255)
        strokeWeight(1);
        fill('white');
        textSize(20);
        text("Virus Strength: "+this.virusStrength+"\nTotal Infected: " + this.totalInfected, this.pos.x, this.pos.y+18);
    }
}