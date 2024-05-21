

// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager



let homescreen;
let hometext;
let artistscreen;
let armstrong;
let narration;
let soundicon;
let photo2;
let photo3;
let photo4;
let photo5;
let photo6;
let photo7;
let photo8;
let photo9;
let photo10;
let photo11;
let photo12;
let photo13;
let songcover;

function preload() {

  homescreen = loadImage("assets/start.png");
  hometext = loadImage("assets/home_text.png");
  artistscreen = loadImage("assets/work.png");
  armstrong = loadSound("assets/wonderfulworld.mp3");
  narration = loadSound("assets/narration.mp3");
  soundicon = loadImage("assets/musicicon.png");
  photo2 = loadImage("assets/friends.png");
  photo3 = loadImage("assets/lunch.png");
  photo4 = loadImage("assets/sitdown.png");
  photo5 = loadImage("assets/jukebox.png");
  photo6 = loadImage("assets/snowphoto.png");
  photo7 = loadImage("assets/friendphoto.png");
  photo8 = loadImage("assets/phonecall.png");
  photo9 = loadImage("assets/worried.png");
  photo10 = loadImage("assets/caraccident.png");
  photo11 = loadImage("assets/sadness.png");
  photo12 = loadImage("assets/carradio.png");
  photo13 = loadImage("assets/funeral.png");
  songcover = loadImage("assets/albumcover.png");


}


// define your p5.play sprites as global objects first.


// global manager object
var mgr;


let cnv;





function setup() {
let cnv  =  createCanvas(windowWidth, windowHeight);
  //  console.log(hell);
  angleMode(DEGREES);
  cnv.mousePressed(setupSound); // callback function
     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (artiststatement);
    mgr.addScene (story1);
    mgr.addScene (story2);
    mgr.addScene (story3);
    mgr.addScene (story4);
    mgr.addScene (story5);
    mgr.addScene (story6);
    mgr.addScene (story7);
    mgr.addScene (story8);
    mgr.addScene (story9);
    mgr.addScene (story10);
    mgr.addScene (story11);
    mgr.addScene (story12);
    mgr.addScene (story13);
    mgr.showNextScene();

}

function setupSound() {
    // This is required now for most audio in browser apps.
    userStartAudio();
}


function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseMoved");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '':
            mgr.showScene( intro );
            break;
        case '':
            mgr.showScene( artiststatement );
            break;
        case '':
            mgr.showScene( story1 );
            break;
        case '':
            mgr.showScene( story2 );
            break; 
        case '':
            mgr.showScene( story3 );
            break;
        case '':
            mgr.showScene( story4 );
            break;
        case '7':
            mgr.showScene( story5 );
            break;  
        case '8':
            mgr.showScene( story6 );
            break; 
        case '9':
            mgr.showScene( story7 );
            break;  
        case '0':
            mgr.showScene( story8 );
            break;
        case 'a':
            mgr.showScene( story9 );
            break; 
        case 'b':
            mgr.showScene( story10 );
            break; 
        case 'c':
            mgr.showScene( story11 );
            break;
        case 'd':
            mgr.showScene( story12 );
            break; 
        case 'e':
            mgr.showScene( story13 );
            break;  
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
