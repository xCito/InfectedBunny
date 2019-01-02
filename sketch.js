
let bunnys = [];
let queue;
let stats;
let virusStrength;
let ROWS = 3;
let COLS = 3;
let interval;
let done = false;

function setup() {
    let canvas = createCanvas(900, 600);
    canvas.parent('canvas-holder');
    background(50);

    stats = new Stats(width-300,25);
    queue = new InfectQueue(width-115,50);

    let button = document.getElementById("restartBtn");
    button.addEventListener("click", restart);

    restart();
}

function draw() {
    background(50);

    bunnys.forEach(array => {
        array.forEach( elem => {
            elem.draw();
        });    
    });

    queue.draw();
    stats.draw();

    if(done) {
        fill(255,255,250);
        text("Final Result", width-260, height-50);
    }
}

function spread() {
    let infectedBunny = queue.pop();

    if(infectedBunny == undefined) {
        clearInterval(interval);
        console.log("no more");
        done = true;
        return;
    }
    let inX = parseInt(infectedBunny.gridX, 10);
    let inY = parseInt(infectedBunny.gridY, 10);

    for(let i=-1; i<=1; i+=2) {
        console.log("beep");
        if(inY < 0|| inX+i < 0 || inY >=ROWS || inX+i >= COLS)
            continue;
    
        if(bunnys[inY][inX+i].strength <= virusStrength && !bunnys[inY][inX+i].infected) {// left and right
            bunnys[inY][inX+i].infect();
            stats.totalInfected += 1;
            queue.push(bunnys[inY][inX+i]);
        }
    }
    for(let i=-1; i<=1; i+=2) {
        console.log("beep");
        if(inY+i < 0|| inX < 0 || inY+i >= ROWS || inX >= COLS)
            continue;
        
        if(bunnys[inY+i][inX].strength <= virusStrength && !bunnys[inY+i][inX].infected) {// up and down
            bunnys[inY+i][inX].infect();
            stats.totalInfected += 1;
            queue.push( bunnys[inY+i][inX] );
        }
    }

    if(queue.queue.length == 0) {
        clearInterval(interval);
        console.log("no more");
        done = true;
        return;
    }

}

function restart() {
    clearInterval(interval);
    done = false;
    let timer = parseInt(document.getElementById("inputSec").value);
    console.log("reset");
    ROWS = floor(random(5,15));
    COLS = floor(random(5,15));
    bunnys = [];
    queue.queue = [];
    stats.totalInfected = 0;
    //queue.lerpSpeed = timer/10000;
    console.log(queue.lerpSpeed);

    for(let i=0; i<ROWS; i++) {
        let arr = [];
        for(let j=0; j<COLS; j++) {
            arr.push(new Bunny(40+(j*40), 50+(i*40), j, i));
        }
        bunnys.push(arr);
    }

    let x = floor(random(0,COLS));
    let y = floor(random(0,ROWS));

    bunnys[y][x].infect();
    virusStrength =  bunnys[y][x].strength;
    stats.virusStrength = virusStrength;
    stats.totalInfected += 1;
    queue.push( bunnys[y][x] );

    interval = setInterval( spread , timer);
}


