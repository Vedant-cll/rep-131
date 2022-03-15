var status="";

function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
}

    
    function preload(){
        img7=loadImage("fa3938c0-63c3-4328-9b0c-86caab2b9955_1.84e66186cae5ed17608c352478d1c342.jpeg");
    }
    function modelLoaded(){
        console.log("modelLoaded");
    status = true ;
    objectDetector.detect(img7, gotResult);
    }    
    function gotResult(error, results){
        if(error){
            console.log(error);
        }
            
        console.log(results);
    }

    function draw(){
        image(img7,0,0,600,600);
    }
