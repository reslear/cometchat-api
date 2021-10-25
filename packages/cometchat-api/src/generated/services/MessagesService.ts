/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class MessagesService {

    /**
     * Send Message
     * Sends Message on behalf of a user.
     * @returns any OK
     * @throws ApiError
     */
    public static sendMessages({
        apiKey,
        onBehalfOf,
        requestBody,
    }: {
        /** API Key **/
        apiKey: string,
        /** uid of the user on whose behalf the action is performed. **/
        onBehalfOf?: string,
        requestBody?: {
            /**
             * The receiver of the message.
             */
            receiver?: string,
            /**
             * The receiverType of the message. either user or group
             */
            receiverType?: string,
            /**
             * Category of the message. The available categories are message and custom.
             */
            category?: string,
            /**
             * Type of the message. The available values are text, image, file, audio, video.
             */
            type?: string,
            /**
             * JSON containing message attributes.
             */
            data?: string,
            /**
             * JSON containing array of uids and guids for whom the message must be sent.      Format for multiple receivers - {"uids": ["uid1","uid2"], "guids":["guid1"]}
             */
            multipleReceivers?: string,
            /**
             * A list of tags to identify specific messages.
             */
            tags?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            id?: string,
            sender?: string,
            receiverType?: string,
            receiver?: string,
            category?: string,
            type?: string,
            data?: {
                text?: string,
                entities?: {
                    sender?: {
                        entity?: {
                            uid?: string,
                            name?: string,
                            avatar?: string,
                            status?: string,
                            role?: string,
                            createdAt?: number,
                            createdBy?: string,
                            updatedAt?: number,
                            updatedBy?: string,
                        },
                        entityType?: string,
                    },
                    receiver?: {
                        entity?: {
                            uid?: string,
                            name?: string,
                            avatar?: string,
                            status?: string,
                            role?: string,
                            createdAt?: number,
                            createdBy?: string,
                        },
                        entityType?: string,
                    },
                },
            },
            sentAt?: number,
        },
    }> {
        return __request({
            method: 'POST',
            path: `/messages`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Messages
     * Fetches the messages list.
     * @returns any OK
     * @throws ApiError
     */
    public static listMessages({
        apiKey,
        searchKey,
        receiverType,
        affix,
        id,
        category,
        type,
        hideDeleted,
        onlyDeleted,
        sentAt,
        limit = 100,
        conversationId,
        withTags = false,
        tags,
        categories,
        types,
        onBehalfOf,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** Retrieves messages containing the searchKey. **/
        searchKey?: string,
        /** Displays messages based on receiverType (user/group) **/
        receiverType?: string,
        /** Determines whether to pull the messages either before or after any message id. Possible values are append(after) and prepend(before). **/
        affix?: string,
        /** Retrieves all those messages after the passed id. **/
        id?: string,
        /** Filters messages by category. Possible values: message, action and custom. **/
        category?: string,
        /** Filters messages by type. **/
        type?: string,
        /** Hides deleted messages from List. **/
        hideDeleted?: boolean,
        /** Includes only deleted messages in List. **/
        onlyDeleted?: boolean,
        /** Fetches the messages list after a particular sentAt timestamp. **/
        sentAt?: number,
        /** The number of records to fetch. Minimum value: 1, Maximum value: 1000 **/
        limit?: number,
        /** Fetches all the messages belong to a particular conversation. **/
        conversationId?: string,
        /** Includes those messages that have tags. **/
        withTags?: boolean,
        /** Fetches those messages that have these tags. **/
        tags?: Array<string>,
        /** Fetches messages based on multiple categories. **/
        categories?: Array<string>,
        /** Fetches messages based on multiple types. **/
        types?: Array<string>,
        /** uid of the user on whose behalf the action is performed. **/
        onBehalfOf?: string,
    }): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/messages`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
            query: {
                'searchKey': searchKey,
                'receiverType': receiverType,
                'affix': affix,
                'id': id,
                'category': category,
                'type': type,
                'hideDeleted': hideDeleted,
                'onlyDeleted': onlyDeleted,
                'sentAt': sentAt,
                'limit': limit,
                'conversationId': conversationId,
                'withTags': withTags,
                'tags': tags,
                'categories': categories,
                'types': types,
            },
        });
    }

    /**
     * Get Message
     * Fetches the details of a message.
     * @returns any OK
     * @throws ApiError
     */
    public static getMessage({
        apiKey,
        id,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** Id of the message whose details are to be fetched. **/
        id: string,
    }): CancelablePromise<{
        data?: {
            id?: string,
            conversationId?: string,
            sender?: string,
            receiverType?: string,
            receiver?: string,
            category?: string,
            type?: string,
            data?: {
                text?: string,
                entities?: {
                    sender?: {
                        entity?: {
                            uid?: string,
                            name?: string,
                            role?: string,
                            avatar?: string,
                            status?: string,
                        },
                        entityType?: string,
                    },
                    receiver?: {
                        entity?: {
                            uid?: string,
                            name?: string,
                            role?: string,
                            avatar?: string,
                            status?: string,
                        },
                        entityType?: string,
                    },
                },
            },
            sentAt?: number,
            updatedAt?: number,
        },
    }> {
        return __request({
            method: 'GET',
            path: `/messages/${id}`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

    /**
     * Update Message
     * Edits the message on behalf of a user.
     * @returns any OK
     * @throws ApiError
     */
    public static userEditmessage({
        id,
        apiKey,
        onBehalfOf,
        requestBody,
    }: {
        /** Id of the message. **/
        id: string,
        /** API Key **/
        apiKey: string,
        /** uid of the user on whose behalf the action is performed. **/
        onBehalfOf?: string,
        requestBody?: {
            /**
             * The data that needs to be modified.
             */
            data?: string,
            /**
             * Optional parameter.
             */
            passthrough?: string,
        },
    }): CancelablePromise<{
        data?: {
            id?: string,
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
                            avatar?: string,
                            status?: string,
                            role?: string,
                            createdAt?: number,
                            createdBy?: string,
                        },
                        entityType?: string,
                    },
                    for?: {
                        entity?: {
                            uid?: string,
                            name?: string,
                            avatar?: string,
                            status?: string,
                            role?: string,
                            createdAt?: number,
                            createdBy?: string,
                        },
                        entityType?: string,
                    },
                    on?: {
                        entity?: {
                            id?: string,
                            sender?: string,
                            receiverType?: string,
                            receiver?: string,
                            category?: string,
                            type?: string,
                            data?: {
                                text?: string,
                                entities?: {
                                    sender?: {
                                        entity?: {
                                            uid?: string,
                                            name?: string,
                                            role?: string,
                                            avatar?: string,
                                            status?: string,
                                            createdAt?: number,
                                            createdBy?: string,
                                        },
                                        entityType?: string,
                                    },
                                    receiver?: {
                                        entity?: {
                                            uid?: string,
                                            name?: string,
                                            role?: string,
                                            avatar?: string,
                                            status?: string,
                                            createdAt?: number,
                                            createdBy?: string,
                                        },
                                        entityType?: string,
                                    },
                                },
                            },
                            sentAt?: number,
                            editedAt?: number,
                            editedBy?: string,
                            receipts?: {
                                data?: Array<any>,
                            },
                        },
                        entityType?: string,
                    },
                },
            },
            sentAt?: number,
        },
    }> {
        return __request({
            method: 'PUT',
            path: `/messages/${id}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Message
     * Deletes the message.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMessage({
        apiKey,
        id,
        onBehalfOf,
        requestBody,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** An id of the message. **/
        id: string,
        /** uid of the user on whose behalf the action is performed. **/
        onBehalfOf?: string,
        requestBody?: {
            /**
             * Deletes the message permanently.
             */
            permanent?: boolean,
        },
    }): CancelablePromise<{
        data?: {
            id?: string,
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
                            avatar?: string,
                            status?: string,
                            role?: string,
                            createdAt?: number,
                            createdBy?: string,
                        },
                        entityType?: string,
                    },
                    for?: {
                        entity?: {
                            uid?: string,
                            name?: string,
                            avatar?: string,
                            status?: string,
                            role?: string,
                            createdAt?: number,
                            createdBy?: string,
                        },
                        entityType?: string,
                    },
                    on?: {
                        entity?: {
                            id?: string,
                            sender?: string,
                            receiverType?: string,
                            receiver?: string,
                            category?: string,
                            type?: string,
                            data?: {
                                data?: {
                                    text?: string,
                                },
                                type?: string,
                                sender?: string,
                                category?: string,
                                entities?: {
                                    sender?: {
                                        entity?: {
                                            uid?: string,
                                            name?: string,
                                            role?: string,
                                            avatar?: string,
                                            status?: string,
                                            createdAt?: number,
                                            createdBy?: string,
                                        },
                                        entityType?: string,
                                    },
                                    receiver?: {
                                        entity?: {
                                            uid?: string,
                                            name?: string,
                                            role?: string,
                                            avatar?: string,
                                            status?: string,
                                            createdAt?: number,
                                            createdBy?: string,
                                        },
                                        entityType?: string,
                                    },
                                },
                                receiver?: string,
                                receiverType?: string,
                            },
                            sentAt?: number,
                            deletedAt?: number,
                            deletedBy?: string,
                        },
                        entityType?: string,
                    },
                },
            },
            sentAt?: number,
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/messages/${id}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Group Messages
     * Fetches the group message list for a user.
     * @returns any OK
     * @throws ApiError
     */
    public static userListgroupmessages({
        guid,
        apiKey,
        searchKey,
        unread,
        undelivered,
        count,
        hideMessagesFromBlockedUsers,
        affix,
        id,
        category,
        categories,
        type,
        types,
        onBehalfOf,
    }: {
        /** An unique identifier of the group. **/
        guid: string,
        /** API Key **/
        apiKey: string,
        /** searches for occurence of message. **/
        searchKey?: string,
        /** displays all the unread messages of the user. **/
        unread?: boolean,
        /** displays all the messages those are undelivered. **/
        undelivered?: boolean,
        /** displays the count of messages as per group/user **/
        count?: boolean,
        /** Hides the messages from blocked users in group. **/
        hideMessagesFromBlockedUsers?: boolean,
        /** Determines whether to pull the messages either before or after any message id. Possible values are append(after) and prepend(before). **/
        affix?: string,
        /** Retrieves all those messages after the passed id. **/
        id?: string,
        /** Fetches messages that belongs to specific category. **/
        category?: string,
        /** Fetches messages that contains multiple categories. **/
        categories?: Array<string>,
        /** Fetches messages that belongs to a specific type. **/
        type?: string,
        /** Fetches messages with multiple types. **/
        types?: Array<string>,
        /** uid of the user on whose behalf the action is performed. **/
        onBehalfOf?: string,
    }): CancelablePromise<{
        data?: Array<{
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
                            updatedAt?: number,
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
                            membersCount?: number,
                            conversationId?: string,
                        },
                        entityType?: string,
                    },
                },
            },
            sentAt?: number,
            updatedAt?: number,
        }>,
        meta?: {
            pagination?: {
                total?: number,
                count?: number,
                per_page?: number,
                current_page?: number,
                total_pages?: number,
            },
            cursor?: {
                id?: number,
                affix?: string,
            },
        },
    }> {
        return __request({
            method: 'GET',
            path: `/groups/${guid}/messages`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
            query: {
                'searchKey': searchKey,
                'unread': unread,
                'undelivered': undelivered,
                'count': count,
                'hideMessagesFromBlockedUsers': hideMessagesFromBlockedUsers,
                'affix': affix,
                'id': id,
                'category': category,
                'categories': categories,
                'type': type,
                'types': types,
            },
        });
    }

    /**
     * Send Bot Message
     * Sends Message from a Bot.
     * @returns any OK
     * @throws ApiError
     */
    public static sendBotMessage({
        uid,
        apiKey,
        requestBody,
    }: {
        /** An uid of the Bot. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        requestBody?: {
            /**
             * The receiver of the message.
             */
            receiver?: string,
            /**
             * The receiverType of the message. either user or group
             */
            receiverType?: string,
            /**
             * Category of the message. The available categories are message and custom.
             */
            category?: string,
            /**
             * Type of the message. The available values are text, image, file, audio, video.
             */
            type?: string,
            /**
             * JSON containing message attributes.
             */
            data?: string,
            /**
             * JSON containing array of uids and guids for whom the message must be sent.      Format for multiple receivers - {"uids": ["uid1","uid2"], "guids":["guid1"]}
             */
            multipleReceivers?: string,
            /**
             * A list of tags to identify specific messages.
             */
            tags?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            id?: string,
            sender?: string,
            receiverType?: string,
            receiver?: string,
            category?: string,
            type?: string,
            data?: {
                text?: string,
                entities?: {
                    sender?: {
                        entity?: {
                            uid?: string,
                            name?: string,
                            avatar?: string,
                            status?: string,
                            role?: string,
                            createdAt?: number,
                            createdBy?: string,
                            updatedAt?: number,
                            updatedBy?: string,
                        },
                        entityType?: string,
                    },
                    receiver?: {
                        entity?: {
                            uid?: string,
                            name?: string,
                            avatar?: string,
                            status?: string,
                            role?: string,
                            createdAt?: number,
                            createdBy?: string,
                        },
                        entityType?: string,
                    },
                },
            },
            sentAt?: number,
        },
    }> {
        return __request({
            method: 'POST',
            path: `/bots/${uid}/messages`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}