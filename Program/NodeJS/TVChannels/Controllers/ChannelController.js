 module.exports =  function(app){
//git commit 
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

});
app.delete('/Channels', function(req, res){

});
}
