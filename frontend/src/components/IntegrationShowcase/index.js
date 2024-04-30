
import classNames from 'classnames';
import styles from './integrationShowcase.module.css'
import ClickToAction from '../CTA';
import { useEffect, useState } from 'react';
import Image from 'next/image';
const IntegrationShowcase = ({ primary, link, integrationShowcaseHeading, integrationShowcaseSubHeading, integrations, integrationShowcaseBackgroundColor, integrationsShowcaseVerticalSpacing = "vertical_spacing_3" }) => {
    const [integrationsData, setIntegrationsData] = useState([]);
    const [integrationsDataThird, setIntegrationsDataThird] = useState([]);
    useEffect(() => {
        // Need to work code refactoring
        const data = [];
        const dataThird = [];
        integrations?.data?.map((integration, index) => {
            if (index > 4 && index < 9) {
                data.push(integration);
            } else if (index > 8 && index < 14) {
                dataThird.push(integration)
            }
        })
        setIntegrationsDataThird(dataThird);
        setIntegrationsData(data);
    }, [])

    return (
        <div className='container_padding' style={{ background: integrationShowcaseBackgroundColor }}>
            <section className={classNames('section-spacing', `${integrationsShowcaseVerticalSpacing}`.toLowerCase())}>
                <h3 className={classNames("text-center", styles.integration_heading)}>
                    {integrationShowcaseHeading}
                </h3>
                <p className={classNames('text-center paragraph paragraph_width', styles.integration_paragraph)}>{integrationShowcaseSubHeading}</p>
                <div className={styles.integration_container}>
                    {Boolean(integrations?.data.length) && <ul className={styles.icon_row}>
                        {
                            integrations?.data?.map((integration, index) => {
                                if (index < 5)
                                    return (
                                        <li key={index} className={styles.icon_item} style={{ backgroundColor: integration?.attributes?.backgroundColor }}>
                                            <Image className={styles.img_width} src={integration?.attributes?.media?.media?.data?.attributes.url} alt={integration.attributes.media.alt} height={100} width={100} />
                                        </li>
                                    )
                            })
                        }
                    </ul>}
                    {Boolean(integrationsData.length) && <ul className={styles.icon_row}>
                        {
                            integrationsData?.map((integration, index) => {
                                return (
                                    <li key={index} className={styles.icon_item} style={{ backgroundColor: integration?.attributes?.backgroundColor }}>
                                        <Image className={styles.img_width} src={integration?.attributes?.media?.media?.data?.attributes.url} alt={integration.attributes.media.alt} height={100} width={100} />
                                    </li>
                                )
                            })
                        }
                    </ul>}
                    {Boolean(integrationsDataThird.length) && <ul className={styles.icon_row}>
                        {
                            integrationsDataThird?.map((integration, index) => {
                                return (
                                    <li key={index} className={styles.icon_item} style={{ backgroundColor: integration?.attributes?.backgroundColor }}>
                                        <Image className={styles.img_width} src={integration?.attributes?.media?.media?.data?.attributes.url} alt={integration.attributes.media.alt} height={100} width={100} />
                                    </li>
                                )
                            })
                        }
                    </ul>}
                </div>
                <div className='text-center'>
                    {link?.label && <ClickToAction {...link} />}
                </div>
            </section>
        </div>
    )
}
export default IntegrationShowcase;