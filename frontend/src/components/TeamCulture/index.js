import styles from './teamculture.module.css';
import classNames from 'classnames';
const TeamCulture = ({ teamCultureBackground, verticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className='container_padding' style={{ teamCultureBackground }}>
            <section className={classNames('section-spacing', `${verticalSpacing}`)}  >
                <h3 className={"text-center"}>
                    Team Culture
                </h3>
                <div className={"row"}>
                    <div className={classNames("col-4", styles.team_culture_card, styles.team_culture_card_flex)}>
                        <div className={classNames(styles.round, styles.round_bg_pink)}>

                        </div>
                        <div className={styles.team_culture_card_title}>
                            <h5>
                                Inclusivity
                            </h5>
                        </div>
                    </div>
                    <div className={classNames("col-4", styles.team_culture_card, styles.team_culture_card_flex)}>
                        <div className={classNames(styles.round, styles.round_bg_sky_blue)}>

                        </div>
                        <div className={styles.team_culture_card_title}>
                            <h5>
                                Transparency
                                & Trust
                            </h5>
                        </div>
                    </div>
                    <div className={classNames("col-4", styles.team_culture_card, styles.team_culture_card_flex)}>
                        <div className={classNames(styles.round, styles.round_bg_violet)}>

                        </div>
                        <div className={styles.team_culture_card_title}>
                            <h5>
                                Ownership & Impact
                            </h5>
                        </div>
                    </div>
                </div>
                <div className={styles.team_culture_card_margin}>
                    <div className={"row"}>
                        <div className={classNames("col-4", styles.team_culture_card, styles.team_culture_card_flex)}>
                            <div className={classNames(styles.round, styles.round_bg_violet)}>

                            </div>
                            <div className={styles.team_culture_card_title}>
                                <h5>
                                    Product First
                                </h5>
                            </div>
                        </div>
                        <div className={classNames("col-4", styles.team_culture_card, styles.team_culture_card_flex)}>
                            <div className={classNames(styles.round, styles.round_bg_pink)}>

                            </div>
                            <div className={classNames(styles.team_culture_card_title)}>
                                <h5>
                                    Customer Centricity
                                </h5>
                            </div>
                        </div>
                        <div className={classNames("col-4", styles.team_culture_card, styles.team_culture_card_flex)}>
                            <div className={classNames(styles.round, styles.round_bg_sky_blue)}>

                            </div>
                            <div className={classNames(styles.team_culture_card_title)}>
                                <h5>
                                    Customer Centricity
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
export default TeamCulture;