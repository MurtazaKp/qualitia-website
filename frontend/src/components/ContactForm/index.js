import toObject from 'convert-to-object';
import styles from './contactForm.module.css';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

const ContactForm = ({ contactFormBackgroundColor, contactFormHeading, contactFormTrackingId, contactFormScript, contactFormVerticalSpacing = "vertical_spacing_3" }) => {
    const [isForm, setIsForm] = useState(true);
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/shell.js';
        document.body.appendChild(script);

        const mySubString = contactFormScript && contactFormScript.substring(
            contactFormScript.indexOf("forms.create(") + 13,
            contactFormScript.lastIndexOf(")")
        );
        const resultJsonObject = mySubString ? toObject(mySubString) : {};
        if (resultJsonObject?.formId) {
            script.addEventListener('load', () => {
                if (window.hbspt) {
                    window.hbspt.forms.create({
                        region: resultJsonObject?.region,
                        portalId: resultJsonObject?.portalId,
                        formId: resultJsonObject?.formId,
                        target: '#hubspotForm'
                    })
                }
            });
        } else {
            setIsForm(false);
        }
    }, []);

    return (
        <>
            <section id={contactFormTrackingId} className={classNames('container_padding', styles.form_border_radius)} style={{ background: contactFormBackgroundColor }}>
                <div className={classNames('section-spacing', styles.contact_form_width, styles.form_shadow, `${contactFormVerticalSpacing}`.toLowerCase())}>
                    {
                        contactFormHeading &&
                        <div className={classNames(styles.card_heading)} dangerouslySetInnerHTML={{ __html: contactFormHeading }} />
                    }
                    {
                        isForm ?
                            <div className={styles.contact_form} id="hubspotForm">
                                <span className={styles.form_loading}></span>
                            </div> :
                            <div className={styles.contact_form} dangerouslySetInnerHTML={{
                                __html: contactFormScript
                            }} />

                    }
                </div>
            </section>
        </>
    )
}
export default ContactForm;