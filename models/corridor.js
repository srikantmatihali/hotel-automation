'use strict';
module.exports = class corridor{
    
    constructor(light1,light2,ac){        
        this._light1 = light1;
        this._light2 = light2;
        this._ac = ac;
    }

    get light1(){
        return this._light1;
    }

    get light2(){
        return this._light2;
    }

    get ac(){
        return this._ac;
    }
    set light1(light1){
        this._light1 = light1;
    }

    set light2(light2){
        this._light2 = light2;
    }

    set ac(ac){
        this._ac = ac;
    }   

}

