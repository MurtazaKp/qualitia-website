import styles from './banner.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import ClickToAction from '../CTA';
const ImageRight = ({
    title, description, image, link, bannerBackground, imageAlt, bannerHeading, mobImage, descriptionTextColor = '#1e1e1e', screenWidth
}) => {
    const router = useRouter();
    return (
        <div className={classNames('section-spacing', styles.banner_right_img_variation)}  >
            <div className={classNames("row", styles.imageright_component)} style={{ background: bannerBackground }}>
                <div className={"col-6"}>
                    {
                        bannerHeading &&
                        <h5 className={" uppercase_text banner_sub_heading"}>
                            {bannerHeading}
                        </h5>
                    }
                    <div className={classNames(styles.text_center, styles.banner_text_wrapper)}>
                        <div dangerouslySetInnerHTML={{ __html: title }} />
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
                <div className={classNames(styles.banner_img_center, "col-6")}>
                    <div className={classNames(styles.banner_half_image)}>
                        {
                            screenWidth >= 576 ?
                                <img src={image.data.attributes.url} alt={imageAlt} /> :
                                Boolean(mobImage?.data?.attributes?.url) && <img src={mobImage.data.attributes.url} alt={imageAlt} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImageRight;