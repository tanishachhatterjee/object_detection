img = "";
status = "";
objects = [];
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}
function preload(){
    img = loadImage('fruits.jpeg');
}

    function draw(){
        image(img,0,0,300,300);
        if(status != ""){
            for(i = 0; i < objects.length; i++){
                document.getElementById("status").innerHTML = "Status: Objects Detected";
    
                fill("#FFFFFF");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%",objects[i].x +15, objects[i].y +15);
                noFill();
                stroke("#FFFFFF");
                rect(objects[i].x , objects[i].y, objects[i].width , objects[i].height );
            }
        }
    }
    

function modelLoaded()
{
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error, results)
{
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}