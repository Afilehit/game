var esketit = 50
var move = false
var Game={

    player:null,
    walk:null,
    walk2:null,
    cursors:null,
    preload:function(){
        game.load.spritesheet('player', 'player.png', 160, 240, 3);
    },
    create:function(){
        game.physics.startSystem(Phaser.ARCADE);
        game.stage.backgroundColor = '#1873CE';
        this.player = game.add.sprite(0,480,'player')
        this.player.anchor.setTo(0.5)
        this.player.scale.setTo(0.35)
        game.physics.arcade.enable(this.player)
        this.walk = this.player.animations.add('walk', [1,2], 5, true);
        this.walk = this.player.animations.add('walk2', [1,2], 5, true);
        this.cursors = game.input.keyboard.createCursorKeys();
    },
    update:function(){
        if (this.cursors.left.isDown){
            this.player.x -= 4;
            this.player.animations.play('walk')
        }
        else if (this.cursors.right.isDown){
            this.player.x += 4;
            this.player.animations.play('walk')
        }
        if (this.cursors.up.isDown){
            this.player.animations.play('walk2')
            this.player.y -= 4;
        }
        else if (this.cursors.down.isDown){
            this.player.animations.play('walk2')
            this.player.y += 4;
        }
        if(this.cursors.left.isUp && this.cursors.right.isUp && this.cursors.up.isUp && this.cursors.down.isUp){
            this.player.animations.stop()
            this.player.frame = 0
        }
        if(this.player.position.x <= 28){
            this.player.x = 28
        }
        if(this.player.position.y >= 678){
            this.player.y = 678
        }

    },
    nextLevel:function(){
        game.state.start('game')
        this.esketit -= 25
        console.log(esketit)
    }
}