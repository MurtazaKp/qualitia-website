import ClickToAction from '@/components/CTA';
import classNames from 'classnames';
import styles from './card.module.css';
const Card = ({ cardBackgroundColor, cardHeading, cardListBackgroundColor, cards, link, cardListingVerticalSpacing = "vertical_spacing_3" }) => {
    const grid = cards?.length < 4 ? cards?.length : 3;
    return (
        <div className={styles.enterprise_benefits_bg} style={{ background: cardListBackgroundColor }}>
            <section className={'container_padding'}>
                <div className={classNames('section-spacing', `${cardListingVerticalSpacing}`.toLowerCase())}>
                    {cardHeading &&
                        <div className={classNames(" text-center", styles.card_heading)} dangerouslySetInnerHTML={{ __html: cardHeading }} />
                    }
                    <div className={classNames('row')}>
                        {
                            cards.map((card, index) => (
                                <>
                                    {
                                        card.image?.data?.attributes?.url ?
                                            <div className={classNames("col-12 col-6-sm col-4-md text-center", styles.business_alignment_paragraph, styles.business_alignment_img_flex)} key={index} style={{ background: cardBackgroundColor }}>
                                                <img className={classNames(styles.business_alignment_img)} src={card.image?.data?.attributes?.url} alt="card image" />
                                                {
                                                    card?.title &&
                                                    <h3 className={classNames("paragraph_p2", styles.enterprise_benefits_card_title)}>
                                                        {card?.title}
                                                    </h3>
                                                }
                                                <div className='paragraph' dangerouslySetInnerHTML={{ __html: card?.description }} />
                                            </div> :
                                            <div key={index} className={classNames(`col-${12 / grid}`, styles[`item_${grid}`], styles.card_wrapper)} style={{ background: cardBackgroundColor }}>
                                                <div className={styles.enterprise_benefits_card_margin}>
                                                    <h4 className={classNames("paragraph_p2", styles.enterprise_benefits_card_title)}>
                                                        {card?.title}
                                                    </h4>
                                                    <div className={classNames('paragraph', styles.enterprise_benefits_card_paragraph)} dangerouslySetInnerHTML={{ __html: card?.description }} />
                                                </div>
                                            </div>
                                    }

                                </>
                            ))
                        }
                    </div>
                    <div className={classNames("text-center")}>
                        {link?.label && <ClickToAction {...link} />}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Card;