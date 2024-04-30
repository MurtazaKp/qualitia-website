import styles from './compareView.module.css';
import classNames from 'classnames';
import Link from '@/components/Link';
import { useState } from 'react';
import Image from 'next/image';
const CompareView = ({ compareViewHeading, compares, compareViewBackground, compareViewVerticalSpacing = "vertical_spacing_3" }) => {
    const [hoverIndex, setHoverIndex] = useState();
    return (
        <div className='container_padding' style={{ background: compareViewBackground }}>
            <section className={classNames('section-spacing mx', `${compareViewVerticalSpacing}`.toLowerCase())}>
                <div className="">

                    {compareViewHeading && <h1 className={classNames(" text-center heading-3")}>
                        {compareViewHeading}
                    </h1>}

                    <div className={classNames("row row-double-gutter row-extra-spacing double_gutter", styles.compare_card_wrapper)}>
                        {
                            compares.map((compareItem, index) => {
                                const styleEffect = hoverIndex === index ? { backgroundColor: compareItem?.backgroundColor } : {}
                                return (
                                    (
                                        <Link href={compareItem?.href} target={compareItem?.target}
                                            key={index} className={classNames("col col-md-6 col-4-lg", styles.compare_card)}
                                            onMouseEnter={() => setHoverIndex(index)}
                                            onMouseLeave={() => setHoverIndex(-1)}
                                            style={styleEffect}
                                        >
                                            <div>
                                                {compareItem?.heading && <h2 className={classNames("text-bold paragraph_p2 heading-4")}>
                                                    {compareItem.heading}
                                                </h2>}

                                                {compareItem?.content && <div className={classNames("paragraph", styles.card_info)} dangerouslySetInnerHTML={{ __html: compareItem.content }} />}
                                            </div>
                                            {(compareItem?.image?.data?.attributes?.url || compareItem?.linkText) &&
                                                <div className={classNames(styles.text_dark)}>

                                                    <div className={classNames(styles.built_product)}>
                                                        {
                                                            compareItem?.image?.data?.attributes?.url &&
                                                            <div className={classNames(styles.card_icon_wrap)}>
                                                                <Image className={classNames(styles.card_icon)}
                                                                    src={compareItem?.image?.data?.attributes?.url}
                                                                    alt={compareItem?.heading}
                                                                    height={100}
                                                                    width={100}
                                                                />
                                                            </div>
                                                        }
                                                        {compareItem.linkText && <div className={classNames(styles.card_info_wrap)}>
                                                            <div className={classNames("paragraph", styles.card_info, styles.product_btn)} dangerouslySetInnerHTML={{ __html: compareItem.linkText }} />
                                                        </div>}
                                                    </div>
                                                </div>
                                            }
                                        </Link>

                                    )
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </div>
    )
}
export default CompareView;