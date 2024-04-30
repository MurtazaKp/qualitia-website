import styles from './banner.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import ClickToAction from '../CTA';
const ImageBackgroundTextLeft = ({
    title, description, image, link, bannerBackground, imageAlt, bannerHeading, mobImage, descriptionTextColor = '#1e1e1e', screenWidth
}) => {
    const router = useRouter();
    return (
        <div className={classNames('section-spacing')}  >
            <div className={classNames("row", styles.imageright_component, styles.banner_background_text_left_variation)}
                style={{
                    backgroundColor: bannerBackground,
                    backgroundImage: screenWidth >= 576 ? `url(${image.data?.attributes?.url})` : `url(${mobImage?.data?.attributes?.url ? mobImage.data.attributes.url : ''})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>
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
            </div>
        </div>
    )
}
export default ImageBackgroundTextLeft;