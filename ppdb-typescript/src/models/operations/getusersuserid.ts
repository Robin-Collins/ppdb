/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetUsersUserIDRequest = {
    userID: number;
};

export type GetUsersUserIDResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * A user
     */
    user?: components.User | undefined;
};

/** @internal */
export namespace GetUsersUserIDRequest$ {
    export const inboundSchema: z.ZodType<GetUsersUserIDRequest, z.ZodTypeDef, unknown> = z
        .object({
            userID: z.number().int(),
        })
        .transform((v) => {
            return {
                userID: v.userID,
            };
        });

    export type Outbound = {
        userID: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetUsersUserIDRequest> = z
        .object({
            userID: z.number().int(),
        })
        .transform((v) => {
            return {
                userID: v.userID,
            };
        });
}

/** @internal */
export namespace GetUsersUserIDResponse$ {
    export const inboundSchema: z.ZodType<GetUsersUserIDResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            User: components.User$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.User === undefined ? null : { user: v.User }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        User?: components.User$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetUsersUserIDResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            user: components.User$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.user === undefined ? null : { User: v.user }),
            };
        });
}
