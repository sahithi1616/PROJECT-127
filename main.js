song="";

song="";

function preload()
    {
song = loadSound("music.mp3")
song = loadSound("music.mp3")
    }

    function setup(){
        canvas = createCanvas(600,500);
        canvas.center();
    
        video = centerCapture(VIDEO);
        video.hide();
    }
    
    function draw(){
        image(video , 0 ,0 , 600 , 500);
    }