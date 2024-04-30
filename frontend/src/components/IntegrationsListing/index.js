import styles from './integrationsListing.module.css';
import classNames from 'classnames';
import ClickToAction from '../CTA';
const IntegrationsListing = ({ integrations, integrationHeading, integrationsListBackground, integrationCardBackgroundColor, link, integrationListVerticalSpacing }) => {

    return (

        <div className={classNames('section-spacing', `${integrationListVerticalSpacing}`.toLowerCase())} style={{ backgroundColor: integrationsListBackground }}>
            <div className="container_padding">
                {integrationHeading && <div className="text-center" dangerouslySetInnerHTML={{ __html: integrationHeading }} />
                }
                <div className='row'>
                    {
                        integrations.data.map((itegration, index) => {
                            return (
                                <div key={index} className={classNames("col-6-sm col-3-lg", styles.integrations_card)} style={{ background: integrationCardBackgroundColor }}>
                                    <div>
                                        <div className={classNames(styles.integrations_card_img_bg)} >
                                            <img className={classNames(styles.integrations_card_img)} src={itegration.attributes.media?.media?.data?.attributes?.url} alt={itegration.attributes.media?.alt} />
                                        </div>
                                        <div className={classNames(styles.integrations_card_info)}>
                                            <h4 className={classNames("paragraph_p2", styles.integrations_card_title)}>
                                                {itegration.attributes.name}
                                            </h4>
                                            <p className={classNames('paragraph', styles.integrations_paragraph)}>
                                                {itegration.attributes.description}
                                            </p>
                                            {
                                                itegration?.attributes?.link?.label &&
                                                <div>
                                                    <ClickToAction {...itegration.attributes.link} />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}
export default IntegrationsListing;