import styles from './breadcrumb.module.css';
import classNames from 'classnames';
import Link from '../Link';
import { getDisplayName } from '@/utils/getDisplayName';
import { pagePluralForms } from '@/constants';
import { getResourcesSlug } from '@/utils/getResourcesSlug';
const Breadcrumb = ({ page, slug, innerSlug }) => {
    return (
        <ul type="none" className={classNames(styles.breadcrumb)}>
            <li>
                <Link href=''>
                    Home
                </Link>
                <svg width="10px" height="10px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#878787" /></svg>
            </li>
            <li>
                <Link href={`/${page}`}>
                    {getDisplayName(page)}
                </Link>
                <svg width="10px" height="10px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#878787" /></svg>
            </li>
            <li>
                <Link href={`/${page}/${getResourcesSlug(slug)}`}>
                    {getDisplayName(pagePluralForms[slug?.replace(" ", "_").replace("-", "_")] || slug)}
                </Link>
                <svg width="10px" height="10px" viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#878787" /></svg>
            </li>
            <li>
                <span className='text-bold'>
                    {innerSlug}
                </span>
            </li>

        </ul>
    )
}
export default Breadcrumb;