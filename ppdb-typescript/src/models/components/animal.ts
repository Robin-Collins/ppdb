/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { RFCDate } from "../../types";
import * as z from "zod";

export enum Sex {
    Male = "Male",
    Female = "Female",
}

export type Animal = {
    animalID?: number | undefined;
    animalname?: string | undefined;
    breedID?: number | undefined;
    customerID?: number | undefined;
    sex?: Sex | undefined;
    colour?: string | undefined;
    cost?: number | undefined;
    lastvisit?: RFCDate | undefined;
    thisvisit?: RFCDate | undefined;
    comments?: string | undefined;
};

/** @internal */
export const Sex$: z.ZodNativeEnum<typeof Sex> = z.nativeEnum(Sex);

/** @internal */
export namespace Animal$ {
    export const inboundSchema: z.ZodType<Animal, z.ZodTypeDef, unknown> = z
        .object({
            animalID: z.number().int().optional(),
            animalname: z.string().optional(),
            breedID: z.number().int().optional(),
            customerID: z.number().int().optional(),
            SEX: Sex$.optional(),
            colour: z.string().optional(),
            cost: z.number().int().optional(),
            lastvisit: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            thisvisit: z
                .string()
                .transform((v) => new RFCDate(v))
                .optional(),
            comments: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.animalID === undefined ? null : { animalID: v.animalID }),
                ...(v.animalname === undefined ? null : { animalname: v.animalname }),
                ...(v.breedID === undefined ? null : { breedID: v.breedID }),
                ...(v.customerID === undefined ? null : { customerID: v.customerID }),
                ...(v.SEX === undefined ? null : { sex: v.SEX }),
                ...(v.colour === undefined ? null : { colour: v.colour }),
                ...(v.cost === undefined ? null : { cost: v.cost }),
                ...(v.lastvisit === undefined ? null : { lastvisit: v.lastvisit }),
                ...(v.thisvisit === undefined ? null : { thisvisit: v.thisvisit }),
                ...(v.comments === undefined ? null : { comments: v.comments }),
            };
        });

    export type Outbound = {
        animalID?: number | undefined;
        animalname?: string | undefined;
        breedID?: number | undefined;
        customerID?: number | undefined;
        SEX?: Sex | undefined;
        colour?: string | undefined;
        cost?: number | undefined;
        lastvisit?: string | undefined;
        thisvisit?: string | undefined;
        comments?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Animal> = z
        .object({
            animalID: z.number().int().optional(),
            animalname: z.string().optional(),
            breedID: z.number().int().optional(),
            customerID: z.number().int().optional(),
            sex: Sex$.optional(),
            colour: z.string().optional(),
            cost: z.number().int().optional(),
            lastvisit: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            thisvisit: z
                .instanceof(RFCDate)
                .transform((v) => v.toString())
                .optional(),
            comments: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.animalID === undefined ? null : { animalID: v.animalID }),
                ...(v.animalname === undefined ? null : { animalname: v.animalname }),
                ...(v.breedID === undefined ? null : { breedID: v.breedID }),
                ...(v.customerID === undefined ? null : { customerID: v.customerID }),
                ...(v.sex === undefined ? null : { SEX: v.sex }),
                ...(v.colour === undefined ? null : { colour: v.colour }),
                ...(v.cost === undefined ? null : { cost: v.cost }),
                ...(v.lastvisit === undefined ? null : { lastvisit: v.lastvisit }),
                ...(v.thisvisit === undefined ? null : { thisvisit: v.thisvisit }),
                ...(v.comments === undefined ? null : { comments: v.comments }),
            };
        });
}