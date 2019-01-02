
class InfectQueue {
    constructor(x,y) {
        this.pos = createVector(x,y);
        this.queue = [];
        this.lerpSpeed = 0.02;
    }

    push( bunny ) {
        let bun = new Bunny(bunny.pos.x, bunny.pos.y, bunny.gridX, bunny.gridY);
        bun.infected = bunny.infected;
        bun.strength = bunny.strength;
        bun.pos.x = this.pos.x + 35;
        bun.pos.y = (50*(this.queue.length+2)) + 100;
        
        this.queue.push(bun);
        console.log("PUSH Queue size: " + this.queue.length);
        console.log(this.queue);
    }
    pop() {

        let b = this.queue.shift();
        console.log("POP Queue size: " + this.queue.length);
        console.log(this.queue);

 
        return b;
    }

    draw() {
        stroke(255)
        strokeWeight(3);
        fill(255,255,255);
        line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + height - 100);
        line(this.pos.x+70, this.pos.y, this.pos.x+70, this.pos.y + height-100);

        if(this.queue.length > 0)
            this.queue[0].infect();
        this.queue.forEach( (bunny, index) => {
            bunny.pos.y = lerp(bunny.pos.y, 50+(50*index), this.lerpSpeed);
            bunny.draw();

            text("("+bunny.gridY+ "," + bunny.gridX+")", bunny.pos.x+40, bunny.pos.y);
        });
    }
}