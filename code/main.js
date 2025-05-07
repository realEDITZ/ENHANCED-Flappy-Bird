import kaboom from "kaboom";

// initialize context
kaboom({
  scale: 1.35
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

  // Function to calculate pipe gap based on score
  function getPipeGap() {
    const minGap = 120;
    const maxGap = 200;
    const variance = Math.min(score * 3, 80); // Increases variance with score, max 80
    return minGap + rand(-variance, variance);
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

  function spawnLaser() {
    if (!lasersActive) return;

    add([
      sprite("birdy"),
      area(),
      pos(rand(0, width()), 0),
      move(DOWN, 400),
      rotate(180),
      "laser",
      scale(1.5)
    ]);

    wait(rand(0.8, 2), spawnLaser);
  }

  action("pipe", (pipe) => {
    pipe.move(-gameSpeed, 0);

    if (pipe.passed === false && pipe.pos.x < player.pos.x) {
      pipe.passed = true;
      score += 1;
      scoreText.text = score;
      gameSpeed += 7; // Increase speed with each point
      play("point");
    }
  });

  // increment score every frame
  action(() => {
    score++;
    scoreText.text = score;

    if (score >= laserThreshold && !lasersActive) {
      lasersActive = true;
      spawnLaser();
    }
  });

  player.collides("pipe", () => {
    play("hit");
    go("gameover", score);
  });

  player.collides("laser", () => {
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
      {size: 36}
    )
  ]);

  keyPress("space", () => {
    go("game");
  });
});

go("game");