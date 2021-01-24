class Form {
    constructor(){

    }
    display(){
        var title=createElement("h1");
        title.html("multiplayerGame");
        var button=createButton("play");
        var input=createInput("name");
        var greeting=createElement("h3");
        title.position(130, 0);
        button.position(250, 200);
        input.position(130, 160);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playerCount+=1;
            player.updateName(name);
            player.updateCount(playerCount);
            greeting.html("Hello   "+name);
            greeting.position(120, 160);
        })
    }
}