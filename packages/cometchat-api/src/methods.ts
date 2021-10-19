import axios, { AxiosError } from 'axios'
import {
  CreateToken,
  CreateUser,
  GetUser,
  CometchatApiConfig,
  TokenList,
  UserId
} from './types'
import { CometchatApiError, isCometchatError } from './utils'

export function useCometchatApi(config: CometchatApiConfig) {
  if (!config?.apiKey || !config?.appId || !config?.region) {
    throw new Error('not correct set config')
  }

  const inst = axios.create({
    baseURL: `https://${config.appId}.api-${config.region}.cometchat.io/v3.0`,
    headers: {
      apiKey: config.apiKey
    }
  })

  const errorHandler = (error: AxiosError) => {
    if (error.response && isCometchatError(error.response.data)) {
      return Promise.reject(new CometchatApiError(error.response.data))
    }

    return Promise.reject(error)
  }

  inst.interceptors.request.use(
    (request) => request,
    (error) => errorHandler(error)
  )

  inst.interceptors.response.use(
    (response) => response,
    (error) => errorHandler(error)
  )

  const createToken = async (uid: UserId, json: CreateToken['body']) => {
    const { data } = await inst.post<CreateToken['resp']>(
      `users/${uid}/auth_tokens`,
      {
        json
      }
    )

    return data
  }

  const getUser = async (uid: UserId) => {
    const { data } = await inst.get<GetUser>(`users/${uid}`)
    return data
  }

  const createUser = async (json: CreateUser['req']) => {
    const { data } = await inst.post<CreateUser['res']>(`users`, {
      json
    })

    return data
  }

  const getTokens = async (uid: UserId) => {
    const { data } = await inst.post<TokenList>(`users/${uid}/auth_tokens`)

    return data
  }

  return {
    getUser,
    createUser,
    createToken,
    getTokens
  }
}
