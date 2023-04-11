window.onload = () => {
    //canvas board
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    const scoreAmount = document.querySelector('#your-score')
    const lifeAmount = document.querySelector('#lives-left')
    canvas.style.display = 'none'
    scoreAmount.style.display = 'none';
    lifeAmount.style.display = 'none';

    //game states
    const startScreen = document.querySelector('.start-game');
    const startBtn = document.querySelector('#start-button');
    const endScreen = document.querySelector('#game-over');
    endScreen.style.display = 'none' 
    
    //images for the game
    const bgImg = new Image()
    bgImg.src = './Images/background2.jpg'

    const player = new Image()
    player.src = './Images/bicycle.png'
    
    //negative objects
    const hiker = new Image()
    hiker.src = './Images/hiker.png'
    const pineTree = new Image()
    pineTree.src = './Images/pine-tree.png'
    const boulder = new Image()
    boulder.src = './Images/stone.png'

    //posisitve objects
    const water = new Image()
    water.src = './Images/plastic-bottle.png'
    const chocolate = new Image()
    chocolate.src = './Images/chocolate.png'
    const airPump = new Image()
    airPump.src = './Images/pump.png'

    //player movement variables
    let isMovingLeft = false;
    let isMovingRight = false;
    let isMovingUp = false;
    let isMovingDown = false;
    let playerX = 80;
    let playerY = 300;
    let playerWidth = 60;
    let playerHeight = 60;
    let playerSpeed = 4;


    //game misc. variables
    let gameOver = false;
    let animateId = 0;

     //score
     let yourScore = 0;
     let lives = 4;

    //+ obstacle classes, functions
     const positiveImgArr = ['./Images/chocolate.png', './Images/pump.png', './Images/plastic-bottle.png']

    class Obstacle {
        constructor(width, height, x, y, speed) {
            this.width = 30;
            this.height = 50;
            this.x = 1400 - this.width;
            this.y = Math.random()*(canvas.height-this.height);
            this.speed = 2;
            this.img = airPump
        }
        drawObstacle() {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        update(){
            this.x -= this.speed
        }
      }

      let positiveArr = [];
      const addPump = () => {
        const posObst = new Obstacle();
        positiveArr.push(posObst)
      }
      const drawPump = () => {
        positiveArr.forEach((element) => {
            element.drawObstacle();
        });
      };
      const updatePump = () => {
        positiveArr.forEach((element) => {
            element.update();
        });
      };

      function posObstCollision (){
        positiveArr.forEach((element) => {
            if(playerX < element.x + element.width &&
                playerX + playerWidth > element.x &&
                playerY < element.y + element.height &&
                playerY + playerHeight > element.y){
                    yourScore += 1
                    
                    scoreAmount.innerText = 'Your Score:' + yourScore
                }
          });
        }

    //- obstacle classes, functions
    const negativeImgArr = []

    class Obstacle2 {
        constructor(width, height, x, y, speed) {
            this.width = 50;
            this.height = 70;
            this.x = 1400 - this.width;
            this.y = Math.random()*(canvas.height-this.height);
            this.speed = 2;
            this.img = hiker;
        }
        drawObstacle2() {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
        update2(){
            this.x -= this.speed

        }
      }

      let negativeArr = [];
      const addHiker = () => {
        const negObst = new Obstacle2();
        negativeArr.push(negObst)
      }
      const drawHiker = () => {
        negativeArr.forEach((element) => {
            element.drawObstacle2();
        });
      };
      const updateHiker = () => {
        negativeArr.forEach((element) => {
            element.update2();
        });
      };

      function negObstCollision () {
        negativeArr.forEach((element) => {
            if(playerX < element.x + element.width &&
                playerX + playerWidth > element.x &&
                playerY < element.y + element.height &&
                playerY + playerHeight > element.y){
                    lives -= 1
                    
                    lifeAmount.innerText = 'Lives left:' + lives
                }
          });
        }

    //animation
    const animate = () => {
    ctx.drawImage(bgImg, 0,0, canvas.width, canvas.height)
    ctx.drawImage(player, playerX, playerY, playerWidth, playerHeight)
    
    if(isMovingLeft && playerX > 0){
        playerX -= playerSpeed
    }
    else if(isMovingRight && playerX < canvas.width - playerWidth){
        playerX += playerSpeed
    }
    else if(isMovingDown && playerY < canvas.height - playerHeight){
        playerY += playerSpeed
    }
    else if(isMovingUp && playerY > 0){
        playerY -= playerSpeed
    }

    if(animateId % 100 === 0){
       addPump(); 
       addHiker();
       posObstCollision();
       negObstCollision();
    }
    drawPump();
    drawHiker();
    updatePump();
    updateHiker();
    
    animateId = requestAnimationFrame(animate)

    if(lives === 0){
        cancelAnimationFrame(animateId)
        console.log("game over")
    };
}

    function startGame () {
        console.log('Put that helmet on, its going to get bumpy')
        startScreen.style.display = 'none';
        endScreen.style.display = 'none';
        canvas.style.display = 'block';
        scoreAmount.style.display = 'block';
        lifeAmount.style.display = 'block';
        animate()
    }

    startBtn.addEventListener('click', startGame)



    document.addEventListener('keydown', event => {
        if(event.key === 'a' || event.key === 'A'){
            isMovingLeft = true;
        }
        if(event.key === 'd' || event.key === 'D'){
            isMovingRight = true;
        }
        if(event.key === 'w' || event.key === 'W'){
            isMovingUp = true;
        }
        if(event.key === 's' || event.key === 'S'){
            isMovingDown = true;
        }
    })

    document.addEventListener('keyup', event => {
        if(event.key === 'a' || event.key === 'A'){
            isMovingLeft = false;
        }
        if(event.key === 'd' || event.key === 'D'){
            isMovingRight = false;
        }
        if(event.key === 'w' || event.key === 'W'){
            isMovingUp = false;
        }
        if(event.key === 's' || event.key === 'S'){
            isMovingDown = false;
        } 
})
}