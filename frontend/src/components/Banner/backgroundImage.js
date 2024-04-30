import styles from './banner.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';
const BackgroundImage = ({ title, textColor, description }) => {
    return (
        <div className={classNames("col-12 ", styles.margin_auto, styles.banner_bg_img, styles.banner_bg_img_section)}>
            <div className={classNames('section-spacing overflow-hidden ')}>
                <div className={styles.text_center}>
                    <div style={{ color: textColor }}>
                        <div className={"main_heading"} dangerouslySetInnerHTML={{ __html: title }} />
                        <h1>
                            Data thats empowers you to
                            take quick decisions.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BackgroundImage;