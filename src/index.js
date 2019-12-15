import Phaser from 'phaser'
import './assets/scss/main.scss'


class Boot extends Phaser.Scene {
	
	constructor() {
    super({
        key: "preload",
        pack: {
			    files: [
			        { type: 'image', key: 'logo', url: 'assets/img/logo.png' } 				
			    ]
			}
     });
  }
	
	init(){
		
	}

	preload() {		
        document.body.style.height = window.innerHeight+'px';
        var progressBar = this.add.graphics();
        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0xffffff, 0.8);
            progressBox.fillRect(800, 510, 320, 50);
            
           
            var loadingText = this.make.text({
                x: width/2 + 20,
                y: height/2 - 5,
                text: 'Loading...',
                style: {
					font:'GLI-Light',
                    fontSize: '20px',
                    fill: '#000000'
                }
            });

            this.add.image(width/2, 400, 'logo');
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2 - 80,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font:'GLI-Light',
                    fontSize: '18px',
                    fill: '#000000'
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font:'GLI-Light',
                    fontSize: '18px',
                    fill: '#000000'
                }
            });
            assetText.setOrigin(0.5, 0.5);
            
            this.load.on('progress', function (value) {
                percentText.setText(parseInt(value * 100) + '%');
                progressBar.clear();
                progressBar.fillStyle(0x000000, 1);
                progressBar.fillRect(800, 510, 320 * value, 50);
            });
            
            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });

            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });
            
             
            this.load.pack("pack", "assets/pack/pack.json");
            
	}

	
	create() {	
		this.scene.start("game");				
	}

}

 var game = new Phaser.Game({
    "title": "Киви",
    "width": 1600,
    "height": 800, 
    "type": Phaser.CANVAS,  		 
    "parent": "game-container",
    "physics": {
        "default": "arcade"
    },
    "multiTexture" : true , 
    "clearBeforeRender" : false,    
    "transparent"    : true,
        "scale": {
            "mode": Phaser.Scale.FIT,			
            "autoCenter": Phaser.Scale.CENTER_BOTH        
        }
    });

    game.scene.add("Boot", Boot, true);

    if(window.innerWidth < window.innerHeight){	       
        document.getElementById("pause-game").style.display = "flex"	
    }    

           


window.onresize = function(event) {
    document.body.style.height = window.innerHeight+'px';
    document.getElementById('all-html').style.height = window.innerHeight+'px';

    if (window.innerWidth < window.innerHeight) {		
        document.getElementById("pause-game").style.display = "flex";	
        if(game) game.scene.pause('game');	
    } else {
        document.getElementById("pause-game").style.display = "none";			
        if(game) game.scene.resume('game');
    }  

}



