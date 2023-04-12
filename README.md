# The-Daily-Ride

<h1>The Daily Ride</h1>

<a href="https://augustcolonna.github.io/The-Daily-Ride/">Click here to play</a>

<h2>Description</h2>
<p>This is my final project for Ironhack Module 1, I have made a game using HTML, CSS, and Javascript. In this game, you control a playable character with A,S,D, and W around a game board where there are multiple obstacles coming from the right side of the screen. One of the obstacles (the pump) will increase your score, while the other obstascel (the hiker) will decrease your reamining lives. The objective of the game is to collect as many bike pumps as possible while staying away from the hikers. When and if a hiker is touched by the playable character, the player loses a life, and if you lose 4 lives, the game ends and you have the ability to start over again.</p>

<h2>MVP</h2>
<span>The minimum features required for this game were:</span>
<ul>
    <li>A single HTML page that has 3 states (splash, game, gameover)</li>
    <li>Ability to restart</li>
    <li>Win/Lose Logic</li>
    <li>Bonus: Local Storage, Audio.</li>
</ul>

<span>All of these conditions have been met in "The Daily Ride":</span>

<ul>
    <li>A single HTML page, 3 states are controlled in JS document</li>
    <li>Restart button after the game has ended</li>
    <li>Win by playing continually and beating your previous record</li>
    <li>Lose by running into 4 hikers during a game</li>
</ul>

<h2>Backlog</h2>
I have a list of items that I would like to add to the game:
<ul>
    <li>Moving background</li>
    <li>High Score-board</li>
    <li>Multiple types of objects rather than just 2</li>
    <li>At a specific score interval, ability to change character to new image</li>
</ul>

<h2>Data Structure</h2>

<h3>For what I refer to as the positive (score increasing) obstacle:</h3>
<ul>
    <li>class Obstacle{}</li>
    <li>addPump()</li>
    <li>drawPump()</li>
    <li>updatePump()</li>
    <li>posObstacleCollision()</li>
</ul>

<h3>For what I refer to as the negative (life decreasing) obstacle:</h3>
<ul>
    <li>class Obstacle2{}</li>
    <li>addHiker()</li>
    <li>drawHiker()</li>
    <li>updateHiker()</li>
    <li>negObstacleCollision()</li>
</ul>

<h3>To draw the player on the screen:</h3>
<ul>
    <li>drawPlayer()</li>
</ul>

<h3>To call the animationFrame and display the background, the player moving, when to add new obstacles, when to call the gameIsOver function:</h3> 
<ul>
    <li>animate()</li>
</ul>

<h3>What part of HTML is visible at start:</h3>
<ul>
    <li>startGame()</li>
</ul>

<h3>What part of HTML is visible at end:</h3>
<ul>
    <li>gameIsOver()</li>
</ul>

<h2>States y states transitions:</h2>
<ol>
    <li>Splash screen (start screen)</li>
    <li>Game screen where canvas is visible</li>
    <li>Game over screen whith restart option</li>
</ol>

<h2>Links:</h2>
<ul>
    <li><a href="https://www.figma.com/file/dgm66oDqWlOGV89hJ069cA/Ride-for-Your-life-Game?node-id=0-1&t=sbHPtgiBBnkbmlVO-0"> First concept on figma</a></li>
    <li><a href="https://trello.com/b/YgcNoobj/module-1-final-project">Trello board to help keep track of backlog and complete MVP requirements</a></li>
    <li><a href="https://docs.google.com/presentation/d/1H0Ngy2HWqggF6PqjDD0QrP8RXBdUQldejBxaNs5nto0/edit#slide=id.p">Presentation Slides</a></li>
    <li><a href="https://github.com/augustcolonna/The-Daily-Ride">GitHub Repo</a></li>
    <li><a href="https://augustcolonna.github.io/The-Daily-Ride/">Click here to play at the deployed link!</a></li>
</ul>
