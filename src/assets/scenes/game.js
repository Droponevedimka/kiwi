
// You can write more code here

/* START OF COMPILED CODE */

class game extends Phaser.Scene {
	
	constructor() {
	
		super("game");
		
	}
		
	/* START-USER-CODE */

	init(data){	
		this.cursors;
		this.player;
		this.changeScene = false;
		this.whatIsScene;
		this.playerPosNow = 358;
		this.playerMove = new Phaser.Math.Vector2();
	}

	_create(){
		this.gameBack = this.add.image(0, 0, 'gameBack').setOrigin(0);		
		this.player = this.physics.add.sprite(this.playerPosNow, 320, "walking-ded").setOrigin(0);	
		this.playerMove.y = this.player.y;		
	}

	animationGamer(){	
		let data = 'walking-ded'
			this.anims.create({
				key: 'walk',
				frames: [{
					key: data,
					frame: "w1"
					}, {
						key: data,
						frame: "w2"
					}, {
						key: data,
						frame: "w3"
					}, {
						key: data,
						frame: "w4"
					}, {
						key: data,
						frame: "w5"
					}, {
						key: data,
						frame: "w6"
					}, {
						key: data,
						frame: "w7"
					}, {
						key: data,
						frame: "w8"
					}
				],
				frameRate: 8,
				repeat: -1
			})
		
			this.anims.create({
				key: 'turn',
				frames: [{
					key: data,
					frame: "w1"
					}
				],
				frameRate: 8
			})
	}
	
	create(){
		this._create()
		this.cameras.main.setBounds(0, 0, 2732, 900);
   		this.physics.world.setBounds(0, 0, 2732, 900);
		this.cursors = this.input.keyboard.createCursorKeys();	
	
		this.animationGamer();		

		this.player.setCollideWorldBounds(true);

		this.cameras.main.startFollow(this.player, true, 0.05, 0.05);

		this.input.on('pointerdown', function(event) {
			if(event.worldX < 500 || event.worldX > 730 || event.y < 300){
				if(!this.changeScene) this.getMove(event);
								
			} else {
				if(!this.changeScene){
					this.whatIsScene = 'street';
					this.changeScene = true
					this.getMove(event)					
				}
			}
			
		}, this);
	}


	update() {
		var distance = Phaser.Math.Distance.Between(this.player.x, this.player.y, this.playerMove.x, this.playerMove.y);

		if (distance < 4)
        {
			if(this.changeScene){		
				
				this.changeScene = false
				this.scene.start(this.whatIsScene)
									
			} else {
				console.log(distance)				
				this.player.body.reset(this.playerMove.x, this.playerMove.y);
				this.player.anims.play('turn', true)
				this.player.setFlipX(false)	
							}
			
        }
	}


	getMove(e){
		this.playerMove.x = e.worldX - (this.player.width/2);
		
		if(this.playerPosNow < e.worldX){	
			console.log(this.player.worldX)		
			this.physics.moveToObject(this.player, this.playerMove, 240);
			this.player.setFlipX(false)			
			this.player.anims.play('walk', true)
		}else {
			this.physics.moveToObject(this.player, this.playerMove, 240);
			this.player.setFlipX(true)
			this.player.anims.play('walk', true)
		}		
		this.playerPosNow = e.worldX		
	}
	
	
}

/* END OF COMPILED CODE */

// Custom coint item('s)
