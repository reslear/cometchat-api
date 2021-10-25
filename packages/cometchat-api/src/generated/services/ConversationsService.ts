/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ConversationsService {

    /**
     * List Conversations
     * @returns any OK
     * @throws ApiError
     */
    public static listConversations({
        apiKey,
        onBehalfOf,
        conversationType,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** uid of the user on whose behalf the action is performed. **/
        onBehalfOf?: string,
        /** Retrieves only the specified conversation type (user and group) while fetching conversations list. **/
        conversationType?: string,
    }): CancelablePromise<{
        data?: Array<{
            conversationId?: string,
            conversationType?: string,
            unreadMessageCount?: string,
            createdAt?: number,
            updatedAt?: number,
            lastMessage?: {
                id?: string,
                conversationId?: string,
                sender?: string,
                receiverType?: string,
                receiver?: string,
                category?: string,
                type?: string,
                data?: {
                    action?: string,
                    entities?: {
                        by?: {
                            entity?: {
                                uid?: string,
                                name?: string,
                                role?: string,
                                avatar?: string,
                                status?: string,
                                createdAt?: number,
                            },
                            entityType?: string,
                        },
                        on?: {
                            entity?: {
                                uid?: string,
                                link?: string,
                                name?: string,
                                role?: string,
                                avatar?: string,
                                status?: string,
                                createdAt?: number,
                                updatedAt?: number,
                                conversationId?: string,
                            },
                            entityType?: string,
                        },
                        for?: {
                            entity?: {
                                guid?: string,
                                icon?: string,
                                name?: string,
                                type?: string,
                                owner?: string,
                                createdAt?: number,
                                updatedAt?: number,
                                updatedBy?: string,
                                description?: string,
                                membersCount?: number,
                                conversationId?: string,
                            },
                            entityType?: string,
                        },
                    },
                },
                sentAt?: number,
                updatedAt?: number,
                receipts?: {
                    data?: Array<any>,
                },
            },
            conversationWith?: {
                guid?: string,
                name?: string,
                description?: string,
                icon?: string,
                type?: string,
                scope?: string,
                membersCount?: number,
                joinedAt?: number,
                conversationId?: string,
                hasJoined?: boolean,
                wsChannel?: {
                    identity?: string,
                    secret?: string,
                    service?: string,
                },
                createdAt?: number,
                owner?: string,
                updatedAt?: number,
                updatedBy?: string,
            },
        }>,
        meta?: {
            pagination?: {
                total?: number,
                count?: number,
                per_page?: number,
                current_page?: number,
                total_pages?: number,
            },
        },
    }> {
        return __request({
            method: 'GET',
            path: `/conversations`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
            query: {
                'conversationType': conversationType,
            },
        });
    }

    /**
     * Get Conversation
     * @returns any OK
     * @throws ApiError
     */
    public static getConversations({
        apiKey,
        conversationId,
        onBehalfOf,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** (Required) conversation id **/
        conversationId: string,
        /** uid of the user on whose behalf the action is performed. **/
        onBehalfOf?: string,
    }): CancelablePromise<{
        data?: {
            conversationId?: string,
            conversationType?: string,
            unreadMessageCount?: string,
            createdAt?: number,
            updatedAt?: number,
            lastMessage?: {
                id?: string,
                conversationId?: string,
                sender?: string,
                receiverType?: string,
                receiver?: string,
                category?: string,
                type?: string,
                data?: {
                    action?: string,
                    entities?: {
                        by?: {
                            entity?: {
                                uid?: string,
                                name?: string,
                                role?: string,
                                avatar?: string,
                                status?: string,
                                createdAt?: number,
                            },
                            entityType?: string,
                        },
                        on?: {
                            entity?: {
                                uid?: string,
                                link?: string,
                                name?: string,
                                role?: string,
                                avatar?: string,
                                status?: string,
                                createdAt?: number,
                                updatedAt?: number,
                                conversationId?: string,
                            },
                            entityType?: string,
                        },
                        for?: {
                            entity?: {
                                guid?: string,
                                icon?: string,
                                name?: string,
                                type?: string,
                                owner?: string,
                                createdAt?: number,
                                updatedAt?: number,
                                updatedBy?: string,
                                description?: string,
                                membersCount?: number,
                                conversationId?: string,
                            },
                            entityType?: string,
                        },
                    },
                },
                sentAt?: number,
                updatedAt?: number,
                receipts?: {
                    data?: Array<any>,
                },
            },
            conversationWith?: {
                guid?: string,
                name?: string,
                description?: string,
                icon?: string,
                type?: string,
                scope?: string,
                membersCount?: number,
                joinedAt?: number,
                conversationId?: string,
                hasJoined?: boolean,
                wsChannel?: {
                    identity?: string,
                    secret?: string,
                    service?: string,
                },
                createdAt?: number,
                owner?: string,
                updatedAt?: number,
                updatedBy?: string,
                tags?: Array<string>,
            },
        },
    }> {
        return __request({
            method: 'GET',
            path: `/conversations/${conversationId}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
        });
    }

    /**
     * Delete Conversation
     * @returns any OK
     * @throws ApiError
     */
    public static deleteConversation({
        conversationId,
        apiKey,
        onBehalfOf,
    }: {
        /** (Required) conversation id **/
        conversationId: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** uid of the user on whose behalf the action is performed. **/
        onBehalfOf?: string,
    }): CancelablePromise<{
        data?: {
            success?: boolean,
            message?: string,
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/conversations/${conversationId}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
        });
    }

}