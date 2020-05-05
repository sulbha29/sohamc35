class Game{
    constructor(){

    }
getstate(){
    var refgame=database.ref('Gamestate');
    refgame.on("value",function(data){
     Gamestate = data.val();
    })
}
update(state){
    database.ref('/').update({
        Gamestate:state
    })
}
start(){
    if(Gamestate===0){
        player= new Player();
        player.getcount();
        form= new Form();
        form.display();
    }
}
}