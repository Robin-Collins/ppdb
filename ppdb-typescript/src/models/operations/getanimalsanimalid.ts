/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetAnimalsAnimalIDRequest = {
    animalID: number;
};

export type GetAnimalsAnimalIDResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * An animal
     */
    animal?: components.Animal | undefined;
};

/** @internal */
export namespace GetAnimalsAnimalIDRequest$ {
    export const inboundSchema: z.ZodType<GetAnimalsAnimalIDRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAnimalsAnimalIDRequest> = z
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
export namespace GetAnimalsAnimalIDResponse$ {
    export const inboundSchema: z.ZodType<GetAnimalsAnimalIDResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Animal: components.Animal$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Animal === undefined ? null : { animal: v.Animal }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Animal?: components.Animal$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAnimalsAnimalIDResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            animal: components.Animal$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.animal === undefined ? null : { Animal: v.animal }),
            };
        });
}