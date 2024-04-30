import styles from './banner.module.css';
import classNames from 'classnames';
import ClickToAction from '../CTA';
const ImageBackgroundTextRight = ({
    title, description, image, link, bannerBackground, imageAlt, bannerHeading, mobImage, descriptionTextColor = '#1e1e1e', screenWidth
}) => {
    return (
        <div className={classNames('section-spacing', styles.banner_right_img_variation)}
            style={{
                background: bannerBackground,
                backgroundColor: bannerBackground,
                backgroundImage: screenWidth >= 576 ? `url(${image.data?.attributes?.url})` : `url(${mobImage?.data?.attributes?.url ? mobImage.data.attributes.url : ''})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            <div className={classNames("double_gutter", "row", styles.imageright_component, styles.banner_background_text_left_variation)}>
                <div className={classNames("col-6", styles.banner_img_center)}>
                    {/* <div className={classNames(router.pathname === "/" ? "banner-half-image" : "")}>
                        <img src={image.data.attributes.url} alt={imageAlt} />
                    </div> */}
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
export default ImageBackgroundTextRight;