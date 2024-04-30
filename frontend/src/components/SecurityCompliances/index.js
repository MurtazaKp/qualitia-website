import styles from './securityCompliances.module.css';
import classNames from 'classnames';
import ClickToAction from '../CTA';
import Image from 'next/image';
const SecurityCompliances = ({ securityCompliancesSubHeading, securityCompliancesHeading, securityCompliancesLink, media, securityCompliancesBackground, securityCompliancesVerticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className={classNames("container_padding")} style={{ background: securityCompliancesBackground }}>
            <section className={classNames('section-spacing', `${securityCompliancesVerticalSpacing}`.toLowerCase())}  >
                <div className="row">
                    <div className="col-12">
                        <div className="text-center">
                            <h3 className={classNames(styles.security_heading)}>
                                {securityCompliancesHeading}
                            </h3>
                            <p className={classNames("paragraph paragraph_width")}>
                                {securityCompliancesSubHeading}
                            </p>
                        </div>
                        <div className={classNames('flex', styles.security_margin, styles.security_gap)}>
                            {
                                media.map((mediaItem, index) => {
                                    return (
                                        <div className={styles.security_image} key={index}>
                                            <Image className={styles.security_image}
                                                src={mediaItem?.media.data?.attributes.url}
                                                alt={mediaItem.alt}
                                                height={100}
                                                width={100}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={classNames('text-center', styles.security_margin)}>
                            <ClickToAction {...securityCompliancesLink} />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default SecurityCompliances;