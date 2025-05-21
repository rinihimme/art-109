


// sound files
let snd1, snd2, snd3, snd4, snd5, snd6, snd7, snd8;
let mouseTap;

// background images
var start_screen, living_room, info_screen, hallway_screen;
var front_yard_screen, kitchen_screen, bedroom_screen, bathroom_screen;
var exercise, hunger, sleep, hygiene;

var mgr;

// sprites
var apollo;


function preload() {

   snd1 = loadSound("assets/bgm.mp3");
   snd2 = loadSound("assets/hmm.mp3");
   snd3 = loadSound("assets/door.wav");
   snd4 = loadSound("assets/giggle.mp3");
   snd5 = loadSound("assets/tune.mp3");
   snd6 = loadSound("assets/yummy.mp3");
   snd7 = loadSound("assets/sleep.mp3");
   snd8 = loadSound("assets/sigh.mp3");
}


function setup() {

    createCanvas(800, 500);
    mgr = new SceneManager();
    mouseTap = false;
    frameRate(10);

    apollo = createSprite(0, 0);
    apollo.addAnimation("idle", "assets/idle1.png", "assets/idle3.png");
    apollo.addAnimation("happy", "assets/happy1.png", "assets/happy3.png");
    apollo.addAnimation("frontyard", "assets/frontyard1.png", "assets/frontyard3.png");
    apollo.addAnimation("kitchen", "assets/kitchen1.png", "assets/kitchen3.png");
    apollo.addAnimation("bedroom", "assets/bedroom1.png", "assets/bedroom3.png");
    apollo.addAnimation("bathroom", "assets/bathroom1.png", "assets/bathroom3.png");
    apollo.visible = false;

    // background images
    start_screen = loadImage("assets/start_screen.jpg");
    living_room = loadImage("assets/living_room.jpg");
    info_screen = loadImage("assets/info_screen.jpg");
    hallway_screen = loadImage("assets/hallway.jpg");
    front_yard_screen = loadImage("assets/front_yard.jpg");
    kitchen_screen = loadImage("assets/kitchen.jpg");
    bedroom_screen = loadImage("assets/bedroom.jpg");
    bathroom_screen = loadImage("assets/bathroom.jpg");

    // preloaded scenes
    mgr.addScene (splash);
    mgr.addScene (help);
    mgr.addScene (livingroom);
    mgr.addScene (hallway);
    mgr.addScene (frontyard);
    mgr.addScene (kitchen);
    mgr.addScene (bedroom);
    mgr.addScene (bathroom);
    mgr.showNextScene();
}


function draw()
{
    if (mouseIsPressed == false) {
        mouseTap = false;
    }

    mgr.draw();
}


function mousePressed()
{
    if (mouseTap == false) {
        mgr.mousePressed();
        mouseTap = true;
    }
}


function keyPressed()
{
    switch(key)
    {
        case '1':
            mgr.showScene( splash );
            break;
        case '2':
            mgr.showScene( livingroom );
            break;
        case '3':
            mgr.showScene( hallway );
            break;
        case '4':
            mgr.showScene( frontyard );
            break;
        case '5':
            mgr.showScene( kitchen );
            break;
        case '6':
            mgr.showScene( bedroom );
            break;
        case '7':
            mgr.showScene( bathroom );
            break;
        case 'h':
            mgr.showScene( help );
            break;
    }

    mgr.keyPressed();
}
