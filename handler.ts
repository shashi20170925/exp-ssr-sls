import app from './src/index';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Your function executed successfully!'
    })
  };

  callback(null, response);
};


module.exports.addTodo = (event, context, callback) => {
  


  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'To DO response'
    })
  };

  callback(null, response);


};