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

export interface MeisterEmailProps {
    loginCode: string,
    offers: OffersType,
    headContacts: HeadContactsType[]
}