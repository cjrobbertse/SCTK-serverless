import parser from 'lambda-multipart-parser'
import swagger_diff from 'swagger-diff'

export const handler = async(event) => {
    // console.log(event)

    const result = await parser.parse(event)
    // console.log(result)

    const official_swagger_file = result.files.filter((value) => {
        return value.fieldname == "official_swagger_file"
    })[0]
    // console.log(official_swagger_file)

    const modified_swagger_file = result.files.filter((value) => {
        return value.fieldname == "modified_swagger_file"
    })[0]
    // console.log(modified_swagger_file)

    const official_swagger = JSON.parse(official_swagger_file.content.toString('ascii'))
    // console.log(official_swagger)

    const modified_swagger = JSON.parse(modified_swagger_file.content.toString('ascii'))
    // console.log(modified_swagger)

    const diff = await swagger_diff(official_swagger, modified_swagger)

    console.log(diff)

    let responseBody = {
        message: diff
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