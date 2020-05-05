var Gamestate=0, database, game, player, form, playercount=0;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
   game=new Game();
   game.getstate();
   game.start();
}


function draw(){
   

}



