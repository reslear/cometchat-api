import { generate, HttpClient } from 'openapi-typescript-codegen'

generate({
  input: 'https://api.developerhub.io/api/public/reference/1391/raw',
  output: __dirname + '/../src/generated',
  httpClient: HttpClient.AXIOS,
  useOptions: true
})
