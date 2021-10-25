/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class MembersService {

    /**
     * Add members
     * Adds multiple users as per the scope.
     * @returns any OK
     * @throws ApiError
     */
    public static addMembers({
        guid,
        apiKey,
        requestBody,
    }: {
        /** A unique identifier of a group. **/
        guid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        requestBody?: {
            /**
             * uids of users to be made admins.
             */
            admins?: Array<string>,
            /**
             * uids of the users to be made moderators.
             */
            moderators?: Array<string>,
            /**
             * uids of the users to be made participants.
             */
            participants?: Array<string>,
            /**
             * uids of the users to be banned from the group.
             */
            usersToBan?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            participants?: {
                superhero4?: {
                    success?: boolean,
                    message?: string,
                },
            },
            moderators?: {
                superhero5?: {
                    success?: boolean,
                    message?: string,
                },
            },
        },
    }> {
        return __request({
            method: 'POST',
            path: `/groups/${guid}/members`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List
     * List the  members of a group for a given guid
     * @returns any OK
     * @throws ApiError
     */
    public static listgroupmembers({
        guid,
        apiKey,
        scopes,
    }: {
        /** A guid of a group. **/
        guid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** Fetches group members based on multiple scope. **/
        scopes?: Array<string>,
    }): CancelablePromise<{
        data?: Array<{
            guid?: string,
            uid?: string,
            scope?: string,
            user?: {
                uid?: string,
                name?: string,
                status?: string,
            },
            joinedAt?: number,
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
            path: `/groups/${guid}/members`,
            headers: {
                'apiKey': apiKey,
            },
            query: {
                'scopes': scopes,
            },
        });
    }

    /**
     * Change scope
     * Change scope of a member to the group for a given guid and uid
     * @returns any OK
     * @throws ApiError
     */
    public static changegroupmemberscope({
        guid,
        uid,
        apiKey,
        onBehalfOf,
        requestBody,
    }: {
        /** A guid of a group. **/
        guid: string,
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** uid of a user **/
        onBehalfOf?: string,
        requestBody?: {
            /**
             * A scope for the user.
             */
            scope?: string,
        },
    }): CancelablePromise<{
        data?: Array<{
            guid?: string,
            uid?: string,
            scope?: string,
            user?: {
                uid?: string,
                name?: string,
                status?: string,
            },
            joinedAt?: number,
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
                value?: number,
                field?: string,
                affix?: string,
            },
        },
    }> {
        return __request({
            method: 'PUT',
            path: `/groups/${guid}/members/${uid}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Kick
     * Removes a member with given uid from a group for a given guid.
     * @returns any OK
     * @throws ApiError
     */
    public static kickgroupmember({
        guid,
        uid,
        apiKey,
        onBehalfOf,
    }: {
        /** A guid of a group. **/
        guid: string,
        /** An uid of a user. **/
        uid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** uid of a user **/
        onBehalfOf?: string,
    }): CancelablePromise<{
        data?: {
            success?: boolean,
            message?: string,
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/groups/${guid}/members/${uid}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
        });
    }

}