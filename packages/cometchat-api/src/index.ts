import * as api from './generated'
import { CometchatApiConfig } from './types'

export function useCometchatApi(config: CometchatApiConfig) {
  if (!config?.apiKey || !config?.appId || !config?.region) {
    throw new Error('not correct set config')
  }

  api.OpenAPI.BASE = api.OpenAPI.BASE.replace('<appId>', config.appId).replace(
    '<region>',
    config.region
  )

  api.OpenAPI.HEADERS = {
    apiKey: config.apiKey
  }

  return {
    instance: api.OpenAPI,
    Users: api.UsersService,
    Friends: api.FriendsService,
    Roles: api.RolesService,
    AuthTokens: api.AuthTokensService,
    BannedUsers: api.BannedUsersService,
    BlockedUsers: api.BlockedUsersService,
    Conversations: api.ConversationsService,
    Groups: api.GroupsService,
    Members: api.MembersService,
    Messages: api.MessagesService
  }
}
