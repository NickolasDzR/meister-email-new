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
import {HeadContactsType, MeisterEmailProps, OffersType, PartnersDataType, PartnersType} from "../helpers/types";
import {headContacts, offers, partners, reviews} from "../helpers/data";
import {container, h1, intendClear, link, main, phoneStyle} from "../helpers/styles";
import {colors} from "../helpers/variables";

const baseUrl = process.env.VERCEL_URL
    ? `https://tk-meister.ru`
    : `https://tk-meister.ru`;

export const MeisterEmail = () => (
    <Html>
        <Head>
            <title>Коммерческое предложение от логистической компании ООО "Мейстер"</title>
        </Head>
        <Preview>Мы ищем партнеров по всей России для взаимовыгодного сотрудничества без посредников.</Preview>
        <Body style={{...main, minWidth: "320px"}}>
            <Section style={{maxWidth: "600px", backgroundColor: colors.black}}>
                {/* Шапка*/}
                <Container style={{...container, backgroundColor: "#1A1A1A"}}>
                    <Section style={{borderTop: `26px solid ${colors.black}`, borderBottom: `26px solid ${colors.black}`}}>
                        <Row>
                            <Column style={{textAlign: "left"}}>
                                <Link style={{marginRight: "50px", display: "inline-block"}} href="https://tk-meister.ru/">
                                    <Img
                                        className="rounded-full"
                                        style={{maxWidth: "100%", height: "auto"}}
                                        src={`${baseUrl}/email-assets/logo.jpg`}
                                        width="160"
                                        height="55"
                                        alt="Логотип компании ООО 'Мейстер'"
                                    />
                                </Link>
                            </Column>
                            <Column style={{textAlign: "right"}}>
                                {
                                    headContacts && headContacts.map((headContact: HeadContactsType, index: number) => {
                                        const {href, textStyle, text, img} = headContact;

                                        return <Row style={{marginBottom: `${index === headContacts.length - 1 ? "0" : "6px"}`}} key={index}>
                                            <Column>
                                                <Link href={href}
                                                    style={{
                                                    ...textStyle,
                                                    color: `${colors["white"]}`,
                                                    textDecoration: "none"
                                                }}>
                                                    {text}
                                                </Link>
                                            </Column>
                                            <Column>
                                                <Link href={href}>
                                                    <Img
                                                        className={img["className"]}
                                                        width={img["width"]}
                                                        height={img["height"]}
                                                        alt={img["alt"]}
                                                        style={img["style"]}
                                                        src={img["src"]}
                                                    />
                                                </Link>
                                            </Column>
                                        </Row>
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
                            marginTop: "71px",
                            marginBottom: "67px",
                        }}
                    >
                        <Row>
                            <Column>
                                <Heading style={{...h1,
                                    marginTop: 0,
                                    marginBottom: "10px",
                                }}>
                                    {offers["h1"] && offers["h1"]}
                                </Heading>
                                {
                                    offers["text"] && offers["text"].map((offerText: string, index: number) => {
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
                        marginTop: "65px",
                        marginBottom: "65px",
                    }}>
                        <Row>
                            <Heading as="h2" style={{...h1,
                                color: "black",
                                marginTop: 0,
                                marginBottom: "43px",
                            }}>
                                {partners["h2"] && partners["h2"]}
                            </Heading>
                        </Row>

                        {
                            (partners["data"] as PartnersDataType[]).reduce((acc, curr, index) => {
                                if (index % 2 === 0) acc.push([curr]);
                                else acc[acc.length - 1].push(curr);
                                return acc;
                            }, [])?.map((pairPartners: [PartnersDataType], i: number) => {
                                return <Row key={i} style={{marginBottom: `${i < Math.round((partners["data"].length) / 2) - 1 ? "40px" : "0"}`}}>
                                    {
                                        pairPartners && pairPartners.map((partner, k) => {
                                            const {img, href} = partner

                                            return <Column key={k} style={{width: "50%", textAlign: "center"}}>
                                                {href ?
                                                    <Link
                                                        href={href}
                                                        target="_blank"
                                                        style={{
                                                            textAlign: "center",
                                                            display: "inline-block",
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <Img
                                                            src={img["src"]}
                                                            style={{
                                                                width: img["style"]["width"],
                                                                height: "auto",
                                                                maxWidth: "100%",

                                                                display: "inline",
                                                            }}
                                                            alt={img["alt"]}
                                                        />
                                                    </Link>
                                                    :
                                                    <Img
                                                        src={img["src"]}
                                                        style={{
                                                            width: img["style"]["width"],
                                                            height: img["style"]["height"],
                                                            display: "inline",
                                                        }}
                                                        alt={img["alt"]}
                                                    />
                                                }
                                            </Column>
                                        })
                                    }
                                </Row>
                            })
                        }
                    </Section>
                </Container>
                {/* Отзывы */}
                <Container style={{
                    ...container,
                    backgroundColor: "#1A1A1A"
                }}>
                    <Section
                        style={{
                            marginTop: "70px",
                            marginBottom: "70px",
                        }}>
                        <Row>
                            <Column>
                                <Heading as="h2" style={{...h1,
                                    color: "white",
                                    marginTop: 0,
                                    marginBottom: "32px",
                                }}>
                                    {reviews["h2"] && reviews["h2"]}
                                </Heading>
                            </Column>
                        </Row>
                        {
                            reviews["data"] && reviews["data"].map((review, index: number) => {
                                return <Row key={index} style={{
                                    backgroundColor: "#4B4B4B",
                                    borderRadius: "15px",
                                    border: "25px solid transparent",
                                    marginBottom: `${index === reviews["data"].length - 1 ? "70px" : "20px"}`
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
                                            {review}
                                        </Text>
                                    </Column>
                                </Row>
                            })
                        }
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
                }}>
                    <Section style={{
                        marginTop: "50px",
                        marginBottom: "70px",
                    }}>
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

export default MeisterEmail;