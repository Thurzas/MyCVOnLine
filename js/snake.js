function Snake(X,Y,move){
	this.x=Math.floor(X);
	this.y=Math.floor(Y);
	this.xs=1;
	this.ys=0;
	this.Size=0;
	this.body=[];
	this.IsMoving=move;
	this.LastKey="";
	this.changeDirection=function(newDirection){
			return this.LastKey===newDirection?true:false;
	}
	this.update = function(){
		if(this.IsMoving===true)
		{
			for(var i=0;i<this.body.length-1;i++){
				this.body[i]=this.body[i+1];
			}
			this.body[this.Size-1]=new Coord(this.x,this.y);

			this.x = this.x + this.xs;
			this.y = this.y + this.ys;

			if(this.x>=gridWorld.WorldX.length-1)
				this.x=0;
			else if(this.x<0)
				this.x=gridWorld.WorldX.length-2;

			if(this.y>=gridWorld.WorldY.length)
				this.y=0;
			else if(this.y<0)
				this.y=gridWorld.WorldY.length-1;
		}
	}
	this.UP = function(){
		this.direction(0,-1);
		this.LastKey="LEFT";
	};

	this.DOWN = function(){
		this.direction(0,1);
		this.LastKey="LEFT";
	};

		this.LEFT = function(){
			this.direction(-1,0);
			this.LastKey="LEFT";
	};

		this.RIGHT = function(){
			this.direction(1,0);
			this.LastKey="LEFT";
	};

	this.Collision = function(){
		var res =false;
		for(var i=0;i<this.body.length;i++)
		{
			if(this.x===this.body[i].x)
			{
				if(this.y===this.body[i].y)
					res= true;
			}
		}
		return res;
	}

	this.eat= function(pos){
		var target=new Array(Math.abs(pos[0]-this.x),Math.abs(pos[1]-this.y));
		if(target[0]<1&&target[1]<1)
		{
			this.Size++;
			return true;
		}
		else
			return false;
	};

	this.direction = function(X,Y){
		this.xs=X;
		this.ys=Y;
	};

	this.Draw= function(){
		for(var i=0;i<this.body.length;i++)
		{
			gridWorld.SetCoordVisibility(this.body[i].y,this.body[i].x,2);
			this.Color++;
			if(this.Color>4)
				this.Color=1;
		}
			gridWorld.SetCoordVisibility(this.y,this.x,2);
	}
};
