import { useState, useEffect } from "react";
import {
    Button,
    Container,
    Grid,
    Dropdown,
    Icon,
    Modal,
} from "semantic-ui-react";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";
import Link from "next/link";
import localematcher from "@src/config/matchLocale";
import ctytolocale from "@src/config/ctytoLocale";
import nameCodes from "@src/config/nameCodes";

const ContentLayoutComponent = ({ source, frontMatter }) => {
    const { mods, outlines, prev, next } = frontMatter;
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState(
        router.query.locale ? router.query.locale : "en"
    );
    const [countryOptions, setCountryOptions] = useState([
        { key: "bangladesh", value: "bangladesh", flag: "bd", text: "Bangladesh" },
        { key: "germany", value: "germany", flag: "de", text: "Germany" },
    ]);
    const [providedLanguageOptions, setProvidedLanguageOptions] = useState([
        { key: "en", value: "en", text: "English" },
    ]);
    const languageOptions = [
        { key: "en", value: "en", text: "English" },
        { key: "es", value: "es", text: "Spanish" },
        { key: "de", value: "de", text: "German" },
    ];

    useEffect(() => {
        setCountryOptions(
            localematcher[currentLanguage].map((cty) => ({
                key: cty,
                value: cty,
                text: cty,
            }))
        );
    }, [currentLanguage]);

    const handleLangChange = (event, data) => {
        if (ctytolocale[router.query.country].includes(data.value)) {
            let orgPath = router.asPath;
            let currentPath = orgPath.replace(
                `/${router.query.locale}`,
                `/${data.value}`
            );
            setCurrentLanguage(data.value);
            router.push(currentPath);
        }
        if (!ctytolocale[router.query.country].includes(data.value)) {
            setProvidedLanguageOptions(
                ctytolocale[router.query.country].map((lng) => ({
                    key: lng,
                    value: lng,
                    text: nameCodes[lng],
                }))
            );
            setOpen(true);
        }
    };
    const handleCountryChange = (event, data) => {
        let orgPath = router.asPath;
        let currentPath = orgPath.replace(
            `/${router.query.country}`,
            `/${data.value}`
        );
        router.push(currentPath);
    };

    // console.log("router", router)
    // {
    //     outlines ? <>
    //         <h1>Outlines</h1>
    //         {
    //             outlines.map((m, i) => {
    //                 return (<p key={i}>
    //                     <a herf={`#${m.match(/\[(.*?)\]/)[1]}`} style={{ cursor: 'pointer' }}>{m.replace(/\s*(?:\[[^\]]*\]|\([^)]*\))\s*/g, "")}</a>
    //                 </p>)
    //             })
    //         }
    //     </> : null
    // }

    return (
        <Grid>
            <Grid.Row style={{ margin: "0px", padding: "0px" }}>
                <Grid.Column
                    width={3}
                    style={{ background: "#E8EFF2", color: "black", padding: "2.5rem" }}
                >
                    <Container>
                        <Modal
                            onClose={() => setOpen(false)}
                            onOpen={() => setOpen(true)}
                            open={open}
                            dimmer={"inverted"}
                        >
                            <Modal.Content>
                                <h3>
                                    Sorry, the language you selected is not available. Please
                                    select the languages below!
                                </h3>
                                <h4>LANGUAGE:</h4>
                                <Dropdown
                                    placeholder="Change Locale"
                                    fluid
                                    selection
                                    defaultValue={currentLanguage}
                                    options={providedLanguageOptions}
                                    onChange={handleLangChange}
                                />
                            </Modal.Content>
                            <Modal.Actions>
                                <Button content="OK" onClick={() => setOpen(false)} positive />
                            </Modal.Actions>
                        </Modal>
                        <h4 style={{ padding: '0.25rem' }}>LANGUAGE:</h4>
                        <Dropdown
                            placeholder="Change Locale"
                            fluid
                            selection
                            defaultValue={currentLanguage}
                            value={currentLanguage}
                            options={languageOptions}
                            onChange={handleLangChange}
                            style={{ margin: '0.2rem' }}
                        />
                        <p style={{ padding: "0.35rem" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <h4 style={{ padding: '0.25rem' }}>REGION:</h4>
                        <Dropdown
                            placeholder="Change Locale"
                            fluid
                            selection
                            defaultValue={router.query.country}
                            options={countryOptions}
                            onChange={handleCountryChange}
                            style={{ margin: '0.2rem' }}
                        />
                        <br />
                        <hr />
                        <h4 style={{ padding: '0.25rem' }}>Content Page</h4>
                        {mods &&
                            mods.map((m, i) => {
                                return (
                                    <p key={i} style={{ padding: "0rem 0.25rem" }}>
                                        <Link href={m.match(/\[(.*?)\]/)[1]} passHref key={i}>
                                            <a style={{ cursor: "pointer" }}>
                                                Module&nbsp;{i}:&nbsp;
                                                {m.replace(/\s*(?:\[[^\]]*\]|\([^)]*\))\s*/g, "")}
                                            </a>
                                        </Link>
                                    </p>
                                );
                            })}
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={6}>
                                    <Icon name="book" />
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Icon name="book" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Grid.Column>
                <Grid.Column width={10} style={{ margin: 0, padding: 0 }}>
                    <Container
                        textAlign="justified"
                        style={{
                            padding: "2rem 1rem 0rem 1rem",
                            height: "80vh",
                            overflowY: "auto",
                        }}
                    >
                        <MDXRemote {...source} />
                    </Container>
                    <Container textAlign="justified" style={{ padding: "1rem" }}>
                        <Grid style={{ marginTop: "1rem" }}>
                            <Grid.Row>
                                <Grid.Column width={2}>
                                    {prev !== "" ? (
                                        <>
                                            <Link href={prev} passHref>
                                                <Button
                                                    icon
                                                    labelPosition="left"
                                                    size="large"
                                                    style={{ color: "#2A71FF", background: "#EBF1FF" }}
                                                >
                                                    Prev
                                                    <Icon name="angle left" />
                                                </Button>
                                            </Link>
                                        </>
                                    ) : null}
                                </Grid.Column>
                                <Grid.Column width={10}>&nbsp;</Grid.Column>
                                <Grid.Column width={2} style={{ textAlign: "right" }}>
                                    {next ? (
                                        <>
                                            <Link href={next} passHref>
                                                <Button
                                                    icon
                                                    labelPosition="right"
                                                    size="large"
                                                    style={{ color: "#2A71FF", background: "#EBF1FF" }}
                                                >
                                                    Next
                                                    <Icon name="angle right" />
                                                </Button>
                                            </Link>
                                        </>
                                    ) : null}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Grid.Column>
                <Grid.Column
                    width={3}
                    style={{
                        borderLeft: "0.15px solid #EFEFEF",
                        height: "80vh",
                        margin: "1rem 0rem",
                    }}
                >
                    <Container textAlign="justified" style={{ padding: "2rem 1rem" }}>
                        {outlines ? (
                            <>
                                <h1>Outlines</h1>
                                {outlines.map((v, i) => (
                                    <h4 key={i}>
                                        <a href={`#${v.toLowerCase().replace(" ", "-")}`}>
                                            {v}
                                        </a>
                                    </h4>
                                ))}
                            </>
                        ) : null}
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default ContentLayoutComponent;
