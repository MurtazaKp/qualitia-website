import classNames from 'classnames';
import Tooltip from 'rc-tooltip';
import { useState } from 'react';
import Slider from 'react-slick';
import ClickToAction from '../CTA';
import styles from './pricingcard.module.css';
const PricingCardSimple = ({ plans, planType, pricingTableVerticalSpacing, setSelected, selected }) => {
    const [current, setCurrent] = useState(0);
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
            <div className={classNames('section-spacing', `${pricingTableVerticalSpacing}`.toLowerCase())}>

                <Slider {...settingsSlides} className={classNames("pricing_carousel")} value={"2"}>
                    {
                        plans?.map((plan, index) => {
                            const price = planType === 'annualPricing' ? plan.attributes.annualSalePrice : plan.attributes.monthSalePrice
                            const actualPrice = planType === 'annualPricing' ? plan.attributes.annualActualPrice : plan.attributes.monthActualPrice
                            return (
                                <div key={index} className={styles.pricing_card} onMouseEnter={() => setCurrent(index)} >
                                    <div className={classNames(index === current ? styles.border_card_hover : styles.border_card, styles.flex_basis)}>
                                        <div className={styles.teams_card_striped} style={{ background: plan.attributes?.pricingCardBackground }}>
                                        </div>
                                        <div className={classNames("text-center", styles.pricing)}>
                                            <div className={styles.pricing_card_inner_flex}>
                                                <div>
                                                    <h2 className={classNames("paragraph_p1 ", styles.pricing_card_height)}>
                                                        {plan.attributes?.name}
                                                    </h2>
                                                    <p className={styles.pricing_card_paraghaph}>
                                                        {plan.attributes?.description}
                                                    </p>

                                                </div>
                                                <div className={classNames(styles.pricing_table_inner_margin, "text-semibold")}>
                                                    {price}
                                                    {
                                                        actualPrice > price &&
                                                        <del className={styles.deleted_amt}>
                                                            {actualPrice}
                                                        </del>
                                                    }
                                                </div>
                                                <div className={styles.per_user}>
                                                    {
                                                        planType === 'annualPricing' ? <p>{plan.attributes?.priceTextAnnually}</p> : <p>{plan.attributes?.priceTextMonthly}</p>
                                                    }
                                                </div>

                                                <div className={styles.pricing_btn_wrapper}>
                                                    <ClickToAction {...plan?.attributes?.link} style={{ background: plan?.attributes?.pricingCardBackground, color: '#ffffff' }} />
                                                </div>

                                            </div>
                                            <div className={styles.card_info_list}>
                                                {
                                                    plan?.attributes?.features?.map((feature, featureIndex) => {
                                                        return (

                                                            <div key={featureIndex} className={styles.pricing_card_info}>
                                                                <div className={styles.text_align_start}>
                                                                    {feature.title}
                                                                </div>
                                                                {
                                                                    Boolean(feature?.description) &&
                                                                    <Tooltip placement="top" trigger={['hover']} overlay={<span className={styles.tooltip_overlay}>{feature?.description}</span>}>
                                                                        <span className={classNames(`icon-Information feature_tooltip_icon_card_${featureIndex}_${index}`, styles.feature_tooltip_icon)}></span>
                                                                    </Tooltip>
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </>
    )
}
export default PricingCardSimple;