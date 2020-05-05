class Form{
    constructor(){

    }
display(){
    var title= createElement('h3');
    title.html("CarRacer");
    title.position(250,40);
    var input= createInput("Name");
    var button= createButton("Play");
    var greeting= createElement('h3');
    input.position(250,270);
    button.position(250,320);
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name= input.value();
        playercount+=1;
        player.update(name);
        player.updatecount(playercount);
        greeting.html("Welcome!"+ name);
        greeting.position(250,250);
    })
}
}