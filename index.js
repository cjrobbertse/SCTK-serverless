const parser = require('lambda-multipart-parser')

export const handler = async(event) => {
    console.log('hello from the my zip :)')
    // const result = await parser.parse(event)

    // console.log(result)

    // TODO implement
    const response = {
        statusCode: 200,
        body: {
            message: JSON.stringify('Hello from Lambda!'),
            event: event,
            customMessage: "hello its chris's new message"
        }
    };
    return response;
};