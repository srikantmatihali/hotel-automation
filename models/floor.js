var corridor  = require('./corridor');
const config = require('../config/config');
module.exports = class floor {
    constructor(floor){        
        this._floor = floor;
        this._main = new corridor(global.gConfig.ON,global.gConfig.ON,global.gConfig.ON);
        this._sub1 = new corridor(global.gConfig.OFF,global.gConfig.NOT_SET,global.gConfig.ON);
        this._sub2 = new corridor(global.gConfig.NOT_SET,global.gConfig.OFF,global.gConfig.ON);
        this._tik = 0;
    }

    get floor(){
        return this._floor;
    }
    
    set floor(floor){
        this._floor = floor;
    }

    detect_movement(corridorno){
        switch(corridorno){
            //main corridor
            case "0": 
                   console.log('main corridor');

                   break;
            //sub corridor1
            case "1":console.log('sub corridor1');
                   break;
            //sub corridor2
            case "2":
                    this._sub1.ac = global.gConfig.OFF;
                    this._sub2.light2 = global.gConfig.ON;
                    //console.log('sub corridor2 movement state');
                    this.notify_idle(corridorno);                    
                   break;
            default: 
                    res.send('Floor Not defined.');
                    break;
        }
    }

    notify_idle(corridorno){
        console.log(corridorno);
        switch(corridorno){
            //main corridor
            case "0": 
                   console.log('main corridor idlestate');

                   break;
            //sub corridor1
            case "1":console.log('sub corridor1 idlestate');
                   break;
            //sub corridor2
            case "2":
                    this._sub1.ac = global.gConfig.ON;
                    this._sub2.light2 = global.gConfig.OFF;
                    console.log('sub corridor2 idlestate');
                    console.log(this);                    
                   break;
            default: 
                    res.send('Floor Not defined.');
                    break;
        }
    }
}