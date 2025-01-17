/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type GetNotesNoteIDRequest = {
    noteID: number;
};

export type GetNotesNoteIDResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * A note
     */
    note?: components.Note | undefined;
};

/** @internal */
export namespace GetNotesNoteIDRequest$ {
    export const inboundSchema: z.ZodType<GetNotesNoteIDRequest, z.ZodTypeDef, unknown> = z
        .object({
            noteID: z.number().int(),
        })
        .transform((v) => {
            return {
                noteID: v.noteID,
            };
        });

    export type Outbound = {
        noteID: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotesNoteIDRequest> = z
        .object({
            noteID: z.number().int(),
        })
        .transform((v) => {
            return {
                noteID: v.noteID,
            };
        });
}

/** @internal */
export namespace GetNotesNoteIDResponse$ {
    export const inboundSchema: z.ZodType<GetNotesNoteIDResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Note: components.Note$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Note === undefined ? null : { note: v.Note }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Note?: components.Note$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetNotesNoteIDResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            note: components.Note$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.note === undefined ? null : { Note: v.note }),
            };
        });
}
