pop_music="";
happy_tunes_music="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

}
function preload(){
    pop_music = loadSound("pop_music.mp3");
    Harry_potter_theme_song = loadSound("happy_tunes.mp3");
}

function draw(){
    image(video,0,0,600,530);
}