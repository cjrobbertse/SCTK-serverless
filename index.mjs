 import parser from 'lambda-multipart-parser'

export const handler = async(event) => {
    console.log('hello from the my zip :)')
    // const result = await parser.parse(event)

    // console.log(result)

    // TODO implement
    // return a custom response object to log some values, test and debug.
    const response = {
        statusCode: 200,
        body: {
            message: JSON.stringify('Hello from Lambda!'),
            event: event,  // input event variable
            customMessage: "hello its chris's new message"
        }
    };
    return response;
};
