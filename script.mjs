// import response from './tmf repos request.json' assert { type: 'json' }

import got from 'got'

const params = '?per_page=200'
const tmf_org_repos_url = `https://api.github.com/orgs/tmforum-apis/repos${params}`

const response = await got(tmf_org_repos_url).json()

const repo_names = response.map((repo) => {
    return repo.name
})

console.log(repo_names)
console.log(repo_names.length)


