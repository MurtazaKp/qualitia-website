import styles from './bookDemo.module.css';
import classNames from 'classnames';
import ClickToAction from '../CTA';
const BookDemo = ({
    bookDemoTitle, link, bookDemoBackground, bookDemoVerticalSpacing = "vertical_spacing_3" }) => {
    return (
        <section className={classNames('container_padding', styles.bg_demo_section_color)} style={{ background: bookDemoBackground }}>
            <div className={classNames('section-spacing', `${bookDemoVerticalSpacing}`.toLowerCase())}>
                <div className="row">
                    <div className="col-8">
                        <div className={classNames(styles.demo_text)} dangerouslySetInnerHTML={{ __html: bookDemoTitle }} />
                    </div>
                    <div className={classNames("col-4", "text-center", styles.margin_demo)}>
                        <ClickToAction {...link} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BookDemo;