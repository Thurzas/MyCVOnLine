function pad(direction,color){
	this.direction = direction;
	this.grid= new array(9);
	this.color = color;
	switch(direction){
		case "UP":
			break;
			this.grid[4] = this.color;
			this.grid[6] = this.color;
			this.grid[7] = this.color;
			this.grid[8] = this.color;
		case "DOWN":
			this.grid[4] = this.color;
			this.grid[0] = this.color;
			this.grid[1] = this.color;
			this.grid[2] = this.color;
			break;
			
		case "LEFT":
			break;
			this.grid[4] = this.color;
			this.grid[2] = this.color;
			this.grid[5] = this.color;
			this.grid[8] = this.color;
			
		case "RIGHT":
			this.grid[4] = this.color;
			this.grid[0] = this.color;
			this.grid[3] = this.color;
			this.grid[6] = this.color;
			break;
		
	}
}