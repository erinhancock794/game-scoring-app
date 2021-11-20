exports.handler = async function(event, context) {
    //server-side functionality
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World."})
    }
}