
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 230, 150, 220, 200);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 420, 460, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(70, 30, 20, 430);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(550, 30, 20, 430);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(80, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(565, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(565, 430, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(85, 430, 80);
}