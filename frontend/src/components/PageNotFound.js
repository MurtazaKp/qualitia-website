import classNames from 'classnames'
import Link from 'next/link'

export default function PageNotFound() {
    return (
        <div className={classNames('text-center', 'container_padding', 'not-found')}>
            <h1>404 - Page Not Found</h1>
            <Link className={'back_btn'} href="/">
                {"<="} Go back home
            </Link>
        </div>
    )
}