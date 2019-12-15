
// You can write more code here

/* START OF COMPILED CODE */

class finalgame extends Phaser.Scene {
	
	constructor() {
	
		super("finalgame");
		
	}

	init(data){
		this.score = data.score;
				
	}
	
	_create() {
	
		
		var param = this.why+"_"+this.itog+"-min.png";

		this.add.image(1300, 470, "final", param);

		if(this.itog == "tiger"){
			var nameItog = "Тигра";
		} else if( this.itog == "dragon"){
			var nameItog = "Дракона";
		} else {
			var nameItog = "Обезьяны";
		}
				
		this.add.text(150, 100.41235, "Вы набрали "+ this.score +" баллов.", {
			"fontFamily": "GLI-Light",
			"fontSize": "75px",
			"fixedWidth": 1250,
			"fixedHeight": 350
		});

		this.add.text(150, 210, "Вы, случаем, не масон? Кажется, вы знаете больше, чем среднестатистический житель планеты. Что же, поздравляем, великий человек!\n\nТакой как вы точно ценит время и технологичность. У нас хорошая новость: Citibank выпустил мультивалютный кошелек, который сэкономит ваши время и деньги и сделает жизнь проще. Больше не придется думать о том, к какому счету «привязана» дебетовая карта. Средства всегда спишутся в «нужной» валюте автоматически.\n\nПознакомьтесь с миром через комфортные путешествия — оформите карту Citibank.", {
			"fontFamily": "GLI-Light",
			"fontSize": "28px",
			"fixedWidth": 1100,
			"fixedHeight": 350,
			"wordWrap.width": 680
		});

		var print = this.add.text(0, 0, '');

	
		

		this.add.image(190, 900, "final-soc", "b").setInteractive( { useHandCursor: true  } );
		this.add.image(310, 900, "final-soc", "f").setInteractive( { useHandCursor: true  } );
		this.add.image(430, 900, "final-soc", "t").setInteractive( { useHandCursor: true  } );
		
		

		const scaleBox = scale => {
			let box = document.getElementById('myText')
			if (box) {
			box.style.transform = `scale(${scale})`
			box.style.transformOrigin = 'top left'
			box.style.top = `${this.game.canvas.offsetTop + this.scale.displaySize.height / 2 - (-388 / 2) * scale}px`
			box.style.left = `${this.game.canvas.offsetLeft + this.scale.displaySize.width / 2 - (1620 / 2) * scale}px`
			}
		}

		// initial scale
		let scale = this.game.scale.displaySize.width / this.game.scale.gameSize.width
		scaleBox(scale)

		// on resize listener
		this.scale.on('resize', (gameSize, baseSize, displaySize, resolution) => {
			let scale = displaySize.width / gameSize.width
			scaleBox(scale)
		})

		this.formUtil = new FormUtil({
			scene: this
		});


		this.formUtil = new FormUtil({
            scene: this
        });
        
        //
        //
        //
		this.formUtil.scaleToGameW("myText", 447);
		this.formUtil.scaleToGameH("myText", 65);
		this.formUtil.placeElementAt('myText', true);
		
		var btn = this.add.image(730, 770, "final-soc", "ok").setInteractive({ useHandCursor: true  });
		
		btn.on('pointerdown', function(){
			console.log(this.formUtil.getTextValue('myText'));
		}, this);
        //
        //
        //
		
	}
	
	
	/* START-USER-CODE */

	create(){
		this._create();		
		
		
	}

	textAreaChanged() {
        var text = this.formUtil.getTextAreaValue("area51");
        console.log(text);
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
