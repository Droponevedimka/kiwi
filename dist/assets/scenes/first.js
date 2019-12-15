
// You can write more code here

/* START OF COMPILED CODE */

class first extends Phaser.Scene {
	
	constructor() {
	
		super("first");
		
	}
	
	_create() {
	
		let graphics = this.add.graphics()
			graphics.fillStyle(0x000000, 1)
			graphics.fillRect(0, 0, 1600, 900)
            
			
		this.add.text(800, 550, 'Нажми и начни играть', {
			fontFamily: 'Tahoma',
			"fontSize": "40px",
			"lineHeight": "45px",
			"color": '#ffffff',
			"align": "center",
			"fixedWidth": 350,
			"fixedHeight": 450,
			"wordWrap.width": 350,
			"wordWrap.useAdvancedWrap": true, lineSpacing: 10 
		}).setOrigin(0.5);
		

		this.btn = this.add.text(800, 850, 'Начать', {
				"fontFamily": "GLI-Light",
				"fontSize": "55px",
				"textDecoration": "underline",
				"lineHeight": "45px",
				"color": '#ffffff',
				"align": "center",
				"fixedWidth": 200,
				"fixedHeight": 450,
				"wordWrap.width": 200,
				"wordWrap.useAdvancedWrap": true, lineSpacing: 10 
			}).setOrigin(0.5).setInteractive({ useHandCursor: true  });
			
		
	}
	
	
	/* START-USER-CODE */

	create(){
		this._create();
		
		
		this.btn.on('pointerdown', function(){			
			this.scene.start("game");	
		}, this);	
	}

	update(){
		
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
