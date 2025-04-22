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

interface MeisterEmailProps {
    loginCode: string,
    logoImage: string,
    logoBlackWhiteImage: string,
    phoneIcon: string,
    emailIcon: string,
    topBg: string,
    seyma: string,
    manufactura: string,
    crystal: string,
    biskotti: string,
    synergetic: string,
    volgasnab: string,
    quote: string,
    telegram: string,
    whatsapp: string,
}

const baseUrl = process.env.VERCEL_URL
    ? `https://tk-meister.ru/`
    : `https://tk-meister.ru/`;

export const MeisterEmail = ({
            loginCode,
            logoImage,
            logoBlackWhiteImage,
            phoneIcon,
            emailIcon,
            topBg,
            seyma,
            manufactura,
            crystal,
            biskotti,
            synergetic,
            volgasnab,
            quote,
            telegram,
            whatsapp
     }: MeisterEmailProps) => (
    <Html>
        <Head>
            <title>Коммерческое предложение от логистической компании ООО "Мейстер"</title>
        </Head>
        <Preview>Мы ищем партнёров по всей России для взаимовыгодного сотрудничества без посредников</Preview>
        <Body style={main}>
            {/* Шапка*/}
            <Container style={container}>
                <Section style={{paddingTop: "10px"}}>
                    <Row style={{textAlign: "right"}}>
                        <Column>
                            <Link style={{width: '16px', height: '16px'}} href="https://tk-meister.ru/">
                                <Img
                                    className="rounded-full"
                                    src={logoImage}
                                    width="160"
                                    height="55"
                                />
                            </Link>
                        </Column>
                        <Column>
                            <Link href="tel:+79991205982" style={link}>
                                <Row>
                                    <Column>
                                        <Text style={{...intendClear, ...phoneStyle}}>+7 (999) 120 59 82</Text>
                                    </Column>
                                    <Column style={{textAlign: "right"}}>
                                        <Img
                                            className="rounded-full"
                                            src={emailIcon}
                                            width="16"
                                            height="16"
                                            style={{display: "inline"}}
                                        />
                                    </Column>
                                </Row>
                            </Link>
                            <Link href="mailto:nickolasdzr@yandex.ru" style={link}>
                                <Row>
                                    <Column>
                                        <Text style={intendClear}>nickolasdzr@yandex.ru</Text>
                                    </Column>
                                    <Column style={{textAlign: "right"}}>
                                        <Img
                                            className="rounded-full"
                                            src={phoneIcon}
                                            width="16"
                                            height="16"
                                            style={{display: "inline"}}
                                        />
                                    </Column>
                                </Row>
                            </Link>
                        </Column>
                    </Row>
                </Section>
            </Container>
            {/* Бекграунд */}
            <Container style={container}>
                <Section>
                    <Row>
                        <Column>
                            <Img
                                src={topBg}
                                width="600px"
                                height="366px"
                                style={{marginTop: "28px"}}
                            />
                        </Column>
                    </Row>
                </Section>
            </Container>
            {/* Текст предложения */}
            <Container style={{...container, backgroundColor: "#1A1A1A"}}>
                <Section
                    style={{
                        paddingTop: "71px",
                        paddingBottom: "67px",
                    }}
                >
                    <Row>
                        <Column>
                            <Heading style={{...h1,
                                marginTop: 0,
                                marginBottom: "10px",
                            }}>
                                Грузоперевозки без проблем по антикризисным расценкам
                            </Heading>
                            <Text style={{color: "white", fontSize: "16px", lineHeight: 1.6}}>
                                Вашему предприятию не нужно тратить время и силы на то,
                                чтобы организовать доставку груза в любую точку страны.
                                Обратитесь в нашу компанию и доверьте свою заботу профессионалам.
                            </Text>
                            <Text style={{color: "white", fontSize: "16px", lineHeight: 1.6}}>
                                Компания «Мейстер» функционирует на отечественном рынке с 2016 года.
                                Мы успешно доставили более 150 млн. тонн различных грузов во все города нашей страны.
                                МЫ полностью обеспечим сохранность вашего груза и его своевременную доставку.
                            </Text>
                        </Column>
                    </Row>
                </Section>
            </Container>
            {/* С нами сотрудничают*/}
            <Container style={{...container, backgroundColor: "#E5E5E5"}}>
                <Section style={{
                    paddingTop: "67px",
                    paddingBottom: "67px",

                }}>
                    <Row style={{marginBottom: "40px"}}>
                        <Heading style={{...h1,
                            color: "black",
                            marginTop: 0,
                            marginBottom: "10px",
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
                                    src={seyma}
                                    style={{
                                        width: "123px",
                                        height: "98px",
                                        display: "inline",
                                    }}
                                />
                            </Link>
                        </Column>
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
                                    src={manufactura}
                                    style={{
                                        width: "142px",
                                        height: "97px",
                                        display: "inline",
                                    }}
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
                                    src={crystal}
                                    style={{
                                        width: "170px",
                                        height: "64px",
                                        display: "inline",
                                    }}
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
                                    src={biskotti}
                                    style={{
                                        width: "151px",
                                        height: "114px",
                                        display: "inline",
                                    }}
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
                                href="https://synergetic.ru/"
                                target="_blank"
                                style={{
                                    textAlign: "center",
                                    display: "inline-block",
                                    width: "100%",
                                }}
                            >
                                <Img
                                    src={synergetic}
                                    style={{
                                        width: "210px",
                                        height: "70px",
                                        display: "inline",
                                    }}
                                />
                            </Link>
                        </Column>
                        <Column style={{
                            textAlign: "center",
                            width: "50%",
                        }}>
                            <Img
                                src={volgasnab}
                                style={{
                                    width: "148px",
                                    height: "65px",
                                    display: "inline",
                                }}
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
                        paddingTop: "67px",
                        paddingBottom: "67px",
                    }}>
                    <Row>
                        <Column>
                            <Heading style={{...h1,
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
                        padding: "25px",
                        marginBottom: "20px"
                    }}>
                        <Column style={{
                            verticalAlign: "baseline"
                        }}>
                            <Img src={quote}
                                 width="20px"
                                 height="15px"
                                 style={{marginRight: "25px"}}
                            />
                        </Column>
                        <Column>
                            <Text style={{display: 'inline', color: colors.gray, fontSize: "16px"}}>
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
                        padding: "25px",
                        marginBottom: "20px"
                    }}>
                        <Column style={{
                            verticalAlign: "baseline"
                        }}>
                            <Img src={quote}
                                 width="20px"
                                 height="15px"
                                 style={{marginRight: "25px"}}
                            />
                        </Column>
                        <Column>
                            <Text style={{display: 'inline', color: colors.gray, fontSize: "16px"}}>
                                Замечательный, ответственный перевозчик! Оперативность,
                                качество, приятное общение, порядочность — всё это вызывает уважение!
                                Спасибо за профессиональный подход к делу. Желаем процветания и успехов!
                            </Text>
                        </Column>
                    </Row>
                    <Row style={{
                        backgroundColor: "#4B4B4B",
                        borderRadius: "15px",
                        padding: "25px",
                        marginBottom: "70px",
                    }}>
                        <Column style={{
                            verticalAlign: "baseline"
                        }}>
                            <Img src={quote}
                                 width="20px"
                                 height="15px"
                                 style={{marginRight: "25px"}}
                            />
                        </Column>
                        <Column>
                            <Text style={{display: 'inline', color: colors.gray, fontSize: "16px"}}>
                                Замечательный, ответственный перевозчик!.
                                Оперативность, качество, приятное общение, порядочность — всё это вызывает уважение!
                                Спасибо за профессиональный подход к делу.
                                Желаем процветания и успехов!
                            </Text>
                        </Column>
                    </Row>
                    <Row>
                        <Column style={{textAlign: "center"}}>
                            <Button style={{
                                backgroundColor: "#3B97A2",
                                borderRadius: "5px",
                                color: "white",
                                paddingTop: "20px",
                                paddingRight: "108px",
                                paddingBottom: "19px",
                                paddingLeft: "108px",
                                cursor: "pointer"
                            }}>
                                Перейти на сайт
                            </Button>
                        </Column>
                    </Row>
                </Section>
            </Container>
            {/* Футер */}
            <Container style={{
                ...container,
                backgroundColor: "#494949",
                paddingTop: "50px",
                paddingBottom: "70px",
            }}>
                <Section>
                    <Row style={{marginBottom: "15px"}}>
                        <Column style={{textAlign: "center"}}>
                            <Link href={baseUrl}>
                                <Img
                                    src={logoBlackWhiteImage}
                                    style={{
                                        width: "120px",
                                        height: "29px",
                                        display: "inline",
                                    }}

                                />
                            </Link>
                        </Column>
                    </Row>
                    <Row style={{marginBottom: "30px"}}>
                        <Column style={{textAlign: "center"}}>
                            <Text style={{
                                color: colors.gray,
                                fontSize: "16px",
                                margin: "0"
                            }}>
                                Благодарим за проявленное внимание
                            </Text>
                            <Text style={{
                                color: colors.gray,
                                fontSize: "16px",
                                margin: "0"
                            }}>
                                и надеемся на плодотворное сотрудничество!
                            </Text>
                            <Text style={{
                                color: colors.gray,
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
                                color: colors.gray
                            }}>
                                +7 (999) 120 59 82
                            </Link>
                        </Column>
                    </Row>
                    <Row>
                        <Column style={{width: "100%", textAlign: "center"}}>
                            <Link
                                href="mailto:nickolasdzr@yandex.ru"
                                style={{textDecoration: "none", fontSize: "16px", color: colors.gray, lineHeight: "1.2",}}
                            >nickolasdzr@yandex.ru</Link>
                        </Column>
                    </Row>
                    <Row style={{marginBottom: "22px"}}>
                        <Column style={{width: "100%", textAlign: "center"}}>
                            <Link href="https://tk-meister.ru/" style={{fontSize: "16px", color: "#3B97A2", lineHeight: "2",}}>https://tk-meister.ru/</Link>
                        </Column>
                    </Row>
                    <Row>
                        <Column style={{textAlign: "right", paddingRight: "15px"}}>
                            <Link href="https://t.me/nickolas69">
                                <Img
                                    src={telegram}
                                    width="25"
                                    height="25"
                                    style={{display: "inline"}}
                                />
                            </Link>
                        </Column>
                        <Column style={{textAlign: "left", paddingLeft: "15px"}}>
                            <Link href="https://wa.me/+79991205982">
                                <Img
                                    src={whatsapp}
                                    width="25"
                                    height="25"
                                    style={{display: "inline"}}
                                />
                            </Link>
                        </Column>
                    </Row>
                </Section>
            </Container>
        </Body>
    </Html>
);

MeisterEmail.PreviewProps = {
    loginCode: 'Meister',
    logoImage: `${baseUrl}/email-assets/logo.jpg`,
    logoBlackWhiteImage: `${baseUrl}/email-assets/logo-black-white.jpg`,
    phoneIcon: `${baseUrl}/email-assets/phone-icon.jpg`,
    emailIcon: `${baseUrl}/email-assets/email-icon.jpg`,
    topBg: `${baseUrl}/email-assets/top-background.jpg`,
    seyma: `${baseUrl}/email-assets/partners/seyma.jpg`,
    manufactura: `${baseUrl}/email-assets/partners/manufactura.jpg`,
    crystal: `${baseUrl}/email-assets/partners/crystal.jpg`,
    biskotti: `${baseUrl}/email-assets/partners/biskotti.jpg`,
    synergetic: `${baseUrl}/email-assets/partners/synergetic.jpg`,
    volgasnab: `${baseUrl}/email-assets/partners/volgasnab.jpg`,
    quote: `${baseUrl}/email-assets/quote.jpg`,
    telegram: `${baseUrl}/email-assets/soc/telegram.jpg`,
    whatsapp: `${baseUrl}/email-assets/soc/whatsapp.jpg`,
} as MeisterEmailProps;

export default MeisterEmail;

const colors = {
    gray: "#DEDEDE",
}

const main = {
    backgroundColor: '#1A1A1A',
    fontSize: '16px',
    color: "DEDEDE",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Verdana', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
    paddingLeft: '34px',
    paddingRight: '34px',
    margin: '0 auto',
};

const intendClear = {
    marginTop: '0px',
    marginBottom: '0px'
}

const phoneStyle = {
    fontSize: '16px',
}

const h1 = {
    color: "white",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Verdana', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '22px',
    fontWeight: 'bold',
    padding: '0',
};

const link = {
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Verdana', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '16px !important',
};