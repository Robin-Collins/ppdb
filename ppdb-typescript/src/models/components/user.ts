/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type User = {
    userID?: number | undefined;
    username?: string | undefined;
    password?: string | undefined;
    email?: string | undefined;
};

/** @internal */
export namespace User$ {
    export const inboundSchema: z.ZodType<User, z.ZodTypeDef, unknown> = z
        .object({
            userID: z.number().int().optional(),
            username: z.string().optional(),
            password: z.string().optional(),
            email: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.userID === undefined ? null : { userID: v.userID }),
                ...(v.username === undefined ? null : { username: v.username }),
                ...(v.password === undefined ? null : { password: v.password }),
                ...(v.email === undefined ? null : { email: v.email }),
            };
        });

    export type Outbound = {
        userID?: number | undefined;
        username?: string | undefined;
        password?: string | undefined;
        email?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, User> = z
        .object({
            userID: z.number().int().optional(),
            username: z.string().optional(),
            password: z.string().optional(),
            email: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.userID === undefined ? null : { userID: v.userID }),
                ...(v.username === undefined ? null : { username: v.username }),
                ...(v.password === undefined ? null : { password: v.password }),
                ...(v.email === undefined ? null : { email: v.email }),
            };
        });
}
