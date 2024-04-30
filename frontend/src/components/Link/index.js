import NextLink from 'next/link';
import { useMemo } from 'react';
const Link = ({ children, href, target, className = "", ...rest }) => {
    const targetRef = useMemo(() => {
        if (target !== null && target !== undefined && target !== '') {
            return target === 'blank' ? `${target}` : `self`;
        } else {
            return "self"
        }
    }, [target])
    const nextHref = useMemo(() => {
        if (href !== null && href !== undefined) {
            return target === 'blank' ? `${href}` : `/${href}`;

        } else {
            return "/"
        }
    }, [href])
    const rel = useMemo(() => targetRef === 'blank' ? "noopener noreferrer" : null, [target])
    return (
        <>
            {
                nextHref === "/" && targetRef === 'blank' ?
                    <a className={className} {...rest}>
                        {children}
                    </a> :
                    <NextLink href={nextHref} target={`_${targetRef}`} rel={rel} className={className} {...rest}>
                        {children}
                    </NextLink>

            }
        </>
    )
}
export default Link;