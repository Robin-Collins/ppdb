/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetSearchRequest = {
    query: string;
};

export type ResponseBody = {
    animalName?: string | undefined;
    customerFirstName?: string | undefined;
    customerSurname?: string | undefined;
    email?: string | undefined;
    phone?: string | undefined;
};

export type GetSearchResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Search results
     */
    responseBodies?: Array<ResponseBody> | undefined;
};

/** @internal */
export namespace GetSearchRequest$ {
    export const inboundSchema: z.ZodType<GetSearchRequest, z.ZodTypeDef, unknown> = z
        .object({
            query: z.string(),
        })
        .transform((v) => {
            return {
                query: v.query,
            };
        });

    export type Outbound = {
        query: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchRequest> = z
        .object({
            query: z.string(),
        })
        .transform((v) => {
            return {
                query: v.query,
            };
        });
}

/** @internal */
export namespace ResponseBody$ {
    export const inboundSchema: z.ZodType<ResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            animalName: z.string().optional(),
            customerFirstName: z.string().optional(),
            customerSurname: z.string().optional(),
            email: z.string().optional(),
            phone: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.animalName === undefined ? null : { animalName: v.animalName }),
                ...(v.customerFirstName === undefined
                    ? null
                    : { customerFirstName: v.customerFirstName }),
                ...(v.customerSurname === undefined
                    ? null
                    : { customerSurname: v.customerSurname }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
            };
        });

    export type Outbound = {
        animalName?: string | undefined;
        customerFirstName?: string | undefined;
        customerSurname?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResponseBody> = z
        .object({
            animalName: z.string().optional(),
            customerFirstName: z.string().optional(),
            customerSurname: z.string().optional(),
            email: z.string().optional(),
            phone: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.animalName === undefined ? null : { animalName: v.animalName }),
                ...(v.customerFirstName === undefined
                    ? null
                    : { customerFirstName: v.customerFirstName }),
                ...(v.customerSurname === undefined
                    ? null
                    : { customerSurname: v.customerSurname }),
                ...(v.email === undefined ? null : { email: v.email }),
                ...(v.phone === undefined ? null : { phone: v.phone }),
            };
        });
}

/** @internal */
export namespace GetSearchResponse$ {
    export const inboundSchema: z.ZodType<GetSearchResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            responseBodies: z.array(z.lazy(() => ResponseBody$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.responseBodies === undefined ? null : { responseBodies: v.responseBodies }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        responseBodies?: Array<ResponseBody$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSearchResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            responseBodies: z.array(z.lazy(() => ResponseBody$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.responseBodies === undefined ? null : { responseBodies: v.responseBodies }),
            };
        });
}