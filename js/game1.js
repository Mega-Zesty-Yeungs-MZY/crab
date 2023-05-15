const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', 
    { 
        preload: preload, 
        create: create, 
        update: update 
    }
);

function preload() {
    game.load.image('assets/player.png');
    game.load.image('assets/grass.png')
}

function create() {
    
    game.add.image(0, 0, 'assets/grass.png');
    game.add.sprite(100, 100, 'assets/player.png')

}

function update() {}