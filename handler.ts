const serverless = require('serverless-http');
const express = require('express'); // or any supported framework

const app = express();

// app.listen(3002,()=>{
// console.log("here in the express app");
// });

const responseMarkup =`<html>
      <head>
     
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

          </head>
<body>
<div id="root"> 
  this is from server
  </div>

 
  <script src="https://s3.ca-central-1.amazonaws.com/mybuckettoday1/one/bundle.js"></script>
  </body>
      </html>
   `; // NOTE: Should change this address

   
app.get("/", function(req, res) {
  res.status(200).res.send("In the express response");
});
//app.use(/* register your middleware as normal */);
module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Your function executed successfully!'
    })
  };

  callback(null, response);
};



module.exports.awesomesauce= (event, context, callback)=>{

  serverless(app);
  context.succeed({
    statusCode: 200,
    headers: {
      "Content-Type": "text/html",
      "Access-Control-Allow-Origin": "*",
    },
    body: responseMarkup,
  });

}



module.exports.addTodo = (event, context, callback) => {
 


  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'To DO response'
    })
  };

  callback(null, response);


};
