var status="";

function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
}

    
    function preload(){
        img6=loadImage("OIP (8).jpg");
    }
    function modelLoaded(){
        console.log("modelLoaded");
    status = true ;
    objectDetector.detect(img6, gotResult);
    }    
    function gotResult(error, results){
        if(error){
            console.log(error);
        }
            
        console.log(results);
    }

    function draw(){
        image(img6,0,0,600,600);
    }
