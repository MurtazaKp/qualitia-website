import styles from './banner.module.css';
import classNames from 'classnames';
import ClickToAction from '../CTA';
import { useRouter } from 'next/router';
const ImageBottom = ({
    title, description, image, bannerBackground, imageAlt, link, mobImage, descriptionTextColor = '#1e1e1e', screenWidth
}) => {
    const router = useRouter();
    return (
        <section style={{ background: bannerBackground }}>
            <div className={classNames('section-spacing')}  >
                <div className="row overflow-hidden ">
                    <div className={classNames("col-12", styles.margin_auto)}>
                        <div className={classNames(styles.text_center, styles.banner_bottom_img_variation)}>
                            <div className={classNames('', styles.banner_heading_margin)}>
                                <div className={"main_heading"} dangerouslySetInnerHTML={{ __html: title }} />
                            </div>
                            <p className={classNames("paragraph paragraph_width")} style={{ color: descriptionTextColor }}>{description}</p>
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
                            {
                                screenWidth >= 576 ?
                                    <img className={classNames(styles.bottom_banner_image)} src={image.data.attributes.url} alt={imageAlt} /> :
                                    Boolean(mobImage?.data?.attributes?.url) && <img className={classNames(styles.bottom_banner_image)} src={mobImage.data.attributes.url} alt={imageAlt} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default ImageBottom;