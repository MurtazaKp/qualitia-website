import styles from './podcastGridHighlightResources.module.css';
import classNames from 'classnames';
import PodcastGridResources from '../PodcastGridResources';
import Link from '@/components/Link';
import { getResourcesSlug } from '@/utils/getResourcesSlug';
const PodcastGridHighlightResources = ({ resourcesHeading, resources, resourcesListingBackground, resourcesCardBackgroundColor, resourcesVerticalSpacing = "vertical_spacing_3", ...rest }) => {
    if (resources?.data?.length !== 3) {
        return <PodcastGridResources {...{ resourcesHeading, resources, resourcesListingBackground, resourcesCardBackgroundColor, ...rest }} />
    }
    return (
        <div className='container_padding' style={{ background: resourcesListingBackground }}>
            <section className={classNames('section-spacing', `${resourcesVerticalSpacing}`)} >
                <div>
                    {resourcesHeading &&
                        <h3 className={classNames("text-center")}>
                            {resourcesHeading}
                        </h3>
                    }
                </div>
                <div>
                    <div className={classNames("row", styles.popular_card_margin)}>
                        <div className={classNames("col-8")}>
                            <Link href={`resources/${getResourcesSlug(`${resources.data[1].attributes?.category}`)}/${resources.data[1].attributes?.slug}`} target={'self'}>
                                <img className={classNames(styles.popular_img)} src={resources.data[0].attributes.media.media.data?.attributes?.url} alt={resources.data[0]?.attributes.media?.alt} />
                            </Link>
                        </div>
                        <div className={classNames("col-4", styles.popular_card)}>
                            <Link href={`resources/${getResourcesSlug(`${resources.data[1].attributes?.category}`)}/${resources.data[1].attributes?.slug}`} target={'self'}>
                                <img className={classNames(styles.popular_img, styles.popular_card_img)} src={resources.data[1].attributes.media.media.data?.attributes?.url} alt={resources.data[1]?.attributes.media?.alt} />
                            </Link>
                            <Link href={`resources/${getResourcesSlug(`${resources.data[2].attributes?.category}`)}/${resources.data[2].attributes?.slug}`} target={'self'}>
                                <img className={classNames(styles.popular_img, styles.popular_card_img)} src={resources.data[2].attributes.media.media.data?.attributes?.url} alt={resources.data[2]?.attributes.media?.alt} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default PodcastGridHighlightResources;



