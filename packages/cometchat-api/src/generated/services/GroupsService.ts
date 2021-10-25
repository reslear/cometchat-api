/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class GroupsService {

    /**
     * Create
     * Creates a group.
     * @returns any OK
     * @throws ApiError
     */
    public static creategroup({
        apiKey,
        onBehalfOf,
        requestBody,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** uid of a user **/
        onBehalfOf?: string,
        requestBody?: {
            /**
             * A unique identifier for a group.
             */
            guid: string,
            /**
             * Name of the group.
             */
            name: string,
            /**
             * Type of the group. Can be public, password or private.
             */
            type: string,
            /**
             * An URL for a group icon.
             */
            icon?: string,
            /**
             * Description about the group
             */
            description?: string,
            /**
             * Additional data for the group.
             */
            metadata?: string,
            /**
             * The uid that you wish to make owner of the group.
             */
            owner?: string,
            /**
             * List of tags to identify specific groups.
             */
            tags?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            guid?: string,
            name?: string,
            type?: string,
            createdAt?: number,
        },
    }> {
        return __request({
            method: 'POST',
            path: `/groups`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List
     * lists the groups.
     * @returns any OK
     * @throws ApiError
     */
    public static listgroups({
        apiKey,
        perPage = 100,
        affix,
        updatedAt,
        withTags,
        tags,
        type,
        types,
        page,
        onBehalfOf,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** Number of groups to be fetched in a request. The default value is 100 and the maximum value is 1000. **/
        perPage?: number,
        /** Determines whether to fetch the groups either before or after createdAt/updatedAt timestamp. Possible values are append(after) and prepend(before). **/
        affix?: string,
        /** Fetches the groups list after a particular updatedAt timestamp. **/
        updatedAt?: number,
        /** Includes those groups that have tags. **/
        withTags?: boolean,
        /** Fetches only those groups that have these tags. **/
        tags?: Array<string>,
        /** Fetches groups based on group type(public, protected, password). **/
        type?: string,
        /** Fetches groups based on multiple types. **/
        types?: Array<string>,
        /** Page number. **/
        page?: number,
        /** uid of a user **/
        onBehalfOf?: string,
    }): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/groups`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
            query: {
                'perPage': perPage,
                'affix': affix,
                'updatedAt': updatedAt,
                'withTags': withTags,
                'tags': tags,
                'type': type,
                'types': types,
                'page': page,
            },
        });
    }

    /**
     * Get
     * Retrieves details of a group for a given guid.
     * @returns any OK
     * @throws ApiError
     */
    public static getgroup({
        guid,
        apiKey,
        onBehalfOf,
    }: {
        /** A guid of a group. **/
        guid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** uid of a user **/
        onBehalfOf?: string,
    }): CancelablePromise<{
        data?: {
            guid?: string,
            name?: string,
            type?: string,
            createdAt?: number,
            membersCount?: number,
        },
    }> {
        return __request({
            method: 'GET',
            path: `/groups/${guid}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
        });
    }

    /**
     * Update
     * Updates the group details for a given guid.
     * @returns any OK
     * @throws ApiError
     */
    public static updategroup({
        guid,
        apiKey,
        onBehalfOf,
        requestBody,
    }: {
        /** A guid of a group. **/
        guid: string,
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** uid of a user **/
        onBehalfOf?: string,
        requestBody?: {
            /**
             * Name of the group.
             */
            name?: string,
            /**
             * The type of the group. The available values are: public, password and private.
             */
            type?: string,
            /**
             * An URL to the group icon.
             */
            icon?: string,
            /**
             * Description about the group.
             */
            description?: string,
            /**
             * Additional group data.
             */
            metadata?: string,
            /**
             * The uid that you wish to make the owner of the group.
             */
            owner?: string,
            /**
             * Updates tags of a group.
             */
            tags?: Array<string>,
            /**
             * The unsettable user attributes are icon, description and metadata.
             */
            unset?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            guid?: string,
            name?: string,
            type?: string,
            createdAt?: number,
            updatedAt?: number,
        },
    }> {
        return __request({
            method: 'PUT',
            path: `/groups/${guid}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete
     * Deletes a group with a given guid.
     * @returns any OK
     * @throws ApiError
     */
    public static deletegroup({
        guid,
        apiKey,
        onBehalfOf,
    }: {
        /** A guid of a group. **/
        guid: string,
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
            path: `/groups/${guid}`,
            headers: {
                'apiKey': apiKey,
                'onBehalfOf': onBehalfOf,
            },
        });
    }

}