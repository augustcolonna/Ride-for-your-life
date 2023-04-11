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
    const restartBtn = document.querySelector('#restart')
    const endScreen = document.querySelector('#game-over');
    endScreen.style.display = 'none' 
    
    //images for the game
    const bgImg = new Image()
    bgImg.src = './Images/background2.jpg'

    //let bg1x = 0;
    //let bg2x = -canvas-width;
    
    const player = new Image()
    player.src = './Images/bicycle.png'
    
    //negative objects
    const hiker = new Image()
    hiker.src = './Images/hiker.png'
    const pineTree = new Image()
    pineTree.src = './Images/pine-tree.png'
    const boulder = new Image()
    boulder.src = './Images/stone.png'

    const negativeImgArr = ['./Images/hiker.png','./Images/pine-tree.png','./Images/stone.png']

    //posisitve objects
    const water = new Image()
    water.src = './Images/plastic-bottle.png'
    const chocolate = new Image()
    chocolate.src = './Images/chocolate.png'
    const airPump = new Image()
    airPump.src = './Images/pump.png'

    const positiveImgArr = ['./Images/chocolate.png', './Images/pump.png', './Images/plastic-bottle.png']


    //player movement variables
    let isMovingLeft = false;
    let isMovingRight = false;
    let isMovingUp = false;
    let isMovingDown = false;
    let playerX = 80;
    let playerY = 300;
    let playerWidth = 70;
    let playerHeight = 70;
    let playerSpeed = 4;

    //game misc. variables
    let animateId = 0;

    //score
    let yourScore = 0;
    let lives = 4;

    //+ obstacle classes, functions
    class Obstacle {
        constructor() {
            this.width = 50;
            this.height = 70;
            this.x = 1000 - this.width;
            this.y = Math.random()*(canvas.height-this.height);
            this.speed = 1.5;
            this.img = airPump
        };
        drawObstacle() {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        };
        update(){
            this.x -= this.speed
        };
    };

      let positiveArr = [];
      const addPump = () => {
        const posObst = new Obstacle();
        positiveArr.push(posObst)
    };
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
                    
                    element.x = 2000

                    yourScore += 1
                    
                    scoreAmount.innerText = 'Your Score:' + yourScore

                    console.log("score increased by 1")
                };
        });
    };

    //- obstacle classes, functions

    class Obstacle2 {
        constructor() {
            this.width = 50;
            this.height = 70;
            this.x = 1000 - this.width;
            this.y = Math.random()*(canvas.height-this.height);
            this.speed = 1.5;
            this.img = hiker;
        };
        drawObstacle2() {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        };
        update2(){
            this.x -= this.speed

        };
    };

      let negativeArr = [];
      const addHiker = () => {
        const negObst = new Obstacle2();
        negativeArr.push(negObst)
    };
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
                    
                    element.x = 2000
                    
                    lives -= 1
                    
                    lifeAmount.innerText = 'Lives left:' + lives

                    console.log("lost a life")
                };
        });
    };

        function drawPlayer () {
            ctx.drawImage(player, playerX, playerY, playerWidth, playerHeight)
    };

    //animation
    const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    /*//moving background 1
    ctx.drawImage(bgImg, 0, bg1x, canvas.width, canvas.height);
    //moving background 2
    ctx.drawImage(bgImg, 0, bg2x, canvas.width, canvas.height);

    //make them move
    bg1x += playerSpeed
    bg2x += playerSpeed

    //check for end of backround
    if(bg1x > canvas.width){
        bg1x = -canvas.width;
    }
    if(bg2x > canvas.width){
        bg2x = -canvas.width;
    }*/
    ctx.drawImage(bgImg, 0,0, canvas.width, canvas.height);
    drawPlayer();
        
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
            };

        if(animateId % 200 === 0){
        addPump(); 
        addHiker();
        posObstCollision();
        negObstCollision();
        }
            drawPump();
            drawHiker();
            updatePump();
            updateHiker();

        if(lives === 0){
            cancelAnimationFrame(animateId);
            gameIsOver();
            console.log("game over");
        }else{
            animateId = requestAnimationFrame(animate);
        };
    };

    function startGame () {
        console.log('Put that helmet on, its going to get bumpy');
        startScreen.style.display = 'none';
        endScreen.style.display = 'none';
        canvas.style.display = 'block';
        scoreAmount.style.display = 'block';
        lifeAmount.style.display = 'block';

        animate()
    };

    function gameIsOver () {
        const totalScore = document.querySelector('.score');
        totalScore.innerHTML = 'Final Score:' + yourScore;
        startScreen.style.display = 'none';
        canvas.style.display = 'none';
        scoreAmount.style.display = 'none';
        lifeAmount.style.display = 'none';
        endScreen.style.display = 'block';
        restartBtn.style.display = 'block';
    };

    startBtn.addEventListener('click', startGame);

    restartBtn.addEventListener('click', () => {
        restartBtn.style.display = 'none';
        startScreen.style.display = 'none'
        canvas.style.display = 'block';
        scoreAmount.style.display = 'block';
        lifeAmount.style.display = 'block';
        endScreen.style.display = 'none';
       
         isMovingLeft = false;
         isMovingRight = false;
         isMovingUp = false;
         isMovingDown = false;
         playerX = 80;
         playerY = 300;
         playerWidth = 70;
         playerHeight = 70;
         playerSpeed = 4;

        //game misc. variables
         animateId = 0;

        //score
         yourScore = 0;
         scoreAmount.innerText = 'Your Score:' + yourScore
         lives = 4;
         lifeAmount.innerText = 'Lives left:' + lives
         
        //clear arrays
        positiveArr = [];
        negativeArr = [];

        startGame();
    });

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
    });

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
    });

}


