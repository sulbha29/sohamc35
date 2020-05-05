class Player{
    constructor(){

    }
getcount(){
    var Playerref=database.ref('Playercount');
    Playerref.on("value",function(data){
     playercount = data.val();
    })
}
updatecount(count){
    database.ref('/').update({
        Playercount:count
    })
}
update(name){
    var playerindex="Player"+ playercount;
    database.ref(playerindex).set({
        Name:name
    })
}
}