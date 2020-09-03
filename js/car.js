const onDegree = 2*Math.PI/180; 

var car = function(game){

	this.game = game;

	this.x = 0;
	this.y = 0;

	this.img = null;
	this.loaded = false;

	this.degree = 0;
	this.speed = 10;

	var self = this;

	this.init = function(){
		this.img = new Image();
		this.img.onload = function(){
			self.loaded = true;
		}
		this.img.src = 'image/car.png';
	}

	this.update = function(){
		if(this.game.upKey){
			if(this.game.leftKey){
			this.degree -= onDegree;
		}
			else if(this.game.rightKey){
			this.degree += onDegree;
		}

		}

		if(this.game.downKey){
			if(this.game.leftKey){
			this.degree += onDegree;
		}
			else if(this.game.rightKey){
			this.degree -= onDegree;
		}

		}
		
		if(this.game.upKey){
			self.goForward();
		}
		else if(this.game.downKey){
			self.goBackward();
		}

		
	}

	this.goForward = function(){
		var speedX = this.speed * Math.cos(this.degree);
		var speedY = this.speed * Math.sin(this.degree);
		this.x += speedX;
		this.y += speedY;
	}
	this.goBackward = function(){
		var speedX = this.speed * Math.cos(this.degree);
		var speedY = this.speed * Math.sin(this.degree);
		this.x -= speedX;
		this.y -= speedY;
	}

	this.draw = function(){
		if (this.loaded){
			this.game.context.save();
			this.game.context.translate(this.x + 66, this.y + 33);
			this.game.context.rotate(this.degree);
			this.game.context.drawImage(this.img, -66, -33);
			this.game.context.restore();
		}
	}

}