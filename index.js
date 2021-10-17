class blitz {
    static send(){
        console.log("hola");
    }

    constructor(){
        this.url = "";
        this.initialized = false;

    }

    init(url){
        this.url = url;
    }
}



const bt = new blitz();

module.exports = bt