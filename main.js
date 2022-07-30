Webcam.set({
    width: 350,
    height: 300,
    img_format: "png",
    png_quality: 90
});

camera= document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="capture_img" src="'+data_uri+'">';
    });
}

console.log("ml5version",ml5.version );
classifier= ml5.imageClassifier("", modelLoaded);

function modelLoaded(){
    console.log("model loaded");
}