var canvas;
var canvasContext;
var XBegin=0;
var Ysize=200;
var BOX = 20;
var scoreBox=8;
var margin=5;
var fps;
var s;
var gridWorld;
var Apple;
var g;
var FPS=10;
var scoreMargin=1;
var scoreGridX=(BOX+scoreMargin/5)*9;
var scorePlace=new Coord(0,0);
var MenuBox=5;
var Small=false;
var TetrisGrid;
var vp = new viewport();
var Pressed=false;
var isScreenFocused=false;


function move(button){
  switch(button.id)
  {
    case "LEFT":
      if(s.LastKey!="RIGHT")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.LEFT();
          Pressed=true;
          s.LastKey="LEFT";
        }
      }
    break;

    case "UP":
      if(s.LastKey!="DOWN")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.UP();
          Pressed=true;
          s.LastKey="UP";
        }
      }
    break;

    case "RIGHT":
      if(s.LastKey!="LEFT")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.RIGHT();
          Pressed=true;
          s.LastKey="RIGHT";
        }
      }
    break;

    case "DOWN":
      if(s.LastKey!="UP")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.DOWN();
          Pressed=true;
          s.LastKey="DOWN";
        }
      }
    break;
  }
};

function viewport(){
  this.viewport=new Array(2);
  if (typeof window.innerWidth != 'undefined')
  {
    this.viewport[0] = window.innerWidth,
    this.viewport[1] = window.innerHeight
  }

  // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

  else if (typeof document.documentElement != 'undefined'
  && typeof document.documentElement.clientWidth !=
  'undefined' && document.documentElement.clientWidth != 0)
  {
    this.viewport[0] = document.documentElement.clientWidth,
    this.viewport[1] = document.documentElement.clientHeight
  }

  // older versions of IE

  else
  {
    this.viewport[0] = document.getElementsByTagName('body')[0].clientWidth,
    this.viewport[1] = document.getElementsByTagName('body')[0].clientHeight
  }
}

var keyPressed=function(evt){
  switch(evt.keyCode)
  {
    case 80:
    g.STOP=!g.STOP;
    break;

    case 83:
    g.SoundEnabled=!g.SoundEnabled;
    break;
    case 13:
    g.STOP=!g.STOP;
    break;

    case 37:
      if(s.LastKey!="RIGHT")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.LEFT();
          Pressed=true;
          s.LastKey="LEFT";
        }
      }


    break;

    case 38:
      if(s.LastKey!="DOWN")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.UP();
          Pressed=true;
          s.LastKey="UP";
        }
      }

    else
    {
      Tetri.y+=1;
    }
    break;

    case 39:
      if(s.LastKey!="LEFT")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.RIGHT();
          Pressed=true;
          s.LastKey="RIGHT";
        }
      }
    break;
    case 40:
      if(s.LastKey!="UP")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.DOWN();
          Pressed=true;
          s.LastKey="DOWN";
        }
      }
    break;
    case 100:
      if(s.LastKey!="RIGHT")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.LEFT();
          Pressed=true;
          s.LastKey="LEFT";
        }
    }

    break;

    case 104:
      if(s.LastKey!="DOWN")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.UP();
          Pressed=true;
          s.LastKey="UP";
        }
      }
    break;

    case 102:
      if(s.LastKey!="LEFT")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.RIGHT();
          Pressed=true;
          s.LastKey="RIGHT";
        }
      }
    break;

    case 98:
      if(s.LastKey!="UP")
      {
        if(!s.IsMoving===true)
        s.IsMoving=true;

        if(Pressed===false)
        {
          s.DOWN();
          Pressed=true;
          s.LastKey="DOWN";
        }
    }
    break;
  }
};

function touchScreen(direction){
  switch(direction){
    case 'UP':
    if(!s.IsMoving===true)
      s.IsMoving=true;
    break;

    case 'UP':
    if(!s.IsMoving===true)
      s.IsMoving=true;
    break;

    case 'UP':
    if(!s.IsMoving===true)
      s.IsMoving=true;
    break;

    case 'UP':
    if(!s.IsMoving===true)
      s.IsMoving=true;
    break;

  }
}

function Screen(X,Y,pixel,m){
  this.pixelSize = pixel;
  this.margin = m;
  this.WorldX = new Array(Math.floor(X/(pixel+this.margin)));
  this.WorldY = new Array(Math.floor(Y/(pixel+this.margin)));
  this.ShowCoord = new Array(this.WorldX.length*this.WorldY.length).fill(-1);

  for(var i=0;i<this.WorldX.length;i++){
    this.WorldX[i]=i*pixel +(i)*this.margin;
  }
  for(var i=0;i<this.WorldY.length;i++){
    this.WorldY[i]=i*pixel +(i)*this.margin;
  }

  this.IsCoordVisible=function(X,Y){
    return this.ShowCoord[this.WorldX.length*X + Y];
  };

  this.SetCoordVisibility = function(X,Y, color){
    this.ShowCoord[this.WorldX.length*X + Y]=color;
  };

  this.Sweap= function(){
    for(var i=0;i<this.ShowCoord.length;i++)
    {
      this.ShowCoord[i]=-1;
    }
  };

  this.DrawInGrid = function(img,X,Y){
    var increment=0;
    for(var i =0;i<img.grid.length;i++){
      if(i%img.sizeX===0)
      increment++;

      if(img.grid[i]>-1)
      this.ShowCoord[i%img.sizeX+this.WorldX.length*increment +(this.WorldX.length*X + Y)]=img.grid[i];
    }
  };

  this.DrawBackgroundText = function(img,X,Y){
    for(var i =0;i<img.length;i++){
      for(var j=0;j<img.length;j++)
      {
        this.SetCoordVisibility(X+j,Y+i,img[i][j]);
      }
    }
  };
}
function Game(){
  this.GameCode="";
  this.STOP=false;
  this.Score=0;
  this.Start = function(){
    if(this.STOP===false)
    {
      if(this.GameCode==="")
      {
        var hitbox;
        Paint();
        DrawText(Math.floor((Gmenu.WorldX.length-76)/2),0,Gmenu,"SNAKE",4);
        Small===false?(DrawText(0,7,Gmenu,"MOVE HERE TO PLAY",6),hitbox=DrawText(0,14,Gmenu,"SNAKE",3)):(hitbox=DrawText(0,7,Gmenu,"SNAKE",5));
        hitbox[0]=convert(Gmenu,gridWorld,hitbox[0].x,hitbox[0].y,false);
        hitbox[1]=convert(Gmenu,gridWorld,hitbox[1].x,hitbox[1].y,false);
        if((s.x>=hitbox[0].x && s.x<=hitbox[1].x) && (s.y>=hitbox[0].y && s.y <=hitbox[1].y))
        {
          this.GameCode="Snake";
        }
        console.log("Pressed : "+Pressed);
    }
    if(this.GameCode==="Snake")
    {
      if(Apple===undefined)
      PlaceApple();
      this.notPlayed=true;
      Paint();
      if(s.eat(Apple))
      {
        if(this.SoundEnabled)
        this.point.play();
        PlaceApple();
        this.Score++;
      }
      if(s.Collision())
      {
        if(this.SoundEnabled)
        this.hit.play();
        s = new Snake(getRandomInt(0,gridWorld.WorldX.length-1),getRandomInt(0,gridWorld.WorldY.length-1),true);
        g.Score=0;
      }
    }
    if(this.GameCode==="Tetris")
    {
      for(var i=0; i<output.WorldY.length; i++)		//lines
      {
        for(var j = 0;j<output.WorldX.length;j++)	//columns
        {
          canvasContext.fillStyle="red";
          canvasContext.fillRect(XBegin+TetrisGrid.WorldX[j],TetrisGrid.WorldY[i],BOX,BOX);
        }
      }
    }
  }
  else
  {
    if(this.SoundEnabled)
    {
      if(this.notPlayed)
      {
        this.pause.play();
        this.notPlayed=false;
      }
    }
    DrawText(Math.floor(gridWorld.WorldX.length/2)-10,0,gridWorld,"PAUSE",5);
  }
};
}

function SelectColor(i,j,table){
  switch(table.IsCoordVisible(i,j))
  {
    case 1:
    canvasContext.fillStyle="#ff342d";	//red
    break;
    case 2:
    canvasContext.fillStyle="#0bf247";	//green
    break;
    case 3:
    canvasContext.fillStyle="#0b80ff";	//blue
    break;

    case 4:
    canvasContext.fillStyle="#ffd42d"; //yellow
    break;

    case 5:
    canvasContext.fillStyle="white";	//white
    break;
    case 6:
    canvasContext.fillStyle="#f68c00";	//Orange
    break;

    case 7:
    canvasContext.fillStyle="#f14ee8";	//purple
    break;

    case 8:
    canvasContext.fillStyle="#02ffff";	//cyan
    break;
  }
};

function PlaceApple(){
  Apple=new Array(getRandomInt(0,gridWorld.WorldX.length-1),getRandomInt(0,gridWorld.WorldY.length-1));
};

function DrawGrid(output){
  for(var i=0; i<output.WorldY.length; i++)		//lines
  {
    for(var j = 0;j<output.WorldX.length;j++)	//columns
    {
      SelectColor(i,j,output);
      if(output.IsCoordVisible(i,j)>=1)
      {
        canvasContext.fillRect(XBegin+output.WorldX[j],output.WorldY[i],output.pixelSize,output.pixelSize);
      }
    }
  }
};


function updateWindow(){
  var OldHeight=vp.viewport[1];
  var OldWidth=vp.viewport[0];

  vp = new viewport();

  if(vp[1]!=OldHeight || vp.viewport[0]!= OldWidth)
  {
    setupPage();
  }
}

function checkViewport(){
  if(vp.viewport[0]>900 & vp.viewport[0]<=1067 )
  {

    BOX=10;
    scoreBox=2;
    margin=1;
    scoreMargin=1;
    Ysize=100;
    scoreGridX=6*(BOX+scoreMargin);
    Middle=true;
  }
  if(vp.viewport[0]>373 && vp.viewport[0]<=900)	//smartphone
  {

    BOX=10;
    scoreBox=2;
    MenuBox=3;
    margin=1;
    scoreMargin=1;
    Ysize=80;
    scoreGridX=6*(BOX+scoreMargin);
    Small=true;
  }

  if(vp.viewport[0]<=373)	//very small smartphones...
  {
    BOX=10;
    scoreBox=2;
    MenuBox=2;
    margin=1;
    scoreMargin=1;
    Ysize=80;
    scoreGridX=6*(BOX+scoreMargin);
    Small=true;
  }


  if(vp.viewport[0]>1067)
  {
    BOX=20;
    scoreBox=8;
    MenuBox=5;
    margin=5;
    scoreMargin=1;
    scoreGridX=9*(BOX+scoreMargin);
    Ysize=200;
    Small=false;
    Middle=false;
  }
}

function Paint(){
  gridWorld.Sweap();
  scoreGrid.Sweap();
  Gmenu.Sweap();
  Pressed=false;
  s.Draw();
  s.update();

  canvasContext.fillStyle="black";
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  if(g.GameCode==="")
  DrawGrid(Gmenu)
  else
  gridWorld.SetCoordVisibility(Apple[1],Apple[0],1);
  DrawGrid(gridWorld);
  //DrawGrid(scoreGrid);

  drawScore();
};

function DrawText(Y,X,output,Text,color){
  var letter = new Letter();
  var Margin=0;
  var hitbox=0;
  var hitboxY=0;
  var sizeX=0;
  for(var i=0;i<Text.length;i++)
  {
    letter.init(Text[i],color);
    output.DrawInGrid(letter,X, Y + Margin);
    Margin +=letter.sizeX+1;
    if(letter.sizeX/letter.grid.length >hitboxY)
    hitboxY=letter.grid.length/letter.sizeX;
    sizeX+=letter.sizeX;
  }
  //hitbox=new Array(Margin).fill(new Array(hitboxY).fill(5));
  hitbox=new Array(new Coord(Y,X),new Coord(Y+hitboxY,X+Margin));
  DrawGrid(output);
  //console.log("X "+hitbox[0].x +" Y "+hitbox[0].y+"    "+ "X "+hitbox[1].x +" Y "+hitbox[1].y  );

  return hitbox;
}

function drawScore(){
  scorePlace.y=scoreGrid.length-4;
  var ScoreToString=g.Score.toString();
  var score = "SCORE";
  var letter = new Letter();
  for(var i =0;i<gridWorld.WorldY.length;i++){
    canvasContext.fillStyle="white";
    canvasContext.fillRect(0+gridWorld.WorldX[gridWorld.WorldX.length-1],gridWorld.WorldY[i],gridWorld.pixelSize,gridWorld.pixelSize);
  }

  for(i=0;i<score.length;i++)
  {
    letter.init(score[i],4);
    //console.log(score[i]+" "+letter.grid.length);
    scoreGrid.DrawInGrid(letter,0,(letter.sizeX+1)*i);
  }

  for(var i=0;i<ScoreToString.length;i++)
  {
    letter.init(ScoreToString[i],3);
    scoreGrid.DrawInGrid(letter,Math.floor(scoreGrid.WorldY.length/2),(letter.sizeX+1)*i);
  }

  for(var i=0;i<scoreGrid.WorldY.length;i++){
    for(var j=0;j<scoreGrid.WorldX.length;j++){
      SelectColor(j,i,scoreGrid);
      if(scoreGrid.IsCoordVisible(j,i)>=1)
      {
        canvasContext.fillRect(0+scoreGrid.WorldX[i] +gridWorld.pixelSize+scoreMargin+ gridWorld.WorldX[gridWorld.WorldX.length-1],margin+scoreGrid.WorldY[j],scoreGrid.pixelSize,scoreGrid.pixelSize);
      }
    }
  }
};

function setupPage(){

  console.log(vp.viewport[0]);
  canvas = document.getElementById("screen");
  canvasContext = canvas.getContext("2d");
  console.log(canvas.parentNode);
  var device= getUserAgent();
  console.log(canvas);

  if(device==="smartphone")
  {
    console.log("smartphone mode");
    document.style="text-size-adjust:unset";
    console.log(document);
    Smartphone=true;
    Small=true;
  }
  checkViewport();
  setGame();
  //TetrisGrid = new Screen(vp.viewport[0]-marginLeft-scoreGridX-1,Ysize,BOX,margin);

}

function ScrollMethod(){
    if(document.getElementsByTagName("body")[0].classList.contains("stop-scrolling"))
      document.getElementsByTagName("body")[0].classList.remove("stop-scrolling");

    else
      document.getElementsByTagName("body")[0].classList.add("stop-scrolling");

}

function setGame()
{
  if(vp.viewport[0]<=990)
    canvas.width=vp.viewport[0];
  else
    canvas.width=canvas.parentNode.clientWidth;

  console.log("canvas.width: "+canvas.width);
  canvas.height=Ysize+margin;
  g = new Game();
  gridWorld = new Screen(canvas.width-scoreGridX,Ysize,BOX,margin);
  scoreGrid = new Screen(scoreGridX,Ysize,scoreBox,scoreMargin);
  s = new Snake(gridWorld.WorldX.length/2,gridWorld.WorldY.length/2,false);
  Gmenu = new Screen(canvas.width-scoreGridX,Ysize,MenuBox,1);
}


window.onload = function() {
  setupPage();
  window.addEventListener("resize",updateWindow);
  document.addEventListener("keydown",keyPressed);
  //document.addEventListener("click",getRelativeCoords);
  //document.addEventListener("mouseup",getRelativeCoords);
  setInterval("g.Start()", 1000/FPS);
};
