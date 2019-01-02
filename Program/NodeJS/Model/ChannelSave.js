exports.channelAdd = async function(number, name, price) {
  console.log('number='+number+', name=' +name +', price'+price);
  return new Promise(function(resolve, reject) {

  /*var number = req.body.Number;
  var name = req.body.Name;
  var price = req.body.Price;*/

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
        resolve();
      });

  });

});
};
