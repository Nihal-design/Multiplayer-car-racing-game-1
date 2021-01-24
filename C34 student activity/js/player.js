class Player {
    constructor(){

    }
    getCount(){
        database.ref("playerCount").on("value",function(data){
            playerCount=data.val();
        })
    }
     updateCount(state){
        database.ref("/").update({
            playerCount:state
        })
     }
     updateName(name){
         database.ref("player"+playerCount).set({
             name:name
         })
     }
}