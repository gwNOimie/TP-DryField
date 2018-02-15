var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//var dbUri = 'mongodb://gameClient:passwordForGameClient@ds235328.mlab.com:35328/tp-dryfield-database';
var dbUri = 'mongodb://gaetank:password@ds235328.mlab.com:35328/tp-dryfield-database';
 
mongoose.connect(dbUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'There is a connection error:'));
db.once('open', function(){
    console.log('We are connected, victory !!')
});

module.exports = db;