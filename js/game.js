var game = function(){
	this.canvas = null;
	this.context = null;

	this.width = Math.max(1300,0);
	this.height = Math.max(600,0);

	this.car = null;

	this.leftKey = false;
	this.rightKey = false;
	this.upKey = false;
	this.downKey = false;

	var self = this;

	this.init = function(){
		this.canvas = document.createElement('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;

		this.context = this.canvas.getContext('2d');

		document.body.appendChild(this.canvas);

		this.car = new car(this);
		this.car.init();
		
		this.loop();

		this.listenKey()
	}

	this.listenKey = function(){
		document.addEventListener('keydown',function(event){
			if(event.keyCode == 37){
				self.leftKey = true;
			}
			else if(event.keyCode == 38){
				self.upKey = true;
			}
			else if(event.keyCode == 39){
				self.rightKey = true;
			}
			else if(event.keyCode == 40){
				self.downKey = true;
			}
			else {
				
			}
		});
		document.addEventListener('keyup',function(event){
			
			if(event.keyCode == 37){
				self.leftKey = false;
			}
			else if(event.keyCode == 38){
				self.upKey = false;
			}
			else if(event.keyCode == 39){
				self.rightKey = false;
			}
			else if(event.keyCode == 40){
				self.downKey = false;
			}
			else {

			}
		});
	
	}

	this.loop = function(){
		self.update();
		self.draw();

		setTimeout(self.loop,20); //20 ms per frame ~ 50 fps
	}

	this.update = function(){
		this.car.update();	
	}

	this.draw = function(){
		this.clearScreen();
		this.car.draw();
	}

	this.clearScreen = function(){
		this.context.fillStyle = '#ffffff';
		this.context.fillRect(0, 0, this.width, this.height);
	}

}


var g = new game();
g.init();