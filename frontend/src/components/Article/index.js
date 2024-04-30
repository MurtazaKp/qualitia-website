import styles from './article.module.css';
import classNames from 'classnames';
import Image from '../Image';
const Article = ({ articles, articleBackgroundColor, articleHeading ,articleListVerticalSpacing="vertical_spacing_3"}) => {
    return (
        <section className={classNames('container_padding', styles.article_section_padding)} style={{ background: articleBackgroundColor }}>
            <div className={classNames('section-spacing', `${articleListVerticalSpacing}`.toLowerCase())}>
                <div className={styles.article_section_padding}>
                    {articleHeading && <h3 className="text-center">
                        {articleHeading}
                    </h3>}
                    {
                        Boolean(articles?.length && articles[0]?.layout === 'Text_bottom') ?
                            <div className={classNames("row", styles.article_row)}>
                                {
                                    articles?.map((articleItem, index) => {
                                        return (
                                            <div key={index} className={classNames("col-6-sm", styles.product_dashboards_img_text, styles.product_dashboards_card_flex ,styles.product_dashboards_justify_content)}>
                                                <Image className={styles.product_dashboards_img} src={articleItem.media?.data?.attributes?.url} alt={articleItem?.heading} />
                                                <div className={classNames("", styles.product_dashboards_text_padding)}>
                                                    <div className={classNames(styles.product_dashboards_text_padding)}>
                                                        {articleItem?.sectionHeading && <a href="#" className={classNames(styles.product_dashboards_img_text_link, styles.capitalize_text)}> {articleItem.sectionHeading}</a>}
                                                        {articleItem.heading && <h3 className={classNames("sub_heading_primary", styles.product_dashboards_img_text_heading)}>
                                                            {articleItem.heading}
                                                        </h3>}
                                                    </div>
                                                    {
                                                        articleItem?.content &&
                                                        <div className={classNames("paragraph", styles.product_dashboards_text_padding, styles.unstyle_ul)} dangerouslySetInnerHTML={{ __html: articleItem.content }} />
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div> :
                            articles?.map((articleItem, index) => {
                                return (
                                    <div key={index} >
                                        <div className={classNames("row", styles.article_row, articleItem.layout === 'Text_left' ? styles.product_dashboards_text_reverse : '')}>
                                            <div className={classNames("col-6-sm", styles.product_dashboards_img_text , styles.img_flex)}>
                                                <Image className={classNames(styles.product_dashboards_img_padding, styles.product_dashboards_img)} src={articleItem?.media?.data?.attributes.url} alt={articleItem?.heading} />
                                            </div>
                                            <div className={classNames("col-6-sm", styles.product_dashboards_img_text, styles.product_dashboards_card_flex)}>
                                                <div className={classNames("articel_link_color", styles.product_dashboards_text_padding)}>
                                                    <div className={classNames()}>
                                                        { 
                                                            articleItem.sectionHeading &&
                                                            <a href="#" aria-label='article heading' className={classNames(styles.product_dashboards_img_text_link, styles.capitalize_text)}> {articleItem.sectionHeading}</a>
                                                        }
                                                        <h2 className={classNames("sub_heading_primary", styles.product_dashboards_img_text_heading)}>
                                                            {articleItem.heading}
                                                        </h2>
                                                    </div>
                                                    <div className={classNames("paragraph")} dangerouslySetInnerHTML={{ __html: articleItem.content }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                    }
                </div>
            </div>
        </section>
    )
}
export default Article;