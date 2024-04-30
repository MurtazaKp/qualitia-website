import styles from './banner.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import ClickToAction from '../CTA';
const ImageBackgroundTextCentre = ({ link, title, textColor, description, bannerBackground, image, mobImage, descriptionTextColor = '#1e1e1e', screenWidth }) => {
    const router = useRouter();
    return (
        <div className={classNames("row overflow-hidden ", styles.margin_auto, styles.banner_background_text_center_variation)}
            style={{
                background: bannerBackground,
                backgroundColor: bannerBackground,
                backgroundImage: screenWidth >= 576 ? `url(${image.data?.attributes?.url})` : `url(${mobImage?.data?.attributes?.url ? mobImage.data.attributes.url : ''})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
            <div className={classNames("col-12", styles.text_center, styles.banner_text_wrapper)}>
                <div style={{ color: textColor }}>
                    <div className={"main_heading"} dangerouslySetInnerHTML={{ __html: title }} />
                </div>
                <p className={classNames("paragraph paragraph_width", styles.banner_paragraph, styles.banner_paragraph_color)} style={{ color: descriptionTextColor }}>{description}</p>
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
    )
}
export default ImageBackgroundTextCentre;