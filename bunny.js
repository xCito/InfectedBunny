
class Bunny {
    constructor(x,y, gX, gY) {
        this.pos = createVector(x,y);
        this.strength = floor(random(1,6));
        this.infected = false;

        this.faceCol = color(255,255,255); 
        this.noseCol = color(255,100,100);
        this.textCol = color(255,100,100);

        this.gridX = gX;
        this.gridY = gY;
        this.moveUpTo = y;

    }

    infect() {
        this.infected = true;
        this.faceCol = color(49, 142, 0);
        this.noseCol = color(40,102,7);
        this.textCol = color(255,255,255);
    }

    draw() {

        noStroke();
        fill(this.faceCol);
        ellipse(this.pos.x-10, this.pos.y-12,10, 27);    // left ear
        ellipse(this.pos.x+10, this.pos.y-12,10, 27);    // right ear
        ellipse(this.pos.x, this.pos.y-2,32, 26);       // head

        fill(this.noseCol);
        triangle(this.pos.x-5, this.pos.y+2, 
                this.pos.x+5, this.pos.y+2, 
                this.pos.x, this.pos.y+7 );             // nose
        
        fill(this.textCol);
        textSize(14);
        text(this.strength, this.pos.x-3.5, this.pos.y-1);
    }
}