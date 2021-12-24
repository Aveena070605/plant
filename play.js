class Player {
    constructor (){
        this.name=null
        this.index=null

    }
    readCount (){
        var water = database.ref ('playerCount')
        water.on("value",(data)=>{
            playerCount=data.val()
        })
    }
    updateCount (count){
        database.ref ('/').update({
            playerCount: count
        })

    }
    update (){
        var player1 = "players/player"+ this.index
        database.ref(player1).set({
            name:this.name
        })

    }
    static readname(){
        var icecream= database.ref("players")
        icecream.on("value",(data)=>{
            allPlayers = data.val()
        })
    }


}