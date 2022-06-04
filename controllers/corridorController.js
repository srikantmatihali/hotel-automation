var floor = require('../models/floor');
var floor1,floor2;

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.create = function(req,res){    
    floor1 = new floor(1);
    floor2 = new floor(2);
    console.log(floor1);
    console.log(floor2);
    res.render('index',{floor1:floor1,floor2:floor2,text:"Initialization"});    
    // console.log(floor1);
    // console.log(floor2);
}

exports.movement = function(req,res){
    var floor_no = req.param('floor');
    var corridor_no = req.param('corridor');
    switch(floor_no){
        case "1":console.log(floor1);
                 floor1.detect_movement(corridor_no);
                 break;
        case "2":floor2.detect_movement(corridor_no);
                 break;
        default: 
                res.send('Floor Not defined.');
                break;
    }    
}
