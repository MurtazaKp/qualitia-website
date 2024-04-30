import styles from './articlenotificationbar.module.css';
import classNames from 'classnames';
const ArticleNotificationBar = ({ articleNotificationbackground, verticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className='container_padding' style={{ articleNotificationbackground }}>
            <section className={classNames('section-spacing', `${verticalSpacing}`)}>
                <div className={"row"}>
                    <div className={"col-8"}>
                        <div className={styles.practices_people_info}>
                            <div>
                                <img src="https://cdn.discordapp.com/attachments/1031500053703045150/1081588003719368765/practices_people_profile.png" alt="practices_people_profile" />
                            </div>
                            <div>
                                <p className={classNames("paragraph", styles.practices_people_info_paragraph)}>
                                    <strong>
                                        John Smith
                                    </strong>
                                    , Managing Editor
                                </p>
                                <span className={classNames("paragraph", styles.practices_people_info_date)}>
                                    Oct 12, 2022  |  7 Min Read
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classNames("col-4", styles.practices_people_views)}>
                        <div>
                            <span className={"icon-Dashboard"}>

                            </span>
                            <span className={styles.practices_people_icons_margin}>
                                400
                            </span>
                        </div>
                        <div>
                            <span className={"icon-Dashboard"}>

                            </span>
                            <span className={styles.practices_people_icons_margin}>
                                400
                            </span>
                        </div>
                        <div>
                            <span className={"icon-Dashboard"}>

                            </span>
                            <span className={styles.practices_people_icons_margin}>
                                400
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ArticleNotificationBar;