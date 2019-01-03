module.exports =  function(app){

app.get('/Channels', async function(req, res){
  console.log('app.get call');
  //var channelData;

  var family = require('../Model/Family');
  var channelData = await family.channellist;
  console.log('channelData : '+channelData);
  res.render('Channel',{ channelList: channelData });

});
app.post('/Channels', function(req, res){
  console.log('app.post call');
  console.log(req);
  console.log(req.body);
  var number = req.body.Number;
  var name = req.body.Name;
  var price = req.body.Price;
  console.log('number='+number+', name=' +name +', price='+price);
  var channelSave = require('../Model/ChannelSave');
  channelSave.channelAdd(number, name, price);
  res.redirect('/Channels');
  /*var number = req.body.Number;
  var name = req.body.Name;
  var price = req.body.Price;

  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Passw0rd",
    database: "Family"
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var ins = "INSERT INTO Channel (Number, Name, Price) VALUES (" + number+",'" +  name +"'," +  price+")";
    console.log(ins);
      con.query(ins, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
        res.redirect('/Channels');
      });

  });*/

});
app.delete('/Channels', function(req, res){

});
}
