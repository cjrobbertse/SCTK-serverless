// 'use strict';
// console.log('Loading hello world function');
//
// export const handler = async (event) => {
//     let name = "you";
//     let city = 'World';
//     let time = 'day';
//     let day = '';
//     let responseCode = 200;
//     console.log("request: " + JSON.stringify(event));
//
//     if (event.queryStringParameters && event.queryStringParameters.name) {
//         console.log("Received name: " + event.queryStringParameters.name);
//         name = event.queryStringParameters.name;
//     }
//
//     if (event.queryStringParameters && event.queryStringParameters.city) {
//         console.log("Received city: " + event.queryStringParameters.city);
//         city = event.queryStringParameters.city;
//     }
//
//     if (event.headers && event.headers['day']) {
//         console.log("Received day: " + event.headers.day);
//         day = event.headers.day;
//     }
//
//     if (event.body) {
//         let body = JSON.parse(event.body)
//         if (body.time)
//             time = body.time;
//     }
//
//     let greeting = `Good ${time}, ${name} of ${city}.`;
//     if (day) greeting += ` Happy ${day}!`;
//
//     let responseBody = {
//         message: greeting,
//         input: event
//     };
//
//     // The output from a Lambda proxy integration must be
//     // in the following JSON object. The 'headers' property
//     // is for custom response headers in addition to standard
//     // ones. The 'body' property  must be a JSON string. For
//     // base64-encoded payload, you must also set the 'isBase64Encoded'
//     // property to 'true'.
//     let response = {
//         statusCode: responseCode,
//         headers: {
//             "x-custom-header" : "my custom header value"
//         },
//         body: JSON.stringify(responseBody)
//     };
//     console.log("response: " + JSON.stringify(response))
//     return response;
// };


// import got from 'got'
//

import parser from 'lambda-multipart-parser'
export const handler = async(event) => {
    // console.log(event)

    const result = await parser.parse(event)
    console.log(result)
    const file_content = result.files[0].content

    // const anti_buffer = file_content.toJSON()
    console.log(file_content)
    console.log(file_content.toString('ascii'))
    console.log(JSON.parse(file_content.toString('ascii')))


    let responseBody = {
        message: 'ok'
    }
    let response = {
        statusCode: 200,
        body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response))
    return response
}
//     // console.log('official:', body['official_swagger_url'])
//     // console.log('modified:', body['modified_swagger_url'])
//
//
//     // const response1 = await got('https://raw.githubusercontent.com/tmforum-apis/TMF700_ShippingOrder/main/TMF700-ShippingOrder-v4.0.0.swagger.json').json()
//
//
//     // return event?.key1
//
//
//
//     // console.log('hello from the my zip :)')
//     // // const result = await parser.parse(event)
//     //
//     // // console.log(result)
//     //
//     // // TODO implement
//     // // return a custom response object to log some values, test and debug.
//     // const response = {
//     //     statusCode: 200,
//     //     body: {
//     //         message: JSON.stringify('Hello from Lambda!'),
//     //         event: event,  // input event variable
//     //         customMessage: "hello its chris's new message"
//     //     }
//     // };
//     // return response;
//
//
//
//     // Get Values from request
//     // if fail return 400 error
//     // if get all values, then 200 with test results.
//
//     // What if we can't find the API key and version? is that a bad request valid request
//     // if the catalogue ID and version don't exist, then please return a 404.
//
//     // do we fetch the extension file first and if we can't.
//
//     // not there should be a server error if we can't reach the file. but there shoul be a 404 if the extension / api entity doesn't exist.
//
//     // it might be easier to use the original SCTK. with everything attached
//     // I'm not sure how I can strip it back s easily
// };
//
// // module.exports = { handler }
//
// await handler()