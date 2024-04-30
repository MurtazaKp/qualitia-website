import classNames from "classnames";
import Link from "../Link";
import styles from './cubcast.module.css'
const Cubcast = ({ cubcastTitle, cubcastDescription, cubcastBackgroundColor, socialApps, members, cubcastVerticalSpacing }) => {
    return (
        <div className="container_padding" style={{ background: cubcastBackgroundColor }}>
            <section className={classNames('section-spacing', `${cubcastVerticalSpacing}`.toLowerCase())}>
                <div className="row">
                    <div className={classNames("col-12", styles.cubcast)}>
                        <div className={classNames("text-center", styles.cubcast_padding)}>
                            <div className={classNames(styles.cubcast_heading)} dangerouslySetInnerHTML={{ __html: cubcastTitle }} />
                            <p className={classNames("paragraph", styles.cubcast_paragraph)}>
                                {cubcastDescription}
                            </p>
                            <ul type="none" className={styles.cubcast_ul_components}>
                                {
                                    socialApps?.map((app, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={app.href} target={app.target} key={index}>
                                                    <img src={app.image?.data?.attributes?.url} alt={app.imageAlt} />
                                                </Link>
                                            </li>

                                        )
                                    })
                                }
                            </ul>
                            <div>
                                <div className={classNames("row", styles.cubcast_img)}>
                                    {
                                        members.map((member, index) => (
                                            <img key={index} className={classNames(styles.cubcast_img_width)} src={member.media?.data?.attributes?.url} alt={member.media.alt} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Cubcast;