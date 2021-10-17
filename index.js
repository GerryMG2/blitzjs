var initialized = false;

class blitz {
    send(obj,script){
        if(initialized){
            console.log("url " + this.url);
        }
        else{
            throw "blitz-etl has not been initialized. Plese use blitz.init('http:...')"
        }
    }

    constructor(){
        this.url = "";
       

    }
    

    init(url){
        this.url = url;
        initialized = true;
    }
}



const bt = new blitz();

module.exports = bt