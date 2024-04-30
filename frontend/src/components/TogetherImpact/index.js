import styles from './togetherimpact.module.css';
import classNames from 'classnames';
const TogetherImpact = ({ togetherImpactBackground, verticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className='container_padding' style={{ togetherImpactBackground }}>
            <section className={classNames('section-spacing', `${verticalSpacing}`)}>
                <div className={styles.together_impact_bg}>
                    <div className={"row"}>
                        <div className={classNames("col-8", styles.together_impact_padding)}>
                            <h3 className={classNames(styles.together_impact_heading_margin)}>
                                Together we can impact
                                <span className={styles.together_impact_heading}>
                                    Design Led
                                    Teams across the globe.
                                </span>
                            </h3>
                            <a className={classNames("btn_lg btn-primary", styles.join_our_team_btn, styles.together_impact_flex, styles.together_flex)} href="#">
                                <span>
                                    Join our Team
                                </span>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M5 12h13M12 5l7 7-7 7"></path></svg>
                            </a>
                        </div>
                        <div className={"col-4"}>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default TogetherImpact;