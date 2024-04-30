import styles from './blogarticlepageinfo.module.css';
import classNames from 'classnames';
const BlogArticlePageInfo = ({ blogArticlePageInfoBackground, verticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className='container_padding' style={{ blogArticlePageInfoBackground }}>
            <section className={classNames('section-spacing', `${verticalSpacing}`)}>
                <div className={classNames(styles.blog_article_info)}>
                    <div className={classNames(styles.blog_article_info_width)}>

                    </div>
                    <div className={classNames(styles.blog_article_link_width)}>
                        <ul className={classNames(styles.fixed_link, styles.fixed_link_position)} type="none">
                            <li>
                                <a href="#">
                                    <span className={"icon-Dashboard"}>

                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className={"icon-Dashboard"}>

                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className={"icon-Dashboard"}>

                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className={"icon-Dashboard"}>

                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className={"icon-Dashboard"}>

                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span className={"icon-Dashboard"}>

                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default BlogArticlePageInfo;