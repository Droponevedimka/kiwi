
// You can write more code here
/* START OF COMPILED CODE */

class game extends Phaser.Scene {
	
	constructor() {
	
		super("game");
		this.count = 0;
	}
		
	/* START-USER-CODE */

	init(data){	
		this.cursors;
		this.player;
		this.changeScene = false;
		this.whatIsScene;
		this.whatIsValue;
		this.playerPosNow = 358;
		this.playerMove = new Phaser.Math.Vector2();
	}

	_create(){
		this.gameBack = this.add.image(-200, -100, 'gameBack').setOrigin(0);		
		
		this.gameNootebook = this.add.image(1585,290,'game-nootebook').setOrigin(0);
		this.barmen = this.add.sprite(1400,171,'barmen').setOrigin(0);



		this.player = this.physics.add.sprite(this.playerPosNow, 220, "walking-ded").setOrigin(0);	
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

			let mas = {}
			let j = '';
			mas.barmen = []
			for(let i=1; i<205; i++){
				mas.barmen[i] = {key:'barmen'}
				if(i<10){ j = '00'+i.toString()}
				else if(i<100){ j = '0'+i.toString() } else j = i.toString()
				
				mas.barmen[i]['frame'] = 'barmen-'+j
			}
			this.anims.create({
				key: 'barmen-move',
				frames: mas.barmen,
				frameRate:20,
				repeat: -1
			})
	}
	
	create(){
		this._create()
		this.cameras.main.setBounds(0, 0, 2382, 900);
   		this.physics.world.setBounds(0, 0, 2382, 900);
		this.cursors = this.input.keyboard.createCursorKeys();	
	
		this.animationGamer();		

		this.player.setCollideWorldBounds(true);

		this.cameras.main.startFollow(this.player, true, 0.05, 0.05);
		this.cameras.main.setZoom(1.2)

		this.barmen.anims.play('barmen-move')

		this.gameNootebook.setInteractive({useHandCursor:true});
		this.gameNootebook.on('pointerdown', function(event) {
			this.changeScene = true
			this.whatIsScene = 'switch'
			this.whatIsValue = 'gameScene'	
			this.getMove(event.worldX - 100)		
			console.log('dfsd')			
		}, this);

		this.input.on('pointerdown', function(event) {
			if(event.worldX < 250 || event.worldX > 480 || event.y < 300){
				if(!this.changeScene) this.getMove(event.worldX);
								
			} else {
				if(!this.changeScene){					
					this.changeScene = true
					this.whatIsScene = 'start'
					this.whatIsValue = 'street'
					this.getMove(event.worldX)					
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
				this.goToEndMove(this.whatIsScene, this.whatIsValue)									
			} else {			
				this.player.body.reset(this.playerMove.x, this.playerMove.y);
				this.player.anims.play('turn', true)
				this.player.setFlipX(false)	
			}
			
        }
	}

	getMove(e){
		this.playerMove.x = e - (this.player.width/2);
		
		if(this.playerPosNow < e){		
			this.physics.moveToObject(this.player, this.playerMove, 240);
			this.player.setFlipX(false)			
			this.player.anims.play('walk', true)
		}else {
			this.physics.moveToObject(this.player, this.playerMove, 240);
			this.player.setFlipX(true)
			this.player.anims.play('walk', true)
		}		
		this.playerPosNow = e		
	}

	goToEndMove(name, value){
		switch(name) {
			case 'start':  
				this.scene.start(value)
			break;
			case 'switch':  
				this.scene.switch(value);
			break;
			
		  }
	}
	
	
}

/* END OF COMPILED CODE */

// Custom coint item('s)
