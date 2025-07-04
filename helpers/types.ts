import {Column, PreviewProps, Row} from "@react-email/components";
import * as React from "react";

export interface MeisterEmailProps {
    loginCode: string,
    offers: OffersType,
    headContacts: HeadContactsType[]
    partners: PartnersType,
    reviews: ReviewsType,
}

export interface OffersType {
    "h1": string;
    "text": Array<string>
}

export interface HeadContactsType {
    "href": string,
    "style": Object,
    "text": string,
    "textStyle": Object,
    "img": {
        "src": string,
        "width": string,
        "height": string,
        "alt": string,
        "className": string,
        "style": Object
    }
}

export interface PartnersDataType {
    "img": {
        "src": string,
        "style": {
            width: string,
            height: string,
        },
        "alt": string,
    },
    "href"?: string,
}

export interface PartnersType {
    "h2": string,
    "data": Array<PartnersDataType>,
}

export interface ReviewsType {
    "h2": string,
    "data": string[],
    "link": {
        "text": string,
        "href": string,
    }
}