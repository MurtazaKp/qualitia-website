import styles from './roadmap.module.css';
import classNames from 'classnames';
const Roadmap = ({ heading, roadmap, roadmapBackground, verticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className='container_padding' style={{ background: roadmapBackground }}>
            <section className={classNames('section-spacing', `${verticalSpacing}`)}  >
                <div className="row">
                    <div className="col-12">
                        <div className={styles.product_dashboards_bg}>
                            {heading &&
                                <h3 className="text-center ">
                                    {heading}
                                </h3>
                            }
                            <div className={styles.product_dashboards_info}>
                                {/* <div> */}
                                {
                                    roadmap.map((roadmapItem, index) => {
                                        return (
                                            <div key={index} className={classNames("paragraph", styles.product_dashboards)} >

                                                <div className={classNames(styles.product_dashboards_title, styles.product_team_allocation)} dangerouslySetInnerHTML={{ __html: roadmapItem.heading }} />

                                                <div className={classNames(styles.product_dashboards_paragraph)} dangerouslySetInnerHTML={{ __html: roadmapItem.content }} />
                                            </div>
                                        )
                                    })
                                }
                                {/* </div> */}
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
export default Roadmap;