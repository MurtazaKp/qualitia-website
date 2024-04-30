import styles from './meetATeam.module.css';
import classNames from 'classnames';
import Link from '../Link';
const MeetTeam = ({ meetTeamHeading, teams, meetTeamBackground, meetTeamVerticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className='container_padding' style={{ background: meetTeamBackground }}>
            <section className={classNames('section-spacing', `${meetTeamVerticalSpacing}`.toLowerCase())}>
                <h3 className={classNames("text-center")}>
                    {meetTeamHeading}
                </h3>
                <div className={classNames("row text-center", styles.meet_team_row)}>
                    {
                        teams.data?.map((team, index) => {
                            return (
                                <div key={index} className={classNames("col-3", styles.team_cards)}>
                                    <div className={styles.content}>
                                        <div className={styles.content_overlay}></div>
                                        <img className={styles.content_image} src={team.attributes?.image?.data?.attributes?.url} alt={team.attributes?.name} />
                                        <div className={classNames(styles.content_details, styles.fadeIn_bottom)} >
                                            <div dangerouslySetInnerHTML={{ __html: team.attributes?.description }} />
                                            <ul className={classNames(styles.social_media_link)}>
                                                {
                                                    team.attributes?.socialLinks?.map((socialLink, index) => {
                                                        return (
                                                            <li key={index} className={classNames(styles.social_media_icons)}>
                                                                <Link href={socialLink?.href} target={socialLink?.target}>
                                                                    <img className={styles.social_media_icon} src={socialLink.image?.data?.attributes?.url} alt={socialLink?.imageAlt} />
                                                                </Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className={styles.team_members_names}>
                                        <h4 className={"paragraph_p2"}>
                                            {team.attributes?.name}
                                        </h4>
                                        <span className={classNames("paragraph")}>
                                            {team.attributes?.designation}
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
export default MeetTeam;