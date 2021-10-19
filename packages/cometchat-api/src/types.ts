export type UserId = string

export interface ICometchatApiError {
  error: {
    message: string
    devMessage: string
    source: string
    details?: string
    code: string
  }
}

export interface CometchatApiConfig {
  apiKey: string
  appId: string
  region: string
}

export interface TokenList {
  data: {
    uid: string
    authToken: string
    createdAt: number
  }[]
  meta: {
    pagination: {
      total: number
      count: number
      per_page: number
      current_page: number
      total_pages: number
    }
  }
}

export interface CreateUser {
  req: {
    uid: string
    name: string
    avatar?: string
    link?: string
    role?: string
    metadata?: string
    withAuthToken?: boolean
    tags?: string[]
  }
  res: {
    data: {
      uid: string
      name: string
      status: string
      createdAt: number
    }
  }
}

export interface CreateToken {
  body: {
    force?: boolean
  }
  resp: {
    data: {
      uid: string
      authToken: string
      createdAt: number
    }
  }
}

export interface GetUser {
  data: {
    uid: string
    name: string
    avatar: string
    status: string
    role: string
    createdAt: number
  }
}
