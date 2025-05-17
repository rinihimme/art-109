



let meterExercise = 85;
let meterHunger = 85;
let meterSleep = 85;
let meterHygiene = 85;
let timer = 600;
//frameRate(10);


// 🌙🌈🍀💫 1. START SCREEN 🌙🌈🍀💫

function splash()  {

    let btnevent1 = false;
    let btnevent2 = false;
    let mouseTap = false; 
    
    this.setup = function()
    {
      outputVolume(.2);
      textFont('Comic Sans MS');
      mouseTap = false; 
    }

    this.enter = function()
    {
        textAlign(CENTER);
        textSize(30);
        noStroke();
        ghosty.visible = false;
        mouseTap = false; 
    }


    this.draw = function()
    {
      bgm();
      
      // background image
      image(start_screen, 0, 0, 800, 500);

      // enter button
      btnevent2 = checkButtonPress(" ", 55, 100, 160, 280, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
      if (btnevent2 && mouseTap == true) {
        btnevent2 = false;
         snd3.play();
         this.sceneManager.showScene( livingroom );
      }

      if(mouseIsPressed){
          mouseTap = false;
      } else {
          mouseTap = true;
      }

    }

    this.keyPressed = function() {
    }

    this.mousePressed = function() {
    }
}


// 🌙🌈🍀💫 2. LIVING ROOM 🌙🌈🍀💫

function livingroom() {

   let btnevent1 = false;
   let btnevent2 = false;
   let mouseTap = false;
   let hoverSound, exercise;


  this.setup = function()
  {
    mouseTap = false;
    exercise = loadImage("assets/apollo.png");
  }

  this.enter = function()
  {
    ghosty.position.x =  width/2;
    ghosty.position.y =  height/2;
    ghosty.visible = true;
    ghosty.changeAnimation("normal");
    mouseTap = false;
  }

    this.draw = function() 
    {
      // background image
      image(living_room, 0, 0, 800, 500);

      ghosty.changeAnimation("normal");

     if ( ghosty.mouse.hovering() ) {
        ghosty.changeAnimation("stand");
        if ( hoverSound == true ) {
          snd4.play();
       }
       hoverSound = false;
     } 
     else {
      hoverSound = true;
     }

      // info button
      btnevent1 = checkButtonPress("?", 750, 10, 40, 40, color(220, 100, 100), color(100), color(250));  
      if (btnevent1 && mouseTap == true) {
        btnevent1 = false;
        snd2.play();
        this.sceneManager.showScene( help );
      }

      // hallway button
      btnevent2 = checkButtonPress(" ", 700, 350, 70, 60, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
      if (btnevent2 && mouseTap == true) {
        btnevent2 = false;
          this.sceneManager.showScene( hallway );
      }

      // front yard button
      btnevent3 = checkButtonPress(" ", 55, 110, 160, 240, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
      if (btnevent3 && mouseTap == true) {
        btnevent3 = false;
        snd3.play();
          // playshortsound();  🌸ADD DOOR SFX
          this.sceneManager.showScene( frontyard );
      }

      // kitchen button
      btnevent4 = checkButtonPress(" ", 590, 95, 160, 230, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
      if (btnevent4 && mouseTap == true) {
        btnevent4 = false;
        snd3.play();
          // playshortsound();  🌸ADD DOOR SFX
          this.sceneManager.showScene( kitchen );
        }

        if(mouseIsPressed){
            mouseTap = false;
        } else {
            mouseTap = true;
        }

      // all meters
      meter(50, meterExercise, exercise);
      meter(250, meterHunger, exercise);
      meter(450, meterSleep, exercise);
      meter(650, meterHygiene, exercise);
  
      }
  
      this.keyPressed = function() {
      }
  
      this.mousePressed = function() {
      }
  }


// 🌙🌈🍀💫 3. HALLWAY 🌙🌈🍀💫

function hallway()  {

  // info button
   let btnevent1 = false;
   let btnevent2 = false;
   let mouseTap = false;
   let hoverSound, exercise;


  this.setup = function()
  {
    mouseTap = false;
    exercise = loadImage("assets/apollo.png");
  }

  this.enter = function()
  {
    ghosty.position.x =  width/2;
    ghosty.position.y =  height/2;
    ghosty.visible = true;
    ghosty.changeAnimation("normal");
    mouseTap = false; 
  }

    this.draw = function()
    {
      // background image
      image(hallway_screen, 0, 0, 800, 500);
      ghosty.changeAnimation("normal");

      if ( ghosty.mouse.hovering() ) {
        ghosty.changeAnimation("stand");
        if ( hoverSound == true ) {
          snd4.play();
       }
       hoverSound = false;
     } 
     else {
      hoverSound = true;
     }
    

      // info button
      btnevent1 = checkButtonPress("?", 750, 10, 40, 40, color(220, 100, 100), color(100), color(250));  
      if (btnevent1 && mouseTap == true) {
        btnevent1 = false;
        snd2.play();
        this.sceneManager.showScene( help );
      }
    
      // living room button
      btnevent2 = checkButtonPress(" ", 40, 350, 70, 60, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
      if (btnevent2 && mouseTap == true) {
        btnevent2 = false;
          this.sceneManager.showScene( livingroom );
      }

      // bedroom button
      btnevent3 = checkButtonPress(" ", 55, 95, 160, 230, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
      if (btnevent3 && mouseTap == true) {
        btnevent3 = false;
        snd3.play();
          this.sceneManager.showScene( bedroom );
      }

      // bathroom button
      btnevent4 = checkButtonPress(" ", 590, 95, 160, 230, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
      if (btnevent4 && mouseTap == true) {
        btnevent4 = false;
        snd3.play();
          this.sceneManager.showScene( bathroom );
        }

        if(mouseIsPressed){
            mouseTap = false;
        } else {
            mouseTap = true;
        }

      timerDay();

      // all meters
      meter(50, meterExercise, exercise);
      meter(250, meterExercise, exercise);
      meter(450, meterExercise, exercise);
      meter(650, meterExercise, exercise);
      }
  
      this.keyPressed = function() {
      }
  
      this.mousePressed = function() {
      }
  }


// 🌙🌈🍀💫 4. FRONT YARD 🌙🌈🍀💫

function frontyard()  {

  // info button
   let btnevent1 = false;
   let btnevent2 = false;
   let mouseTap = false; 
   let hoverSound, exercise;
   let button;

  this.setup = function()
  {
    mouseTap = false;
    exercise = loadImage("assets/apollo.png");
  }

  this.enter = function()
  {
    ghosty.position.x =  width/2;
    ghosty.position.y =  height/2;
    ghosty.visible = true;
    ghosty.changeAnimation("normal");
    mouseTap = false;
  }

    this.draw = function()
    {
      // background image
      image(front_yard_screen, 0, 0, 800, 500);
      ghosty.changeAnimation("normal");
 
      if ( ghosty.mouse.hovering() ) {
        ghosty.changeAnimation("stand");
        if ( hoverSound == true ) {
          snd5.play();
       }
       hoverSound = false;
     } 
     else {
      hoverSound = true;
     }

      // living room button
      btnevent1 = checkButtonPress(" ", 55, 95, 160, 230, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
      if (btnevent1 && mouseTap == true) {
        btnevent1 = false;
        snd5.stop();
        snd3.play();
          this.sceneManager.showScene( livingroom );
        }

        if(mouseIsPressed){
            mouseTap = false;
        } else {
            mouseTap = true;
        }

      // meter button
      let button;

        button = checkButtonPress(" ", 690, 330, 90, 90, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));

        if (button == true) {
          button = false;

          if (meterExercise < 120) {
            meterExercise = meterExercise + 40;
          }
          if (meterExercise > 120) {
            meterExercise = 120;
          }
        }

      timerDay();

      // exercise meter
      meter(50, meterExercise, exercise);
      }
  
      this.keyPressed = function() {
      }
  
      this.mousePressed = function() {
      }
  }


// 🌙🌈🍀💫 5. KITCHEN 🌙🌈🍀💫

function kitchen()  {

  // info button
   let btnevent1 = false;
   let btnevent2 = false;
   let mouseTap = false; 
   let hoverSound, exercise;


  this.setup = function()
  {
    mouseTap = false; 
    exercise = loadImage("assets/apollo.png");
  }

  this.enter = function()
  {
    ghosty.position.x =  width/2;
    ghosty.position.y =  height/2;
    ghosty.visible = true;
    ghosty.changeAnimation("normal");
    mouseTap = false; 
  }

    this.draw = function()
    {
      // background image
      image(kitchen_screen, 0, 0, 800, 500);
      ghosty.changeAnimation("normal");

      if ( ghosty.mouse.hovering() ) {
        ghosty.changeAnimation("stand");
        if ( hoverSound == true ) {
          snd6.play();
       }
       hoverSound = false;
     } 
     else {
      hoverSound = true;
     }

      // living room button
      btnevent1 = checkButtonPress(" ", 590, 95, 160, 230, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
      if (btnevent1 && mouseTap == true) {
        btnevent1 = false;
        snd3.play();
          this.sceneManager.showScene( livingroom );
        }

      if(mouseIsPressed){
            mouseTap = false;
        } else {
            mouseTap = true;
        }

        timerDay();

        // exercise meter
        meter(50, meterExercise, exercise);
      }
  
      this.keyPressed = function() {
      }
  
      this.mousePressed = function() {
      }
  }


// 🌙🌈🍀💫 6. BEDROOM 🌙🌈🍀💫

function bedroom()  {

  // info button
   let btnevent1 = false;
   let btnevent2 = false;
   let mouseTap = false; 
   let hoverSound, exercise;


  this.setup = function()
  {
    mouseTap = false; 
    exercise = loadImage("assets/apollo.png");
  }

  this.enter = function()
  {
    ghosty.position.x =  width/2;
    ghosty.position.y =  height/2;
    ghosty.visible = true;
    ghosty.changeAnimation("normal");
    mouseTap = false; 
  }

    this.draw = function()
    {
      // background image
      image(bedroom_screen, 0, 0, 800, 500);
      ghosty.changeAnimation("normal");

      if ( ghosty.mouse.hovering() ) {
        ghosty.changeAnimation("stand");
        if ( hoverSound == true ) {
          snd7.play();
       }
       hoverSound = false;
     } 
     else {
      hoverSound = true;
     }

      // hallway button
      btnevent1 = checkButtonPress(" ", 55, 95, 160, 230, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
      if (btnevent1 && mouseTap == true) {
        btnevent1 = false;
        snd7.stop();
        snd3.play();
          this.sceneManager.showScene( hallway );
        }

      if(mouseIsPressed){
            mouseTap = false;
        } else {
            mouseTap = true;
        }

        timerDay();

        // exercise meter
        meter(50, meterExercise, exercise);
      }
  
      this.keyPressed = function() {
      }
  
      this.mousePressed = function() {
      }
  }


// 🌙🌈🍀💫 7. BATHROOM 🌙🌈🍀💫

function bathroom()  {

  // info button
   let btnevent1 = false;
   let btnevent2 = false;
   let mouseTap = false; 
   let hoverSound, exercise;


  this.setup = function()
  {
    mouseTap = false; 
    exercise = loadImage("assets/apollo.png");
  }

  this.enter = function()
  {
    ghosty.position.x =  width/2;
    ghosty.position.y =  height/2;
    ghosty.visible = true;
    ghosty.changeAnimation("normal");
    mouseTap = false; 
  }

    this.draw = function()
    {
      // background image
      image(bathroom_screen, 0, 0, 800, 500);
      ghosty.changeAnimation("normal");

      if ( ghosty.mouse.hovering() ) {
        ghosty.changeAnimation("stand");
        if ( hoverSound == true ) {
          snd8.play();
       }
       hoverSound = false;
     } 
     else {
      hoverSound = true;
     }

      // hallway button
      btnevent1 = checkButtonPress(" ", 590, 95, 160, 230, color(0, 0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
      if (btnevent1 && mouseTap == true) {
        btnevent1 = false;
        snd3.play();
          this.sceneManager.showScene( hallway );
        }

      if(mouseIsPressed){
            mouseTap = false;
        } else {
            mouseTap = true;
        }

        timerDay();

        // exercise meter
        meter(50, meterExercise, exercise);
      }
  
      this.keyPressed = function() {
      }
  
      this.mousePressed = function() {
      }
  }


//////// INFO ////////

function help() {

  let mouseTap = false;

    this.setup = function()
    {
      mouseTap = false;
    }

    this.enter = function()
    {
      ghosty.visible = false;
      mouseTap = false;
    }

    this.draw = function()
    {
      // background image
      image(info_screen, 0, 0, 800, 500);

      // info button
      btnevent1 = checkButtonPress("X", 750, 10, 40, 40, color(220, 100, 100), color(100), color(250));  
      if (btnevent1 && mouseTap == true) {
        btnevent1 = false;
        this.sceneManager.showScene( livingroom );
      }

      if(mouseIsPressed){
            mouseTap = false;
        } else {
            mouseTap = true;
        }
    }

    this.keyPressed = function() {
    }

    this.mousePressed = function() {
    }
}


//////// OTHER FUNCTIONS ////////

function checkButtonPress(str, bx, by, boxW, boxH, upcolor, ovcolor, dncolor) {

  let btnc = "";
  let btnstate = false;

  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      btnc = ovcolor;
      btnstate = false;
    } else {
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    btnc = upcolor;
    overBox = false;
  }

  push();
    translate(bx,by);
    fill(btnc);
    rect(0, 0, boxW, boxH,10); // draw the box

    fill(20);
    noStroke();
    textSize(20);
    textAlign(CENTER);
    text (str,boxW/2,28);
  pop();

    return btnstate;
}


function bgm() {

  if ( !snd1.isPlaying() ) {
    snd1.play();
 }
}


function meter(meterX, meterFill, icon) {

  fill(0, 0, 0);
  rect(meterX, 460, 120, 20, 24);

  if(meterFill > 80) {
    fill(110, 230, 90);
  }

  else if(meterFill > 40 && meterFill < 81) {
    fill(240, 170, 90);
  }

  else {
    fill (255, 0, 0);
  }

  rect(meterX, 460, meterFill, 20, 24);

  image(icon, meterX - 40, 430, 60, 60);    
}

// function meterButton(meterSelected) {
//   let button;
  
//   button = checkButtonPress("test", 700, 350, 70, 60, color(0, 0, 0), color(0, 0, 0, 0), color(0, 0, 0, 0));
  
//   if (button == true) {
//     button = false;

//     if (meterSelected < 120) {
//       meterSelected = meterSelected + 40;
//     }
//     if (meterSelected > 120) {
//       meterSelected = 120;
//     }
//   }
// }

function timerDay() {

  if(timer < 1) {

    if(meterExercise > 0) {
      // meter degeneration (pixels)
      meterExercise = meterExercise - 2;
    }
    if(meterExercise < 0) {
      meterExercise = 0;
    }

    // meter degeneration (frames)
    timer = 600;
  }

  else{
    timer = timer - 1;
  }
}