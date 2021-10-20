import axios, { AxiosError } from 'axios'
import {
  GetUser,
  CometchatApiConfig,
  TokenList,
  UserId,
  CreateUserReq,
  CreateUserRes,
  CreateTokenReq,
  CreateTokenRes
} from '.'

export function useCometchatApi(config: CometchatApiConfig) {
  if (!config?.apiKey || !config?.appId || !config?.region) {
    throw new Error('not correct set config')
  }

  const instance = axios.create({
    baseURL: `https://${config.appId}.api-${config.region}.cometchat.io/v3.0`,
    headers: {
      apiKey: config.apiKey
    }
  })

  const createToken = async (uid: UserId, json: CreateTokenReq = {}) => {
    return await instance
      .post<CreateTokenRes>(`users/${uid}/auth_tokens`, {
        json
      })
      .then(({ data }) => {
        return data.data ? data : null
      })
      .catch(() => null)
  }

  const getUser = async (uid: UserId) => {
    return await instance
      .get<GetUser>(`users/${uid}`)
      .then(({ data }) => {
        return data.data ? data : null
      })
      .catch(() => null)
  }

  const createUser = async (json: CreateUserReq) => {
    return await instance
      .post<CreateUserRes>(`users`, {
        json
      })
      .then(({ data }) => {
        return data.data ? data : null
      })
      .catch(() => null)
  }

  const getTokens = async (uid: UserId) => {
    return await instance
      .post<TokenList>(`users/${uid}/auth_tokens`)
      .then(({ data }) => {
        return data.data ? data : null
      })
      .catch(() => null)
  }

  return {
    instance,
    getUser,
    createUser,
    createToken,
    getTokens
  }
}
