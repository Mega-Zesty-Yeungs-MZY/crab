const game = new Phaser.Game(800, 600, Phaser.AUTO, '', 
    { 
        preload: preload, 
        create: create, 
        update: update 
    });

function preload() {
    game.load.image('character', '../assets/mystic_woods_free_2.1/sprites/characters/player.png')
    
}

function create() {}

function update() {}