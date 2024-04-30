import styles from './faqs.module.css';
import classNames from 'classnames';
import { useState } from 'react';
import Head from 'next/head';
const FAQs = ({ faqsBackgroundColor, fagsHeading, trackingId, description, faqs, faqsVerticalSpacing = "vertical_spacing_3" }) => {
    const [current, setCurrent] = useState(0);
    const handleOpenFaq = (index) => {
        if (index === current) {
            setCurrent(null);
        } else {
            setCurrent(index);
        }
    }

    const schemaData =
    {
        "@context": "https://schema.org/",
        "@type": "FAQPage",
        "mainEntity": faqs?.map((faq) => {
            return {
                "name": faq.question,
                "@type": "Question",
                "acceptedAnswer": {
                    "text": faq.answer,
                    "@type": "Answer"
                }
            }
        })
    }
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />

            </Head>

            <div id={trackingId} className='container_padding ' style={{ background: faqsBackgroundColor }}>
                <section className={classNames('section-spacing mx', `${faqsVerticalSpacing}`.toLowerCase())}>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            {fagsHeading && <h3 className="text-center">
                                {fagsHeading}
                            </h3>}
                            {description && <p>
                                {description}
                            </p>}
                            {
                                faqs?.map((faq, index) => {
                                    return (
                                        <div key={index} className={styles.faqs_flex} onClick={() => handleOpenFaq(index)}>
                                            <div className={classNames(styles.faq_icon)}>
                                                {
                                                    current === index ? <span className='icon-New-Icons_Arrow-Bottom'></span> : <span className='icon-New-Icons_Arrow-Right'></span>
                                                }
                                            </div>
                                            <div>
                                                <h2 className={classNames("paragraph", styles.faqs_title)}>
                                                    {faq.question}
                                                </h2>
                                                {
                                                    current === index &&
                                                    <div className={"paragraph"} dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default FAQs;