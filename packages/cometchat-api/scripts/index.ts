import * as OpenAPI from 'openapi-typescript-codegen'

OpenAPI.generate({
  input: 'https://api.developerhub.io/api/public/reference/1391/raw',
  output: __dirname + '/../src/generated',
  httpClient: OpenAPI.HttpClient.AXIOS,
  useOptions: true
})
