import styles from './gridHighlightResources.module.css';
import classNames from 'classnames';
import GridResources from '../GridResources';
import Link from '@/components/Link';
import { getResourcesSlug } from '@/utils/getResourcesSlug';
import { getDisplayDate } from '@/utils/getDisplayDate';
const GridHighlightResources = ({ resourcesHeading, resources, resourcesListingBackground, resourcesCardBackgroundColor, resourcesVerticalSpacing = "vertical_spacing_3", ...rest }) => {
    if (resources?.data?.length !== 3) {
        return <GridResources {...{ resourcesHeading, resources, resourcesListingBackground, resourcesCardBackgroundColor, ...rest }} />
    }
    return (
        <div className='container_padding' style={{ background: resourcesListingBackground }}>
            <section className={'section-spacing'}>
                {resourcesHeading &&
                    <h3 className={classNames("text-center", styles.insights_card_heading)}>
                        {resourcesHeading}
                    </h3>
                }
                <div className="row">
                    <div className="col-8 " style={{ background: resourcesCardBackgroundColor }}>
                        <div className={classNames("full_height ", styles.blog_listing_card)}>
                            <div>
                                {
                                    resources.data[0]?.attributes?.media?.media &&
                                    <div>
                                        <img className={styles.blog_listing_card_img} src={resources.data[0].attributes.media.media.data?.attributes?.url} alt={resources.data[0]?.attributes.media?.alt} />
                                    </div>
                                }
                                <div>
                                    <div className={classNames("small text-bold", styles.tag)} >
                                        {resources.data[0].attributes?.tag || resources.data[0].attributes?.category}
                                    </div>
                                    <Link href={`resources/${getResourcesSlug(`${resources.data[0].attributes?.category}`)}/${resources.data[0].attributes?.slug}`} target={'self'} className={styles.title_link}>
                                        <h3 className={classNames("tertiary-heading", styles.blog_listing_card_heading)}>
                                            {resources.data[0].attributes?.title}
                                        </h3>
                                    </Link>
                                    <p className={classNames("paragraph", styles.blog_listing_card_paragraph)}>
                                        {resources.data[0].attributes?.description}
                                    </p>
                                </div>
                            </div>
                            <div>
                                {
                                    resources.data[0]?.attributes?.createdDate &&
                                    <span className={classNames("small", styles.insights_card_highlight_text)}>{getDisplayDate(resources.data[0]?.attributes?.createdDate)}</span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={styles.blog_listing_card} style={{ background: resourcesCardBackgroundColor }}>
                            <div>
                                <div>
                                    <img className={styles.blog_listing_card_img} src={resources.data[1].attributes.media.media.data?.attributes?.url} alt={resources.data[1]?.attributes.media?.alt} />
                                </div>
                                <div>
                                    <div className={classNames("small text-bold", styles.tag)}>
                                        {resources.data[1]?.attributes?.tag || resources.data[1]?.attributes?.category}
                                    </div>
                                    <Link href={`resources/${getResourcesSlug(`${resources.data[1].attributes?.category}`)}/${resources.data[1].attributes?.slug}`} target={'self'} className={styles.title_link}>
                                        <h3 className={classNames("sub_heading_primary", styles.blog_listing_card_heading)}>
                                            {resources.data[1]?.attributes?.title}
                                        </h3>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                {
                                    resources.data[1]?.attributes?.createdDate &&
                                    <span className={classNames("small", styles.insights_card_highlight_text)}>{getDisplayDate(resources.data[1]?.attributes?.createdDate)}</span>
                                }
                            </div>
                        </div>
                        <div className={styles.blog_listing_card} style={{ background: resourcesCardBackgroundColor }}>
                            <div>
                                <div>
                                    <img className={styles.blog_listing_card_img} src={resources.data[2].attributes.media.media.data?.attributes?.url} alt={resources.data[2]?.attributes.media?.alt} />
                                </div>
                                <div>
                                    <div className={classNames("small text-bold", styles.tag)}>
                                        {resources.data[2]?.attributes?.tag || resources.data[2].attributes?.category}
                                    </div>
                                    <Link href={`resources/${getResourcesSlug(`${resources.data[2].attributes?.category}`)}/${resources.data[2].attributes?.slug}`} target={'self'} className={styles.title_link}>
                                        <h3 className={classNames("sub_heading_primary", styles.blog_listing_card_heading)}>
                                            {resources.data[2].attributes?.title}
                                        </h3>
                                    </Link>

                                </div>
                            </div>
                            <div>
                                {
                                    resources.data[2]?.attributes?.createdDate &&
                                    <span className={classNames("small", styles.insights_card_highlight_text)}>{getDisplayDate(resources.data[2]?.attributes?.createdDate)}</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default GridHighlightResources;