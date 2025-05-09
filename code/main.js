import kaboom from "kaboom";

// initialize context
kaboom({
  scale: 1.3
});

// load assets
loadSprite("birdy", "sprites/birdy.png");
loadSprite("burdy", "sprites/bean.png");
loadSprite("LAZAR", "sprites/LAZAR.png");
loadSprite("bg", "sprites/bg.png");
loadSprite("pipe", "sprites/pipe.png");
loadSprite("box", "sprites/box.png");
loadSound("wooosh", "sounds/wooosh.mp3");
loadSound("point", "sounds/point.mp3");
loadSound("hit", "sounds/hit.wav");


let highScore = 0;

scene("game", () => {
  let score = 0;
  let gameSpeed = 160; // Initial speed
  let baseSpeed = 160; // Store base speed for power-ups
  let laserThreshold = rand(20, 35);
  let lasersActive = false;
  let laserDuration = 25; // Initial duration in seconds
  let breakDuration = 20; // Break duration in seconds
  let bulletThreshold = rand(38, 55);
  let bulletsActive = false;
  let immunityHits = 0;

  // Power-up system
  function spawnPowerUp() {
    if (!player.exists()) return;

    const powerUps = [
      { name: "quarterSpeed", chance: 0.25, duration: 15 },
      { name: "halfSpeed", chance: 0.25, duration: 10 },
      { name: "immunity", chance: 0.15, duration: 0 },
      { name: "doubleSpeed", chance: 0.15, duration: 7 },
      { name: "spawnLasers", chance: 0.1, duration: 5 },
      { name: "spawnBullets", chance: 0.1, duration: 5 }
    ];

    add([
      sprite("box"),
      pos(width(), rand(50, height() - 100)),
      area(),
      "powerup",
      { type: choose(powerUps) },
      move(LEFT, gameSpeed)
    ]);

    wait(rand(23, 40), spawnPowerUp);
  }

  function activatePowerUp(type) {
      switch(type.name) {
        case "quarterSpeed":
          const quarterSpeed = gameSpeed * 0.25;
          gameSpeed = quarterSpeed;
          wait(type.duration, () => gameSpeed = gameSpeed / 0.25);
          break;
        case "halfSpeed":
          const halfSpeed = gameSpeed * 0.5;
          gameSpeed = halfSpeed;
          wait(type.duration, () => gameSpeed = gameSpeed / 0.5);
          break;
        case "immunity":
          immunityHits = 2;
          break;
        case "doubleSpeed":
          const doubleSpeed = gameSpeed * 2;
          gameSpeed = doubleSpeed;
          wait(type.duration, () => gameSpeed = gameSpeed / 2);
          break;
        case "spawnLasers":
          lasersActive = true;
          wait(type.duration, () => lasersActive = false);
          break;
        case "spawnBullets":
          bulletsActive = true;
          wait(type.duration, () => bulletsActive = false);
          break;
        case "doubleScore":
          scoreMultiplier = 2;
          wait(type.duration, () => scoreMultiplier = 1);
          break;
        case "tripleScore":
          scoreMultiplier = 3;
          wait(type.duration, () => scoreMultiplier = 1);
          break;
      }
    }

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

  // Start spawning power-ups
  wait(5, spawnPowerUp);

  action("pipe", (pipe) => {
    pipe.move(-gameSpeed, 0);

    if (pipe.passed === false && pipe.pos.x < player.pos.x) {
      pipe.passed = true;
      score += 1;
      scoreText.text = score;
      gameSpeed += 9; // Increase speed with each point
      play("point");

      if (score >= bulletThreshold && !bulletsActive) {
        bulletsActive = true;
        spawnBullet();
      }

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
      sprite("LAZAR"),
      pos(rand(0, width()), 0),
      area(),
      "laser",
      move(DOWN, 400),
    ]);

    wait(rand(1, 3.5), spawnLaser);
  }

  function spawnBullet() {
    if (!bulletsActive) return;

    add([
      sprite("burdy"),
      pos(width(), rand(50, height() - 50)),
      area(),
      "bullet",
      move(LEFT, 500),
    ]);

    wait(rand(1.5, 4), spawnBullet);
  }

  player.collides("bullet", () => {
    play("hit");
    go("gameover", score);
  });

  player.collides("laser", () => {
    play("hit");
    go("gameover", score);
  });

  player.collides("pipe", () => {
    if (immunityHits > 0) {
      immunityHits--;
      return;
    }
    play("hit");
    go("gameover", score);
  });

  player.collides("powerup", (p) => {
    activatePowerUp(p.type);
    destroy(p);
    play("point");
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