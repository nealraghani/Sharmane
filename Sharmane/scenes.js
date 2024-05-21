
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes

let loy= 0;

////////////////////////////// 1 /////////////////

function intro()  {


    this.setup = function() {
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      // background("blue");
      // textAlign(CENTER);
      // textSize(29);
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering scene1");
        // textX = 10;
        // textY = 0;

      loy = 100;
      // background("red");

    }


    this.draw = function()
    {
        background(homescreen);
        textAlign(CENTER);
        textSize(29);
        // fill(200,0,0);

        push();
        image(hometext, 475, 40, 500, 200);
        pop();

        push();
        // fill("yellow");
        // noStroke();
        // rect(575, 550, 250, 60, 20);
        textSize(25);
        fill(255);
        textFont('Pixelify Sans');
        text("Artist Statement", 700, 586);
        if(mouseX >= 450 && mouseX <= 700 && mouseY >= 520 && mouseY <= 580 && mouseIsPressed == true){
          this.sceneManager.showNextScene();
        }
        pop();

        push();
        // fill("yellow");
        // noStroke();
        // rect(575, 420, 250, 60, 20);
        textSize(25);
        fill(255);
        textFont('Pixelify Sans');
        text("Story", 700, 455);
        if(mouseX >= 450 && mouseX <= 700 && mouseY >= 390 && mouseY <= 450 && mouseIsPressed == true){
          mgr.showScene( story1 );
        }
        pop();


    }
}

///////////////////////  2  ////////////////////////

function artiststatement()  {


  this.setup = function() {
    console.log("We are at setup for scene1");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering scene1");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(artistscreen);
      textSize(29);
      // fill(200,0,0);

      push();
      textSize(25);
      fill(255);
      textFont('Pixelify Sans');
      text("Sharmane tells the story of my mom’s best friend when she still lived in Johannesburg, South Africa.", 700, 100);
      text("The two met each other at work and became firm and fast friends after they had lunch together and", 680, 130);
      text("heard the hit song “What a Wonderful World” by Louis Armstrong in the restaurant. The shared adoration", 700, 160);
      text("of the song cemented their friendship deeper, with them even sharing matters relating to life goals,", 660, 190);
      text("problems at home, and regrets.", 240, 220);
      text("One day, however, Sharmane had not arrived at work. Realizing she had not mentioned anything about", 700, 270);
      text("missing work that day, my mom called her, but was unsuccessful. The next day, she was informed", 640, 300);
      text("Sharmane had lost her life prematurely in a car accident. Devastated and broken by the tragic event,", 680, 330);
      text("my mom arrived at the funeral. The song that played as she drove there was the song that solidified", 670, 360);
      text("the two as friends: “What a Wonderful World” by Louis Armstrong. ", 460, 390);
      text("When my mom told me this story, it struck me. Not only was this a heart-wrenching story, but it", 670, 440);
      text("exposed a side of my mom I hadn’t seen much of. As someone who has not experienced much loss in my life,", 695, 470);
      text("I felt for my mom at that moment. It was through telling this story where I realized that my mom–", 660, 500);
      text("someone who I thought lived the happiest life anyone could think of– is someone who has undergone the", 680, 530);
      text("lowest lows in life. She, too, had things she cared about taken away from her. In her case, it was", 635, 560);
      text("her best friend.", 150, 590);
      pop();

      push();
      // fill("yellow");
      // noStroke();
      // rect(625, 585, 150, 60, 20);
      textSize(25);
      fill(255);
      textFont('Pixelify Sans');
      text("Sharmane", 700, 620);
      if(mouseX >= 550 && mouseX <= 700 && mouseY >= 555 && mouseY <= 615 && mouseIsPressed == true){
        mgr.showScene( intro );
      }
      pop();


  }





}



////////////////////////////// 3 /////////////////

function story1() {

  this.setup = function() {
    console.log("We are at setup for story1");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story1");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(artistscreen);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      push();
      textSize(25);
      fill(255);
      textFont('Pixelify Sans');
      text("Listen to the audio recording to determine where to click.", 1000, 100);
      pop();

      //click to go to next scene
      push();
      // fill("yellow");
      // noStroke();
      // rect(10, 300, 500, 250, 0);
      if(mouseX >= -240 && mouseX <= 260 && mouseY >= 175 && mouseY <= 425 && mouseIsPressed == true){
        mgr.showScene( story2 );
      }
      pop();

      //audio button
      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }

}

////////////////////////////// 4 /////////////////

function story2() {

  this.setup = function() {
    console.log("We are at setup for story2");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story2");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo2);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      // push();
      // fill("yellow");
      // noStroke();
      // rect(850, 50, 300, 650, 0);
      if(mouseX >= 700 && mouseX <= 1000 && mouseY >= -275 && mouseY <= 375 && mouseIsPressed == true){
        mgr.showScene( story3 );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}

////////////////////////////// 4 /////////////////

function story3() {

  this.setup = function() {
    console.log("We are at setup for story3");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story3");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo3);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      push();
      // fill("yellow");
      // noStroke();
      // rect(10, 20, 500, 600, 0);
      if(mouseX >= -240 && mouseX <= 260 && mouseY >= -280 && mouseY <= 320 && mouseIsPressed == true){
        mgr.showScene( story4 );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}

////////////////////////////// 5 /////////////////

function story4() {

  this.setup = function() {
    console.log("We are at setup for story4");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story4");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo4);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      push();
      // fill("yellow");
      // noStroke();
      // rect(10, 10, 500, 400, 0);
      if(mouseX >= -240 && mouseX <= 260 && mouseY >= -190 && mouseY <= 210 && mouseIsPressed == true){
        mgr.showScene( story5 );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}

////////////////////////////// 5 /////////////////

function story5() {

  this.setup = function() {
    console.log("We are at setup for story5");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story5");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo5);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      push();
      // fill("yellow");
      // noStroke();
      // rect(400, 350, 500, 200, 0);
      if(mouseX >= 150 && mouseX <= 650 && mouseY >= 250 && mouseY <= 450 && mouseIsPressed == true){
        mgr.showScene( story6 );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}

////////////////////////////// 6 /////////////////

function story6() {

  this.setup = function() {
    console.log("We are at setup for story6");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story6");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo6);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      push();
      // fill("yellow");
      // noStroke();
      // rect(300, 200, 200, 500, 0);
      if(mouseX >= 200 && mouseX <= 400 && mouseY >= -50 && mouseY <= 450 && mouseIsPressed == true){
        mgr.showScene( story7 );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}

////////////////////////////// 7 /////////////////

function story7() {

  this.setup = function() {
    console.log("We are at setup for story7");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story7");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo7);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      // push();
      // fill("yellow");
      // noStroke();
      // rect(500, 200, 400, 500, 0);
      if(mouseX >= 300 && mouseX <= 700 && mouseY >= -50 && mouseY <= 450 && mouseIsPressed == true){
        mgr.showScene( story8 );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}

////////////////////////////// 8 /////////////////

function story8() {

  this.setup = function() {
    console.log("We are at setup for story8");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story8");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo8);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      push();
      // fill("yellow");
      // noStroke();
      // rect(450, 250, 200, 200, 0);
      if(mouseX >= 350 && mouseX <= 550 && mouseY >= 150 && mouseY <= 350 && mouseIsPressed == true){
        mgr.showScene( story9 );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}

////////////////////////////// 9 /////////////////

function story9() {

  this.setup = function() {
    console.log("We are at setup for story9");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story9");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo9);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      push();
      // fill("yellow");
      // noStroke();
      // rect(900, 100, 300, 500, 0);
      if(mouseX >= 750 && mouseX <= 1050 && mouseY >= -150 && mouseY <= 350 && mouseIsPressed == true){
        mgr.showScene( story10 );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}

////////////////////////////// 10 /////////////////

function story10() {

  this.setup = function() {
    console.log("We are at setup for story10");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story10");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo10);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      push();
      // fill("yellow");
      // noStroke();
      // rect(900, 100, 300, 500, 0);
      if(mouseX >= 750 && mouseX <= 1050 && mouseY >= -150 && mouseY <= 350 && mouseIsPressed == true){
        mgr.showScene( story11 );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}

////////////////////////////// 11 /////////////////

function story11() {

  this.setup = function() {
    console.log("We are at setup for story11");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story11");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo11);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      push();
      // fill("yellow");
      // noStroke();
      // rect(1080, 20, 310, 400, 0);
      if(mouseX >= 925 && mouseX <= 1235 && mouseY >= -180 && mouseY <= 220 && mouseIsPressed == true){
        mgr.showScene( story12 );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}

////////////////////////////// 12 /////////////////

function story12() {

  this.setup = function() {
    console.log("We are at setup for story12");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story12");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo12);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      push();
      // fill("yellow");
      // noStroke();
      // rect(100, 200, 900, 200, 0);
      if(mouseX >= -350 && mouseX <= 550 && mouseY >= 100 && mouseY <= 300 && mouseIsPressed == true){
        mgr.showScene( story13 );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}

////////////////////////////// 13 /////////////////

function story13() {

  this.setup = function() {
    console.log("We are at setup for story13");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    // background("blue");
    // textAlign(CENTER);
    // textSize(29);
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering story13");
      // textX = 10;
      // textY = 0;

    loy = 100;
    // background("red");

  }


  this.draw = function()
  {
      background(photo13);
      textAlign(CENTER);
      textSize(29);
      // fill(200,0,0);

      //click to go to next scene
      push();
      // fill("yellow");
      // noStroke();
      // rect(850, 250, 500, 400, 0);
      if(mouseX >= 600 && mouseX <= 1100 && mouseY >= 50 && mouseY <= 450 && mouseIsPressed == true){
        mgr.showScene( intro );
      }
      pop();

      push();
      image(soundicon, 20, 10, 50, 50);
      if(mouseX >= -25 && mouseX <= 45 && mouseY >= 0 && mouseY <= 40 && mouseIsPressed == true){
        narration.play();
      }
      pop();


  }


}