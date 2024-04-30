import styles from './paragraph.module.css';
import classNames from 'classnames';
const Paragraph = ({ paragraph, paragraphBackground, paragraphVerticalSpacing = "vertical_spacing_3" }) => {
    return (
        <div className='container_padding' style={{ background: paragraphBackground }}>
            <section className={classNames('section-spacing', `${paragraphVerticalSpacing}`.toLowerCase())}>
                <div className={classNames("paragraph", styles.paragraph_padding)} dangerouslySetInnerHTML={{ __html: paragraph }} />
            </section>
        </div>
    )
}
export default Paragraph;