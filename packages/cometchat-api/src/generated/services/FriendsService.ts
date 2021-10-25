/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class FriendsService {

    /**
     * Add Friends
     * The API allows to add multiple friends for a given uid.
     * @returns any OK
     * @throws ApiError
     */
    public static addFriends({
        uid,
        apiKey,
        requestBody,
    }: {
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey?: string,
        requestBody?: {
            /**
             * The array of uids of the friends.
             */
            accepted?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            accepted?: {
                superhero2?: {
                    success?: boolean,
                    message?: string,
                },
                superhero3?: {
                    success?: boolean,
                    message?: string,
                },
                superhero4?: {
                    success?: boolean,
                    message?: string,
                },
            },
        },
    }> {
        return __request({
            method: 'POST',
            path: `/users/${uid}/friends`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List Friends
     * The API allows to fetch friends for a given uid.
     * @returns any OK
     * @throws ApiError
     */
    public static listFriends({
        uid,
        apiKey,
    }: {
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey?: string,
    }): CancelablePromise<{
        data: Array<{
            uid: string,
            name: string,
            avatar: string,
            status: string,
            role: string,
            createdAt: number,
            conversationId: string,
        }>,
        meta: {
            pagination: {
                total: number,
                count: number,
                per_page: number,
                current_page: number,
                total_pages: number,
            },
            cursor: {
                updatedAt: number,
                affix: string,
            },
        },
    }> {
        return __request({
            method: 'GET',
            path: `/users/${uid}/friends`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

    /**
     * Remove Friends
     * The API removes friends for a given uid.
     * @returns any OK
     * @throws ApiError
     */
    public static removeFriends({
        uid,
        apiKey,
        requestBody,
    }: {
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey?: string,
        requestBody?: {
            /**
             * The array of friends to remove.
             */
            friends?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            success?: boolean,
            message?: string,
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/users/${uid}/friends`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}