'use strict';
const serverless = require('serverless-http');
const app=require('./server-build/bundle').app;
//const app=require('./server-build/bundle');
module.exports.hello = async (event, context) => {
  const handler = serverless(app);
module.exports.handler = async (event, context) => {
    console.log(" in the serverless call event",event);
    console.log(" in the serverless call event",context);

  return await handler(event, context);
};


  return {

    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
