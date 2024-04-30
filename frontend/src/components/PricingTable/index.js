import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Tooltip from 'rc-tooltip';
import Slider from 'react-slick';
import ClickToAction from '../CTA';
import styles from './pricingtable.module.css';
const PricingTable = ({ plans, planType, pricingTableVerticalSpacing, selected }) => {
    const [current, setCurrent] = useState(null);
    const [isShow, setIsShow] = useState(false);
    const ref = useRef();

    const Map_Icons = {
        "STARTER": "icon-Pricing-Pack-1",
        "TEAMS": "icon-Pricing-Pack-2",
        "ORGANISATION": "icon-Prcing-Pack-3",
        "ENTERPRISE": "icon-Pricing-Pack-4",
    }
    const getValueOfCell = (plan, planIndex, featureIndex) => {
        if (plan.attributes.tableFeatures[planIndex]?.tableFeaturesList[featureIndex].value) {
            return (
                <span className={`${Map_Icons[plan.attributes?.name]} paragraph_p2`} ><span className="path1" ></span><span className="path2" ></span></span>
            )
        } else {
            return <><span className={classNames(styles.empty_hypen)}>-</span></>
        }
    }
    const settingsSlides = {
        autoplay: false,
        infinite: false,
        initialSlide: selected,
        speed: 2000,
        slidesToShow: plans?.length,
        swipe: false,
        arrows: false,
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
        ]
    }
    useEffect(() => {
        if (ref?.current) {
            ref?.current.slickGoTo(selected);
        }
    }, [selected])
    return (
        <>
            <h3 className={classNames(styles.table_heading, "text-center", isShow === true ? styles.open : styles.close)} onClick={() => setIsShow(!isShow)}>
                Complete feature list
                <i className='icon-New-Icons_Arrow-Bottom'></i>
            </h3>
            {
                isShow &&
                <div className='container_padding' >
                    <section className={classNames('section-spacing', `${pricingTableVerticalSpacing}`.toLowerCase())}>
                        <div className={styles.pricing_wrapper}>
                            <div className={styles.plan_feature_wrapper}>
                                {
                                    plans?.length && plans[0]?.attributes?.tableFeatures.map((plan, index) => {
                                        return (
                                            <div key={index} className={styles.feature}>
                                                <h5 className={classNames('paragraph', styles.pricing_table_info_heading_margin)}><span className={styles.tag_text}>{plan?.heading}</span> {plan?.tagName && <span className={classNames('text-medium', styles.tag)}>{plan?.tagName}</span>}</h5>
                                                {
                                                    plan?.tableFeaturesList?.map((featureListItem, featureListItemIndex) => {
                                                        return (
                                                            <div key={featureListItemIndex} className={classNames("paragraph", styles.plan_item_title)}>
                                                                <div><span className={styles.tag_text}>{featureListItem.title}</span> {featureListItem?.tagName && <span className={classNames('text-medium', styles.tag)}>{featureListItem?.tagName}</span>}</div>
                                                                {
                                                                    Boolean(featureListItem?.description) &&
                                                                    <Tooltip placement="top" trigger={['hover']} overlay={<span className={styles.tooltip_overlay}>{featureListItem?.description}</span>}>
                                                                        <span className={classNames(`icon-Information feature_tooltip_icon_${index}_${featureListItemIndex}`, styles.feature_tooltip_icon)}></span>
                                                                    </Tooltip>
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className={classNames(styles.plans_wrapper, "plans-wrapper")}>
                                <Slider ref={ref} {...settingsSlides} className={classNames(styles.table_slider)}>
                                    {
                                        plans?.map((plan, index) => {
                                            const price = planType === 'annualPricing' ? plan.attributes?.annualSalePrice : plan.attributes?.monthSalePrice;
                                            return (
                                                <div key={index} className={styles.plan}>
                                                    <div className={styles.plan_title_price}>
                                                        <div className={classNames(styles.pricing_plan_heading)}>{plan.attributes.name}</div>

                                                        {(price || price === 0) ? <div className={classNames(styles.pricing_table_inner_margin, "text-semibold")}>${price}</div> :
                                                            <div className={classNames(styles.pricing_table_inner_margin_btn)}>
                                                                <ClickToAction  {...plan.attributes?.link} onMouseEnter={() => setCurrent(index)} onMouseLeave={() => setCurrent(null)} style={index === current ? { background: plan?.attributes?.pricingCardBackground, color: '#ffffff' } : {}} />
                                                            </div>
                                                        }
                                                    </div>
                                                    {
                                                        plan?.attributes?.tableFeatures.map((tableFeature, featureIndex) => {
                                                            return (

                                                                <div key={featureIndex} className={styles.plan_feature_icon_wrapper}>
                                                                    {/* <div className={styles.plan_feature_height_wrapper}>
                                                                    
                                                                    </div>    */}
                                                                    {
                                                                        tableFeature?.tableFeaturesList.map((featureListItem, featureListItemIndex) => {
                                                                            return (
                                                                                <div key={featureListItemIndex} className={styles.plan_feature_icon}>
                                                                                    {
                                                                                        getValueOfCell(plan, featureIndex, featureListItemIndex)
                                                                                    }
                                                                                </div>
                                                                            )
                                                                        })

                                                                    }
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}
export default PricingTable;