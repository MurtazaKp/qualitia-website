import Head from "next/head";
import parse from 'html-react-parser';


export default function EmbeddedScript({ headerScripts = [], script = "", bodyScripts = [] }) {
    let embeddedHeadScripts = ``;
    let embeddedBodyScripts = ``;
    headerScripts?.map((script) => embeddedHeadScripts = `${embeddedHeadScripts} ${script?.script || ''}`);
    bodyScripts?.map((script) => embeddedBodyScripts = `${embeddedBodyScripts} ${script?.script || ''}`);
    return (
        <>
            {embeddedHeadScripts && <Head>
                {parse(embeddedHeadScripts)}
            </Head>}
            {script && <div dangerouslySetInnerHTML={{ __html: script }} />}
            {embeddedBodyScripts && parse(embeddedBodyScripts)}
        </>
    )
}