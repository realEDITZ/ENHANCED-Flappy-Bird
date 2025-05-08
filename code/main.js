import kaboom from "kaboom";

// initialize context
kaboom({
  scale: 1.3
});

// load assets
loadSprite("birdy", "sprites/birdy.png");
loadSprite("bg", "sprites/bg.png");
loadSprite("pipe", "sprites/pipe.png");
loadSound("wooosh", "sounds/wooosh.mp3");
loadSound("point", "sounds/point.mp3");
loadSound("hit", "sounds/hit.wav");


let highScore = 0;

scene("game", () => {
  let score = 0;
  let gameSpeed = 160; // Initial speed
  let laserThreshold = rand(20, 35);
  let lasersActive = false;
  let laserDuration = 60; // Initial duration in seconds
  let breakDuration = 30; // Break duration in seconds
  
  // Function to calculate pipe gap based on score
  function getPipeGap() {
    const baseGap = 245; // Start with a wider gap
    const minGap = 132; // Don't let it get too narrow
    const reductionRate = 5; // How much to reduce per point
    const currentGap = Math.max(baseGap - (score * reductionRate), minGap);
    const variance = 33; // Small variance for randomness
    return currentGap + rand(-variance, variance);
  }

  add([
    sprite("bg", {width: width(), height: height()})
  ]);

  const scoreText = add([
    text(score, {size: 50})
  ]);

  // add a game object to screen
  const player = add([
    // list of components
    sprite("birdy"),
    scale(2),
    pos(80, 40),
    area(),
    body(),
  ]);

  function producePipes(){
    const offset = rand(-50, 50);
    const currentGap = getPipeGap();

    add([
      sprite("pipe"),
      pos(width(), height()/2 + offset + currentGap/2),
      "pipe",
      area(),
      {passed: false}
    ]);

    add([
      sprite("pipe", {flipY: true}),
      pos(width(), height()/2 + offset - currentGap/2),
      origin("botleft"),
      "pipe",
      area()
    ]);
  }

  loop(1.5, () => {
    producePipes();
  });

  action("pipe", (pipe) => {
    pipe.move(-gameSpeed, 0);

    if (pipe.passed === false && pipe.pos.x < player.pos.x) {
      pipe.passed = true;
      score += 1;
      scoreText.text = score;
      gameSpeed += 9; // Increase speed with each point
      play("point");
      
      if (score >= laserThreshold && !lasersActive) {
        lasersActive = true;
        spawnLaser();
        
        // Set timer to deactivate lasers
        wait(laserDuration, () => {
          lasersActive = false;
          
          // Wait break duration then restart with increased duration
          wait(breakDuration, () => {
            laserDuration += rand(10, 30); // Increase duration
            lasersActive = true;
            spawnLaser();
          });
        });
      }
    }
  });

  function spawnLaser() {
    if (!lasersActive) return;
    
    add([
      sprite("birdy"),
      pos(rand(0, width()), 0),
      area(),
      "laser",
      move(DOWN, 400),
    ]);

    wait(rand(1, 3.5), spawnLaser);
  }

  player.collides("laser", () => {
    play("hit");
    go("gameover", score);
  });

  player.collides("pipe", () => {
    play("hit");
    go("gameover", score);
  });

  player.action(() => {
    if (player.pos.y > height() + 30 || player.pos.y < -30) {
      go("gameover", score);
    }
  });

  keyPress("space", () => {
    play("wooosh");
    player.jump(310);
  });
});

scene("gameover", (score) => {
  if (score > highScore) {
    highScore = score;
  }

  add([
    text(
      "gameover! press space to try again!\n"
      + "score: " + score
      + "\nhigh score: " + highScore,
      {size: 35}
    )
  ]);

  keyPress("space", () => {
    go("game");
  });
});

go("game");