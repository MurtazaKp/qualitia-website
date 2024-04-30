import classNames from 'classnames';
import Link from '../Link';
const OutlineCTA = ({ href, icon, size, label, target, ...rest }) => {
    return (
        <Link href={href} target={target} className={classNames(
            'outline_btn',
            size?.toLowerCase() === 'small' ? 'btn_sm' : '',
            size?.toLowerCase() === 'medium' ? 'btn_md' : '',
            size?.toLowerCase() === 'large' ? 'btn_lg' : '',
        )} {...rest}>
            <>
                {label}
                {
                    icon && <span className={icon}></span>
                }
            </>
        </Link>
    )
}
export default OutlineCTA