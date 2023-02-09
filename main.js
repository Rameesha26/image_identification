//https://teachablemachine.withgoogle.com/models/umc9TQvQX/

Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("captured_img").innerHTML='<img id="cap_img" src="'+data_uri+'" />'
    })
}

console.log("ml5 ver=",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/248I8G1yM/model.json',modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function check(){
    img=document.getElementById("cap_img")
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object").innerHTML="Person: "+results[0].label;
        document.getElementById("result_accuracy").innerHTML="Accuracy: "+results[0].confidence.toFixed(4);
    }
}