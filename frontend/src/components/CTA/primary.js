import classNames from 'classnames';
import Link from '../Link';
const PrimaryCTA = ({ href, icon, size, label, target, ...rest }) => {
    return (
        <Link {...rest} href={href} target={target} className={classNames(
            'btn-primary',
            size?.toLowerCase() === 'small' ? 'btn_sm' : '',
            size?.toLowerCase() === 'medium' ? 'btn_md' : '',
            size?.toLowerCase() === 'large' ? 'btn_lg' : '',
        )}>
            <>
                {label}
                {
                    icon && <span className={icon}></span>
                }
            </>
        </Link>
    )
}
export default PrimaryCTA;