var initialized = false;
const io = require("socket.io-client");

class blitz {
    send(obj,script,id_db){
        if(initialized){
            console.log("url " + this.url);
            try {
                this.socket.emit("transaction",{
                    script: script,
                    data: obj,
                    connection: id_db
                }); 
            } catch (error) {
                
            }
            
        }
        else{
            throw "blitz-etl has not been initialized. Plese use blitz.init('http:...')"
        }
    }

    constructor(){
        this.url = "";
        this.socket = null;
        this.connected = false;

    }
    

    init(url){
        this.url = url;
        console.log(url);
        initialized = true;
        this.socket = io(url,{
            query: {
                type: "App"
            }
        });
        this.socket.on("connect",()=>{
            console.log("connected");
        });

        this.socket.on("disconnect",()=>{
            
        });
    }
}



const bt = new blitz();

module.exports = bt