import styles from './ctaComponent.module.css';
import classNames from 'classnames';
import ClickToAction from '../CTA';
const CTAComponent = ({ ctaVerticalSpacing = "vertical_spacing_3", cta }) => {
    return (
        <section className={classNames('section-spacing text-center', `${ctaVerticalSpacing}`.toLowerCase())}>
            <ClickToAction {...cta} />
        </section>
    )
}
export default CTAComponent;