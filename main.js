noseX = 0;
noseY = 0;

function preload() 
{
    clown_nose = loadImage('https://i.postimg.cc/0QVc8MHr/moustache.jpg');
}

function setup()
{
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    image(video, 0, 0, 450, 400);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('My image.jpeg')
}

function modelLoaded()
{
    console.log('Pose Net is Loaded');
}

function gotPoses(results)
{
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " +noseX);
        console.log("nose y = " +noseY);
    }
}