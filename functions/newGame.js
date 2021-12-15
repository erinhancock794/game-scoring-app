exports.handler = async function(event, context) {
    console.log('event----->', event);
    console.log('context---_>' , context);
    //server-side functionality

    try {    
        return {
          statusCode: 200,
          body: JSON.stringify('success'),
        };
      } catch (err) {
        return {
          statusCode: 404,
          body: err.toString(),
        };
      }
}