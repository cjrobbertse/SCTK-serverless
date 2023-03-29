import parser from 'lambda-multipart-parser'
import got from 'got'

export const handler = async(event) => {
    const tmf_repo_names = await get_tmf_repo_names()
    // const body = event?.body
    // const request_path = event?.requestContext?.path

    // const result = await parser.parse(event)

    const response1 = await got('https://raw.githubusercontent.com/tmforum-apis/TMF700_ShippingOrder/main/TMF700-ShippingOrder-v4.0.0.swagger.json').json()

    return 'ok'
    // return Buffer.from(await body, 'base64')




    // console.log('hello from the my zip :)')
    // // const result = await parser.parse(event)
    //
    // // console.log(result)
    //
    // // TODO implement
    // // return a custom response object to log some values, test and debug.
    // const response = {
    //     statusCode: 200,
    //     body: {
    //         message: JSON.stringify('Hello from Lambda!'),
    //         event: event,  // input event variable
    //         customMessage: "hello its chris's new message"
    //     }
    // };
    // return response;



    // Get Values from request
    // if fail return 400 error
    // if get all values, then 200 with test results.

    // What if we can't find the API key and version? is that a bad request valid request
    // if the catalogue ID and version don't exist, then please return a 404.

    // do we fetch the extension file first and if we can't.

    // not there should be a server error if we can't reach the file. but there shoul be a 404 if the extension / api entity doesn't exist.

    // it might be easier to use the original SCTK. with everything attached
    // I'm not sure how I can strip it back s easily
};

const get_tmf_repo_names = async () => {
    const params = '?per_page=200'
    const tmf_org_repos_url = `https://api.github.com/orgs/tmforum-apis/repos${params}`

    const response = await got(tmf_org_repos_url).json()

    const repo_names = response.map((repo) => {
        return repo.name
    })

    return repo_names
}

// module.exports = { handler }

await handler()