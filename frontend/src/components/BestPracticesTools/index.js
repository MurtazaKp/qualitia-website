import styles from './bestpracticestools.module.css';
import classNames from 'classnames';
const BestPracticesTools = ({ heading, toolsList, verticalSpacing = "vertical_spacing_3" }) => {
    const grid = toolsList?.length < 5 ? toolsList?.length : 4;
    return (
        <div >
            <section className={classNames('section-spacing', `${verticalSpacing}`)}>
                <h4>
                    {heading}
                </h4>
                <div className='row'>
                    {
                        toolsList.map((tools, index) => {
                            return (
                                <div key={index} className={classNames(`col-${12 / grid}`, styles.bestpracticestools_border)}>
                                    <div className={styles.bestpracticestools_margin}>
                                        <div className={classNames(styles.tools_title, "text-semibold")}>
                                            {tools.heading}
                                        </div>
                                        {
                                            tools.tools.map((tool, index) => {
                                                return (
                                                    <div key={index} className={styles.bestpracticestools}>
                                                        {tool.image.data?.attributes?.url && <div className={classNames(styles.bestpracticestools_img)}>
                                                            <img src={tool.image.data?.attributes?.url} alt={tool.imageAlt} />
                                                        </div>}
                                                        <div>
                                                            {tool.name}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
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
export default BestPracticesTools;