import styles from './bannerResources.module.css';
import classNames from 'classnames';
import { getResourcesSlug } from '@/utils/getResourcesSlug';
import Link from '@/components/Link';
const BannerResources = ({ resourcesHeading, resources, resourcesListingBackground, resourcesCardBackgroundColor, resourcesVerticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className="container_padding" style={{ background: resourcesListingBackground }}>
            <section className={classNames('section-spacing', `${resourcesVerticalSpacing}`.toLowerCase())}>
                {resourcesHeading &&
                    <h3 className={classNames("text-center", styles.insights_card_heading)}>
                        {resourcesHeading}
                    </h3>
                }
                <div className="row">
                    {
                        resources.data.map((resourceItem, index) => (
                            <div key={index} className={styles.blog_listing_bg}>
                                <div className="row">
                                    <div className={classNames("col-7", styles.blog_listing_card_img)} >
                                        <img className={styles.blog_listing_card_img} src={resourceItem.attributes.media?.media.data?.attributes?.url} alt={resourceItem.attributes.media?.alt} />
                                    </div>
                                    <div className={classNames("col-5", styles.blog_listing_flex)} style={{ background: resourcesCardBackgroundColor }}>
                                        <div className={styles.blog_listing_bg_card}>
                                            <div className={styles.blog_listing_card}>
                                                <div>
                                                    <div>
                                                        <div className={classNames("paragraph", styles.tag)}>
                                                            {resourceItem.attributes?.tag || resourceItem.attributes?.category}
                                                        </div>
                                                        <Link href={`resources/${getResourcesSlug(`${resourceItem.attributes?.category}`)}/${resourceItem.attributes?.slug}`} target={'self'} className={styles.title_link}>
                                                            <h3 className={classNames(styles.blog_heading, styles.blog_heading_margin)}>
                                                                {resourceItem.attributes.title}
                                                            </h3>
                                                        </Link>
                                                    </div>
                                                </div>
                                                {/* <div>
                                                    <a href="#" className={styles.blog_listing_card_read_text}>
                                                        6 min read
                                                    </a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </section>
        </div>
    )
}
export default BannerResources;