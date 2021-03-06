/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/kxsNPnBS
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.bitmapFont('carrier_command', 'assets/fonts/bitmapFonts/carrier_command.png', 'assets/fonts/bitmapFonts/carrier_command.xml');

    game.stage.backgroundColor = '#85b5e1';

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('player', 'sprites/phaser-dude.png');

    game.load.image('block', 'https://i.imgur.com/DJbqQuE.png')
}

var player;
var platforms;
var cursors;
var jumpButton;

var x = 0;
var y = 2;
function placeBlock(element, index, array)
{
    var vars = element.split(';');
    x += parseInt(vars[0]); //xOffset
    y -= parseInt(vars[1]); //yOffset

    platforms.create(300+x*40, 17000+y*-40, 'block');
}

function create() {
    //  Make the world larger than the actual canvas
    game.world.setBounds(0, 0, 800, 17000);

    player = game.add.sprite(100, 200, 'player');
    player.x = 400;
    player.y = 17000 - 80;

    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    platforms = game.add.physicsGroup();
    
    var levelData = "0;0;111,1;0;112,1;0;113,1;0;114,-7;1;101,1;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,0;-1,0;-1,-12;1,0;-1,0;-2,0;-1,0;-1,0;3,12;0,0;-1,0;-1,0;-1,0;-1,0;-1,-12;1,0;-1,11;4,-1;0,-1;0,-1;0,-1;0,-6;-4,1;0,1;0,1;0,4;-5,1;0,1;0,1;0,-10;-2,1;0,1;0,1;0,1;0,-5;6,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,12;7,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,-12;-1,0;-1,0;-1,1;0,1;0,2;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,0;1,0;1,0;-3,0;-1,0;-1,0;-1,-12;3,0;-1,0;-1,0;-1,0;-1,0;-1,8;3,1;0,1;0,1;0,-7;-3,1;0,1;0,5;-4,-1;0,-1;0,-1;0,-3;-3,-1;0,-1;0,-3;6,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,12;8,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,-10;-4;115,1;0,2;0,1;0,1;0,1;0,1;0,1;0,1;0,-10;0,11;1;101,0;1,0;1,-12;-2,0;1,0;1,12;-3;115,-12;0,0;-1,0;-1,12;1,0;-1,0;-1,0;-1,0;-1,0;-1,-12;3,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,12;2,0;-1,0;-1,0;-1,-12;0,0;-1,0;-1,12;1,0;-1,-4;9,1;0,1;0,1;0,-5;-3,-1;0,-1;0,-1;0,6;-3,1;0,-2;0,-5;-2,-1;0,-1;0,11;-2,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,-12;9,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,1;8,2;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,-9;-4,1;0,1;0,4;-3,1;0,1;0,2;-2,0;-1,0;-1,0;-1,-12;3,0;-1,0;-1,0;-1,0;-1,4;3,-1;0,-1;0,6;-3,1;0,1;0,2;0,0;-1,0;-1,-12;1,0;-1,12;-1;100,-1;0,-1;0,-2;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,12;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,-12;12,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-2,0;-1,0;2,0;-3,0;-1,0;-1,2;9,1;0,1;0,4;-3,1;0,1;0,-7;-5,1;0,1;0,3;-4,1;0,1;0,1;0,1;2,0;-1,0;-1,-12;2,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,12;3,0;-1,0;-1,0;-1,-1;0,-2;0,-1;0,-1;0,-1;0,-1;0,-1;0,-2;0,-1;0,2;0,0;-3,1;0,1;0,1;0,3;-2,1;0,1;0,1;0,-9;-4,1;0,1;0,1;0,2;-4,1;0,1;0,1;0,1;12,0;-1,0;-1,0;-1,0;-2,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,-12;14,0;-1,0;-1,0;-1,0;-1,0;-1,0;-2,0;-1,0;-1,0;-1,0;4,0;-5,0;-1,0;-1,0;-1,12;-1,-12;0,11;-1;120,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,11;0;107,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;1;120,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;4,0;2,0;2,0;-6,0;8,0;2,0;2,-12;1;108,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;1;120,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;4,0;2,0;-4,0;6,0;2,0;2,0;2,7;-3,1;0,1;0,1;0;106,-4;0,2;-4,-5;0,4;0;120,-1;0,-1;0,-1;0,1;-4,1;0,1;0,1;0,1;0;106,-5;0,-2;-3,4;0,-1;0;120,-1;0,-1;0,-2;-5,1;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,-5;-3;106,4;0,-8;-4,5;0,-2;-4,4;0,-4;-4,4;0,0;12;120,-1;0,-1;0,-1;-4,-1;0,-1;0,-1;0,3;-4,1;0,1;0,-2;-4,1;0,1;0,4;2,0;-5;102,-1;0,-1;0,-1;0,-1;0,-3;0,-1;0,-1;0,-1;0,-1;0,-1;0,0;5;120,12;-2,0;-2,-12;2,0;-2,12;3;107,0;-2,-12;2;108,0;-2,12;-3;102,0;-1,0;-1,0;-1,0;-1,-12;4,0;-1,0;-1,0;-1,0;-1,12;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,-12;7,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,9;10,1;0,1;0,-8;-5,-1;0,-1;0,7;-2,1;0,1;0,1;0,-7;-3,1;0,1;0,1;0,-7;-1,0;-1,12;0,0;1,0;-2,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-2;0,-1;0,-1;0,-1;0,-1;0,9;-3,1;0,1;0,1;0,-9;-2,-1;0,2;0,1;0,2;-5,1;0,1;0,-7;-3,1;0,1;0,1;0,7;12,0;-1,0;-2,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,-12;12,0;-1,0;-1,0;-2,0;-1,0;-1,0;3,0;-4,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,12;1,-11;-2;117,1;0,2;0,1;0,1;0,1;0,1;0,1;0,1;0,1;0,1;1;102,0;-1;101,-12;0,0;-1,0;-1,0;-1,12;2,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,-12;3,0;-1,0;-1,0;-1,4;4,4;0,-1;0;117,-1;0,-1;0,7;-5;101,0;-1,0;-1,-12;2,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,12;3,0;-1,0;-1,0;-1,-3;7,2;0,-1;0;117,-7;-2;101,3;0,-1;0;117,-1;0,3;-5;101,3;0,-1;0;117,-1;0,4;-1;101,0;-1,0;-1,0;-1,-12;3,0;-1,0;-1,0;-1,11;0;117,-2;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,11;-1;101,0;-1,-12;1,0;-1,5;0,3;0,-1;0;117,-1;0,6;-1;101,0;-1,0;-1,0;-2,0;-1,0;-2,0;1,0;3,0;-5,0;-1,-12;9,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,1;7,3;0,-1;0;117,-1;0,5;-2;101,3;0,-1;0;117,-1;0,-5;-3,1;0,1;0;101,-3;0,9;-3;118,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-2;0,-1;0,11;0;107,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;1;118,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;2,-12;1;108,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-1;118,0;2,0;2,0;4,0;2,0;2,0;2,0;2,0;6,0;-2,0;-2,0;6,8;-2,1;0,1;0,1;0,-6;-2,-1;0,-1;0,-1;0,6;-3,1;0,1;0,-5;-2,-1;0,-1;0,-1;0,9;-4,-1;0,-1;0,-1;0,-1;0,-1;0,-4;0,2;0,-3;0,4;0,7;-35;104,0;4,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;2,-12;0,0;-2,0;-2,0;-4,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,12;22,-12;0,12;2;118,0;-1;107,-12;0;108,10;0;104,-1;0,-1;0,-1;0,-1;0,-6;7;118,8;2,1;0,1;0,1;0,-7;-2,-1;0,-1;0,-1;0,5;-3,1;0,1;0,-5;-1,-1;0,-1;0,1;-3;104,-2;-9,0;7;110,0;-4,0;-4,0;-4,0;-4,0;-4,12;0,0;1;104,0;3;110,0;4,0;4,0;4,0;4,-1;2;125,-10;0,11;-4,0;-4,0;-4,0;-4,0;-4,-12;0,0;4,0;4,0;4,0;4,7;1,2;0,-1;0;104,-6;-2;125,2;0,-1;0;104,4;-3;125,3;0,-1;0;104,-1;0,-6;-4;125,2;0,-1;0;104,8;-5;125,-10;0,9;0;104,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-2;0,1;-4;125,2;0,-1;0;104,4;-3;125,2;0,-1;0;104,3;-1,0;-2,0;-2,0;-2,0;-2,-12;8,0;-2,0;-2,0;-2,0;-2,12;9;125,-12;0,12;-2;110,-12;0,12;-4,-12;0,12;2;125,-12;0,0;-4,12;0,-11;5,4;0,-1;0;104,-1;0,-1;0,6;-3;125,2;0,-1;0;104,-3;-4;101,1;0;115,1;0;101,2;0,1;0;115,1;0;101,-7;0;115,-2;0,-2;0,3;0;101,-2;0,-2;0,12;-2,-12;0,0;-2,12;0,0;-2,-12;0,0;-2,12;0,0;-2,-12;0,0;-2,12;0,-12;-2,12;0,-12;-2,12;0,-12;-2,12;0,-12;-2,12;0,-12;-2,12;0,-12;-2,12;0,0;1;115,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;2,0;2,-12;0,0;-2,0;-2,0;-2,0;-4,0;-2,0;4,0;-6,0;-2,0;-2,0;-2,0;-2,3;20;101,1;0;115,1;0;101,1;0;115,1;0;101,-3;-5,-1;0;115,2;0,3;-4,1;0;101,1;0;115,-7;-4;101,1;0;115,1;0;101,-4;-4;115,2;0,2;0,2;0,2;0,2;0,-1;0;101,-2;0,-2;0,-4;0,10;-5;115,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,-12;13,0;-2,0;-2,0;-2,0;-3,0;-2,0;-2,0;-1;101,0;2,0;2,0;2,0;1,0;2,0;4,0;2,0;-4,12;3,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,0;-2,-5;17;115,1;0;101,1;0;115,-3;0;101,-1;0;115,-3;-5,1;0;101,1;0;115,3;-5,1;0;101,1;0;115,-7;-4,1;0;101,1;0;115,1;0;101,1;0;115,-6;-4;100,0;-5,0;-5,0;-5,0;-5,0;-5,0;-1;101,0;5,0;5,0;5,0;5,0;5,0;-1;102,0;-5,0;-5,0;-5,0;-5,0;-5,0;24;103,0;-5,0;-5,0;-5,0;-5,0;-5,0;-1;115,0;5,0;5,0;5,0;5,0;5,12;4;100,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,-12;0,12;-5,-12;0,0;-5,12;0,0;-5,-12;0,12;-5,-12;0,12;-5,-12;0,0;-5,12;0,0;-5,-12;0,0;-5,12;0,0;-5,-12;0,0;-5,12;0,0;-5,-12;0,0;-5,12;0,0;-5,-12;0,12;-5,-12;0,12;-5,-12;0,0;-5,12;0,0;109;101,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,-12;0,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,12;29;102,0;-5,0;-5,0;-5,0;-5,0;-5,0;-1;103,0;5,0;5,0;5,0;5,0;5,0;-26;115,0;5,0;5,0;5,0;5,0;5,-12;-28;102,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,12;0,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,-12;-1;103,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,12;0,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;-1;115,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,0;-5,-12;0,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,0;5,1;34;101,1;0;102,1;0;103,2;0;100,1;0;101,1;0;102,1;0;103,1;0;115,1;0;100,1;0;101,-4;-3;100,1;0;101,1;0;102,1;0;103,1;0;115,-8;-3;100,1;0;101,1;0;102,1;0;103,1;0;115,1;-6;100,1;0;101,-2;0;103,3;0;115,-8;-3,1;0;102,1;0;103,1;0;101,-4;-5,1;0;100,1;0;102,2;0;115,1;0;101,1;0;100,1;0;102,1;0;103,1;0;115,1;0;102,-3;-3;101,1;0;100,1;0;115,-5;-4;102,-1;0;103,-1;0;101,-1;0;115,6;-6,1;0;102,-4;-2;115,-1;0;103,-1;0;100,-1;0;102,8;2;103,-9;-6;100,1;0;101,1;0;102,2;0;115,1;0;100,1;0;101,1;0;102,1;0;103,1;0;115,1;0;100,-4;-4,1;0;101,1;0;102,1;0;103,1;0;115,-8;-7;100,1;0;101,1;0;102,1;0;103,1;0;115,-2;-6;100,1;0;101,1;0;102,1;0;103,-6;-6;100,1;0;101,1;0;102,1;0;103,1;0;115,-5;-5;100,1;0;101,1;0;102,1;0;103,2;0;100,1;0;101,1;0;102,1;0;103,1;0;115,1;0;100,-4;-4,1;0;101,1;0;102,1;0;103,-8;-6;100,1;0;101,1;0;102,1;0;103,1;0;115,1;-4;100,1;0;101,1;0;102,1;0;103,-8;-5;100,1;0;101,1;0;102,1;0;103,1;0;115,-5;-5;100,1;0;101,1;0;102,1;0;103,2;0;100,1;0;101,1;0;102,1;0;103,1;0;115,1;0;100,-5;-4,-2;-5,1;0;101,3;-5;100,1;0;101,-6;-2;100,-2;-4,1;0;101,2;0;103,1;0;115,1;0;100,1;0;101,1;0;102,1;0;103,1;0;115,1;0;100,2;-1;119,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,-14;7,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,-1;-1;100,0;1,0;1,0;1,0;1,0;1,0;1,0;1,0;1,0;1,1;0,1;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,-1;0,13;8,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,0;-1,1;0,1;0,0;1,0;1,0;1,0;1,0;1,0;1,0;1,0;1,0;1,-1;0,-2;-9;116,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,-1;0,10;8;106,-8;199;120,8;215;126,-1;-222;120";
    levelData.split(',').forEach(placeBlock);

    platforms.setAll('body.immovable', true);
    platforms.setAll('body.checkCollision.down', false);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
}

var text;

function update () {

    game.physics.arcade.collide(player, platforms);

    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -250;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 250;
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -700;
    }
    
    if(text == null && player.y < 360)
    {
         text = game.add.text(300, 100, "YOU WIN!", { font: "30px Arial", fill: "#ff0000" });
    }
}

function render () {
    game.debug.cameraInfo(game.camera, 32, 32);
}
