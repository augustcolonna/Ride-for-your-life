window.onload = () => {
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    canvas.style.display = 'none'

    const startScreen = document.querySelector('.start-game');
    const startBtn = document.querySelector('#start-button');
    
    const bgImg = new Image()
    bgImg.src = ''

    const player = new Image()
    player.src = ''

    //player movement variables
    let isMovingLeft = false;
    let isMovingRight = false;
    let playerX
    let playerY
    let playerWidth
    let playerHeight
    let playerSpeed

    //game misc. variables
    let gameOver = false;
    let animateId;

    //obstacles that will be on screen
    const obstacle1 = () => {

    }

    const obstacle2 = () => {

    }

    //animation
    const animate = () => {

    if(isMovingLeft && playerX > 0){
        playerX -= playerSpeed
    }
    else if(isMovingRight && playerX < canvas.width - playerWidth){
        playerX += playerSpeed
    }

    if(gameOver){
        cancelAnimationFrame(animateId)
    }
    else{
        animateId = requestAnimationFrame(animate)
    }

    }

    function startGame () {
        console.log('Put that helmet on, its going to get bumpy')
        startScreen.style.display = 'none';
        canvas.style.display = 'block';
        animate()
        obstacle1()
        obstacle2()
    }

    startBtn.addEventListener('click', startGame)


    document.addEventListener('keydown', event => {
        if(event.key === 'a' || event.key === 'A'){
            isMovingLeft = true;
        }
        if(event.key === 'd' || event.key === 'D'){
            isMovingRight = true;
        }
    })

    document.addEventListener('keyup', event => {
        if(event.key === 'a' || event.key === 'A'){
            isMovingLeft = false;
        }
        if(event.key === 'd' || event.key === 'D'){
            isMovingRight = false;
        }
    })
}