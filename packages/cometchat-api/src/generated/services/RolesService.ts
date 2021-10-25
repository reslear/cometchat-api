/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class RolesService {

    /**
     * Create
     * Creates a new user role
     * @returns any OK
     * @throws ApiError
     */
    public static createrole({
        apiKey,
        requestBody,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        requestBody?: {
            /**
             * A unique identifier for the role.
             */
            role: string,
            /**
             * Friendly name of the role.
             */
            name: string,
            /**
             * Description of the role.
             */
            description?: string,
            /**
             * Addition information about the role as JSON.
             */
            metadata?: string,
        },
    }): CancelablePromise<{
        data?: {
            role?: string,
            name?: string,
            createdAt?: number,
        },
    }> {
        return __request({
            method: 'POST',
            path: `/roles`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List
     * Lists the user roles
     * @returns any OK
     * @throws ApiError
     */
    public static listroles({
        apiKey,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
    }): CancelablePromise<{
        data?: Array<{
            role?: string,
            name?: string,
            createdAt?: number,
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
            path: `/roles`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

    /**
     * Get
     * Retrieves role details for a given role.
     * @returns any OK
     * @throws ApiError
     */
    public static getrole({
        apiKey,
        role,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** A role to get. **/
        role: string,
    }): CancelablePromise<{
        data?: {
            role?: string,
            name?: string,
            createdAt?: number,
        },
    }> {
        return __request({
            method: 'GET',
            path: `/roles/${role}`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

    /**
     * Update
     * Updates a given role.
     * @returns any OK
     * @throws ApiError
     */
    public static updaterole({
        apiKey,
        role,
        requestBody,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** A role to update. **/
        role: string,
        requestBody?: {
            /**
             * Friendly name of the role.
             */
            name?: string,
            /**
             * Description of the role.
             */
            description?: string,
            /**
             * Additional information about the role.
             */
            metadata?: string,
            /**
             * The unsettable user attributes are description and metadata.
             */
            unset?: Array<string>,
        },
    }): CancelablePromise<{
        data?: {
            role?: string,
            name?: string,
            description?: string,
            createdAt?: number,
            updatedAt?: number,
        },
    }> {
        return __request({
            method: 'PUT',
            path: `/roles/${role}`,
            headers: {
                'apiKey': apiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete
     * Deletes a role.
     * @returns any OK
     * @throws ApiError
     */
    public static deleterole({
        apiKey,
        role,
    }: {
        /** API Key with fullAccess scope(i.e. Rest API Key from the Dashboard). **/
        apiKey: string,
        /** A role to delete. **/
        role: string,
    }): CancelablePromise<{
        data?: {
            message?: string,
        },
    }> {
        return __request({
            method: 'DELETE',
            path: `/roles/${role}`,
            headers: {
                'apiKey': apiKey,
            },
        });
    }

}