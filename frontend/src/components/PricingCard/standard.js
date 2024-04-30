import classNames from 'classnames';
import Tooltip from 'rc-tooltip';
import { useState } from 'react';
import Slider from 'react-slick';
import ClickToAction from '../CTA';
import styles from './pricingcard.module.css';

const PricingCardStandard = ({ plans, planType, pricingTableVerticalSpacing, setSelected, selected }) => {
    const [current, setCurrent] = useState(1);

    const settingsSlides = {
        autoplay: false,
        infinite: false,
        speed: 2000,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        beforeChange: (current, next) => setSelected(next)
    }
    return (
        <>
            <div className={classNames('section-spacing standard_main_card container_padding', `${pricingTableVerticalSpacing}`.toLowerCase())}>

                <Slider {...settingsSlides}>

                    {plans.map((plan, index) => {
                        const price = planType === 'annualPricing' ? plan.attributes.annualSalePrice : plan.attributes.monthSalePrice
                        const actualPrice = planType === 'annualPricing' ? plan.attributes.annualActualPrice : plan.attributes.monthActualPrice
                        return (
                            <div key={index} onMouseEnter={() => setCurrent(index)} >
                                <div style={{ background: plan.attributes?.pricingCardBackground, width: "100%" }} className={classNames(current !== index ? styles.standard_card : styles.standard_card_hover)}>
                                    <div className={classNames(styles.inner)}>
                                        <h3>{plan.attributes?.name}</h3>
                                        <p className={styles.inner_paragraph}>{plan.attributes?.description}</p>

                                        <div className={classNames(styles.price)}>
                                            <div className={classNames(styles.pricing_table_inner_margin, "text-semibold")}>
                                                {price}
                                            </div>
                                            <div className={classNames(styles.price_attribute)}>
                                                {
                                                    planType === 'annualPricing' ? <p>{plan.attributes?.priceTextAnnually}</p> : <p>{plan.attributes?.priceTextMonthly}</p>
                                                }
                                                {plan.attributes.priceTooltip && (
                                                    <Tooltip placement="top" trigger={['hover']} overlay={<span className={styles.tooltip_overlay}>{plan.attributes.priceTooltip}</span>}>
                                                        <span className={classNames(`icon-Information feature_tooltip_icon_card_${index}_${index}`, styles.feature_tooltip_icon)}></span>
                                                    </Tooltip>
                                                )}
                                            </div>
                                        </div>
                                        <div className={styles.pricing_btn_wrapper}>
                                            <ClickToAction {...plan?.attributes?.link} />
                                        </div>
                                        {
                                            plan?.attributes?.tableFeatures?.map((feature, index) => {
                                                return (
                                                    <div className={styles.feature_wrapper} key={index}>
                                                        {feature?.heading && <h5>{feature?.heading}</h5>}
                                                        <ul className={classNames(styles.key_feature)}>
                                                            {feature?.tableFeaturesList
                                                                ?.map((featureItem, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            {featureItem?.bulletStyle === "Dot" && <div className={classNames(styles.symbol)} key={index}>&bull;</div>}
                                                                            {featureItem?.bulletStyle === "Check" && <div className={classNames(styles.symbol)} key={index}><span class="icon-uniE93F"></span></div>}
                                                                            {featureItem?.bulletStyle === "Highlight" && <div className={classNames(styles.symbol, styles.highlight_feature)} key={index}><span>&#10209;</span></div>}
                                                                            <div className={classNames(styles.content, featureItem?.bulletStyle === "Highlight" ? styles.highlight_feature : "")}>{featureItem.title}
                                                                                {featureItem?.description && featureItem?.description?.trim() && (
                                                                                    <Tooltip placement="top" trigger={['hover']} overlay={<span className={styles.tooltip_overlay}>{featureItem.description}</span>}>
                                                                                        <span className={classNames(`icon-Information feature_tooltip_icon_card_${index}_${index}`, styles.feature_tooltip_icon)}></span>
                                                                                    </Tooltip>
                                                                                )}
                                                                            </div>
                                                                        </li>
                                                                    );
                                                                })}
                                                        </ul>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        )
                    })}




                </Slider >
            </div >
        </>
    )
}
export default PricingCardStandard;