module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Your function executed successfully!'
    })
  };

  callback(null, response);
};
