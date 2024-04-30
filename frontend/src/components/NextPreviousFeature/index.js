import styles from './nextPreviousFeature.module.css';
import classNames from 'classnames';
import Link from '@/components/Link';
const NextPreviousFeature = ({ next, previous, label, nextPreviousFeatureBackground, nextPreviousFeatureVerticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className='container_padding' style={{ nextPreviousFeatureBackground }}>
            <section className={classNames('section-spacing', `${nextPreviousFeatureVerticalSpacing}`.toLowerCase())}>
                <div className={classNames(styles.next_prev_wrapper)}>
                    <Link aria-label='previous' target={previous?.target} href={previous?.href}>
                        {/* <img src="/arrow.svg" alt="arrow-left" className={styles.icon_left} /> */}
                        <span  className={classNames('icon-New-Icons_Arrow-Left', styles.icons_color)}></span>
                    </Link>
                    <div className={classNames("text-medium text-center paragraph")}>
                        {label}
                        <Link  target={next?.target} href={next?.href}>
                            <span className={classNames("btn_secondary btn_md", styles.highlight_text)}> {next.label} </span>
                        </Link>

                    </div>
                    <Link aria-label='next' target={next?.target} href={next?.href}>
                        {/* <img src="/arrow.svg" alt="arrow-right" className={styles.icon_right} /> */}
                        <span className={classNames('icon-New-Icons_Arrow-Right', styles.icons_color)}></span>
                    </Link>
                </div>
            </section>
        </div>
    )
}
export default NextPreviousFeature;