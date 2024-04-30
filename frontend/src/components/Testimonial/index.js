import styles from './testimonial.module.css';
import classNames from 'classnames';
const Testimonial = ({
    testimonialHeading,
    testimonials,
    testimonialBackground,
    testimonialsVerticalSpacing = "vertical_spacing_3"
}) => {
    return (
        <div className={classNames("container_padding", styles.testimonial_bg_color)} style={{ background: testimonialBackground }}>
            <section className={classNames('section-spacing', `${testimonialsVerticalSpacing}`.toLowerCase())}   >
                <div className={classNames("text-center")}>
                    <h3 className={classNames(styles.testimonial_heading)}>
                        {testimonialHeading}
                    </h3>
                    <div className={classNames(styles.testimonial_grid)}>
                            {
                                testimonials.data.map((item, index) => {
                                    return (
                                        <div key={index} className={styles.item}>
                                            {
                                                item.attributes.content ?
                                                    <div className={classNames(styles.testimonial_primary_card)} dangerouslySetInnerHTML={{ __html: item.attributes.content }} /> :
                                                    <div className={styles.imamge_wrap}>
                                                        <img className={styles.img_width} src={item.attributes.media.media.data.attributes.url} alt="testimonials-1" />
                                                    </div>
                                            }
                                        </div>
                                    )
                                })
                            }
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Testimonial;