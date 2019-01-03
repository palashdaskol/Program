var http = require('http');


// Create a server
http.createServer( function (request, response) {
   // Parse the request containing file name

         response.writeHead(200, {'Content-Type': 'text/html'});


      var mysql = require('mysql');

      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Passw0rd",
        database: "Family"
      });

      var tableContent = "<!DOCTYPE html> <html><head><h1>Database access</h1></head><body><table><tr><td>Header1</td></tr>";
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "Select * from Channel";
          con.query(sql, function (err, result, fields) {
          if (err) throw err;
          tableContent = tableContent + "<tr> <td>";
          
          console.log(result[0]);
          console.log(result[0][0])
          tableContent = tableContent + "result[0].Name";
          tableContent = tableContent + "</td> </tr>";
          console.log(result);
        });
      });
      tableContent += "</table></body></html>";


      // Write the content of the file to response body
      response.write(tableContent.toString());
      // Send the response body
      response.end();

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
