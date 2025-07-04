import {HeadContactsType, OffersType, ReviewsType} from "./types";
import {intendClear, link, phoneStyle} from "./styles";

export const baseUrl: string = `https://tk-meister.ru`;

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
        "textStyle": {
            ...intendClear,
            marginRight: "3px",
            marginBottom: "5px",
            color: "white !important", ...phoneStyle
        },
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
        "textStyle": {
            ...intendClear,
            marginRight: "3px",
            marginBottom: "5px",
            color: "white !important", ...phoneStyle
        },
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

export const partners = {
    "h2": "С нами сотрудничают",
    "data": [
        {
            "img": {
                "src": `${baseUrl}/email-assets/partners/seyma.jpg`,
                "style": {
                    width: "123px",
                    height: "98px",
                },
                "alt": "Логотип: Агрофирма Птицефабрика Сеймовская",
            },
            "href": "https://seyma.ru/",
        },
        {
            "img": {
                "src": `${baseUrl}/email-assets/partners/synergetic.jpg`,
                "style": {
                    width: "210px",
                    height: "70px",
                },
                "alt": "ООО 'Синергетик'",
            },
            "href": "https://synergetic.ru/",
        },
        {
            "img": {
                "src": `${baseUrl}/email-assets/partners/crystal.jpg`,
                "style": {
                    width: "170px",
                    height: "64px",
                },
                "alt": "Торговый дом Кристалл",
            },
            "href": "http://www.krst-nn.ru/",
        },
        {
            "img": {
                "src": `${baseUrl}/email-assets/partners/biskotti.jpg`,
                "style": {
                    width: "151px",
                    height: "114px",
                },
                "alt": "ООО 'БИСКОТТИ ПЛЮС'",
            },
            "href": "http://www.biskotti.ru/products",
        },
        {
            "img": {
                "src": `${baseUrl}/email-assets/partners/manufactura.jpg`,
                "style": {
                    width: "142px",
                    height: "97px",
                },
                "alt": "Логотип: Гороховецкая мануфактура",
            },
            "href": "https://gormanu.ru/",
        },
        {
            "img": {
                "src": `${baseUrl}/email-assets/partners/volgasnab.jpg`,
                "style": {
                    width: "148px",
                    height: "65px",
                },
                "alt": "Торговый дом Волгаснаб",
            },
        },
    ]
}

export const reviews: ReviewsType = {
    "h2": "Более 300 РЕАЛЬНЫХ отзывов!",
    "data": [
        "Отличный перевозчик, профессионал своего дела. БЫСТРЫЙ, четкий контроль погрузочно-разгрузочных работ. Информативность и добросовестность. Успеха вам и процветания! Рекомендую!",
        "Замечательный, ответственный перевозчик! Оперативность, качество, приятное общение, порядочность — всё это вызывает уважение! Спасибо за профессиональный подход к делу. Желаем процветания и успехов!",
        "Замечательный, ответственный перевозчик!. Оперативность, качество, приятное общение, порядочность — всё это вызывает уважение! Спасибо за профессиональный подход к делу. Желаем процветания и успехов!"
    ],
    "link": {
        "href": "https://tk-meister.ru/",
        "text": "Перейти на сайт"
    }
}