import {
    Body, Button, Column,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview, Row, Section,
    Text,
} from '@react-email/components';
import * as React from 'react';
import {HeadContactsType, MeisterEmailProps, OffersType} from "../helpers/types";
import {headContacts, offers} from "../helpers/data";
import {colors, container, h1, intendClear, link, main, phoneStyle} from "../helpers/styles";

const baseUrl = process.env.VERCEL_URL
    ? `https://tk-meister.ru`
    : `https://tk-meister.ru`;

export const MeisterEmail = ({
            loginCode: string,
            offers: OffersType,
            headContacts: [HeadContactsType],
     }: MeisterEmailProps) => (
    <Html>
        <Head>
            <title>Коммерческое предложение от логистической компании ООО "Мейстер"</title>
        </Head>
        <Preview>Мы ищем партнёров по всей России для взаимовыгодного сотрудничества без посредников</Preview>
        <Body style={{...main, minWidth: "430px"}}>
            <Section style={{maxWidth: "600px", backgroundColor: colors.black}}>
                {/* Шапка*/}
                <Container style={{...container, backgroundColor: "#1A1A1A"}}>
                    <Section style={{borderTop: `26px solid ${colors.black}`, borderBottom: `26px solid ${colors.black}`}}>
                        <Row style={{textAlign: "right"}}>
                            <Column>
                                <Link style={{width: '16px', height: '16px'}} href="https://tk-meister.ru/">
                                    <Img
                                        className="rounded-full"
                                        src={`${baseUrl}/email-assets/logo.jpg`}
                                        width="160"
                                        height="55"
                                        alt="Логотип компании ООО 'Мейстер'"
                                    />
                                </Link>
                            </Column>
                            <Column>
                                {
                                    headContacts.map((headContact: HeadContactsType, index: number) => {
                                        return <Link key={index} href={headContact["href"]}>
                                            <Row>
                                                <Column>
                                                    <Text style={headContact["textStyle"]}>
                                                        {headContact["text"]}
                                                    </Text>
                                                </Column>
                                                <Column>
                                                    <Img
                                                        className={headContact["img"]["className"]}
                                                        width={headContact["img"]["width"]}
                                                        height={headContact["img"]["height"]}
                                                        alt={headContact["img"]["alt"]}
                                                        style={headContact["img"]["style"]}
                                                        src={headContact["img"]["src"]}
                                                    />
                                                </Column>
                                            </Row>
                                        </Link>
                                    })
                                }
                            </Column>
                        </Row>
                    </Section>
                </Container>
                {/* Бекграунд */}
                <Section>
                    <Row>
                        <Column>
                            <Img
                                src={`${baseUrl}/email-assets/top-background.jpg`}
                                width="600px"
                                height="366px"
                                style={{width: "100%", height: "auto"}}
                                alt="Наш слоган: Перевозки доступные всем!"
                            />
                        </Column>
                    </Row>
                </Section>
                {/* Текст предложения */}
                <Container style={{...container, backgroundColor: "#1A1A1A"}}>
                    <Section
                        style={{
                            borderTop: "71px solid transparent",
                            borderBottom: "67px solid transparent",
                        }}
                    >
                        <Row>
                            <Column>
                                <Heading style={{...h1,
                                    marginTop: 0,
                                    marginBottom: "10px",
                                }}>
                                    {offers["h1"]}
                                </Heading>
                                {
                                    offers["text"].map((offerText: string, index: number) => {
                                        return <Text key={index} style={{color: "white", fontSize: "16px", lineHeight: 1.6}}>
                                            {offerText}
                                        </Text>
                                    })
                                }
                            </Column>
                        </Row>
                    </Section>
                </Container>
                {/* С нами сотрудничают*/}
                <Container style={{...container, backgroundColor: colors.lightestGray, borderColor: colors.lightestGray}}>
                    <Section style={{
                        borderTop: "solid transparent",
                        borderBottom: "solid transparent",
                        borderTopWidth: "65px",
                        borderBottomWidth: "65px",
                    }}>
                        <Row style={{marginBottom: "40px"}}>
                            <Heading as="h2" style={{...h1,
                                color: "black",
                                marginTop: 0,
                                marginBottom: "19px",
                            }}>
                                С нами сотрудничают
                            </Heading>
                        </Row>
                        <Row style={{marginBottom: "40px"}}>
                            <Column style={{
                                width: "50%",
                            }}>
                                <Link
                                    href="https://seyma.ru/"
                                    target="_blank"
                                    style={{
                                        textAlign: "center",
                                        display: "inline-block",
                                        width: "100%",
                                    }}
                                >
                                    <Img
                                        src={`${baseUrl}/email-assets/partners/seyma.jpg`}
                                        style={{
                                            width: "123px",
                                            height: "98px",
                                            display: "inline",
                                        }}
                                        alt="Логотип: Агрофирма Птицефабрика Сеймовская"
                                    />
                                </Link>
                            </Column>
                            <Column style={{
                                textAlign: "center",
                                width: "50%",
                            }}>


                                <Link
                                    href="https://synergetic.ru/"
                                    target="_blank"
                                    style={{
                                        textAlign: "center",
                                        display: "inline-block",
                                        width: "100%",
                                    }}
                                >
                                    <Img
                                        src={`${baseUrl}/email-assets/partners/synergetic.jpg`}
                                        style={{
                                            width: "210px",
                                            height: "70px",
                                            display: "inline",
                                        }}
                                        alt="ООО 'Синергетик'"
                                    />
                                </Link>
                            </Column>
                        </Row>
                        <Row style={{marginBottom: "40px"}}>
                            <Column style={{
                                textAlign: "center",
                                width: "50%",
                            }}>
                                <Link
                                    href="http://www.krst-nn.ru/"
                                    target="_blank"
                                    style={{
                                        textAlign: "center",
                                        display: "inline-block",
                                        width: "100%",
                                    }}
                                >
                                    <Img
                                        src={`${baseUrl}/email-assets/partners/crystal.jpg`}
                                        style={{
                                            width: "170px",
                                            height: "64px",
                                            display: "inline",
                                        }}
                                        alt="Торговый дом Кристалл"
                                    />
                                </Link>
                            </Column>
                            <Column style={{
                                textAlign: "center",
                                width: "50%",
                            }}>
                                <Link
                                    href="http://www.biskotti.ru/products"
                                    target="_blank"
                                    style={{
                                        textAlign: "center",
                                        display: "inline-block",
                                        width: "100%",
                                    }}
                                >
                                    <Img
                                        src={`${baseUrl}/email-assets/partners/biskotti.jpg`}
                                        style={{
                                            width: "151px",
                                            height: "114px",
                                            display: "inline",
                                        }}
                                        alt="ООО 'БИСКОТТИ ПЛЮС'"
                                    />
                                </Link>
                            </Column>
                        </Row>
                        <Row>
                            <Column style={{
                                textAlign: "center",
                                width: "50%",
                            }}>
                                <Link
                                    href="https://gormanu.ru/"
                                    target="_blank"
                                    style={{
                                        textAlign: "center",
                                        display: "inline-block",
                                        width: "100%",
                                    }}
                                >
                                    <Img
                                        src={`${baseUrl}/email-assets/partners/manufactura.jpg`}
                                        style={{
                                            width: "142px",
                                            height: "97px",
                                            display: "inline",
                                        }}
                                        alt="Логотип: Гороховецкая мануфактура"
                                    />
                                </Link>
                            </Column>
                            <Column style={{
                                textAlign: "center",
                                width: "50%",
                            }}>
                                <Img
                                    src={`${baseUrl}/email-assets/partners/volgasnab.jpg`}
                                    style={{
                                        width: "148px",
                                        height: "65px",
                                        display: "inline",
                                    }}
                                    alt="Торговый дом Волгаснаб"
                                />
                            </Column>
                        </Row>
                    </Section>
                </Container>
                {/* Отзывы */}
                <Container style={{
                    ...container,
                    backgroundColor: "#1A1A1A"
                }}>
                    <Section
                        style={{
                            marginTop: "67px",
                            marginBottom: "67px",

                        }}>
                        <Row>
                            <Column>
                                <Heading as="h2" style={{...h1,
                                    color: "white",
                                    marginTop: 0,
                                    marginBottom: "32px",
                                }}>
                                    Более 300 РЕАЛЬНЫХ отзывов!
                                </Heading>
                            </Column>
                        </Row>
                        <Row style={{
                            backgroundColor: "#4B4B4B",
                            borderRadius: "15px",
                            border: "25px solid transparent",
                            marginBottom: "20px"
                        }}>
                            <Column style={{
                                verticalAlign: "baseline"
                            }}>
                                <Img src={`${baseUrl}/email-assets/quote.jpg`}
                                     width="20px"
                                     height="15px"
                                     style={{marginRight: "25px"}}
                                     alt="Картинка кавычек для обозначения цитаты"
                                />
                            </Column>
                            <Column>
                                <Text style={{display: 'inline', color: colors.lightGray, fontSize: "16px"}}>
                                    Отличный перевозчик, профессионал своего дела.
                                    БЫСТРЫЙ, четкий контроль погрузочно-разгрузочных работ.
                                    Информативность и добросовестность.
                                    Успеха вам и процветания! Рекомендую!
                                </Text>
                            </Column>
                        </Row>
                        <Row style={{
                            backgroundColor: "#4B4B4B",
                            borderRadius: "15px",
                            border: "25px solid transparent",
                            marginBottom: "20px"
                        }}>
                            <Column style={{
                                verticalAlign: "baseline"
                            }}>
                                <Img src={`${baseUrl}/email-assets/quote.jpg`}
                                     width="20px"
                                     height="15px"
                                     style={{marginRight: "25px"}}
                                     alt='Картинка кавычек для обозначения цитаты'
                                />
                            </Column>
                            <Column>
                                <Text style={{display: 'inline', color: colors.lightGray, fontSize: "16px"}}>
                                    Замечательный, ответственный перевозчик! Оперативность,
                                    качество, приятное общение, порядочность — всё это вызывает уважение!
                                    Спасибо за профессиональный подход к делу. Желаем процветания и успехов!
                                </Text>
                            </Column>
                        </Row>
                        <Row style={{
                            backgroundColor: "#4B4B4B",
                            borderRadius: "15px",
                            border: "25px solid transparent",
                            marginBottom: "70px",
                        }}>
                            <Column style={{
                                verticalAlign: "baseline"
                            }}>
                                <Img src={`${baseUrl}/email-assets/quote.jpg`}
                                     width="20px"
                                     height="15px"
                                     style={{marginRight: "25px"}}
                                     alt='Картинка кавычек для обозначения цитаты'
                                />
                            </Column>
                            <Column>
                                <Text style={{display: 'inline', color: colors.lightGray, fontSize: "16px"}}>
                                    Замечательный, ответственный перевозчик!.
                                    Оперативность, качество, приятное общение, порядочность — всё это вызывает уважение!
                                    Спасибо за профессиональный подход к делу.
                                    Желаем процветания и успехов!
                                </Text>
                            </Column>
                        </Row>
                        <Row>
                            <Column style={{textAlign: "center"}}>
                                <Link href="https://tk-meister.ru/"
                                    style={{
                                        backgroundColor: colors.blue,
                                        borderRadius: "5px",
                                        color: "white",
                                        width: "330px",
                                        paddingTop: "20px",
                                        paddingBottom: "19px",
                                        maxWidth: "100%",
                                        borderColor: colors.blue,
                                        borderStyle: "solid",
                                        cursor: "pointer",
                                        display: "inline-block",
                                    }}
                                        target="_blank"
                                >
                                    Перейти на сайт
                                </Link>
                            </Column>
                        </Row>
                    </Section>
                </Container>
                {/* Футер */}
                <Container style={{
                    ...container,
                    backgroundColor: colors.gray,
                    borderStyle: "solid",
                    borderColor: "transparent",
                    paddingTop: "50px",
                    paddingBottom: "70px",
                }}>
                    <Section>
                        <Row style={{marginBottom: "15px"}}>
                            <Column style={{textAlign: "center"}}>
                                <Link href={baseUrl}>
                                    <Img
                                        src={`${baseUrl}/email-assets/logo-black-white.jpg`}
                                        style={{
                                            width: "120px",
                                            height: "29px",
                                            display: "inline",
                                        }}
                                        alt="Черно-белый логотип компании ООО 'Мейстер'"
                                    />
                                </Link>
                            </Column>
                        </Row>
                        <Row style={{marginBottom: "30px"}}>
                            <Column style={{textAlign: "center"}}>
                                <Text style={{
                                    color: colors.lightGray,
                                    fontSize: "16px",
                                    margin: "0"
                                }}>
                                    Благодарим за проявленное внимание
                                </Text>
                                <Text style={{
                                    color: colors.lightGray,
                                    fontSize: "16px",
                                    margin: "0"
                                }}>
                                    и надеемся на плодотворное сотрудничество!
                                </Text>
                                <Text style={{
                                    color: colors.lightGray,
                                    fontSize: "16px",
                                    margin: "0"
                                }}>
                                    С уважением, команда ООО «Мейстер»
                                </Text>
                            </Column>
                        </Row>
                        <Row>
                            <Column style={{width: "100%", textAlign: "center"}}>
                                <Link href="tel:+79991205982" style={{
                                    fontWeight: "700",
                                    lineHeight: "2",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    fontSize: "16px",
                                    color: colors.lightGray
                                }}>
                                    +7 (999) 120 59 82
                                </Link>
                            </Column>
                        </Row>
                        <Row>
                            <Column style={{width: "100%", textAlign: "center"}}>
                                <Link
                                    href="mailto:nickolasdzr@yandex.ru"
                                    style={{textDecoration: "none", fontSize: "16px", color: colors.lightGray, lineHeight: "1.2",}}
                                >nickolasdzr@yandex.ru</Link>
                            </Column>
                        </Row>
                        <Row style={{marginBottom: "22px"}}>
                            <Column style={{width: "100%", textAlign: "center"}}>
                                <Link href="https://tk-meister.ru/" style={{fontSize: "16px", color: colors.blue, lineHeight: "2",}}>https://tk-meister.ru/</Link>
                            </Column>
                        </Row>
                        <Row>
                            <Column style={{textAlign: "right", borderRight: "15px solid transparent"}}>
                                <Link href="https://t.me/nickolas69">
                                    <Img
                                        src={`${baseUrl}/email-assets/soc/telegram.jpg`}
                                        width="25"
                                        height="25"
                                        style={{display: "inline"}}
                                        alt="Логотип телеграма"
                                    />
                                </Link>
                            </Column>
                            <Column style={{textAlign: "left", borderLeft: "15px solid transparent"}}>
                                <Link href="https://wa.me/+79991205982">
                                    <Img
                                        src={`${baseUrl}/email-assets/soc/whatsapp.jpg`}
                                        width="25"
                                        height="25"
                                        style={{display: "inline"}}
                                        alt="Логотип whatsapp"
                                    />
                                </Link>
                            </Column>
                        </Row>
                    </Section>
                </Container>
            </Section>
        </Body>
    </Html>
);

MeisterEmail.PreviewProps = {
    loginCode: 'Meister',
    offers: offers,
    headContacts: headContacts
} as MeisterEmailProps;

export default MeisterEmail;