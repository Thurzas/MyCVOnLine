
 function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function Coord(X,Y){
	this.x=Math.floor(X);
	this.y=Math.floor(Y);
};

function getRelativeCoords(event) {
    return { x: event.offsetX || event.layerX, y: event.offsetY || event.layerY };
}

function getUserAgent(){
	var res ="Desktop";
	if (navigator.userAgent.match(/iPad/i))
	{
		// do tablet stuff
		res="tablet";
	} else if(navigator.userAgent.match(/Android|webOS|iPhone|iPod|Blackberry/i) )
	{
		// do mobile stuff
		res="smartphone";
	}

	return res;
};


function convert(grid1,grid2,X,Y,inv){
	var ratio=0;
	if(grid1.pixelSize>grid2.pixelSize)
	{
		ratio=(grid1.pixelSize+grid1.margin)/(grid2.pixelSize+grid2.margin);
	}
	else{
		ratio=(grid2.pixelSize+grid2.margin)/(grid1.pixelSize+grid1.margin);
	}

	return inv==true ? new Coord(ratio*X,ratio*Y): new Coord(Math.floor(X/ratio),Math.floor(Y/ratio));
};
