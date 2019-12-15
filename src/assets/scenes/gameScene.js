
class gameScene extends Phaser.Scene {
	
	constructor() {
	
		super("gameScene");		
	}
		
	/* START-USER-CODE */

	init(data){	
		
	}

	_create(){
		//this.gameBack = this.add.image(-200, -100, 'gameBack').setOrigin(0);		
		this.nootebook = this.add.image(200, -100, 'nootebook').setOrigin(0);	
	}

	create(){
        
        this._create();
		this.input.on('pointerdown', function(event) {			
				this.scene.switch('game');					
        },this);
	}


	update() {
		
	}

}