import styles from './banner.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import ClickToAction from '../CTA';
const WithoutImage = ({ link, title, textColor, description, descriptionTextColor = '#1e1e1e' }) => {
    const router = useRouter();
    return (
        <div>
            <div className={classNames("col-12 overflow-hidden ", styles.margin_auto)}>
                <div className={classNames(styles.text_center)}>
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
        </div>
    )
}
export default WithoutImage;