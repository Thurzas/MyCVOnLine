function Letter(){
	this.grid;
	this.sizeX=0;
	
	this.Setup=function(X,Y){
		this.grid=new Array(X*Y);
		this.sizeX=X;
		for(var i=0;i<this.grid.length;i++)
		{
			this.grid[i]=-1;
		}
	};
	this.init =function(letter,color){
		switch(letter)
		{
			case "0":		
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;
				break;
				
			case "1":
				
				this.Setup(3,5);				
				this.grid[1]=color;
				this.grid[3]=color;
				this.grid[4]=color;
				this.grid[7]=color;
				this.grid[10]=color;
				this.grid[13]=color;
				break;

			case "2":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;
			
				break;
			case "3":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;
			
				break;
			case "4":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[11]=color;
				this.grid[14]=color;
				
				break;
			case "5":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;	
				break;
				
			case "6":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;
				break;
			case "7":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[5]=color;
				this.grid[8]=color;
				this.grid[11]=color;
				this.grid[14]=color;

				break;
			case "8":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;
				break;
				
			case "9":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;
				break;
							
			case "A":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[14]=color;	
				break;

			case "B":
				
				this.Setup(4,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[4]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				this.grid[10]=color;
				this.grid[12]=color;
				this.grid[15]=color;
				this.grid[16]=color;
				this.grid[17]=color;	
				this.grid[18]=color;	
				break;
			case "C":
				
				this.Setup(3,5);
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[6]=color;
				this.grid[9]=color;
				this.grid[13]=color;
				this.grid[14]=color;
				break;		
			
			case "D":
				
				this.Setup(4,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[4]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[15]=color;
				this.grid[16]=color;
				this.grid[17]=color;	
				this.grid[18]=color;	
				break;
			case "E":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[9]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;
				break;

			case "F":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[9]=color;
				this.grid[12]=color;
				break;				

			case "G":
				
				this.Setup(4,5);
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[4]=color;
				this.grid[8]=color;
				this.grid[10]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[15]=color;
				this.grid[17]=color;	
				this.grid[18]=color;
				break;
			case "H":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[14]=color;	
				break;
			
			case "I":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[4]=color;
				this.grid[7]=color;
				this.grid[10]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;
				break;

			case "J":
				
				this.Setup(4,5);
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[6]=color;
				this.grid[10]=color;
				this.grid[14]=color;
				this.grid[16]=color;
				this.grid[17]=color;
				break;
			case "K":
				
				this.Setup(4,5);
				this.grid[0]=color;
				this.grid[3]=color;
				this.grid[4]=color;
				this.grid[6]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				
				this.grid[12]=color;
				this.grid[14]=color;
				this.grid[16]=color;
				this.grid[19]=color;
				break;
			case "L":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[3]=color;
				this.grid[6]=color;
				this.grid[9]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;
				break;
				
			case "M":
				
				this.Setup(4,5);
				this.grid[0]=color;
				this.grid[3]=color;
				this.grid[4]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[15]=color;
				this.grid[16]=color;
				this.grid[19]=color;
				break;			
			case "N":
				
				this.Setup(4,5);
				this.grid[0]=color;
				this.grid[3]=color;
				this.grid[4]=color;
				this.grid[5]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[10]=color;				
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[15]=color;
				this.grid[16]=color;
				this.grid[19]=color;
				break;				
			case "O":
				
				this.Setup(3,5);
				this.grid[1]=color;
				this.grid[3]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				this.grid[11]=color;
				this.grid[13]=color;
				break;
				
			case "P":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				this.grid[12]=color;
				break;	

			case "Q":
				
				this.Setup(5,6);
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[5]=color;
				this.grid[8]=color;
				this.grid[10]=color;
				this.grid[13]=color;
				this.grid[15]=color;
				this.grid[17]=color;
				this.grid[18]=color;
				this.grid[21]=color;
				this.grid[22]=color;
				this.grid[23]=color;
				this.grid[29]=color;
				break;					
				
			case "R":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[3]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[9]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[14]=color;	
				break;
				
			case "S":
				
				this.Setup(3,5);
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[7]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[13]=color;	
				break;
				
			case "T":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[4]=color;
				this.grid[7]=color;
				this.grid[10]=color;
				this.grid[13]=color;
				break;
		
			case "U":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;
				break;	
		
			case "V":
				
				this.Setup(3,5);
				this.grid[0]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[5]=color;
				this.grid[6]=color;
				this.grid[8]=color;
				this.grid[9]=color;
				this.grid[11]=color;
				this.grid[13]=color;
				break;	

			case "W":
				
				this.Setup(4,5);
				this.grid[0]=color;
				this.grid[3]=color;
				this.grid[4]=color;
				this.grid[7]=color;
				this.grid[8]=color;
				this.grid[11]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[14]=color;
				this.grid[15]=color;
				this.grid[16]=color;
				this.grid[19]=color;
				break;

			case "X":
				
				this.Setup(4,5);
				this.grid[0]=color;
				this.grid[3]=color;
				this.grid[4]=color;
				this.grid[7]=color;
				this.grid[9]=color;
				this.grid[10]=color;
				this.grid[12]=color;
				this.grid[15]=color;
				this.grid[16]=color;
				this.grid[19]=color;
				break;

			case "Y":
				
				this.Setup(4,5);
				this.grid[0]=color;
				this.grid[3]=color;
				this.grid[4]=color;
				this.grid[7]=color;
				this.grid[9]=color;
				this.grid[10]=color;
				this.grid[13]=color;
				this.grid[16]=color;
				break;
				
			case "Z":
				
				this.Setup(4,5);
				this.grid[0]=color;
				this.grid[1]=color;
				this.grid[2]=color;
				this.grid[3]=color;
				this.grid[6]=color;
				this.grid[7]=color;
				this.grid[9]=color;
				this.grid[10]=color;
				this.grid[12]=color;
				this.grid[13]=color;
				this.grid[16]=color;				
				this.grid[17]=color;
				this.grid[18]=color;
				this.grid[19]=color;
				break;
				
			case " ":
				this.Setup(1,5);
				break;
		}
	}
};