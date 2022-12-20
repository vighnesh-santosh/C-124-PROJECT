function setup()
{
    canvas = createCanvas(700,600);
    canvas.position(1200,200);

    video = createCapture(VIDEO);
    video.size(700,950);
    video.position(300,50)

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotposes);
}

function draw()
{
    background("#5196e3");
}

function modelDone()
{
    console.log("PoseNet Is Initialized And Loaded");
}

function gotposes(results,error)
{
    if(error)
    {
        console.error(error);
    }
    if(results.length > 0)
    {
        console.log(results);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
}