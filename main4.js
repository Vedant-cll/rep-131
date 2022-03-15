var status="";

function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
}

    
    function preload(){
        img3=loadImage("Mid_Century_Modern_Dunbar_Style_Lounge_Chair_9.JPG");
    }
    function modelLoaded(){
        console.log("modelLoaded");
    status = true ;
    objectDetector.detect(img3, gotResult);
    }    
    function gotResult(error, results){
        if(error){
            console.log(error);
        }
            
        console.log(results);
    }

    function draw(){
        image(img3,0,0,600,600);
    }
