import {HeadContactsType, OffersType} from "./types";
import {intendClear, link, phoneStyle} from "./styles";

const baseUrl: string = `https://tk-meister.ru`;

export const offers: OffersType = {
    "h1": "Грузоперевозки без проблем по антикризисным расценкам",
    "text": [
        "Вашему предприятию не нужно тратить время и силы на то, чтобы организовать доставку груза в любую точку страны.Обратитесь в нашу компанию и доверьте свою заботу профессионалам.",
        "Компания «Мейстер» функционирует на отечественном рынке с 2016 года. Мы успешно доставили более 150 млн. тонн различных грузов во все города нашей страны. МЫ полностью обеспечим сохранность вашего груза и его своевременную доставку."
    ]
};

export const headContacts: HeadContactsType[] = [
    {
        "href": "tel:+79991205982",
        "style": {...link},
        "text": "+7 (999) 120 59 82",
        "textStyle": {...intendClear, marginRight: "3px", marginBottom: "5px", color: "white !important", ...phoneStyle},
        "img": {
            "src": `${baseUrl}/email-assets/email-icon.jpg`,
            "width": "16",
            "height": "16",
            "alt": "Иконка email",
            "className": "rounded-full",
            "style": {
                "display": "inline",
            }
        }
    },
    {
        "href": "mailto:nickolasdzr@yandex.ru",
        "style": {...link},
        "text": "nickolasdzr@yandex.ru",
        "textStyle": {...intendClear, marginRight: "3px", marginBottom: "5px", color: "white !important", ...phoneStyle},
        "img": {
            "src": `${baseUrl}/email-assets/phone-icon.jpg`,
            "width": "16",
            "height": "16",
            "alt": "Иконка телефона",
            "className": "rounded-full",
            "style": {
                "display": "inline",
            }
        }
    }
]