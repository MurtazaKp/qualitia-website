import styles from './banner.module.css';
import classNames from 'classnames';
import ClickToAction from '../CTA';
const ImageLeft = ({
    title, description, image, link, bannerBackground, imageAlt, mobImage, descriptionTextColor = '#1e1e1e', bannerHeading, screenWidth = 0
}) => {
    return (
        <div className={classNames('section-spacing', styles.banner_left_img_variation)} style={{ background: bannerBackground }}>
            <div className={classNames("row", styles.imageright_component)}>
                <div className={classNames("col-6", styles.banner_img_center)}>
                    <div className={classNames(styles.banner_half_image)}>
                        {
                            screenWidth >= 576 ?
                                <img src={image.data.attributes.url} alt={imageAlt} /> :
                                Boolean(mobImage?.data?.attributes?.url) && <img src={mobImage.data.attributes.url} alt={imageAlt} />
                        }
                    </div>
                </div>
                <div className={classNames("col-6")}>
                    {
                        bannerHeading &&
                        <h5 className={" uppercase_text banner_sub_heading"}>
                            {bannerHeading}
                        </h5>
                    }
                    <div className={classNames(styles.text_center, styles.banner_text_wrapper)}>
                        <div className='banner-title' dangerouslySetInnerHTML={{ __html: title }} />
                        <p className={classNames('paragraph')} style={{ color: descriptionTextColor }}>{description}</p>
                        <div className={styles.banner_btn_flex}>
                            {
                                link?.map((linkItem, index) => {
                                    return (
                                        <div key={index}>
                                            {linkItem?.label && <ClickToAction {...linkItem} />}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageLeft;