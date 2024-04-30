import styles from './resourcesArticle.module.css';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import BestPracticesTools from '../BestPracticesTools';
import { getDisplayDate } from '@/utils/getDisplayDate';
import Share from '../Share';
const ResourcesArticle = ({ data, verticalSpacing = "vertical_spacing_3" }) => {
    const router = useRouter();
    return (
        <div className={classNames('container_padding', styles.blog_wrapper)}>
            <section className={classNames('section-spacing', `${verticalSpacing}`, styles.article_wrapper)}>
                <div className={classNames("blog-container", styles.blog_container)}>
                    <button className={classNames("btn_secondary btn_sm)", styles.back_btn_flex)} onClick={() => router.back()} type="button">
                        <span className={classNames('icon-New-Icons_Arrow-Left', styles.btn_back)}></span>
                        <span className={classNames("paraghaph", styles.btn_back_text)}>
                            Back
                        </span>
                    </button>
                </div>
                <div className={"row"}>
                    <div className={classNames('col-12', styles.article_space)}>
                        <div className={classNames('text-left blog-container', styles.blog_container)}>
                            <h1 className={classNames(styles.elements_design_heading)}>
                                {data?.attributes?.title}
                            </h1>
                            <div className={styles.byline}>
                                {data?.attributes?.writerName && <span>Written by {data?.attributes?.writerName}</span>}
                                {data?.attributes?.createdDate && <span>{getDisplayDate(data?.attributes?.createdDate)}</span>}
                            </div>
                            <p className={classNames("paragraph", styles.lead_text)}>
                                {data?.attributes?.description}
                            </p>
                        </div>
                        {
                            data?.attributes?.media?.media?.data?.attributes?.url &&
                            <div>
                                <img className={classNames(styles.img_full)} src={data?.attributes?.media?.media?.data?.attributes?.url} alt={data?.attributes?.media?.alt} />
                            </div>
                        }

                        {
                            data?.attributes?.bestPracticesDetails && <div className={styles.icon_flex}>
                                {/* <div> */}
                                    <div className={styles.elements_design_system_inner_item}>
                                        <div className={styles.elements_design_icons_info}>
                                            <span className={classNames("icon-Duration", styles.elements_design_icons)}></span>
                                            <p className={classNames(styles.elements_design_system_title, 'text-semibold paragraph_p1')}>
                                                Duration
                                            </p>
                                        </div>
                                            <span className={classNames('paragraph' , styles.elements_design_icons_info_paragraph)} >
                                                {data?.attributes?.bestPracticesDetails?.duration}
                                            </span>
                                    </div>
                                <div className={styles.elements_design_system_inner_item}>
                                    <div className={styles.elements_design_icons_info}>
                                        <span className={classNames("icon-Difficulty", styles.elements_design_icons)}></span>
                                        <p className={classNames(styles.elements_design_system_title, 'text-semibold paragraph_p1')}>
                                            Complexity
                                        </p>
                                    </div>
                                        <span className={classNames('paragraph' , styles.elements_design_icons_info_paragraph)} >
                                            {data?.attributes?.bestPracticesDetails?.complexity}
                                        </span>
                                </div>
                                {/* </div> */}
                                <div>
                                    <div className={styles.elements_design_system_inner_item}>
                                        <div  className={styles.elements_design_icons_info}>
                                            <span className={classNames("icon-Contributors", styles.elements_design_icons)}></span>
                                            <p className={classNames(styles.elements_design_system_title, 'text-semibold paragraph_p1' )}>
                                                Contributors
                                            </p>
                                        </div>
                                            <div className={classNames('paragraph' , styles.elements_design_icons_info_paragraph)} dangerouslySetInnerHTML={{ __html: data?.attributes?.bestPracticesDetails?.participants }} />

                                    </div>
                                </div>


                            </div>}
                        <div className={classNames('container blog-container', styles.blog_container)} dangerouslySetInnerHTML={{ __html: data?.attributes?.content }} />
                        <div className={styles.best_practices}>
                            {
                                Boolean(data?.attributes?.sections.length) &&
                                <BestPracticesTools {...data?.attributes?.sections[0]} />
                            }
                        </div>
                        <Share shareTo={data?.attributes?.shareTo} />
                    </div>
                </div>
            </section >
        </div>
    )
}
export default ResourcesArticle;