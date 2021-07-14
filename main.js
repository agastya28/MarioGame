

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();

	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_kill = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO)
	/*translate(video.width, 0)
	scale(-1, 1)*/

	video.size(600, 300)
	video.parent("game_console")

	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotResults)

	instializeInSetup(mario);
}

function draw() {
	game()
}

 function modelLoaded() {
	 console.log("Model Loaded");
 }

 function gotResults(results) {
	 if (results.length > 0){
		 noseX = results[0].pose.nose.x;
		 noseY = results[0].pose.nose.y;
		 console.log(results);
	 }
 }






