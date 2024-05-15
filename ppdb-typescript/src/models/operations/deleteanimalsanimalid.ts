/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type DeleteAnimalsAnimalIDRequest = {
    animalID: number;
};

export type DeleteAnimalsAnimalIDResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace DeleteAnimalsAnimalIDRequest$ {
    export const inboundSchema: z.ZodType<DeleteAnimalsAnimalIDRequest, z.ZodTypeDef, unknown> = z
        .object({
            animalID: z.number().int(),
        })
        .transform((v) => {
            return {
                animalID: v.animalID,
            };
        });

    export type Outbound = {
        animalID: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAnimalsAnimalIDRequest> = z
        .object({
            animalID: z.number().int(),
        })
        .transform((v) => {
            return {
                animalID: v.animalID,
            };
        });
}

/** @internal */
export namespace DeleteAnimalsAnimalIDResponse$ {
    export const inboundSchema: z.ZodType<DeleteAnimalsAnimalIDResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteAnimalsAnimalIDResponse> =
        z
            .object({
                httpMeta: components.HTTPMetadata$.outboundSchema,
            })
            .transform((v) => {
                return {
                    HttpMeta: v.httpMeta,
                };
            });
}
