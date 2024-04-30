import classNames from 'classnames';
import styles from './pricingcard.module.css';

const PricingBanner = ({ data, setPlanType, planType, verticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className={classNames('container_padding')}>
            <section className={classNames('section-spacing', `${verticalSpacing}`)}>
                <div className={"text-center"}>
                    {data?.title && <h1 className={classNames(styles.pricing_heading)}>
                        {data.title}
                    </h1>}
                    {data?.description && <p className={classNames("paragraph_p2", styles.credit_card_title)}>
                        {data.description}
                    </p>}
                    <div className={classNames(styles.pricing_btn_wrap)}>
                        <div onClick={() => setPlanType(data?.annualButtonTrackingId)}>
                            <a className={classNames("btn_md", styles.pricing_btn, planType === data?.annualButtonTrackingId ? styles.pricing_btn_active : "")} >
                                {data?.annualButtonLabel}
                            </a>
                        </div>
                        <div onClick={() => setPlanType(data?.monthButtonTrackingId)}>
                            <a className={classNames("btn_md", styles.pricing_btn, planType === data?.monthButtonTrackingId ? styles.pricing_btn_active : "")}>
                                {data?.monthButtonLabel}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default PricingBanner;