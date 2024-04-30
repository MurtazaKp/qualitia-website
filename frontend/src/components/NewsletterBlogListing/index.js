import styles from './newsletterbloglisting.module.css';
import classNames from 'classnames';
import Link from 'next/link';
const NewsletterBlogListing = ({ newsletterBlogListingBackground, verticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className="container_padding" style={{ newsletterBlogListingBackground }}>
            <section className={classNames('section-spacing', `${verticalSpacing}`)}>
                <div className={classNames(styles.newsletter_bloglisting_bg)} >
                    <div className="row">
                        <div className="col-7">
                            <h3 className={classNames(styles.newsletter_bloglisting_heading)}>
                                We are passionate product leaders who write about prodops & designops!
                            </h3>
                            <div className={classNames("paragraph_p2", styles.newsletter_info)}>
                                45 Blogs  |  5 Webinars  |  4 Podcasts
                            </div>
                        </div>
                        <div className={classNames("col-5", styles.newsletter_bloglisting_flex)}>
                            <div className={classNames("newsletter_input")}>
                                <input className={"input_width"} type="email" placeholder="enter email id" />
                                <Link href="#" target={""}>
                                    <button className={classNames("btn-primary newsletter_btn")} type="button">
                                        Subscribe
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default NewsletterBlogListing;