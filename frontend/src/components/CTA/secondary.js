import classNames from 'classnames';
import Link from '../Link';
const SecondaryCTA = ({ href, icon, size, label, target, ...rest }) => {
    return (
        <Link {...rest} href={href} target={target} className={classNames(
            'btn_secondary',
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
export default SecondaryCTA;