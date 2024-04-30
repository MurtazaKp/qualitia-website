import styles from './securitiesListing.module.css';
import classNames from 'classnames';
import Image from '../Image';
const SecuritiesListing = ({ securitiesHeading, securitiesBackgroundColor, securities, securitiesCardBackgroundColor, securityListVerticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className='container_padding' style={{ backgroundColor: securitiesBackgroundColor }}>
            <div className={classNames('section-spacing', `${securityListVerticalSpacing}`.toLowerCase())}>
                {
                    securitiesHeading && <h3 className="text-center">
                        {securitiesHeading}
                    </h3>
                }
                <div className={classNames("row double_gutter row-extra-spacing", styles.double_gutter)}>
                    {
                        securities?.data?.map((security, index) => {
                            return (
                                <div key={index} className={classNames('col col-6-md col-4-lg', styles.securities_margin, styles.soc_card)} style={{ background: securitiesCardBackgroundColor }}>
                                    {security?.attributes?.media?.media?.data?.attributes?.url && <div>
                                        <Image src={security?.attributes?.media?.media?.data?.attributes?.url} alt={security?.attributes?.media?.alt} />
                                    </div>}
                                    <div>
                                        <h2 className={classNames("paragraph_p1", styles.soc_card_title)}>
                                            {security.attributes?.title}
                                        </h2>
                                        <p className={classNames('paragraph', styles.soc_card_paragraph)}>
                                            {security.attributes?.description}
                                        </p>
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

export default SecuritiesListing; 