import styles from './podcastGridResources.module.css';
import classNames from 'classnames';
import Link from '@/components/Link';
import { getResourcesSlug } from '@/utils/getResourcesSlug';
const PodcastGridResources = ({ resourcesHeading, resources, resourcesListingBackground, resourcesCardBackgroundColor, resourcesVerticalSpacing = "vertical_spacing_3" }) => {
    const grid = resources?.data?.length < 4 ? resources?.data?.length : 3;
    return (
        <div className='container_padding' style={{ background: resourcesListingBackground }}>
            <section className={classNames('section-spacing', `${resourcesVerticalSpacing}`)}  >
                <div>
                    {resourcesHeading &&
                        <h3 className={classNames("text-center")}>
                            {resourcesHeading}
                        </h3>
                    }
                </div>
                <div className={classNames("row", styles.cubcast_card_flex)}>
                    {
                        resources?.data?.map((resourceItem, index) => (
                            <div className={classNames(`col-${12 / grid}`, styles.resource_card)} key={index} style={{ background: resourcesCardBackgroundColor }}>
                                <Link href={`resources/${getResourcesSlug(`${resourceItem.attributes?.category}`)}/${resourceItem.attributes?.slug}`} target={'self'}>
                                    <img className={styles.popular_img} src={resourceItem.attributes.media?.media.data?.attributes?.url} alt={resourceItem.attributes.media?.alt} />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}
export default PodcastGridResources;