function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 150, 100, 300, 300);
fill(0,0,255);
stroke(0,0,255);
circle(50,50,70);
fill(0,0,255);
stroke(0,0,255);
circle(600,50,70);
fill(0,0,255);
stroke(0,0,255);
circle(50,400,70);
fill(0,0,255);
stroke(0,0,255);
circle(600,400,70);
fill(255,0,0);
stroke(255,0,0);
rect(90,40,480,20);
rect(90,390,480,20);
rect(40,40,20,400);
rect(590,40,20,400);
}

function take_snapshot(){
    save('student_name.png')
}

